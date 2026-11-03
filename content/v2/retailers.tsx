// Retailers page (/for-retailers) copy, ported verbatim from the approved
// Redesign 2026 canvas. Bracketed values are placeholders awaiting real data.
import type { ReactNode } from "react";
import { TapCeipt } from "@/components/ui/TapCeipt";
import { CONTACT } from "@/components/v2/layout/contact";
import type { IconName } from "@/components/v2/ui/Icon";

export type RtLink = { label: string; href: string; icon?: IconName; iconEnd?: IconName; external?: boolean };

export const RT_META = {
  title: "Rasheed for retailers",
  description:
    "Put TapCeipt at your checkout. No more paper receipts, faster checkout, and your store stays on your customer's phone after they leave.",
};

export const RT_HERO = {
  badge: "For retailers",
  h1Lead: "Every checkout,",
  h1Label: "Every checkout, a customer moment.",
  lines: [
    { text: "a customer moment.", icon: "receipt" },
    { text: "an ad they read.", icon: "speaker" },
    { text: "a reason to return.", icon: "gift" },
    { text: "a loyal regular.", icon: "star" },
  ] as { text: string; icon: IconName }[],
  lead: (
    <>
      Put <TapCeipt /> at your checkout. No more paper receipts, faster checkout, and your store stays on your
      customer&apos;s phone after they leave.
    </>
  ),
  image: {
    src: "/v2/hero-tap.webp",
    alt: "A customer taps a phone on the TapCeipt device at a cafe counter",
    width: 2400,
    height: 1610,
  },
  ctas: [
    { label: "Book a demo at your store", href: CONTACT.demoHref, icon: "calendar" },
    { label: "Chat on WhatsApp", href: CONTACT.whatsappHref, icon: "chat", external: true },
  ] as RtLink[],
  partners: {
    label: "partner logos",
    title: <>Stores that already use <TapCeipt /></>,
    note: "Sample logos",
    logos: ["NORTHWIND", "lumen", "Oakline", "BRIGHTMART", "kova.", "Palmway"],
  },
};

export const RT_PAPERLESS = {
  badge: "Paperless",
  h2: ["Go paperless.", "Better for your store and the planet."],
  paper: {
    label: "Paper receipt",
    items: [
      "Printed, then thrown away",
      "Paper rolls to buy again and again",
      "The ink fades in a few weeks",
      "The customer forgets your store",
    ],
  },
  digital: {
    label: <><TapCeipt /> receipt</>,
    items: [
      "Goes to the customer's phone in one tap",
      "No paper, no ink, no printer problems",
      "Saved forever, with a digital record of every sale",
      "Shows your ad and your store points",
    ],
    image: { src: "/v2/tap-card2.webp", alt: "A customer taps a phone on the TapCeipt device", width: 1600, height: 1195 },
  },
};

export const RT_TILL = {
  badge: "At checkout",
  h2: "One tap. That is all.",
  intro: (
    <>
      Your cashier works as usual. The customer taps their phone on <TapCeipt />. The receipt goes straight to their
      phone.
    </>
  ),
  image: {
    src: "/v2/till-tap.webp",
    alt: "A customer taps a phone on the TapCeipt device on a cafe counter",
    width: 2200,
    height: 1476,
  },
  steps: [
    { title: "Ring up the sale", body: "Your cashier uses the POS as usual. Nothing new to learn." },
    { title: "The customer taps", body: <>They hold their phone near <TapCeipt /> at your checkout.</> },
    {
      title: "The receipt is on their phone",
      body: "With Rasheed, it saves in the app with a reward. Without the app, they get a PDF receipt.",
    },
  ] as { title: string; body: ReactNode }[],
  note: { strong: "No app needed.", text: "Any customer can tap and get a PDF receipt on their phone." },
};

export const RT_AD = {
  badge: "The receipt is your media",
  h2: "Your ad, on every receipt.",
  lead: "Every receipt has space for an ad, and you can book it today. Customers open the receipt right after they pay, so they see your offer at the best moment.",
  cards: [
    { title: "People really see it", body: "One ad per receipt, opened by the person who just paid." },
    { title: "Talk to your own customers", body: "Invite them back with an offer for their next visit." },
  ],
  phone: { src: "/v2/front-barcode.webp", alt: "Receipt front with a barcode and an ad at the bottom" },
  tag: "Your ad here",
};

