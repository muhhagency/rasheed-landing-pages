import type { Metadata } from "next";
import { Hero } from "@/components/sections/retailer/Hero";
import { Meet } from "@/components/sections/retailer/Meet";
import { Portal } from "@/components/sections/retailer/Portal";
import { Loyalty } from "@/components/sections/retailer/Loyalty";
import { Vision } from "@/components/sections/retailer/Vision";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { FinalCta } from "@/components/sections/FinalCta";
import { HOW, FINAL_CTA } from "@/content/retailer";

export const metadata: Metadata = {
  title:
    "Rasheed for Retailers — Turn every checkout into a customer moment.",
  // From §8.3 sub, trimmed to ~124 chars.
  description:
    "One TapCeipt at the register replaces paper, speeds up checkout, and opens a live channel to the customer after they walk out.",
  alternates: {
    canonical: "/for-retailers",
  },
  openGraph: {
    title: "Rasheed for Retailers — Turn every checkout into a customer moment.",
    description: "One TapCeipt at the register replaces paper, speeds up checkout, and opens a live channel to the customer after they walk out.",
    url: "/for-retailers",
    images: [{ url: "/og/og-retailers.png", width: 1200, height: 630, alt: "Rasheed for Retailers — Turn every checkout into a customer moment." }],
  },
  twitter: {
    title: "Rasheed for Retailers — Turn every checkout into a customer moment.",
    description: "One TapCeipt at the register replaces paper, speeds up checkout, and opens a live channel to the customer after they walk out.",
    images: ["/og/og-retailers.png"],
  },
};

// Retailer page (`/for-retailers`). Sections in content-brief §8 order.
export default function RetailerPage() {
  return (
    <>
      <Hero />
      <Meet />
      <Portal />
      <Loyalty />
      <Vision />
      <HowItWorks
        kicker={HOW.kicker}
        headline={HOW.headline}
        steps={HOW.steps}
        tone="subtle"
      />
      <TrustStrip tone="default" />
      {/* FinalCta is TEMPORARILY actions="contact" — /signup and the portal
          are not live, so the CTA offers email + phone instead. Restore with:
            actions="business"
            loginHref="https://retailers.rasheedapp.com"
            loginUrlLabel="retailers.rasheedapp.com"
          See docs/phase-7-polish.md § Temporarily removed. */}
      <FinalCta
        id="cta"
        headline={FINAL_CTA.headline}
        body={FINAL_CTA.body}
        actions="contact"
      />
    </>
  );
}
