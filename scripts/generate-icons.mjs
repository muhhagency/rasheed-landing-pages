// Generates every favicon / app-icon variant from the brand icon SVG.
//
// Source is the design-system icon (see BRAND_ICON below). It carries its own
// off-white body, so it reads on both light and dark browser chrome without
// needing two variants.
//
// Outputs:
//   app/favicon.ico            16/32/48 multi-resolution, for legacy + tabs
//   app/icon.png               512  — Next serves this as the modern icon
//   public/apple-touch-icon.png 180 — iOS home screen, needs an opaque bg
//
// Run:  node scripts/generate-icons.mjs
import sharp from "sharp";
import pngToIco from "png-to-ico";
import { writeFileSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// Kept in the design-system folder rather than copied into the repo, so the
// icon has one source of truth. If that path moves, update it here.
const BRAND_ICON =
  "/Users/muhhesham/Desktop/Projects/Rasheed/#Guidelines/1- Logo & Icon/Icon/Icon (Dark Mode).svg";

// --brand-royalpurple-500. Apple ignores transparency and composites onto
// black, so the touch icon needs a deliberate opaque background.
const BRAND = { r: 0x30, g: 0x14, b: 0x73, alpha: 1 };

// The artwork is 1044.49x1080 — slightly taller than square. `contain` keeps
// its proportions and pads rather than distorting the leaf.
//
// density is scaled to the target rather than fixed: the SVG is ~1044pt wide,
// so a flat high density rasterises a huge intermediate and trips sharp's
// pixel limit. This renders roughly 2x the output size, which is ample for
// downsampling without the blowup.
const square = (size, background) => {
  const density = Math.min(600, Math.ceil((size * 2 * 72) / 1044.49) + 72);
  return sharp(BRAND_ICON, { density })
    // Trim the transparent margin baked into the artboard first. Without this
    // the mark is padded twice — once by the SVG, once by `contain` — and at
    // 16px the leaf and the swoosh blur into each other.
    .trim({ threshold: 1 })
    .resize(size, size, { fit: "contain", background })
    .png();
};

const transparent = { r: 0, g: 0, b: 0, alpha: 0 };

// ---- favicon.ico: 16/32/48 so the browser picks the crispest ----
const icoSizes = [16, 32, 48];
const icoBuffers = [];
for (const size of icoSizes) {
  icoBuffers.push(await square(size, transparent).toBuffer());
}
const ico = await pngToIco(icoBuffers);
writeFileSync(resolve(root, "app/favicon.ico"), ico);
console.log(`app/favicon.ico            ${icoSizes.join("/")}  ${(ico.length / 1024).toFixed(1)} KB`);

// ---- app/icon.png: Next's modern favicon route ----
const iconPath = resolve(root, "app/icon.png");
await square(512, transparent).toFile(iconPath);
console.log(
  `app/icon.png               512      ${(readFileSync(iconPath).length / 1024).toFixed(1)} KB`
);

// ---- apple-touch-icon: opaque brand ground, with breathing room ----
// iOS rounds the corners itself, so the mark is inset to survive the mask.
const touchPath = resolve(root, "public/apple-touch-icon.png");
const inner = await square(132, transparent).toBuffer();
await sharp({
  create: { width: 180, height: 180, channels: 4, background: BRAND },
})
  .composite([{ input: inner, gravity: "centre" }])
  .png()
  .toFile(touchPath);
console.log(
  `public/apple-touch-icon.png 180     ${(readFileSync(touchPath).length / 1024).toFixed(1)} KB  (on brand purple)`
);
