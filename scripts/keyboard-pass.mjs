// Manual-equivalent keyboard pass: tab from the very first focusable (the skip
// link) all the way to the footer on every page. For each stop we record:
//   - what got focus, and where it sits visually (document order check)
//   - whether a visible focus indicator actually appears (outline/ring/shadow)
// Focus order is compared against visual order: sorted by (row, then inline
// position), a correct order is monotonically non-decreasing.
import { chromium } from "playwright";

const BASE = "http://127.0.0.1:4321";
const ROUTES = ["/", "/app/", "/for-retailers/", "/for-corporates/"];

const browser = await chromium.launch();
let totalProblems = 0;

for (const route of ROUTES) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(BASE + route, { waitUntil: "networkidle" });
  await page.evaluate(() => window.scrollTo(0, 0));

  const stops = [];
  const seen = new Set();

  for (let i = 0; i < 80; i++) {
    await page.keyboard.press("Tab");

    const info = await page.evaluate(() => {
      const el = document.activeElement;
      if (!el || el === document.body) return null;

      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();

      // Does a visible focus indicator exist? Check outline, box-shadow ring,
      // and any border/background change carried by :focus-visible styling.
      const outlineW = parseFloat(cs.outlineWidth) || 0;
      const hasOutline = outlineW > 0 && cs.outlineStyle !== "none";
      const hasShadow = cs.boxShadow && cs.boxShadow !== "none";

      const label =
        el.getAttribute("aria-label") ||
        (el.textContent || "").trim().slice(0, 40) ||
        el.getAttribute("href") ||
        el.tagName;

      return {
        tag: el.tagName.toLowerCase(),
        cls: (typeof el.className === "string" ? el.className : "")
          .split(" ")
          .filter(Boolean)
          .slice(0, 2)
          .join("."),
        label,
        hasOutline,
        hasShadow,
        outlineColor: cs.outlineColor,
        // absolute document position for visual-order comparison
        top: Math.round(r.top + window.scrollY),
        left: Math.round(r.left),
        w: Math.round(r.width),
        h: Math.round(r.height),
        inMain: !!el.closest("main"),
        inHeader: !!el.closest("header"),
        inFooter: !!el.closest("footer"),
      };
    });

    if (!info) break;
    const key = `${info.tag}.${info.cls}|${info.label}|${info.top},${info.left}`;
    if (seen.has(key)) break; // wrapped around
    seen.add(key);
    stops.push(info);
    if (info.inFooter && stops.filter((s) => s.inFooter).length > 6) break;
  }

  // --- focus order vs visual order ---
  // Group into rows (40px band) then compare left-to-right within a row.
  const orderProblems = [];
  for (let i = 1; i < stops.length; i++) {
    const a = stops[i - 1];
    const b = stops[i];
    const sameRow = Math.abs(a.top - b.top) < 40;
    if (sameRow) {
      if (b.left < a.left - 4) {
        orderProblems.push(`  ${i}: "${a.label}" → "${b.label}" moves LEFT in same row`);
      }
    } else if (b.top < a.top - 40) {
      orderProblems.push(
        `  ${i}: "${a.label}" (y=${a.top}) → "${b.label}" (y=${b.top}) jumps UP`
      );
    }
  }

  const noFocusRing = stops.filter((s) => !s.hasOutline && !s.hasShadow);

  console.log(`\n=== ${route} — ${stops.length} tab stops ===`);
  console.log(`  first stop: "${stops[0]?.label}" (${stops[0]?.tag}.${stops[0]?.cls})`);
  console.log(
    `  regions: header=${stops.filter((s) => s.inHeader).length} main=${stops.filter((s) => s.inMain).length} footer=${stops.filter((s) => s.inFooter).length}`
  );
  console.log(
    `  focus indicator: ${stops.length - noFocusRing.length}/${stops.length} visible`
  );
  if (noFocusRing.length) {
    totalProblems += noFocusRing.length;
    for (const s of noFocusRing.slice(0, 10)) {
      console.log(`    NO RING: <${s.tag}> .${s.cls} "${s.label}"`);
    }
  }
  if (orderProblems.length) {
    totalProblems += orderProblems.length;
    console.log("  ORDER MISMATCH:");
    orderProblems.forEach((p) => console.log("  " + p));
  } else {
    console.log("  focus order matches visual order ✓");
  }

  await page.close();
}

await browser.close();
console.log(`\n${totalProblems === 0 ? "PASS" : "PROBLEMS: " + totalProblems}`);
