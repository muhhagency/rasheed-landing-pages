// Scan test: decode the QR codes as they are ACTUALLY RENDERED in the page,
// not from the source file. A code that decodes at 576px can still fail at the
// 140px it ships at, and that is the size a phone camera sees.
import { chromium } from "playwright";
import jsQR from "jsqr";
import sharp from "sharp";

const EXPECT = {
  "qr-appstore": "https://apps.apple.com/us/app/rasheed/id6458787414",
  "qr-googleplay":
    "https://play.google.com/store/apps/details?id=com.rasheed.app&pcampaignid=web_share",
};

const b = await chromium.launch();
let failed = 0;

// deviceScaleFactor 1 = worst case (a 1x display renders the fewest pixels).
for (const dsf of [1, 2]) {
  console.log(`\n=== rendered at deviceScaleFactor ${dsf} ===`);
  const p = await b.newPage({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: dsf });
  await p.goto("http://127.0.0.1:4321/app/", { waitUntil: "networkidle" });
  await p.evaluate(() => {
    for (const e of document.querySelectorAll(".ui-reveal")) e.dataset.revealed = "true";
  });
  await p.waitForTimeout(500);

  for (const el of await p.$$(".final-cta__qr-img")) {
    const src = await el.getAttribute("src");
    const key = src.split("/").pop().replace(".png", "");
    const box = await el.boundingBox();
    const shot = await el.screenshot();
    const { data, info } = await sharp(shot).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    const code = jsQR(new Uint8ClampedArray(data), info.width, info.height);
    const ok = code?.data === EXPECT[key];
    if (!ok) failed++;
    console.log(
      `  ${key.padEnd(16)} ${Math.round(box.width)}x${Math.round(box.height)} CSS px  ->  ${ok ? "SCANS, URL matches" : "*** " + (code ? "WRONG URL: " + code.data : "DID NOT SCAN") + " ***"}`
    );
  }
  await p.close();
}

await b.close();
if (failed) { console.error(`\n${failed} failure(s).`); process.exit(1); }
console.log("\nAll QR codes scan at their rendered size.");