export type RtReward = { kicker: string; title: string; body: string; art: "points" | "extra" | "voucher" | "gift" };

export const RT_REWARDS = {
  badge: "Rewards on the back",
  h2: "A reason for customers to come back.",
  intro: "Every receipt has a reward on the back. Customers flip it and win something every time.",
  cards: [
    { kicker: "Every receipt", title: "Green Points", body: "Points on every receipt.", art: "points" },
    { kicker: "Lucky receipt", title: "Extra points", body: "Up to nine times the usual.", art: "extra" },
    { kicker: "Better", title: "Vouchers", body: "Money off, used with a QR code.", art: "voucher" },
    { kicker: "The big one", title: "Free gifts", body: "Sometimes, a real product.", art: "gift" },
  ] as RtReward[],
  // The paper receipt each reward card flips. Front is the same for all four cards.
  receipt: {
    store: "Rasheed Store",
    branch: "Downtown branch",
    items: [
      { name: "Chocolate Bar", qty: "1 × 3.27", price: "3.27" },
      { name: "Sourdough Pita Bread", qty: "2 × 1.37", price: "2.74" },
    ],
    totalLabel: "Total",
    total: "6.01",
  },
  backs: {
    points: { kicker: "You earned", value: "+10", label: "Green Points" },
    extra: { kicker: "Lucky receipt!", value: "+90", label: "Extra points", chip: "9× your usual" },
    voucher: { kicker: "You won", value: "20%", unit: "OFF", label: "Voucher", hint: "Scan it at checkout" },
    gift: { kicker: "You won", label: "A free gift" },
  },
};

export const RT_POINTS = {
  badge: "Your store points",
  h2a: "No points program?",
  h2accent: "No worries.",
  h2b: "Rasheed is here.",
  lead: "Set up your own store points inside Rasheed, with your store's name on them. No cards, no extra system. Customers collect your points on every receipt and use them at your checkout with a QR code.",
  checks: [
    "Customers get your points on every tap, automatically",
    "To use points, they show a QR code. Your cashier scans it and they approve.",
    "Your points stay yours. They are separate from Rasheed's Green Points.",
  ],
  phone: { src: "/v2/ph-scr-partner.webp", alt: "A store's points card in Rasheed with a QR code to redeem at the till" },
  chip: { title: "Rasheed Store points", sub: "Added from today's receipt", value: "+12" },
};

export const RT_PORTAL = {
  badge: "The portal",
  h2: "One portal. Every branch.",
  intro: (
    <>
      Manage branches, devices, staff, offers and receipt ads in one place. See how every <TapCeipt /> is doing.
    </>
  ),
  mock: {
    label: "Rasheed for retailers portal, sample data",
    windowTitle: "Rasheed for retailers",
    nav: [
      { label: "Overview", icon: "barChart" },
      { label: "Branches", icon: "store" },
      { label: "Terminals", icon: "nfc" },
      { label: "Staff", icon: "staff" },
      { label: "Offers", icon: "gift" },
      { label: "Receipt ads", icon: "speaker" },
    ] as { label: string; icon: IconName }[],
    title: "Overview",
    sub: "All branches · This week",
    sample: "Sample data",
    kpis: [
      { label: "Receipts delivered", value: "2,418", note: "+12% vs last week" },
      { label: "Customers who flipped", value: "1,972", note: "82% of receipts" },
      { label: "Terminals online", value: "12 / 12", note: "All branches" },
    ],
    chartTitle: "Receipts per day",
    bars: [
      { day: "Mon", h: 64 },
      { day: "Tue", h: 84 },
      { day: "Wed", h: 73 },
      { day: "Thu", h: 96 },
      { day: "Fri", h: 107 },
      { day: "Sat", h: 140, top: true },
      { day: "Sun", h: 123 },
    ] as { day: string; h: number; top?: boolean }[],
    branchesTitle: "Branches",
    branchesCol: "Receipts",
    branches: [
      { name: "Downtown", meta: "· 4 terminals", value: "1,104" },
      { name: "Riverside", meta: "· 3 terminals", value: "702" },
      { name: "Airport", meta: "· 3 terminals", value: "448" },
      { name: "Old Town", meta: "· 2 terminals", value: "164" },
    ],
    offer: { kicker: "Live offer", title: "Weekend bakery deal", sub: "Shown on receipt fronts · Fri to Sun" },
  },
};

