// Responsive checks specific to real photography (vs uniform grey boxes).
//
// 1. CROP DRIFT — every slot is object-fit: cover, so the rendered box crops the
//    source. Reports how much of each axis survives at each width, and flags any
//    slot where cover discards more than 25% of an axis: that is where a subject
//    framed centrally can start sliding out of frame.
// 2. ABOVE-THE-FOLD BALANCE on mobile — how much of the first viewport the hero
//    image occupies vs the copy + CTA, and whether the CTA is reachable without
//    scrolling.
import { chromium } from "playwright";

const BASE = "http://127.0.0.1:4321";
const ROUTES = ["/", "/app/", "/for-retailers/", "/for-corporates/"];
const WIDTHS = [1440, 1280, 1024, 768, 430, 390];

const browser = await chromium.launch();

console.log("=== 1. CROP RETENTION (object-fit: cover) ===");
console.log("   shows how much of the source survives in the rendered box.");
console.log("   FLAG = more than 25% of an axis cropped away.\n");

let flagged = 0;
for (const route of ROUTES) {
  console.log(`${route}`);
  for (const width of WIDTHS) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    await page.goto(BASE + route, { waitUntil: "networkidle" });
    await page.evaluate(() => {
      for (const el of document.querySelectorAll(".ui-reveal"))
        el.dataset.revealed = "true";
    });
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(600);
    await page.evaluate(() => window.scrollTo(0, 0));

    const shots = await page.evaluate(() => {
      const out = [];
      for (const img of document.querySelectorAll("img.ui-image__img")) {
        const r = img.getBoundingClientRect();
        if (!img.naturalWidth || r.width === 0) continue;
        const srcAR = img.naturalWidth / img.naturalHeight;
        const boxAR = r.width / r.height;
        // cover: the source is scaled so the SHORTER axis fills; the longer one
        // overflows and is clipped.
        let keptX = 1,
          keptY = 1;
        if (srcAR > boxAR) keptX = boxAR / srcAR; // wider than box → sides cropped
        else keptY = srcAR / boxAR; // taller than box → top/bottom cropped
        out.push({
          file: img.currentSrc.split("/").pop(),
          box: `${Math.round(r.width)}x${Math.round(r.height)}`,
          keptX: Math.round(keptX * 100),
          keptY: Math.round(keptY * 100),
        });
      }
      return out;
    });

    for (const s of shots) {
      const worst = Math.min(s.keptX, s.keptY);
      const flag = worst < 75;
      if (flag) flagged++;
      console.log(
        `   ${String(width).padEnd(5)} ${s.file.padEnd(32)} box=${s.box.padEnd(10)} kept ${s.keptX}%x ${s.keptY}%y ${flag ? "  ← FLAG" : ""}`
      );
    }
    await page.close();
  }
  console.log("");
}

console.log(`\n=== 2. ABOVE-THE-FOLD BALANCE (390x844 and 430x932) ===\n`);
for (const [w, h] of [
  [390, 844],
  [430, 932],
]) {
  console.log(`--- ${w}x${h}`);
  for (const route of ROUTES) {
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    await page.goto(BASE + route, { waitUntil: "networkidle" });
    await page.waitForTimeout(400);

    const r = await page.evaluate((vh) => {
      const pick = (...sels) => {
        for (const s of sels) {
          const el = document.querySelector(s);
          if (el) return el;
        }
        return null;
      };
      const img = document.querySelector("img.ui-image__img");
      const cta = pick(
        ".hero__actions",
        ".b2b-hero__actions",
        ".persona-band__cta"
      );
      const h1 = document.querySelector("h1, .persona-band__headline");

      const visible = (el) => {
        if (!el) return 0;
        const b = el.getBoundingClientRect();
        const top = Math.max(0, b.top);
        const bottom = Math.min(vh, b.bottom);
        return Math.max(0, bottom - top);
      };

      return {
        imgVisible: Math.round(visible(img)),
        imgTop: img ? Math.round(img.getBoundingClientRect().top) : null,
        ctaBottom: cta ? Math.round(cta.getBoundingClientRect().bottom) : null,
        h1Top: h1 ? Math.round(h1.getBoundingClientRect().top) : null,
        vh,
      };
    }, h);

    const imgPct = Math.round((r.imgVisible / h) * 100);
    const ctaOk = r.ctaBottom !== null && r.ctaBottom <= h;
    console.log(
      `   ${route.padEnd(18)} image occupies ${String(imgPct).padStart(3)}% of fold · CTA ${ctaOk ? `visible (ends ${r.ctaBottom}px)` : `BELOW FOLD (${r.ctaBottom}px > ${h})`}`
    );
    await page.close();
  }
  console.log("");
}

await browser.close();
console.log(flagged === 0 ? "No heavy crops flagged." : `${flagged} heavy crop(s) flagged above.`);
