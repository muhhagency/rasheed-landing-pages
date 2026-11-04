import type { Metadata } from "next";
import { RtHero } from "@/components/v2/retailers/RtHero";
import { RtPaperless } from "@/components/v2/retailers/RtPaperless";
import { RtTill } from "@/components/v2/retailers/RtTill";
import { RtAd } from "@/components/v2/retailers/RtAd";
import { RtRewards } from "@/components/v2/retailers/RtRewards";
import { RtPoints } from "@/components/v2/retailers/RtPoints";
import { RtPortal } from "@/components/v2/retailers/RtPortal";
import { RtSteps } from "@/components/v2/retailers/RtSteps";
import { RtProof } from "@/components/v2/retailers/RtProof";
import { RtFaq } from "@/components/v2/retailers/RtFaq";
import { RtCta } from "@/components/v2/retailers/RtCta";
import {
  RT_META,
  RT_HERO,
  RT_PAPERLESS,
  RT_TILL,
  RT_AD,
  RT_REWARDS,
  RT_POINTS,
  RT_PORTAL,
  RT_STEPS,
  RT_PROOF,
  RT_FAQ,
  RT_CTA,
} from "@/content/v2/retailers";

export const metadata: Metadata = {
  title: RT_META.title,
  description: RT_META.description,
  alternates: { canonical: "/for-retailers", languages: { en: "/for-retailers", ar: "/ar/for-retailers" } },
  openGraph: {
    title: RT_META.title,
    description: RT_META.description,
    url: "/for-retailers",
  },
};

// Retailers page (Redesign 2026), sections in canvas order.
export default function RetailersPage() {
  return (
    <>
      <RtHero content={RT_HERO} />
      <RtPaperless content={RT_PAPERLESS} />
      <RtTill content={RT_TILL} />
      <RtAd content={RT_AD} />
      <RtRewards content={RT_REWARDS} />
      <RtPoints content={RT_POINTS} />
      <RtPortal content={RT_PORTAL} />
      <RtSteps content={RT_STEPS} />
      <RtProof content={RT_PROOF} />
      <RtFaq content={RT_FAQ} />
      <RtCta content={RT_CTA} />
    </>
  );
}
