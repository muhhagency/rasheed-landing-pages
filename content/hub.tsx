import type { ReactNode } from "react";
import { TapCeipt } from "@/components/ui/TapCeipt";
import { IMAGES, type ImageAsset } from "@/components/ui/assetManifest";

// Hub persona-band content. Copy is verbatim from docs/content-brief.md §6.
// Do not paraphrase or "improve" these strings.

export type HubBand = {
  kicker: string;
  headline: string;
  body: ReactNode;
  ctaLabel: string;
  ctaHref: string;
  // `asset` keys into IMAGES (components/ui/assetManifest.ts) so the intrinsic
  // width/height travel with the file; `ratio` is the box the band reserves.
  media: {
    asset: ImageAsset;
    ratio: "4/3" | "3/4" | "1/1";
    alt: string;
    /** First band only — above the fold on the hub. */
    priority?: boolean;
  };
  tone: "default" | "subtle" | "dark";
  reverse?: boolean;
};

export const HUB_BANDS: HubBand[] = [
  {
    // Section 1 — For You
    kicker: "For You",
    headline: "Rasheed for everyday life.",
    body: "Capture receipts, organize your money, share with family, earn rewards.",
    ctaLabel: "Explore Rasheed for you",
    ctaHref: "/app",
    tone: "default",
    media: {
      asset: IMAGES.hubForYou,
      ratio: "3/4",
      alt: "The Rasheed app displaying pockets and recent receipts",
      priority: true,
    },
  },
  {
    // Section 2 — For Retailers
    kicker: "For Retailers",
    headline: "Rasheed at the register.",
    body: (
      <>
        Turn every checkout into a customer moment with <TapCeipt /> and the
        retailer portal.
      </>
    ),
    ctaLabel: "Explore Rasheed for retailers",
    ctaHref: "/for-retailers",
    tone: "subtle",
    reverse: true,
    media: {
      asset: IMAGES.hubRetailers,
      ratio: "4/3",
      alt: "A TapCeipt device at a retail checkout counter",
    },
  },
  {
    // Section 3 — For Corporates
    kicker: "For Corporates",
    headline: "Rasheed for business.",
    body: "Manage team spend with the Business Pocket, department slices, and audit-ready reports.",
    ctaLabel: "Explore Rasheed for business",
    ctaHref: "/for-corporates",
    // Was `dark`; set to `default` so the closing band doesn't blend into the
    // dark footer. Sequence is default → subtle → default, keeping cadence
    // (avoids two adjacent `subtle` slabs). The footer is now the only dark
    // region, anchoring the page bottom.
    tone: "default",
    media: {
      asset: IMAGES.hubCorporates,
      ratio: "4/3",
      alt: "A team working together in a bright modern office",
    },
  },
];
