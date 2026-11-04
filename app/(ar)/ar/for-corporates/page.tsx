import type { Metadata } from "next";
import { HERO, PORTAL, WHY, POCKET, CONTROL, CAPTURE, REPORTS, ERP, HOW, NEWS, FAQ, CTA, META } from "@/content/v2/ar/corporates";
import { CoHero } from "@/components/v2/corporates/CoHero";
import { WhySwitch } from "@/components/v2/corporates/WhySwitch";
import { BusinessPocket } from "@/components/v2/corporates/BusinessPocket";
import { Control } from "@/components/v2/corporates/Control";
import { Capture } from "@/components/v2/corporates/Capture";
import { Reports } from "@/components/v2/corporates/Reports";
import { ErpSync } from "@/components/v2/corporates/ErpSync";
import { HowItWorks } from "@/components/v2/corporates/HowItWorks";
import { NewsStrip } from "@/components/v2/corporates/NewsStrip";
import { CoFaq } from "@/components/v2/corporates/CoFaq";
import { FinalCta } from "@/components/v2/corporates/FinalCta";

export const metadata: Metadata = {
  title: META.title,
  description: META.description,
  alternates: { canonical: "/ar/for-corporates", languages: { en: "/for-corporates", ar: "/ar/for-corporates" } },
  openGraph: { title: META.title, description: META.description, url: "/ar/for-corporates" },
};

// Corporates page. The offer is app + portal only; the TapCeipt news and expo
// cards in the news strip are owner-approved.
export default function CorporatesPage() {
  return (
    <>
      <CoHero content={HERO} portal={PORTAL} />
      <WhySwitch content={WHY} />
      <BusinessPocket content={POCKET} />
      <Control content={CONTROL} portal={PORTAL} />
      <Capture content={CAPTURE} />
      <Reports content={REPORTS} />
      <ErpSync content={ERP} />
      <HowItWorks content={HOW} />
      <NewsStrip content={NEWS} />
      <CoFaq content={FAQ} />
      <FinalCta content={CTA} />
    </>
  );
}
