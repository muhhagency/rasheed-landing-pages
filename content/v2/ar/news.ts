// Arabic copy for /ar/news. Same exported names and shapes as ../news.
// Every "TapCeipt" in these strings is rendered with <TapCeipt /> by RichText.
// Item ids are identical to English so other pages can deep-link to /ar/news#<id>.

import { CONTACT } from "@/components/v2/layout/contact";
import type { EventItem, NewsItem, FilterKey } from "../news";

export type { NewsTag, FilterKey, NewsImage, NewsItem, EventItem } from "../news";

const registerHref = (title: string) =>
  `mailto:${CONTACT.infoEmail}?subject=${encodeURIComponent(`تسجيل: ${title}`)}`;

export const NEWS = {
  meta: {
    title: "الأخبار والفعاليات | رشيد",
  },

  intro: {
    badge: "الأخبار والفعاليات",
    title: "ما الجديد في رشيد.",
    lead: "تحديثات المنتج، والمتاجر الجديدة، والفعاليات. كلها في مكان واحد.",
    filterLabel: "تصفية الأخبار والفعاليات",
    filters: [
      { key: "all", label: "الكل" },
      { key: "product", label: "المنتج" },
      { key: "stores", label: "المتاجر" },
      { key: "events", label: "الفعاليات" },
    ] as { key: FilterKey; label: string }[],
  },

  featured: {
    id: "tapceipt-now-sends-a-pdf-receipt-to-every-phone",
    tag: "product",
    tagLabel: "المنتج",
    date: "[28 أكتوبر 2026]",
    title: "TapCeipt يرسل الآن إيصال PDF إلى كل هاتف.",
    text: "عملاؤك بلا تطبيق رشيد يمكنهم الآن النقر والحصول على إيصال PDF. بلا تحميل، وبلا ورق أيضًا.",
    cta: "اقرأ الخبر",
    href: "#tapceipt-now-sends-a-pdf-receipt-to-every-phone",
    image: {
      src: "/v2/tap-card2.webp",
      alt: "عميل ينقر بهاتفه على جهاز TapCeipt",
      width: 1600,
      height: 1195,
      position: "60% 50%",
    },
  } satisfies NewsItem,

  banner: {
    label: "الفعالية القادمة",
    eventId: "rasheed-at-retail-expo-2026",
  },

  latest: {
    title: "آخر الأخبار",
    note: "محتوى تجريبي",
    seeAll: "عرض كل الأخبار",
    seeFewer: "عرض أقل",
    prev: "الأخبار السابقة",
    next: "الأخبار التالية",
    items: [
      {
        id: "real-gifts-are-now-in-the-app",
        tag: "product",
        tagLabel: "المنتج",
        date: "[20 أكتوبر 2026]",
        title: "هدايا حقيقية الآن في التطبيق",
        text: "استبدل نقاطك الخضراء بمنتجات حقيقية. نوصلها إليك، أو استلمها من المتجر.",
        cta: "اقرأ المزيد",
        href: "#real-gifts-are-now-in-the-app",
        backdrop: "light",
        image: {
          src: "/v2/news-gifts.webp",
          alt: "طقم عطر وسماعات لاسلكية من قائمة الهدايا",
          width: 1200,
          height: 616,
          position: "50% 50%",
        },
      },
      {
        id: "store-name-goes-paperless-in-00-branches",
        tag: "stores",
        tagLabel: "المتاجر",
        date: "[12 أكتوبر 2026]",
        title: "[Store name] يستغني عن الورق في [00] فرعًا",
        text: "TapCeipt الآن عند كل كاشير. يستلم العملاء إيصالهم على هواتفهم بنقرة واحدة.",
        cta: "اقرأ المزيد",
        href: "#store-name-goes-paperless-in-00-branches",
        image: {
          src: "/v2/till-tap.webp",
          alt: "عميل ينقر بهاتفه على TapCeipt عند الكاشير في مقهى",
          width: 2200,
          height: 1476,
          position: "55% 55%",
        },
      },
    ] satisfies NewsItem[],
  },

  events: {
    badge: "الفعاليات",
    title: "لنلتقِ وجهًا لوجه.",
    lead: "شاهد TapCeipt مباشرة، واطرح أسئلتك، وتحدث مع فريقنا. معظم الفعاليات مجانية.",
    note: "فعاليات تجريبية",
    items: [
      {
        id: "rasheed-at-retail-expo-2026",
        month: "نوفمبر",
        day: "18",
        dateLabel: "18 نوفمبر",
        kind: "معرض",
        title: "رشيد في [Retail Expo 2026]",
        where: "[City] · [Venue]، القاعة [0]",
        when: "10:00 إلى 18:00",
        cta: "سجّل",
        href: registerHref("رشيد في [Retail Expo 2026]"),
      },
      {
        id: "go-paperless-a-live-demo-for-store-owners",
        month: "نوفمبر",
        day: "26",
        dateLabel: "26 نوفمبر",
        kind: "ندوة عبر الإنترنت",
        title: "بلا ورق: عرض مباشر لأصحاب المتاجر",
        where: "عبر الإنترنت",
        when: "13:00 إلى 14:00",
        cta: "سجّل",
        href: registerHref("بلا ورق: عرض مباشر لأصحاب المتاجر"),
      },
      {
        id: "tech-summit-2026-the-future-of-receipts",
        month: "ديسمبر",
        day: "09",
        dateLabel: "9 ديسمبر",
        kind: "محاضرة",
        title: "[Tech Summit 2026]: مستقبل الإيصالات",
        where: "[City] · [Venue]",
        when: "15:30 إلى 16:15",
        cta: "سجّل",
        href: registerHref("[Tech Summit 2026]: مستقبل الإيصالات"),
      },
    ] satisfies EventItem[],
  },

  subscribe: {
    title: "كن أول من يعرف.",
    lead: "رسالة قصيرة واحدة كل شهر. بلا رسائل مزعجة.",
    label: "البريد الإلكتروني",
    placeholder: "بريدك الإلكتروني",
    cta: "اشترك",
  },
};
