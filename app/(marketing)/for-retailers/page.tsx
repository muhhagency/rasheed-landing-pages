import type { Metadata } from "next";
import { Retailer } from "@/components/site/pages/Retailer";

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


export default function RetailerPage() {
  return <Retailer />;
}
