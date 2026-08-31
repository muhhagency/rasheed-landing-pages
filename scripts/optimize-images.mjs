// One-off: optimize the generated source PNGs into shippable web formats.
//
// Reads:  assets/source-images/*.png   (originals, git-ignored, never shipped)
// Writes: public/images/*.webp + *.jpg (what the site actually serves)
//
// The originals live outside public/ on purpose: Next copies public/ into the
// build verbatim with no way to exclude a subfolder, so keeping them in
// public/images/source/ would ship 14 MB of PNGs to production.
//
// For every source PNG:
//   - resize so the longest edge is at most 2400px (never upscales)
//   - write a WebP at quality 82
//   - write a JPEG at quality 85 as a fallback
//   - leave the original PNG untouched
//
// Run:  node scripts/optimize-images.mjs
//
// Note on JPEG + transparency: JPEG has no alpha channel. Any source PNG with
// transparency is flattened onto the page surface (--surface-page = #ffffff)
// for the JPEG only; the WebP keeps its alpha. Flattened files are called out
// in the table so a transparent asset can't silently gain a white box.
import sharp from "sharp";
import { readdirSync, statSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve, join, parse } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SRC_DIR = resolve(root, "assets/source-images");
const OUT_DIR = resolve(root, "public/images");

const MAX_EDGE = 2400;
const WEBP_QUALITY = 82;
const JPEG_QUALITY = 85;
// --surface-page. Matches the page background so a flattened image blends in.
const FLATTEN_BG = { r: 255, g: 255, b: 255 };

const kb = (bytes) => (bytes / 1024).toFixed(0) + " KB";
const mb = (bytes) => (bytes / 1048576).toFixed(2) + " MB";
const pct = (from, to) => {
  const change = ((to - from) / from) * 100;
  return (change > 0 ? "+" : "") + change.toFixed(1) + "%";
};

mkdirSync(OUT_DIR, { recursive: true });

// QR codes are excluded: they are flat two-colour line art, where lossy
// encoding is both larger AND risks softening the module edges that scanners
// depend on. Measured on this pair, WebP came out 19% BIGGER than the PNG and
// JPEG 4-5x bigger. They are optimised losslessly by optimize-qr.mjs instead.
const pngs = readdirSync(SRC_DIR)
  .filter((f) => /\.png$/i.test(f) && !/^qr-/.test(f))
  .sort();

if (pngs.length === 0) {
  console.log(`No PNGs found in ${SRC_DIR}`);
  process.exit(0);
}

const rows = [];

for (const file of pngs) {
  const src = join(SRC_DIR, file);
  const { name } = parse(file);

  const input = sharp(src);
  const meta = await input.metadata();
  const longest = Math.max(meta.width, meta.height);
  const willResize = longest > MAX_EDGE;

  // withoutEnlargement is belt-and-braces alongside the longest-edge check:
  // it guarantees a smaller source is never scaled up.
  const resized = () =>
    sharp(src).resize({
      width: MAX_EDGE,
      height: MAX_EDGE,
      fit: "inside",
      withoutEnlargement: true,
    });

  const webpPath = join(OUT_DIR, `${name}.webp`);
  await resized().webp({ quality: WEBP_QUALITY }).toFile(webpPath);

  const jpegPath = join(OUT_DIR, `${name}.jpg`);
  const jpegPipeline = resized();
  if (meta.hasAlpha) jpegPipeline.flatten({ background: FLATTEN_BG });
  await jpegPipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(jpegPath);

  const out = await sharp(webpPath).metadata();

  rows.push({
    name: file,
    dims: `${meta.width}x${meta.height}`,
    outDims: `${out.width}x${out.height}`,
    resized: willResize,
    flattened: !!meta.hasAlpha,
    png: statSync(src).size,
    webp: statSync(webpPath).size,
    jpeg: statSync(jpegPath).size,
  });
}

// ---- table ----
const W = { file: 30, dim: 11, size: 10 };
const line = "─".repeat(W.file + W.dim + W.size * 3 + 12);

console.log(
  "\n" +
    SRC_DIR.replace(root + "/", "") +
    "  →  " +
    OUT_DIR.replace(root + "/", "")
);
console.log(
  `resize: longest edge ≤ ${MAX_EDGE}px (no upscaling) · webp q${WEBP_QUALITY} · jpeg q${JPEG_QUALITY}\n`
);
console.log(
  "FILE".padEnd(W.file) +
    "DIMENSIONS".padEnd(W.dim) +
    "PNG".padStart(W.size) +
    "WEBP".padStart(W.size) +
    "JPEG".padStart(W.size) +
    "   SAVED (webp)"
);
console.log(line);

let totalPng = 0,
  totalWebp = 0,
  totalJpeg = 0;

for (const r of rows) {
  totalPng += r.png;
  totalWebp += r.webp;
  totalJpeg += r.jpeg;
  const notes = [r.resized ? "resized" : null, r.flattened ? "flattened" : null]
    .filter(Boolean)
    .join(", ");
  console.log(
    r.name.padEnd(W.file) +
      r.outDims.padEnd(W.dim) +
      kb(r.png).padStart(W.size) +
      kb(r.webp).padStart(W.size) +
      kb(r.jpeg).padStart(W.size) +
      "   " +
      pct(r.png, r.webp).padStart(7) +
      (notes ? `  (${notes})` : "")
  );
}

console.log(line);
console.log(
  "TOTAL".padEnd(W.file + W.dim) +
    kb(totalPng).padStart(W.size) +
    kb(totalWebp).padStart(W.size) +
    kb(totalJpeg).padStart(W.size) +
    "   " +
    pct(totalPng, totalWebp).padStart(7)
);

console.log(`\nFolder before (PNG only):        ${mb(totalPng)}`);
console.log(`Folder after  (WebP served):     ${mb(totalWebp)}`);
console.log(`Folder after  (JPEG fallback):   ${mb(totalJpeg)}`);
console.log(
  `Shipped weight if WebP only:     ${mb(totalWebp)}  (${pct(totalPng, totalWebp)} vs PNG)`
);
console.log(
  `Shipped weight WebP + JPEG:      ${mb(totalWebp + totalJpeg)}  (${pct(totalPng, totalWebp + totalJpeg)} vs PNG)`
);

const anyResized = rows.some((r) => r.resized);
if (!anyResized) {
  console.log(
    `\nNote: no image exceeded ${MAX_EDGE}px on its longest edge, so nothing was ` +
      `downscaled.\n      All savings above come from re-encoding alone.`
  );
}
