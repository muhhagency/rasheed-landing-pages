import type { Metadata } from "next";
import { PersonaShell } from "@/components/layout/PersonaShell";
import { Hub } from "@/components/site/pages/Hub";

export const metadata: Metadata = {
  title: "Rasheed — Every receipt. Every riyal.",
  // Description assembled from the three audience lines in content-brief §6.
  // See the FLAG in the PR notes: the brief has no single meta sentence, so
  // this stitches its own audience descriptions rather than inventing copy.
  description:
    "Rasheed is one app for everyday life, retailers, and business — capture receipts, organize your money, deploy TapCeipt at the register, and manage team spend.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rasheed — Every receipt. Every riyal.",
    description: "Rasheed is one app for everyday life, retailers, and business — capture receipts, organize your money, deploy TapCeipt at the register, and manage team spend.",
    url: "/",
    images: [{ url: "/og/og-home.png", width: 1200, height: 630, alt: "Rasheed — Every receipt. Every riyal." }],
  },
  twitter: {
    title: "Rasheed — Every receipt. Every riyal.",
    description: "Rasheed is one app for everyday life, retailers, and business — capture receipts, organize your money, deploy TapCeipt at the register, and manage team spend.",
    images: ["/og/og-home.png"],
  },
};

// Hub (`/`). V2: a visible headline, then three doors.
export default function HubPage() {
  return (
    <PersonaShell variant="hub">
      <Hub />
    </PersonaShell>
  );
}
