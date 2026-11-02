import type { IconName } from "@/components/v2/ui/Icon";

// Corporates page (/for-corporates). Copy ported verbatim from the approved
// canvas (Corporates.ref.html). Bracketed values are placeholders awaiting
// real data. In strings, "{TapCeipt}" renders the <TapCeipt /> wordmark.

export type CoFeature = { icon: IconName; title: string; text: string };

export type CoPortal = {
  label: string;
  windowTitle: string;
  nav: { icon: IconName; label: string; active?: boolean }[];
  title: string;
  sub: string;
  sample: string;
  kpis: { label: string; value: string; note: string }[];
  slicesTitle: string;
  slicesUsed: string;
  slices: { name: string; people: string; pct: number; alt?: boolean }[];
  latest: { kicker: string; title: string; meta: string };
  exportTitle: string;
  exportChips: string[];
};

export const PORTAL: CoPortal = {
  label: "Rasheed for corporates portal, sample data",
  windowTitle: "Rasheed for corporates",
  nav: [
    { icon: "barChart", label: "Overview", active: true },
    { icon: "cube", label: "Business Pocket" },
    { icon: "pieSplit", label: "Slices" },
    { icon: "staff", label: "Team" },
    { icon: "report", label: "Reports" },
  ],
  title: "Business Pocket",
  sub: "This month · 46 employees",
  sample: "Sample data",
  kpis: [
    { label: "Spent this month", value: "48,250", note: "of 80,000 budget" },
    { label: "Receipts captured", value: "612", note: "0 missing" },
    { label: "Pending review", value: "7", note: "Oldest: 2 days" },
  ],
  slicesTitle: "Slices by department",
  slicesUsed: "Used",
  slices: [
    { name: "Sales", people: "18 people", pct: 62 },
    { name: "Operations", people: "11 people", pct: 41 },
    { name: "Marketing", people: "9 people", pct: 78, alt: true },
    { name: "Travel", people: "8 people", pct: 25 },
  ],
  latest: { kicker: "Latest", title: "Lina · Sales · Client lunch", meta: "320.00 · Photo · Just now" },
  exportTitle: "Export",
  exportChips: ["By department", "By slice", "By employee", "By date"],
};

export const HERO = {
  label: "Rasheed for corporates",
  badge: { icon: "building" as IconName, text: "For corporates" },
  lead: "Team spending,",
  lines: [
    { text: "without the paperwork.", icon: "receipt" as IconName },
    { text: "budgeted by team.", icon: "pieSplit" as IconName },
    { text: "visible in real time.", icon: "barChart" as IconName },
    { text: "ready for audit.", icon: "report" as IconName },
  ],
  h1Label: "Team spending, without the paperwork.",
  body: "Give your team one Business Pocket. Set a budget for each department and see every expense as it happens. No more collecting receipts at the end of the month.",
  primary: "Book a demo",
  secondary: "Chat on WhatsApp",
  statsLabel: "In numbers",
  stats: [
    { value: "[000+]", label: "Companies on Rasheed" },
    { value: "[00K+]", label: "Employee receipts captured" },
    { value: "[0 days]", label: "Spent collecting receipts", accent: true },
  ],
};

export const WHY = {
  badge: { icon: "swap" as IconName, text: "Why switch" },
  title: "No more collecting receipts by hand.",
  before: {
    label: "The usual way",
    items: [
      "Receipts in wallets, drawers and inboxes",
      "Expense reports typed by hand, weeks later",
      "Budgets checked after the money is spent",
      "Finance asks everyone for receipts at the end of the month",
    ],
  },
  after: {
    label: "With Rasheed",
    items: [
      "Every receipt is saved in the app when it is paid",
      "Each expense goes to the right department automatically",
      "See how each budget is spent, live",
      "Reports ready whenever finance needs them",
    ],
  },
};

export const POCKET = {
  badge: { icon: "briefcase" as IconName, text: "The Business Pocket" },
  title: "One pocket. Every team member.",
  body: "The Business Pocket is one shared budget for your whole team. Each person has their own permissions and limits. Finance sees everything in the company portal.",
  checks: [
    "Add employees and give each one a role",
    "Set spending limits per person or per team",
    "Every expense appears in the pocket as soon as it is added",
  ],
  card: {
    title: "Business Pocket",
    members: "46 members",
    spentLabel: "Spent this month",
    spent: "48,250",
    pct: 60,
    meta: "60% of 80,000 · Monthly cycle",
  },
  // Positions are px on the 600 x 600 artwork.
  members: [
    { initials: "LA", name: "Lina", team: "Sales", x: 230, y: 35 },
    { initials: "KM", name: "Karim", team: "Operations", x: 434, y: 152 },
    { initials: "SN", name: "Sara", team: "Marketing", x: 434, y: 388 },
    { initials: "OH", name: "Omar", team: "Finance", x: 230, y: 505 },
    { initials: "NR", name: "Noor", team: "Support", x: 26, y: 388 },
    { initials: "YS", name: "Youssef", team: "Travel", x: 26, y: 152 },
  ],
  artLabel: "The Business Pocket shared by six team members: Lina in Sales, Karim in Operations, Sara in Marketing, Omar in Finance, Noor in Support and Youssef in Travel",
};

