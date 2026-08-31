import type { Metadata } from "next";
import { PersonaShell } from "@/components/layout/PersonaShell";
import { PersonaBand } from "@/components/ui/PersonaBand";
import { HUB_BANDS } from "@/content/hub";
import { FOOTER_TAGLINE } from "@/components/layout/footerConfig";

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

// Hub (`/`). Three persona doors, nothing else — no hero, no download buttons.
export default function HubPage() {
  return (
    <PersonaShell variant="hub">
      {/* The hub has no visible headline by design (routing only, no hero),
          but the document still needs a single h1 root above the band h2s.
          Uses the existing approved tagline — no new copy invented. */}
      <h1 className="sr-only">{FOOTER_TAGLINE}</h1>
      {HUB_BANDS.map((band, i) => (
        <PersonaBand
          key={i}
          kicker={band.kicker}
          headline={band.headline}
          body={band.body}
          ctaLabel={band.ctaLabel}
          ctaHref={band.ctaHref}
          media={band.media}
          tone={band.tone}
          reverse={band.reverse}
        />
      ))}
    </PersonaShell>
  );
}
