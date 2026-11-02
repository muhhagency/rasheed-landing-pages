import type { IconName } from "@/components/v2/ui/Icon";
import { TapCeipt } from "@/components/ui/TapCeipt";
import { CONTACT } from "@/components/v2/layout/contact";

// Hub (`/`) content. Copy is verbatim from the approved canvas (Main + Mobile).
// Where desktop and mobile differ, both strings are kept and the page shows
// the right one per breakpoint.

export type HubCta = { label: string; href: string; variant: "primary" | "ghost"; icon: IconName };

export const HUB_TITLE = "Rasheed: One tap. Every receipt.";

// Plain-text version of the hero lead, for metadata.
export const HUB_DESCRIPTION =
  "Tap your phone on TapCeipt at checkout and the receipt lands in Rasheed, organized and saved. Built for shoppers, the stores they buy from, and the teams that spend.";

export const HUB = {
  logoAlt: "Rasheed",
  heroAlt: "A customer taps a phone on the TapCeipt device at a cafe counter",
  news: {
    href: "/news",
    tag: "New",
    desktop: <><TapCeipt /> now sends a PDF receipt to every phone</>,
    mobile: "PDF receipts for every phone",
  },
  badge: "The paperless receipt",
  headline: {
    label: "One tap. Every receipt.",
    lead: "One tap.",
    lines: [
      { text: "Every receipt.", icon: "receipt" },
      { text: "Every gift.", icon: "gift" },
      { text: "Every voucher.", icon: "ticket" },
      { text: "Every reward.", icon: "star" },
    ] as { text: string; icon: IconName }[],
  },
  // The second sentence is desktop only (Mobile canvas drops it).
  lead: <>Tap your phone on <TapCeipt /> at checkout and the receipt lands in Rasheed, organized and saved.</>,
  leadMore: "Built for shoppers, the stores they buy from, and the teams that spend.",
  ctaLabel: "Choose your Rasheed",
  ctas: [
    { label: "Get the app", href: CONTACT.appHref, variant: "primary", icon: "download" },
    { label: "For retailers", href: "/for-retailers", variant: "ghost", icon: "arrowRight" },
    { label: "For corporates", href: "/for-corporates", variant: "ghost", icon: "arrowRight" },
  ] as HubCta[],
  statsLabel: "Rasheed in numbers",
  stats: [
    { value: "[000K+]", label: "People using Rasheed" },
    { value: "[0.0M+]", label: "Receipts captured" },
    {
      value: "[000+]",
      label: <><TapCeipt /> devices<span className="hub-desk-only"> at checkouts</span></>,
    },
    { value: "[00K kg]", label: "Receipt paper saved", accent: true },
  ],
  footer: {
    copyright: "© Rasheed 2026",
    // mobileHidden: links the Mobile canvas leaves out of its slim footer.
    links: [
      { label: "News", href: "/news" },
      { label: "Support", href: `mailto:${CONTACT.infoEmail}?subject=Support`, mobileHidden: true },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: CONTACT.infoEmail, href: `mailto:${CONTACT.infoEmail}`, mobileHidden: true },
    ],
  },
};