export const CONTROL = {
  badge: { icon: "sliders" as IconName, text: "Control" },
  title: "Set the budget. Follow the spending.",
  body: "Split the Business Pocket into Slices, one for each department. See how each one is doing at any time, not only at the end of the month.",
  features: [
    { icon: "pieSplit", title: "Slices by department", text: "Give every team its own budget inside one pocket." },
    { icon: "lock", title: "Roles and limits", text: "Decide who can spend, how much, and from which Slice." },
    { icon: "staff", title: "Add employees", text: "Add, remove or move people in a few clicks." },
    { icon: "barChart", title: "Real-time visibility", text: "See every expense as it happens, not weeks later." },
  ] as CoFeature[],
};

export const CAPTURE = {
  badge: { icon: "camera" as IconName, text: "Capture" },
  title: "Add a receipt. Rasheed files it.",
  body: "Employees add receipts in the Rasheed app when they pay. Each one goes to the right Slice automatically. No expense reports, no lost receipts.",
  phone: {
    src: "/v2/ph-scr-bizhome.webp",
    alt: "The Rasheed app on an employee phone: the Sales team Business Pocket and recent work expenses",
  },
  features: [
    { icon: "camera", title: "Photo", text: "Take a photo of the paper receipt. Rasheed reads it." },
    { icon: "mic", title: "Voice", text: "Say it out loud. Rasheed saves it." },
    { icon: "upload", title: "File", text: "Add a PDF, image or bill. Rasheed organizes it." },
  ] as CoFeature[],
};

export const REPORTS = {
  badge: { icon: "report" as IconName, text: "Reports" },
  title: "Clear records, with every receipt.",
  body: "Export by department, Slice, employee or date. Every line links to its receipt, ready for tax and audit.",
  checks: [
    "Exports ready for finance in a few clicks",
    "Every expense linked to its receipt",
    "No more matching spreadsheets at the end of the month",
  ],
  panel: {
    title: "Reports",
    label: "Reports panel, sample data",
    chips: ["By department", "By Slice", "By employee", "By date range"],
    rows: [
      { title: "Spend by department, Q3", meta: "4 departments · 1,846 expenses" },
      { title: "Marketing Slice, September", meta: "212 expenses · with receipts" },
      { title: "Lina, Sales, last 90 days", meta: "38 expenses · with receipts" },
    ],
    action: "Export",
  },
};

export const HOW = {
  badge: { icon: "steps" as IconName, text: "How it works" },
  title: "Start in three simple steps.",
  steps: [
    { icon: "message" as IconName, title: "Book a demo", text: "We show you how it works and send you a quote. Then we set up your Business Pocket with you." },
    { icon: "staff" as IconName, title: "Onboard your team", text: "Add employees, assign roles and create a Slice for each department." },
    { icon: "barChart" as IconName, title: "Track and report", text: "Follow spending live and export reports whenever you need them." },
  ],
};

export const NEWS = {
  title: "Latest from Rasheed",
  sample: "Sample content",
  all: "All news and events",
  href: "/news",
  more: "Read more",
  cards: [
    {
      img: "/v2/tap-card2.webp", w: 1600, h: 1195, pos: "60% 50%",
      alt: "A customer taps a phone on the TapCeipt device",
      tag: "Product", date: "[28 Oct 2026]",
      title: "{TapCeipt} now sends a PDF receipt to every phone",
    },
    {
      img: "/v2/ph-scr-stats.webp", w: 616, h: 1256, pos: "50% 18%",
      alt: "Rasheed Statistics: spending, budget and a monthly comparison",
      tag: "Product", date: "[02 Oct 2026]",
      title: "New: export spending reports by Slice in one tap",
      tint: true,
    },
    {
      img: "/v2/till-tap.webp", w: 2200, h: 1476, pos: "55% 55%",
      alt: "A customer taps a phone on TapCeipt at a cafe counter",
      tag: "Event", date: "[18 Nov 2026]",
      title: "Meet us at [Retail Expo 2026]",
    },
  ],
};

export const FAQ = {
  badge: { icon: "help" as IconName, text: "FAQ" },
  title: "Common questions.",
  contact: { before: "Have another question? ", whatsapp: "Chat on WhatsApp", middle: " or call ", after: "." },
  items: [
    { q: "How do we get started?", a: "Book a demo. We set up your Business Pocket, then you add your team and create Slices for each department." },
    { q: "Can we set a budget per department?", a: "Yes. Slices split your Business Pocket into budgets, one for each department or team. You can follow each one live." },
    { q: "Who can see what?", a: "You decide. Roles and permissions control who can spend, how much, and what each person can see." },
    { q: "How do employees add receipts?", a: "In the Rasheed app, by photo, voice or file. Each expense goes to the right Slice automatically." },
    { q: "Can we export for accounting?", a: "Yes. Export by department, Slice, employee or date range, with every line linked to its receipt." },
    { q: "How is it priced?", a: "Pricing depends on the size of your team. Ask for a quote and we will suggest the right plan." },
  ],
};

export const CTA = {
  title: "Ready to stop collecting receipts?",
  body: "Put your team's spending in one Business Pocket. Close every month on time.",
  demo: "Book a demo",
  quote: "Get a quote",
  whatsapp: "Chat on WhatsApp",
  call: "Or call us: ",
};

export const META = {
  title: "Rasheed for corporates",
  description: HERO.body,
};
