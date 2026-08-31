// Optimise the store QR codes — losslessly, and verify they still decode.
//
// QR codes are deliberately NOT run through optimize-images.mjs. They are flat
// two-colour line art, so lossy WebP/JPEG is the wrong tool twice over: it
// produces LARGER files than the PNG source, and it softens the module edges
// that scanners rely on. A QR that is 3% harder to scan is a broken CTA.
//
// So: PNG in, PNG out, palette-reduced to 2 colours. Every output is decoded
// again afterwards and the result compared against the expected store URL —
// this script fails loudly rather than shipping a code that scans to nothing,
// or worse, to the wrong store.
//
// Run:  node scripts/optimize-qr.mjs
import sharp from "sharp";
import jsQR from "jsqr";
import { statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve, join } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = resolve(root, "assets/source-images");
const OUT = resolve(root, "public/images");

// Each QR must decode to exactly the URL its button links to. Keep in sync with
// STORES in components/ui/StoreButton.tsx.
const CODES = [
  {
    file: "qr-appstore.png",
    expect: "https://apps.apple.com/us/app/rasheed/id6458787414",
  },
  {
    file: "qr-googleplay.png",
    expect:
      "https://play.google.com/store/apps/details?id=com.rasheed.app&pcampaignid=web_share",
  },
];

const decode = async (path) => {
  const { data, info } = await sharp(path)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const code = jsQR(new Uint8ClampedArray(data), info.width, info.height);
  return code?.data ?? null;
};

let failed = 0;

for (const { file, expect } of CODES) {
  const src = join(SRC, file);
  const out = join(OUT, file);

  await sharp(src)
    .png({ palette: true, colours: 2, compressionLevel: 9, effort: 10 })
    .toFile(out);

  const got = await decode(out);
  const ok = got === expect;
  if (!ok) failed++;

  const before = statSync(src).size;
  const after = statSync(out).size;
  const delta = Math.round(((after - before) / before) * 100);

  console.log(`${file}`);
  console.log(
    `   ${(before / 1024).toFixed(1)} KB -> ${(after / 1024).toFixed(1)} KB (${delta > 0 ? "+" : ""}${delta}%)`
  );
  console.log(`   decodes to: ${got ?? "NOTHING"}`);
  console.log(`   ${ok ? "matches the expected store URL" : "*** MISMATCH ***"}\n`);
}

if (failed) {
  console.error(`${failed} QR code(s) did not decode to the expected URL.`);
  process.exit(1);
}
console.log("All QR codes verified.");
