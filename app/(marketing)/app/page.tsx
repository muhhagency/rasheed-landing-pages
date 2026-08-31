import type { Metadata } from "next";
import { Hero } from "@/components/sections/consumer/Hero";
import { Capture } from "@/components/sections/consumer/Capture";
import { Pockets } from "@/components/sections/consumer/Pockets";
import { Cabinet } from "@/components/sections/consumer/Cabinet";
import { Rewards } from "@/components/sections/consumer/Rewards";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { FinalCta } from "@/components/sections/FinalCta";
import { FINAL_CTA } from "@/content/consumer";

export const metadata: Metadata = {
  title: "Rasheed — Money that fits your life.",
  // From §7.3 sub, ~137 chars.
  description:
    "Capture receipts your way. Organize into Pockets. Share with family through Fallah. Earn rewards for greener habits — all in one Rasheed.",
  alternates: {
    canonical: "/app",
  },
  openGraph: {
    title: "Rasheed — Money that fits your life.",
    description: "Capture receipts your way. Organize into Pockets. Share with family through Fallah. Earn rewards for greener habits — all in one Rasheed.",
    url: "/app",
    images: [{ url: "/og/og-app.png", width: 1200, height: 630, alt: "Rasheed — Money that fits your life." }],
  },
  twitter: {
    title: "Rasheed — Money that fits your life.",
    description: "Capture receipts your way. Organize into Pockets. Share with family through Fallah. Earn rewards for greener habits — all in one Rasheed.",
    images: ["/og/og-app.png"],
  },
};

// Consumer page (`/app`). Sections in content-brief §7 order.
export default function ConsumerPage() {
  return (
    <>
      <Hero />
      <Capture />
      <Pockets />
      <Cabinet />
      <Rewards />
      <TrustStrip />
      <FinalCta
        id="cta"
        headline={FINAL_CTA.headline}
        body={FINAL_CTA.body}
        actions="stores"
      />
    </>
  );
}
