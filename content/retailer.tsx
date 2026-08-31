import { TapCeipt } from "@/components/ui/TapCeipt";

// Retailer page content. Copy is verbatim from docs/content-brief.md §8.
// Do not paraphrase. TapCeipt always renders through <TapCeipt /> —
// this page has the most instances on the site.

// --- Hero (§8.3) ---
export const HERO = {
  kicker: "For Retailers",
  headline: "Turn every checkout into a customer moment.",
  sub: (
    <>
      One <TapCeipt /> at the register replaces paper, speeds up checkout, and
      opens a live channel to the customer after they walk out. Manage branches,
      terminals, staff, and offers from a single portal.
    </>
  ),
  urlIndicator: "retailers.rasheedapp.com",
};

// --- Meet TapCeipt (§8.4) — #why-tapceipt — the page's showpiece ---
export const MEET = {
  kicker: "A hardware first for KSA",
  headline: "One tap. Every receipt.",
  body: (
    <>
      <TapCeipt /> sits at the checkout. The customer holds their phone close
      and their receipt drops straight into Rasheed. No paper, no email, no
      wasted print rolls.
    </>
  ),
};

// --- The Retailer Portal (§8.5) — #portal ---
export const PORTAL = {
  kicker: "Portal",
  headline: "One portal. Every branch.",
  body: (
    <>
      Deploy, monitor, and manage <TapCeipt /> across your network from a single
      dashboard.
    </>
  ),
  pillars: [
    {
      name: "Branches",
      body: "See every location's performance at a glance.",
    },
    {
      name: "Terminals",
      body: (
        <>
          Provision, monitor, and troubleshoot each <TapCeipt /> device.
        </>
      ),
    },
    {
      name: "Staff",
      body: "Roles, permissions, and activity by branch.",
    },
    {
      name: "Offers",
      body: "Publish deals directly to customers who tapped at your registers.",
    },
  ],
};

// --- Every checkout is a customer moment (§8.6) — Loyalty ---
export const LOYALTY = {
  kicker: "Loyalty",
  headline: "The receipt is only the beginning.",
  body: "After a customer taps, you have a direct channel to them inside Rasheed. Publish targeted offers, drive repeat visits, and turn one-time buyers into loyal customers.",
};

// --- Vision 2030 & SGI aligned (§8.7) — #vision-2030 ---
export const VISION = {
  kicker: "Compliance & Sustainability",
  headline: "Built for a paperless Saudi Arabia.",
  body: (
    <>
      <TapCeipt /> eliminates thermal receipt paper — a small change with a real
      environmental impact. Aligned with Vision 2030 and the Saudi Green
      Initiative from day one, with audit-ready digital records for every
      transaction.
    </>
  ),
};

// --- How it works (§8.8) ---
export const HOW = {
  kicker: "How it works",
  headline: "From sign-up to first tap.",
  steps: [
    {
      title: "Sign Up",
      body: "Create your Retailer account. Add branches and terminals.",
    },
    {
      title: (
        <>
          Deploy <TapCeipt />
        </>
      ),
      body: "Install at every register. Customers tap to receive.",
    },
    {
      title: "Manage & Grow",
      body: "Track receipts, run offers, build loyalty from the portal.",
    },
  ],
};

// --- Final CTA (§8.10) ---
export const FINAL_CTA = {
  headline: "Ready to go paperless?",
  body: (
    <>
      Sign up and start deploying <TapCeipt /> across your branches.
    </>
  ),
};
