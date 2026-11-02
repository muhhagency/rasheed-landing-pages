// News and events page (/news). Copy is verbatim from the approved canvas.
// Every "TapCeipt" in these strings is rendered with <TapCeipt /> by RichText.
// Each item `id` is the kebab-case slug of its headline, so other pages can
// deep-link to /news#<id>.

import { CONTACT } from "@/components/v2/layout/contact";

export type NewsTag = "product" | "stores";
export type FilterKey = "all" | "product" | "stores" | "events";

export type NewsImage = { src: string; alt: string; width: number; height: number; position: string };

export type NewsItem = {
  id: string;
  tag: NewsTag;
  tagLabel: string;
  date: string;
  title: string;
  text: string;
  cta: string;
  href: string;
  image: NewsImage;
  /** Backdrop behind the image while it loads or where it letterboxes. */
  backdrop?: "light" | "brand";
};

export type EventItem = {
  id: string;
  month: string;
  day: string;
  kind: string;
  title: string;
  where: string;
  when: string;
  cta: string;
  href: string;
};

const registerHref = (title: string) =>
  `mailto:${CONTACT.infoEmail}?subject=${encodeURIComponent(`Register: ${title}`)}`;

export const NEWS = {
  intro: {
    badge: "News and events",
    title: "What is new at Rasheed.",
    lead: "Product updates, new stores and events. All in one place.",
    filterLabel: "Filter news and events",
    filters: [
      { key: "all", label: "All" },
      { key: "product", label: "Product" },
      { key: "stores", label: "Stores" },
      { key: "events", label: "Events" },
    ] as { key: FilterKey; label: string }[],
  },

  featured: {
    id: "tapceipt-now-sends-a-pdf-receipt-to-every-phone",
    tag: "product",
    tagLabel: "Product",
    date: "[28 Oct 2026]",
    title: "TapCeipt now sends a PDF receipt to every phone.",
    text: "Customers without the Rasheed app can now tap and get a PDF receipt. No download needed, and still no paper.",
    cta: "Read the story",
    href: "#tapceipt-now-sends-a-pdf-receipt-to-every-phone",
    image: {
      src: "/v2/tap-card2.webp",
      alt: "A customer taps a phone on the TapCeipt device",
      width: 1600,
      height: 1195,
      position: "60% 50%",
    },
  } satisfies NewsItem,

  latest: {
    title: "Latest news",
    note: "Sample content",
    items: [
      {
        id: "real-gifts-are-now-in-the-app",
        tag: "product",
        tagLabel: "Product",
        date: "[20 Oct 2026]",
        title: "Real gifts are now in the app",
        text: "Use your Green Points for real products. Get them delivered, or pick them up from the store.",
        cta: "Read more",
        href: "#real-gifts-are-now-in-the-app",
        backdrop: "light",
        image: {
          src: "/v2/news-gifts.webp",
          alt: "A perfume set and wireless headphones from the gift catalogue",
          width: 1200,
          height: 616,
          position: "50% 50%",
        },
      },
      {
        id: "store-name-goes-paperless-in-00-branches",
        tag: "stores",
        tagLabel: "Stores",
        date: "[12 Oct 2026]",
        title: "[Store name] goes paperless in [00] branches",
        text: "Every checkout now has TapCeipt. Customers get their receipt on their phone in one tap.",
        cta: "Read more",
        href: "#store-name-goes-paperless-in-00-branches",
        image: {
          src: "/v2/till-tap.webp",
          alt: "A customer taps a phone on TapCeipt at a cafe counter",
          width: 2200,
          height: 1476,
          position: "55% 55%",
        },
      },
      {
        id: "split-costs-fairly-with-shared-pockets",
        tag: "product",
        tagLabel: "Product",
        date: "[02 Oct 2026]",
        title: "Split costs fairly with Shared Pockets",
        text: "Add expenses together. Rasheed shows who owes what, and you settle in one tap.",
        cta: "Read more",
        href: "#split-costs-fairly-with-shared-pockets",
        backdrop: "brand",
        image: {
          src: "/v2/ph-scr-settle.webp",
          alt: "The Receipt Settlement screen in Rasheed",
          width: 616,
          height: 1256,
          position: "50% 18%",
        },
      },
    ] satisfies NewsItem[],
  },

  events: {
    badge: "Events",
    title: "Meet us in person.",
    lead: "See TapCeipt live, ask questions and talk to our team. Most events are free.",
    note: "Sample events",
    items: [
      {
        id: "rasheed-at-retail-expo-2026",
        month: "NOV",
        day: "18",
        kind: "Expo",
        title: "Rasheed at [Retail Expo 2026]",
        where: "[City] · [Venue], Hall [0]",
        when: "10:00 to 18:00",
        cta: "Register",
        href: registerHref("Rasheed at [Retail Expo 2026]"),
      },
      {
        id: "go-paperless-a-live-demo-for-store-owners",
        month: "NOV",
        day: "26",
        kind: "Webinar",
        title: "Go paperless: a live demo for store owners",
        where: "Online",
        when: "13:00 to 14:00",
        cta: "Register",
        href: registerHref("Go paperless: a live demo for store owners"),
      },
      {
        id: "tech-summit-2026-the-future-of-receipts",
        month: "DEC",
        day: "09",
        kind: "Talk",
        title: "[Tech Summit 2026]: The future of receipts",
        where: "[City] · [Venue]",
        when: "15:30 to 16:15",
        cta: "Register",
        href: registerHref("[Tech Summit 2026]: The future of receipts"),
      },
    ] satisfies EventItem[],
  },

  subscribe: {
    title: "Get the news first.",
    lead: "One short email a month. No spam.",
    label: "Email",
    placeholder: "Your email",
    cta: "Subscribe",
  },
};
