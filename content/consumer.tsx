import type { ReactNode } from "react";
import { TapCeipt } from "@/components/ui/TapCeipt";

// Consumer page content. Copy is verbatim from docs/content-brief.md §7.
// Do not paraphrase. TapCeipt always renders through <TapCeipt />.

// --- Hero (§7.3) ---
export const HERO = {
  kicker: "For You",
  headline: "Money that fits your life.",
  sub: "Capture receipts your way. Organize into Pockets. Share with family through Fallah. Earn rewards for greener habits — all in one Rasheed.",
};

// --- Every receipt, your way (§7.4) — #tapceipt ---
export const CAPTURE = {
  kicker: "Capture",
  headline: "Every receipt, your way.",
  body: (
    <>
      <TapCeipt /> hands it to you at checkout. Or type it, say it with your
      voice, snap a photo, or attach a file. Rasheed takes it however it comes.
    </>
  ),
  // TapCeipt is the hero of the four; the other three are the supporting set.
  hero: {
    name: <TapCeipt />,
    body: "Tap your phone at checkout. Done.",
  },
  modes: [
    { name: "Voice", body: "Say it out loud. Rasheed logs it." },
    { name: "Photo", body: "Snap the paper receipt. Rasheed reads it." },
    { name: "File", body: "Attach a PDF, image, or bill. Rasheed sorts it." },
  ] as { name: string; body: string }[],
};

// --- Money that makes sense (§7.5) — #features ---
export const POCKETS = {
  kicker: "Organize",
  headline: "Where every riyal lives.",
  sub: "Money that's yours, money you share, and money you pool for a moment.",
  cards: [
    {
      name: "Personal Pockets",
      body: "Your own money, organized. Set a budget cycle, watch your spending, adjust as life shifts.",
      kind: "solo" as const,
    },
    {
      name: "Shared Pockets",
      body: "Money you keep with family or friends on an ongoing basis. Set a shared budget and cycle — weekly, monthly, or yearly. Keep a household aligned with your partner, or teach your kids financial awareness inside a family pocket.",
      kind: "ongoing" as const,
    },
    {
      name: "Fallah",
      body: "For one-off pools — a trip, an event, a project. Rasheed nets who owes whom, then closes the pool when everyone's settled.",
      kind: "lifecycle" as const,
    },
  ] as { name: string; body: string; kind: "solo" | "ongoing" | "lifecycle" }[],
  // Slices callout — property of every pocket, visually subordinate.
  slicesCallout: (
    <>
      Inside any pocket, <strong>Slices</strong> let you budget by category. See
      what&rsquo;s left at a glance.
    </>
  ) as ReactNode,
};

// --- Never lose a warranty (§7.6) — #cabinet ---
export const CABINET = {
  kicker: "Cabinet",
  headline: "Never lose a warranty. Or a voucher.",
  body: "Rasheed's Cabinet keeps your warranty cards, vouchers, and medicine notes safe — captured automatically from every receipt you scan. Ready when you need them, wherever you are.",
  // The safekeeping set — layered cards, filed and retrievable.
  items: ["Warranty cards", "Vouchers", "Medicine notes"],
};

// --- Grow with every purchase (§7.7) — #rewards ---
export const REWARDS = {
  kicker: "Rewards",
  headline: "Spend smarter. Grow greener.",
  greenScore: {
    name: "Green Score",
    body: "Nature-themed tiers from Leaf to Forest. Every mindful choice moves you up. Reduce waste, protect the environment, earn recognition for the difference you make.",
    // Four tiers only. No Seed.
    tiers: ["Leaf", "Plant", "Tree", "Forest"],
  },
  offersHub: {
    name: "Offers Hub",
    body: "Curated deals from partners, redeemable inside the app. Earn points as you spend, redeem them for gifts you actually want.",
    // Saudi merchants as texture. Fulfillment partners are backend-only and
    // must never be named in copy (see CLAUDE.md hard content rules).
    sampleOffers: ["Panda", "Jarir", "Barn's Café"],
  },
};

// --- Final CTA (§7.9) — #cta ---
export const FINAL_CTA = {
  headline: "Ready to Rasheed?",
  body: "Start scanning in seconds. No account required.",
};
