import type { ReactNode } from "react";
import { TapCeipt } from "@/components/ui/TapCeipt";
import { IMAGES, type ImageAsset } from "@/components/ui/assetManifest";
import { HUB_BANDS } from "@/content/hub";

// V2. NEW = written for v2 from facts already in docs/content-brief.md.
// Everything else is the approved string.

export const HUB_HERO = {
  // Approved tagline (FOOTER_TAGLINE), promoted to the visible h1.
  headline: (
    <>
      Every receipt. Every riyal. <span>All in one Rasheed.</span>
    </>
  ) as ReactNode,
  // NEW
  sub: "One place for what you buy, what you share and what your team spends.",
};

const alts = [
  { asset: IMAGES.hubForYou, tone: "you" },
  { asset: IMAGES.hubRetailers, tone: "retail" },
  { asset: IMAGES.hubCorporates, tone: "corp" },
] as { asset: ImageAsset; tone: string }[];

export const DOORS = HUB_BANDS.map((b, i) => ({
  kicker: b.kicker,
  headline: b.headline,
  body: b.body,
  cta: b.ctaLabel,
  href: b.ctaHref,
  alt: b.media.alt,
  ...alts[i],
}));

export const HUB_JOURNEY = {
  // NEW
  kicker: "How it connects",
  headline: "One receipt, three people helped.",
  steps: [
    {
      title: "At the register",
      body: (
        <>
          The customer taps the <TapCeipt />. No paper, no email.
        </>
      ) as ReactNode,
    },
    { title: "In a Pocket", body: "It lands in the right Pocket and the right Slice." as ReactNode },
    {
      title: "On the record",
      body: "Work receipts reach the company with everything finance needs." as ReactNode,
    },
  ],
};
