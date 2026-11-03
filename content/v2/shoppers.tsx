import type { IconName } from "@/components/v2/ui/Icon";
import { TapCeipt } from "@/components/ui/TapCeipt";
import { CONTACT } from "@/components/v2/layout/contact";

// Shoppers (`/app`) content. Copy is verbatim from the approved canvas (Shoppers board).

export const SHOPPERS_TITLE = "Rasheed for shoppers";

// Plain-text version of the hero lead, for metadata.
export const SHOPPERS_DESCRIPTION =
  "Tap your phone on TapCeipt when you pay. Your receipt goes straight to Rasheed. Flip it to win a reward, use your points for gifts, and see where your money goes.";

export type ShCta = { label: string; href: string; variant: "primary" | "ghost"; icon: IconName };

const GET_APP: ShCta = { label: "Get the app", href: CONTACT.appHref, variant: "primary", icon: "download" };

// "See how it works" jumps to the capture section: down from the hero, up from the final CTA.
const HERO_CTAS: ShCta[] = [GET_APP, { label: "See how it works", href: "#capture", variant: "ghost", icon: "arrowDown" }];
const END_CTAS: ShCta[] = [GET_APP, { label: "See how it works", href: "#capture", variant: "ghost", icon: "arrowUp" }];

export const SH_HERO = {
  badge: { icon: "user" as IconName, label: "For shoppers" },
  headline: {
    label: "Every receipt, in one place.",
    lead: "Every receipt,",
    lines: [
      { text: "in one place.", icon: "receipt" },
      { text: "a reward inside.", icon: "gift" },
      { text: "organized for you.", icon: "pieSplit" },
      { text: "never lost again.", icon: "shieldCheck" },
    ] as { text: string; icon: IconName }[],
  },
  lead: <>Tap your phone on <TapCeipt /> when you pay. Your receipt goes straight to Rasheed. Flip it to win a reward, use your points for gifts, and see where your money goes.</>,
  ctas: HERO_CTAS,
  note: <>Free on <a href={CONTACT.iosHref} target="_blank" rel="noopener noreferrer">iPhone</a> and <a href={CONTACT.androidHref} target="_blank" rel="noopener noreferrer">Android</a>. Start without an account.</>,
  art: {
    gifts: "/v2/ph-scr-gifts.webp",
    home: "/v2/ph-scr-home.webp",
    label:
      "The Rasheed app: a home screen with Pockets and recent expenses, the gifts screen, and a receipt being flipped to reveal +10 Green Points",
  },
  earned: { kicker: "You earned", value: "+10 Green Points" },
  saved: { title: "Expense saved", sub: "Corner Café · Coffee" },
};

export const SH_CAPTURE = {
  id: "capture",
  badge: { icon: "camera" as IconName, label: "Capture" },
  title: "Add any expense, any way you like.",
  feature: {
    tag: "Fastest",
    title: <>Tap on <TapCeipt /></>,
    body: <>At any store with <TapCeipt />, hold your phone near the stand. The full receipt appears in the app.</>,
    image: { src: "/v2/tap-card3.webp", width: 1600, height: 1073, alt: "A phone tapping the TapCeipt device on a cafe counter" },
  },
  ways: [
    { icon: "pencil", title: "Write", body: "Type it in. It takes a few seconds." },
    { icon: "mic", title: "Say", body: "Say it out loud. Rasheed saves it." },
    { icon: "camera", title: "Capture", body: "Take a photo of a paper receipt. Rasheed reads it." },
    { icon: "upload", title: "Upload", body: "Add a PDF, image or bill. Rasheed organizes it." },
  ] as { icon: IconName; title: string; body: string }[],
};

export type FlipKind = "points" | "extra" | "voucher" | "gift";

export const SH_FLIP = {
  id: "flip",
  badge: { icon: "flip" as IconName, label: "The flip" },
  title: "Flip your receipt. Win something every time.",
  lead: <>Every <TapCeipt /> receipt has a back. Flip it to see your reward. There is always something, and sometimes it is big.</>,
  cards: [
    { kind: "points", kicker: "Every receipt", title: "Green Points", body: "Get points on every receipt. They go straight to your balance." },
    { kind: "extra", kicker: "Lucky receipt", title: "Extra points", body: "Some receipts give you more, up to nine times your usual points." },
    { kind: "voucher", kicker: "Better", title: "Vouchers", body: "A discount at a store. It waits in My Gifts. Show the QR code when you pay." },
    { kind: "gift", kicker: "The big one", title: "Free gifts", body: "Sometimes you win a real product. We deliver it, or you pick it up." },
  ] as { kind: FlipKind; kicker: string; title: string; body: string }[],
  voucher: { label: "Voucher", amount: "20%", unit: "OFF", note: "Scan it at checkout", saved: "Saved to My Gifts" },
};

export const SH_GIFTS = {
  id: "gifts",
  badge: { icon: "gift" as IconName, label: "Points and gifts" },
  title: "Use your points to get real gifts.",
  lead: "Every receipt gives you Green Points. Use them to get real products. We deliver them, or you pick them up from the store.",
  checks: [
    "Get Green Points on every receipt",
    "Choose a gift. We deliver it, or you pick it up, depending on the gift.",
    "Find all your gifts and vouchers in My Gifts",
  ],
  phone: {
    src: "/v2/ph-scr-allgifts.webp",
    alt: "The Rasheed app showing All gifts: an oud perfume set, wireless headphones, a skincare set and a game controller, each priced in points",
  },
  balance: { label: "Green Points", value: "1,870", unit: "pts", note: "+10 from your last receipt" },
  delivery: { thumb: "/v2/thumb-headphones.webp", title: "Wireless headphones", sub: "Delivery · On the way" },
};

