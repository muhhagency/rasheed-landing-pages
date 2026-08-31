// WCAG AA contrast check over REAL rendered content, with special attention to
// the dark and brand tone scopes (which regressed once at kitchen-sink stage).
//
// Walks every text-bearing element, resolves its effective background by
// climbing ancestors until a non-transparent one is found, and computes the
// contrast ratio. AA: 4.5:1 for normal text, 3:1 for large (>=24px, or >=18.66px bold).
import { chromium } from "playwright";

const BASE = "http://127.0.0.1:4321";
const ROUTES = ["/", "/app/", "/for-retailers/", "/for-corporates/"];

const browser = await chromium.launch();
let failures = 0;

for (const route of ROUTES) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(BASE + route, { waitUntil: "networkidle" });
  // Reveal everything so no section is mid-fade when we sample colors.
  await page.evaluate(() => {
    for (const el of document.querySelectorAll(".ui-reveal")) {
      el.dataset.revealed = "true";
    }
  });
  await page.waitForTimeout(400);

  const results = await page.evaluate(() => {
    const parse = (c) => {
      const m = c.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/);
      if (!m) return null;
      return [ +m[1], +m[2], +m[3], m[4] === undefined ? 1 : +m[4] ];
    };
    const lum = ([r, g, b]) => {
      const f = (v) => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
      };
      return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
    };
    const ratio = (a, b) => {
      const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x);
      return (l1 + 0.05) / (l2 + 0.05);
    };
    const composite = (fg, bg) => {
      const a = fg[3];
      return [0, 1, 2].map((i) => fg[i] * a + bg[i] * (1 - a));
    };

    const effectiveBg = (el) => {
      let node = el;
      const stack = [];
      while (node && node !== document.documentElement) {
        const c = parse(getComputedStyle(node).backgroundColor);
        if (c && c[3] > 0) {
          stack.push(c);
          if (c[3] === 1) break;
        }
        node = node.parentElement;
      }
      let base = [255, 255, 255];
      for (let i = stack.length - 1; i >= 0; i--) base = composite(stack[i], base);
      return base;
    };

    const out = [];
    for (const el of document.querySelectorAll(
      "p,h1,h2,h3,h4,h5,h6,span,a,li,button,label,td,th,div"
    )) {
      // only elements with their own direct text
      const direct = [...el.childNodes]
        .filter((n) => n.nodeType === 3)
        .map((n) => n.textContent.trim())
        .join("")
        .trim();
      if (!direct) continue;

      const cs = getComputedStyle(el);
      if (cs.visibility === "hidden" || cs.display === "none") continue;
      if (parseFloat(cs.opacity) === 0) continue;
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) continue;
      // skip visually-hidden text (sr-only)
      if (r.width <= 1 && r.height <= 1) continue;

      const fgRaw = parse(cs.color);
      if (!fgRaw) continue;
      const bg = effectiveBg(el);
      const fg = fgRaw[3] < 1 ? composite(fgRaw, bg) : fgRaw.slice(0, 3);

      const size = parseFloat(cs.fontSize);
      const weight = parseInt(cs.fontWeight, 10) || 400;
      const large = size >= 24 || (size >= 18.66 && weight >= 700);
      const req = large ? 3 : 4.5;
      const cr = ratio(fg, bg);

      // which tone scope is this inside?
      const scope = el.closest(".ui-section--dark")
        ? "dark"
        : el.closest(".ui-section--brand")
          ? "brand"
          : el.closest(".persona-band--dark")
            ? "band-dark"
            : el.closest(".ui-section--subtle")
              ? "subtle"
              : "default";

      out.push({
        text: direct.slice(0, 44),
        cr: Math.round(cr * 100) / 100,
        req,
        pass: cr >= req,
        size: Math.round(size),
        scope,
        fg: `rgb(${fg.map(Math.round).join(",")})`,
        bg: `rgb(${bg.map(Math.round).join(",")})`,
      });
    }
    return out;
  });

  const fails = results.filter((r) => !r.pass);
  const byScope = {};
  for (const r of results) {
    byScope[r.scope] = byScope[r.scope] || { n: 0, f: 0, min: Infinity };
    byScope[r.scope].n++;
    if (!r.pass) byScope[r.scope].f++;
    byScope[r.scope].min = Math.min(byScope[r.scope].min, r.cr);
  }

  console.log(`\n=== ${route} — ${results.length} text nodes ===`);
  for (const [scope, s] of Object.entries(byScope)) {
    const tag = s.f ? `${s.f} FAIL` : "all pass";
    console.log(`  ${scope.padEnd(10)} n=${String(s.n).padStart(3)} min=${s.min.toFixed(2)}:1  ${tag}`);
  }
  for (const f of fails) {
    failures++;
    console.log(
      `    FAIL [${f.scope}] ${f.cr}:1 (need ${f.req}) ${f.size}px ${f.fg} on ${f.bg} — "${f.text}"`
    );
  }
  await page.close();
}

await browser.close();
console.log(`\n${failures === 0 ? "PASS — no AA contrast failures" : `FAIL — ${failures} contrast failures`}`);
