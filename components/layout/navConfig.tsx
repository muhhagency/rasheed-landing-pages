import { TapCeipt } from "@/components/ui/TapCeipt";
import type { ReactNode } from "react";
import { CONTACT_CTA_LABEL, CONTACT_EMAIL_HREF } from "./contact";

export type HeaderVariant = "hub" | "consumer" | "retailer" | "corporate";

export type NavLink = { label: ReactNode; href: string };
export type NavCta = {
  label: ReactNode;
  href: string;
  variant: "primary" | "ghost";
};

export type HeaderConfig = {
  navLinks: NavLink[];
  ctas: NavCta[];
  // Hub uses a Log in dropdown instead of flat CTAs.
  loginDropdown?: { label: ReactNode; href: string }[];
};

// Kept while the Log in / Sign Up CTAs are temporarily removed: these are the
// canonical portal hosts and the restore snippets below reference them. Deleting
// them would mean re-deriving the URLs when the portals ship.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PORTAL_RETAILER = "https://retailers.rasheedapp.com";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PORTAL_CORPORATE = "https://corporates.rasheedapp.com";

export const HEADER_CONFIG: Record<HeaderVariant, HeaderConfig> = {
  hub: {
    // The hub is a pure router: no nav, no CTA. The Log in dropdown that used
    // to sit here was removed with the portals and does NOT come back as a
    // Contact us — routing only. See docs/phase-7-polish.md.
    navLinks: [],
    ctas: [],
  },
  consumer: {
    // Order matches the page's section order: the TapCeipt-led capture section
    // (#tapceipt) comes before Money that makes sense (#features).
    navLinks: [
      { label: <TapCeipt />, href: "#tapceipt" },
      { label: "Features", href: "#features" },
      { label: "Cabinet", href: "#cabinet" },
      { label: "Rewards", href: "#rewards" },
    ],
    ctas: [{ label: "Download", href: "#cta", variant: "primary" }],
  },
  retailer: {
    navLinks: [
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
    // Sign Up / Log in are TEMPORARILY replaced by a single Contact us: /signup
    // does not exist and the retailer portal is not live. Restore:
    //   ctas: [
    //     { label: "Log in", href: PORTAL_RETAILER, variant: "ghost" },
    //     { label: "Sign Up", href: "/signup", variant: "primary" },
    //   ],
    ctas: [
      {
        label: CONTACT_CTA_LABEL,
        href: CONTACT_EMAIL_HREF,
        variant: "primary",
      },
    ],
  },
  corporate: {
    navLinks: [
      { label: "Business Pocket", href: "#business-pocket" },
      { label: "Team", href: "#team" },
      { label: "Reports", href: "#reports" },
    ],
    // Sign Up / Log in are TEMPORARILY replaced by a single Contact us: /signup
    // does not exist and the corporate portal is not live. Restore:
    //   ctas: [
    //     { label: "Log in", href: PORTAL_CORPORATE, variant: "ghost" },
    //     { label: "Sign Up", href: "/signup", variant: "primary" },
    //   ],
    ctas: [
      {
        label: CONTACT_CTA_LABEL,
        href: CONTACT_EMAIL_HREF,
        variant: "primary",
      },
    ],
  },
};