export const SH_STORES = {
  id: "stores",
  badge: { icon: "card" as IconName, label: "Store points" },
  title: "All your store cards in one place.",
  lead: "Add the points cards of your favorite stores. You get their points on your receipts automatically. To use them, show a QR code when you pay.",
  checks: [
    "Add a store card once. Get points on every receipt.",
    "Tell the cashier how many points to use. They scan, and you approve.",
    "Store points belong to each store. They are separate from your Green Points.",
  ],
  phone: { src: "/v2/ph-scr-partner.webp", alt: "A store points card in Rasheed with a QR code for the till" },
};

export const SH_SPENDING = {
  id: "spending",
  badge: { icon: "pie" as IconName, label: "Your spending" },
  title: "See every detail of what you buy.",
  lead: "Each expense keeps its items, total and tax invoice. Rasheed puts it in a category and a Pocket, so you always know where your money goes.",
  checks: [
    "See every item and the tax invoice in one tap",
    "Change the category, Pocket or payment method any time",
    "Pockets show what you spent and what is left this month",
  ],
  phones: [
    { src: "/v2/ph-scr-home.webp", alt: "Rasheed home screen with a pocket, add expense buttons and recent expenses" },
    { src: "/v2/ph-scr-details.webp", alt: "Receipt details with items, tax invoice, category and payment" },
  ],
};

export const SH_SHARED = {
  id: "shared-pocket",
  badge: { icon: "users" as IconName, label: "Shared Pocket" },
  title: "Share your expenses with your family.",
  lead: "Make a Shared Pocket for your family. Everyone adds what they spend, and you all see one budget. Add your kids too, so they learn good spending habits.",
  checks: [
    "Invite your family to one Shared Pocket",
    "Every expense shows up in one place, for everyone",
    "Add your kids so they learn to plan and spend well",
  ],
  // Real app screen (Pocket details, Shared), neutral copy from Figma.
  phone: {
    src: "/v2/ph-scr-shared.webp",
    alt: "A Shared Pocket called Family in the Rasheed app: a monthly budget of 5,000 with 2,480 spent, and its 4 members: you as owner, your partner as admin, and two kids, each with what they spent",
  },
  chip: { title: "2,480 of 5,000", sub: "Spent together this month" },
};

export const SH_STATS = {
  id: "statistics",
  badge: { icon: "barChart" as IconName, label: "Statistics" },
  title: "See your spending clearly.",
  lead: "See your month by category and by store. Compare it with last month and with your budget.",
  checks: [
    "See your top store and top category",
    "Compare this month with last month",
    "Know how much of your budget is left",
  ],
  phone: { src: "/v2/ph-scr-stats.webp", alt: "Rasheed Statistics: total expenses, top store and category, budget and a monthly comparison chart" },
  chip: { kicker: "This month", value: "12% less", tag: "vs last month" },
};

export const SH_VOICES = {
  title: "What people say",
  note: "Sample quotes",
  quotes: [
    { quote: "Now I know where my money goes every month. I check it every Friday.", initials: "NA", name: "[Name]", role: "Rasheed user" },
    { quote: "I flipped a receipt and won a free gift. Now I always tap.", initials: "SA", name: "[Name]", role: "Rasheed user" },
    { quote: "Our family shares one Pocket now. My kids add their own expenses and think before they buy.", initials: "KF", name: "[Name]", role: "Rasheed user" },
  ],
};

export const SH_FAQ = {
  id: "faq",
  badge: { icon: "help" as IconName, label: "FAQ" },
  title: "Common questions.",
  more: "Have another question?",
  email: CONTACT.infoEmail,
  items: [
    { q: "Do I need an account to start?", a: "No. Download Rasheed and start right away. When you sign up later, your expenses stay with you." },
    { q: <>What if a store doesn&apos;t have <TapCeipt />?</>, a: "Add the expense yourself. Type it, say it, take a photo of the paper receipt, or upload a file." },
    { q: "What do I get when I flip a receipt?", a: "One of four things: Green Points, extra points, a voucher or a free gift. You always get something." },
    { q: "How do I use a voucher?", a: "Open it in My Gifts and show the QR code when you pay. The cashier scans it. That is all." },
    { q: "Are Green Points the same as store points?", a: "No. Green Points come from Rasheed. You use them for gifts. Store points belong to each store. You use them only at that store." },
  ] as { q: React.ReactNode; a: React.ReactNode }[],
};

export const SH_CTA = {
  id: "get-app",
  title: "Start using Rasheed today.",
  lead: "Get your first receipt in seconds. No account needed.",
  ctas: END_CTAS,
  note: <>Free on <a href={CONTACT.iosHref} target="_blank" rel="noopener noreferrer">iPhone</a> and <a href={CONTACT.androidHref} target="_blank" rel="noopener noreferrer">Android</a></>,
};
