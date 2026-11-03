import type { Metadata } from "next";
import {
  SHOPPERS_TITLE, SHOPPERS_DESCRIPTION, SH_HERO, SH_CAPTURE, SH_FLIP, SH_GIFTS,
  SH_STORES, SH_SPENDING, SH_FAMILY, SH_STATS, SH_VOICES, SH_FAQ, SH_CTA,
} from "@/content/v2/shoppers";
import { ShHero } from "@/components/v2/shoppers/ShHero";
import { ShCapture } from "@/components/v2/shoppers/ShCapture";
import { ShFlip } from "@/components/v2/shoppers/ShFlip";
import { ShGifts } from "@/components/v2/shoppers/ShGifts";
import { ShStores } from "@/components/v2/shoppers/ShStores";
import { ShSpending } from "@/components/v2/shoppers/ShSpending";
import { ShFamily } from "@/components/v2/shoppers/ShFamily";
import { ShStats } from "@/components/v2/shoppers/ShStats";
import { ShVoices } from "@/components/v2/shoppers/ShVoices";
import { ShFaq } from "@/components/v2/shoppers/ShFaq";
import { ShCta } from "@/components/v2/shoppers/ShCta";

export const metadata: Metadata = {
  title: SHOPPERS_TITLE,
  description: SHOPPERS_DESCRIPTION,
  alternates: { canonical: "/app" },
  openGraph: { title: SHOPPERS_TITLE, description: SHOPPERS_DESCRIPTION, url: "/app" },
};

// Shoppers page (`/app`). Sections in canvas order.
export default function ShoppersPage() {
  return (
    <>
      <ShHero content={SH_HERO} />
      <ShCapture content={SH_CAPTURE} />
      <ShFlip content={SH_FLIP} />
      <ShGifts content={SH_GIFTS} />
      <ShStores content={SH_STORES} />
      <ShSpending content={SH_SPENDING} />
      <ShFamily content={SH_FAMILY} />
      <ShStats content={SH_STATS} />
      <ShVoices content={SH_VOICES} />
      <ShFaq content={SH_FAQ} />
      <ShCta content={SH_CTA} />
    </>
  );
}
