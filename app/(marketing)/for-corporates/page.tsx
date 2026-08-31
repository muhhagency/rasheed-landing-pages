import type { Metadata } from "next";
import { Hero } from "@/components/sections/corporate/Hero";
import { BusinessPocket } from "@/components/sections/corporate/BusinessPocket";
import { Control } from "@/components/sections/corporate/Control";
import { Capture } from "@/components/sections/corporate/Capture";
import { Reports } from "@/components/sections/corporate/Reports";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { FinalCta } from "@/components/sections/FinalCta";
import { HOW, FINAL_CTA } from "@/content/corporate";

export const metadata: Metadata = {
  title: "Rasheed for Corporates — The business pocket, built for teams.",
  // From §9.3 sub, trimmed to ~150 chars.
  description:
    "Give your team a shared business pocket, set slices per department, onboard employees, and see every riyal spent — without chasing receipts at month-end.",
  alternates: {
    canonical: "/for-corporates",
  },
  openGraph: {
    title: "Rasheed for Corporates — The business pocket, built for teams.",
    description: "Give your team a shared business pocket, set slices per department, onboard employees, and see every riyal spent — without chasing receipts at month-end.",
    url: "/for-corporates",
    images: [{ url: "/og/og-corporates.png", width: 1200, height: 630, alt: "Rasheed for Corporates — The business pocket, built for teams." }],
  },
  twitter: {
    title: "Rasheed for Corporates — The business pocket, built for teams.",
    description: "Give your team a shared business pocket, set slices per department, onboard employees, and see every riyal spent — without chasing receipts at month-end.",
    images: ["/og/og-corporates.png"],
  },
};

// Corporate page (`/for-corporates`). Sections in content-brief §9 order.
// No TapCeipt anywhere — corporates do not get hardware.
export default function CorporatePage() {
  return (
    <>
      <Hero />
      <BusinessPocket />
      <Control />
      <Capture />
      <Reports />
      <HowItWorks
        kicker={HOW.kicker}
        headline={HOW.headline}
        steps={HOW.steps}
      />
      <TrustStrip />
      {/* FinalCta is TEMPORARILY actions="contact" — /signup and the portal
          are not live, so the CTA offers email + phone instead. Restore with:
            actions="business"
            loginHref="https://corporates.rasheedapp.com"
            loginUrlLabel="corporates.rasheedapp.com"
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
