// Corporate page content. Copy is verbatim from docs/content-brief.md §9.
// CRITICAL: NO TapCeipt anywhere on this page — corporates do not get hardware
// (CLAUDE.md product rule). The Capture section is photo/voice/file only.
// This file intentionally does NOT import <TapCeipt />.

// --- Hero (§9.3) ---
export const HERO = {
  kicker: "For Corporates",
  headline: "The business pocket, built for teams.",
  sub: "Give your team a shared business pocket, set slices per department, onboard employees with the right permissions, and see every riyal spent — without chasing receipts at month-end.",
  urlIndicator: "corporates.rasheedapp.com",
};

// --- The Business Pocket (§9.4) — #business-pocket ---
export const POCKET = {
  kicker: "Shared team spending",
  headline: "One pocket. Every team member.",
  body: "The Business Pocket is a shared money container your whole team can use — with the right permissions, the right limits, and full visibility from the corporate portal.",
  // Members attached to the single pocket — reads the "one pocket, many members"
  // idea faster than prose.
  members: ["Finance", "Ops", "Sales", "Marketing", "Support"],
};

// --- Team, roles, slices (§9.5) — #team ---
export const CONTROL = {
  kicker: "Control",
  headline: "Set the budget. Watch the burn.",
  pillars: [
    {
      name: "Team pockets & roles",
      body: "Control who spends and how much.",
    },
    {
      name: "Slices by department",
      body: "Set the budget, watch the burn.",
    },
    {
      name: "Employee onboarding",
      body: "Add, remove, or reassign employees with the right permissions.",
    },
    {
      name: "Real-time visibility",
      body: "See every transaction as it happens.",
    },
  ],
};

// --- In-app capture (§9.6) — three EQUAL modes: photo, voice, file ---
// (§9.6 originally listed TapCeipt; corrected — see content-brief note.)
export const CAPTURE = {
  kicker: "Capture",
  headline: "Employees scan. Rasheed sorts.",
  body: "Employees capture receipts in the Rasheed app — by photo, voice, or file. Entries route to the right slice automatically. No expense reports, no lost receipts, no month-end chase.",
  modes: [
    { name: "Photo", body: "Snap the paper receipt. Rasheed reads it." },
    { name: "Voice", body: "Say it out loud. Rasheed logs it." },
    { name: "File", body: "Attach a PDF, image, or bill. Rasheed sorts it." },
  ],
};

// --- Audit-ready (§9.7) — #reports ---
export const REPORTS = {
  kicker: "Reports",
  headline: "Clean records. Every riyal traced.",
  body: "Export by department, by slice, by employee, or by date range. Finance-grade reports for tax, audit, and internal review.",
};

// --- How it works (§9.8) ---
export const HOW = {
  kicker: "How it works",
  headline: "From sign-up to first report.",
  steps: [
    {
      title: "Sign Up",
      body: "Create your Corporate account. Set up your Business Pocket.",
    },
    {
      title: "Onboard your team",
      body: "Add employees, assign roles, define slices.",
    },
    {
      title: "Track & report",
      body: "Watch spend in real time, export audit-ready reports.",
    },
  ],
};

// --- Final CTA (§9.10) ---
export const FINAL_CTA = {
  headline: "Ready to stop chasing receipts?",
  body: "Sign up and put your business spend on autopilot.",
};
