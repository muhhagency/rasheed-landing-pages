// One-off: derive the two hub band crops as their own source files.
//
// The hub Retailers and Corporates bands are 4:3 crops of the two B2B heroes.
// They are cut here into real files rather than being CSS-cropped at render
// time, so the browser downloads only the pixels it displays and the crop
// window is a deliberate, reviewable decision instead of whatever
// object-fit happens to do at a given viewport.
//
// Writes into assets/source-images/ (git-ignored originals). Run
// scripts/optimize-images.mjs afterwards to produce the shipped webp/jpg.
//
// Run:  node scripts/derive-hub-crops.mjs && node scripts/optimize-images.mjs
import sharp from "sharp";
import { readdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve, join } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = resolve(root, "assets/source-images");

// gravity picks WHICH 4:3 window is kept out of the wider source. Chosen per
// image from what is actually in frame — a centred default would cut the
// subject in both cases.
const CROPS = [
  {
    from: "retailer-hero-checkout.png", // 1200x896
    to: "hub-retailers.png",
    // The TapCeipt stand and the customer's phone sit centre-right, and the
    // hand enters from the right edge. Source is already ~4:3 (1200x896 vs a
    // true 1200x900), so this trims only a few px — keep it centred.
    gravity: "centre",
    note: "subject already centre-frame; source is near-4:3 so the trim is minimal",
  },
  {
    from: "corporate-hero-office.png", // 1376x768 (16:9)
    to: "hub-corporates.png",
    // Going 16:9 → 4:3 discards ~350px of width. The meeting runs from the
    // seated figure at left to the two colleagues at right; an "east" window
    // keeps the full group and the window light, dropping only empty lounge
    // furniture at the far left. A centred crop would clip the right-hand
    // colleague at the frame edge.
    gravity: "east",
    note: "16:9 → 4:3 drops ~350px; east keeps the whole group, cuts empty lounge at left",
  },
];

for (const crop of CROPS) {
  const src = join(SRC, crop.from);
  const meta = await sharp(src).metadata();

  // Largest 4:3 window that fits inside the source.
  let w = meta.width;
  let h = Math.round((w / 4) * 3);
  if (h > meta.height) {
    h = meta.height;
    w = Math.round((h / 3) * 4);
  }

  const out = join(SRC, crop.to);
  await sharp(src)
    .resize({ width: w, height: h, fit: "cover", position: crop.gravity })
    .png()
    .toFile(out);

  const size = statSync(out).size;
  console.log(
    `${crop.from} (${meta.width}x${meta.height})\n` +
      `  → ${crop.to} (${w}x${h}, 4:3, gravity=${crop.gravity}) ${(size / 1048576).toFixed(2)} MB\n` +
      `    ${crop.note}\n`
  );
}

console.log("Source PNGs now in assets/source-images/:");
for (const f of readdirSync(SRC).filter((f) => /\.png$/i.test(f)).sort()) {
  console.log("  " + f);
}
console.log("\nNext: node scripts/optimize-images.mjs");