export const RT_STEPS = {
  badge: "Getting started",
  h2: "Start in three simple steps.",
  steps: [
    {
      icon: "message",
      title: "Book a demo",
      body: "We visit your store and show you how it works. Then we send you a quote.",
    },
    {
      icon: "plug",
      title: <>We set up <TapCeipt /></>,
      body: <>We connect <TapCeipt /> to your POS and install it at every checkout.</>,
    },
    {
      icon: "rocket",
      title: "Go live and grow",
      body: "Customers start tapping. You follow receipts, offers and ads from the portal.",
    },
  ] as { icon: IconName; title: ReactNode; body: ReactNode }[],
};

export const RT_PROOF = {
  quotesTitle: "What store owners say",
  quotesNote: "Sample quotes",
  quotes: [
    {
      quote: "Customers ask to tap now. We stopped buying paper rolls, and checkout is faster.",
      initials: "NA",
      name: "[Name]",
      role: "Store manager · [Store]",
    },
    {
      quote: "The ad on the receipt brings people back on the weekend. We see it in the portal.",
      initials: "KF",
      name: "[Name]",
      role: "Owner · [Café]",
    },
    {
      quote: "Setup took one afternoon. Our cashiers did not need any training.",
      initials: "LS",
      name: "[Name]",
      role: "Operations lead · [Chain]",
    },
    {
      quote: "Our regulars collect our store points in Rasheed. We did not have to build anything.",
      initials: "SM",
      name: "[Name]",
      role: "Owner · [Bakery]",
    },
    {
      quote: "The portal shows every branch in one place. I check it every morning.",
      initials: "OH",
      name: "[Name]",
      role: "Regional manager · [Chain]",
    },
    {
      quote: "Customers love flipping the receipt. Some come back just for the next reward.",
      initials: "RA",
      name: "[Name]",
      role: "Store manager · [Store]",
    },
  ],
  event: {
    month: "NOV",
    day: "18",
    kicker: "Meet us in person · Sample event",
    title: <>See <TapCeipt /> live at [Retail Expo 2026]</>,
    meta: "[City] · [Venue], Hall [0] · 10:00 to 18:00",
    register: { label: "Register", href: "/news#rasheed-at-retail-expo-2026" },
    all: { label: "All news and events", href: "/news" },
  },
};

export const RT_FAQ = {
  badge: "FAQ",
  h2: "Common questions.",
  askPre: "Have another question?",
  askWhatsapp: "Chat on WhatsApp",
  askMid: "or call",
  items: [
    {
      q: <>Does <TapCeipt /> work with my POS?</>,
      a: (
        <>
          <TapCeipt /> connects to your POS, so receipts go straight to the customer. [List of supported POS systems to
          confirm.] Tell us which POS you use and we will check it for you.
        </>
      ),
    },
    {
      q: "How is it priced?",
      a: <>You pay a monthly subscription for <TapCeipt />. Ask for a quote and we will make a plan for your stores and checkouts.</>,
    },
    {
      q: "What if a customer does not have the Rasheed app?",
      a: (
        <>
          No problem. They can still tap <TapCeipt /> and get a PDF receipt on their phone. If they download Rasheed,
          their next receipts are saved in the app with rewards.
        </>
      ),
    },
    {
      q: "Who pays for the rewards customers get?",
      a: "Rasheed does. Every reward on the back of a receipt is paid by Rasheed, not by you.",
    },
    { q: "Can I advertise on receipts?", a: "Yes, today. Every receipt has space for an ad. Contact us to book it." },
    {
      q: "Do customers still get a tax invoice?",
      a: "Yes. Every receipt in Rasheed has a digital tax invoice. The customer opens it in one tap.",
    },
  ] as { q: ReactNode; a: ReactNode }[],
};

export const RT_CTA = {
  h2: "See it at your store.",
  lead: <>We bring <TapCeipt /> to your store and show you how it works. Free, and it takes 20 minutes.</>,
  ctas: [
    { label: "Book a demo at your store", href: CONTACT.demoHref, icon: "calendar" },
    { label: "Get a quote", href: CONTACT.quoteHref, icon: "doc" },
    { label: "Chat on WhatsApp", href: CONTACT.whatsappHref, icon: "chat", external: true },
  ] as RtLink[],
  callPre: "Or call us:",
};
