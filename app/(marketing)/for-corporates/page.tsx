import type { Metadata } from "next";
import { Corporate } from "@/components/site/pages/Corporate";

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

export default function CorporatePage() {
  return <Corporate />;
}
