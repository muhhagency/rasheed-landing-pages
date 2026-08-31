import { TapCeipt } from "@/components/ui/TapCeipt";
import type { ReactNode } from "react";
import type { HeaderVariant } from "./navConfig";
import { CONTACT_EMAIL, CONTACT_EMAIL_HREF, PHONE_HREF, PHONE_LABEL } from "./contact";

export type FooterVariant = HeaderVariant;

export type FooterLink = { label: ReactNode; href: string };
export type FooterColumn = { title: string; links: FooterLink[] };

export type FooterConfig = {
  columns: FooterColumn[];
};

export const FOOTER_TAGLINE = "Every receipt. Every riyal. All in one Rasheed.";

const INFO_EMAIL = "info@rasheedapp.com";
// TEMPORARILY UNUSED — both B2B footers moved from sales@ to info@ while the
// B2B funnel is a single contact route. Restore sales@ on /for-retailers and
// /for-corporates when the portals and /signup ship, and update
// docs/content-brief.md §8.9 and §9.9 to match.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SALES_EMAIL = "sales@rasheedapp.com";

export const FOOTER_CONFIG: Record<FooterVariant, FooterConfig> = {
  hub: {
    columns: [
      {
        title: "Company",
        links: [
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
          { label: INFO_EMAIL, href: `mailto:${INFO_EMAIL}` },
        ],
      },
    ],
  },
  consumer: {
    columns: [
      {
        // Order synced to the consumer nav: TapCeipt, Features, Cabinet, Rewards.
        title: "Product",
        links: [
          { label: <TapCeipt />, href: "#tapceipt" },
          { label: "Features", href: "#features" },
          { label: "Cabinet", href: "#cabinet" },
          { label: "Rewards", href: "#rewards" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
          { label: INFO_EMAIL, href: `mailto:${INFO_EMAIL}` },
        ],
      },
    ],
  },
  retailer: {
    columns: [
      {
        title: "Product",
        links: [
          {
            label: (
              <>
                Why <TapCeipt />
              </>
            ),
            href: "#why-tapceipt",
          },
          { label: "Portal", href: "#portal" },
          { label: "Vision 2030", href: "#vision-2030" },
        ],
      },
      {
        // There is no separate "Business" column in this footer — Product and
        // Company are the two. Contact details belong in Company, so the phone
        // sits beside the email here.
        title: "Company",
        links: [
          { label: "Support", href: "/support" },
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
          // tel: — mobile B2B visitors tap to dial.
          { label: PHONE_LABEL, href: PHONE_HREF },
          { label: CONTACT_EMAIL, href: CONTACT_EMAIL_HREF },
        ],
      },
    ],
  },
  corporate: {
    columns: [
      {
        title: "Product",
        links: [
          { label: "Business Pocket", href: "#business-pocket" },
          { label: "Team", href: "#team" },
          { label: "Reports", href: "#reports" },
        ],
      },
      {
        // There is no separate "Business" column in this footer — Product and
        // Company are the two. Contact details belong in Company, so the phone
        // sits beside the email here.
        title: "Company",
        links: [
          { label: "Support", href: "/support" },
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
          // tel: — mobile B2B visitors tap to dial.
          { label: PHONE_LABEL, href: PHONE_HREF },
          { label: CONTACT_EMAIL, href: CONTACT_EMAIL_HREF },
        ],
      },
    ],
  },
};
