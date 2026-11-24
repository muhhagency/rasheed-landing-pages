import type { Metadata } from "next";
import { Consumer } from "@/components/site/pages/Consumer";

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


export default function ConsumerPage() {
  return <Consumer />;
}
