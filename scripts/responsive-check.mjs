import { chromium } from "playwright";

const BASE = "http://127.0.0.1:4321";
const ROUTES = ["/", "/app/", "/for-retailers/", "/for-corporates/"];
const WIDTHS = [1440, 1280, 1024, 768, 430, 390];

const browser = await chromium.launch();
const results = [];

for (const route of ROUTES) {
  for (const width of WIDTHS) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    await page.goto(BASE + route, { waitUntil: "networkidle" });

    const report = await page.evaluate((vw) => {
      const de = document.documentElement;
      const horizontal = de.scrollWidth > vw + 1;
      // Any element whose right edge exceeds the viewport.
      const offenders = [];
      for (const el of document.querySelectorAll("*")) {
        const r = el.getBoundingClientRect();
        if (r.width === 0 && r.height === 0) continue;
        if (r.right > vw + 1 || r.left < -1) {
          const cls = typeof el.className === "string" ? el.className : "";
          offenders.push({
            tag: el.tagName.toLowerCase(),
            cls: cls.split(" ").filter(Boolean).slice(0, 3).join("."),
            right: Math.round(r.right),
            left: Math.round(r.left),
          });
        }
      }
      // Dedup by tag.cls
      const seen = new Set();
      const uniq = offenders.filter((o) => {
        const k = o.tag + "." + o.cls;
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      });
      return { horizontal, scrollWidth: de.scrollWidth, offenders: uniq.slice(0, 8) };
    }, width);

    results.push({ route, width, ...report });
    await page.close();
  }
}

await browser.close();

let bad = 0;
for (const r of results) {
  const flag = r.horizontal ? "OVERFLOW" : "ok";
  if (r.horizontal) bad++;
  console.log(
    `${flag.padEnd(9)} ${r.route.padEnd(18)} ${String(r.width).padEnd(5)} scrollWidth=${r.scrollWidth}`
  );
  if (r.horizontal && r.offenders.length) {
    for (const o of r.offenders) {
      console.log(`            ↳ <${o.tag}> .${o.cls} left=${o.left} right=${o.right}`);
    }
  }
}
console.log(`\n${bad === 0 ? "PASS" : "FAIL"} — ${bad}/${results.length} viewport(s) with horizontal scroll`);
