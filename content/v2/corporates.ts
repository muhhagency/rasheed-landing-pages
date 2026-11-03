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
  approval: { kicker: string; title: string; meta: string; approve: string; reject: string };
  exportTitle: string;
  exportChips: string[];
};

export const PORTAL: CoPortal = {
  label: "Rasheed for corporates portal, sample data",
  windowTitle: "Rasheed for corporates",
  nav: [
    { icon: "barChart", label: "Overview", active: true },
    { icon: "cube", label: "Business Pocket" },
    { icon: "shieldCheck", label: "Approvals" },
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
    { label: "Pending approval", value: "7", note: "Oldest: 2 days" },
  ],
  slicesTitle: "Slices by department",
  slicesUsed: "Used",
  slices: [
    { name: "Sales", people: "18 people", pct: 62 },
    { name: "Operations", people: "11 people", pct: 41 },
    { name: "Marketing", people: "9 people", pct: 78, alt: true },
    { name: "Travel", people: "8 people", pct: 25 },
  ],
  approval: {
    kicker: "Pending approval",
    title: "Lina · Sales · Client lunch",
    meta: "320.00 · Photo · Just now",
    approve: "Approve",
    reject: "Reject",
  },
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
  pointsLabel: "Highlights",
  points: [
    { icon: "cube" as IconName, title: "One Business Pocket", text: "One budget for the whole team." },
    { icon: "shieldCheck" as IconName, title: "Manager approval", text: "Every expense is approved before it counts." },
    { icon: "sync" as IconName, title: "ERP sync", text: "Approved expenses go straight to your ERP." },
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
      "Approvals chased by email and on paper",
      "Finance asks everyone for receipts at the end of the month",
    ],
  },
  after: {
    label: "With Rasheed",
    items: [
      "Every receipt is saved in the app when it is paid",
      "Each expense is approved by the manager before it counts",
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
    name: "Sales team",
    type: "Business Pocket",
    spentLabel: "Total spent",
    spent: "12,480.00",
    budgetLabel: "Budget",
    budget: "20,000.00",
    available: "Available: 7,520.00",
    pct: 62,
    cycle: "Monthly · Ends in 16 days",
    members: ["LS", "KM", "SN", "OH"],
    moreMembers: "+14",
    membersLabel: "18 members",
    pending: "2 pending approvals",
    slicesTitle: "Slices",
    slices: [
      { name: "Client meals", spent: "4,200", budget: "6,000", pct: 70, icon: "receipt" as IconName },
      { name: "Travel", spent: "5,100", budget: "8,000", pct: 64, icon: "truck" as IconName },
      { name: "Supplies", spent: "1,980", budget: "3,000", pct: 66, icon: "store" as IconName },
      { name: "Events", spent: "1,200", budget: "3,000", pct: 40, icon: "calendar" as IconName },
    ],
  },
  artLabel: "A Business Pocket for the Sales team: 12,480.00 spent of a 20,000.00 budget, 18 members, 2 pending approvals and four Slices: Client meals, Travel, Supplies and Events",
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
  cycle: {
    title: "Every expense is approved before it counts.",
    text: "Each team expense follows the same four steps.",
    steps: [
      { icon: "plus" as IconName, who: "Employee", title: "Add", text: "The employee adds the expense in the Rasheed app." },
      { icon: "shieldCheck" as IconName, who: "Manager", title: "Approve", text: "The manager approves or rejects it." },
      { icon: "dashboard" as IconName, who: "Finance", title: "Review", text: "Finance sees it in the company portal." },
      { icon: "sync" as IconName, who: "Automatic", title: "Sync to ERP", text: "It syncs to your ERP with its receipt." },
    ],
  },
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

export const ERP = {
  badge: { icon: "plug" as IconName, text: "ERP integration" },
  title: "Connects to your ERP.",
  body: "Approved expenses sync to your ERP automatically. Each one arrives with its receipt, category and cost center. No double entry.",
  checks: [
    "Only approved expenses are synced",
    "Receipt, category and cost center on every line",
    "No typing the same expense twice",
  ],
  diagram: {
    label: "Approved expenses move from the Rasheed portal to your ERP, sample data",
    source: "Rasheed portal",
    rows: [
      { title: "Client lunch", meta: "Sales · 320.00" },
      { title: "Taxi to airport", meta: "Travel · 85.00" },
      { title: "Printer paper", meta: "Operations · 46.50" },
    ],
    status: "Approved",
    sync: "Synced automatically",
    target: "Your ERP",
    targetSub: "Your accounting system",
    tiles: [
      { icon: "report" as IconName, label: "Accounting" },
      { icon: "staff" as IconName, label: "Payroll" },
      { icon: "pieSplit" as IconName, label: "Cost centers" },
    ],
    fields: ["Receipt", "Category", "Cost center"],
  },
};

export const HOW = {
  badge: { icon: "steps" as IconName, text: "How it works" },
  title: "Start in three simple steps.",
  steps: [
    { icon: "message" as IconName, title: "Book a demo", text: "We show you how it works and send you a quote. Then we set up your Business Pocket with you." },
    { icon: "staff" as IconName, title: "Onboard your team", text: "Add employees, assign roles and create a Slice for each department." },
    { icon: "barChart" as IconName, title: "Track and report", text: "Approve expenses, follow spending live and sync them to your ERP. Export reports whenever you need them." },
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
    { q: "How do expense approvals work?", a: "An employee adds the expense in the Rasheed app. Their manager approves or rejects it. Finance then sees it in the company portal, and it syncs to your ERP." },
    { q: "How do employees add receipts?", a: "In the Rasheed app, by photo, voice or file. Each expense goes to the right Slice automatically." },
    { q: "Can we export for accounting?", a: "Yes. Export by department, Slice, employee or date range, with every line linked to its receipt. Approved expenses can also sync to your ERP." },
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
