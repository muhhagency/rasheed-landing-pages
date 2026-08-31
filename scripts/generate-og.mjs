// Generates the four OG images (1200x630) from design tokens.
//
// These are placeholders in the sense that no photography exists yet, but they
// are real, on-brand cards: brand surface, the Rasheed wordmark, page title.
// Rendered through Chromium so the tokens and the real font resolve exactly as
// they do on the site. Re-run after changing titles or brand tokens:
//   node scripts/generate-og.mjs
import { chromium } from "playwright";
import { readFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// Pulled from app/styles/tokens.css — brand primitives.
const BRAND = "#301473"; // --brand-royalpurple-500
const BRAND_DEEP = "#240f56"; // --brand-royalpurple-600
const LILAC = "#cbc4dc"; // --brand-royalpurple-200
const WHITE = "#ffffff";

// The horizontal lockup (icon + wordmark), DARK variant = light ink, because
// these cards sit on the purple brand surface.
//
// Embedded as a data: URI rather than inlined as markup. The source SVGs are
// Illustrator exports that all share the same generic class names (.st0/.st1/
// .st2) with no width/height, so inlining two of them into one document makes
// the <style> blocks collide. Worse, in the LIGHT variant `.st2` is #301473 —
// the same purple as this card's background — which is why an earlier version
// of this script rendered only the leaf mark: the wordmark lettering was there,
// painted background-on-background.
const logoDataUri =
  "data:image/svg+xml;base64," +
  readFileSync(resolve(root, "public/logo/logo-h-dark.svg")).toString("base64");

const CARDS = [
  { file: "og-home.png", title: "Every receipt. Every riyal.", sub: "All in one Rasheed." },
  { file: "og-app.png", title: "Money that fits your life.", sub: "Rasheed for everyday life" },
  { file: "og-retailers.png", title: "Turn every checkout into a customer moment.", sub: "Rasheed for Retailers" },
  { file: "og-corporates.png", title: "The business pocket, built for teams.", sub: "Rasheed for Corporates" },
];

const html = (c) => `<!doctype html><html><head><meta charset="utf-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    width:1200px; height:630px;
    background: linear-gradient(135deg, ${BRAND} 0%, ${BRAND_DEEP} 100%);
    font-family: Inter, -apple-system, system-ui, sans-serif;
    display:flex; flex-direction:column; justify-content:space-between;
    /* align-items:flex-start so the logo <img> hugs the left edge like the
       rest of the card; a column flex container would otherwise stretch and
       visually centre it. */
    align-items:flex-start;
    padding:72px 80px; color:${WHITE};
  }
  /* Intrinsic ratio 3327.73:1080 — width follows from height. */
  .logo { height:56px; width:auto; display:block; }
  h1 {
    font-size:64px; line-height:1.1; font-weight:700;
    letter-spacing:-0.02em; max-width:16ch; text-wrap:balance;
  }
  .sub { font-size:28px; font-weight:600; color:${LILAC}; letter-spacing:0.01em; }
  .rule { width:96px; height:5px; background:${LILAC}; border-radius:999px; margin-bottom:28px; }
</style></head><body>
  <img class="logo" src="${logoDataUri}" alt="Rasheed">
  <div>
    <div class="rule"></div>
    <h1>${c.title}</h1>
  </div>
  <div class="sub">${c.sub}</div>
</body></html>`;

mkdirSync(resolve(root, "public/og"), { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });

for (const card of CARDS) {
  await page.setContent(html(card), { waitUntil: "networkidle" });
  const out = resolve(root, "public/og", card.file);
  await page.screenshot({ path: out });
  console.log("wrote", card.file);
}

await browser.close();
