// Intrinsic dimensions of every shipped photograph, in one place.
//
// These are read from the actual encoded files (see scripts/optimize-images.mjs
// output) and are passed to next/image as explicit width/height so the browser
// reserves the right box before the bytes arrive — no layout shift, no CLS.
//
// Keep in sync with public/images/. If an image is re-cropped or regenerated,
// re-run the optimize script and update the numbers here; a mismatch shows up
// as a stretched image, not a silent failure.
//
// Slot numbers refer to docs/asset-manifest.md.
export type ImageAsset = {
  /** Basename in public/images/, without extension. */
  name: string;
  width: number;
  height: number;
};

export const IMAGES = {
  // #1 — Hub, For You band
  hubForYou: { name: "hub-for-you", width: 896, height: 1200 },
  // #2 — Hub, For Retailers band (4:3 crop of #6)
  hubRetailers: { name: "hub-retailers", width: 1195, height: 896 },
  // #3 — Hub, For Corporates band (4:3 crop of #9)
  hubCorporates: { name: "hub-corporates", width: 1024, height: 768 },
  // #4 — /app hero
  consumerHero: { name: "consumer-hero-grocery", width: 896, height: 1200 },
  // #5 — /app capture, inside the purple TapCeipt card
  tapceiptMacro: { name: "tapceipt-tap-macro", width: 1200, height: 896 },
  // #6 — /for-retailers hero
  retailerHero: { name: "retailer-hero-checkout", width: 1200, height: 896 },
  // #7 — /for-retailers Meet TapCeipt (dark showpiece)
  tapceiptDark: { name: "tapceipt-hero-dark", width: 1024, height: 1024 },
  // #8 — /for-retailers Portal
  retailerPortal: { name: "retailer-portal-context", width: 1376, height: 768 },
  // #9 — /for-corporates hero
  corporateHero: { name: "corporate-hero-office", width: 1376, height: 768 },
  // #10 — /for-corporates Reports
  corporateReports: { name: "corporate-reports-desk", width: 1200, height: 896 },
} as const satisfies Record<string, ImageAsset>;
