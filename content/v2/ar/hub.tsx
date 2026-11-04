import type { IconName } from "@/components/v2/ui/Icon";
import { TapCeipt } from "@/components/ui/TapCeipt";
import { CONTACT } from "@/components/v2/layout/contact";
import type { HubCta } from "../hub";

// Arabic hub (`/ar`) content. Same names and shapes as content/v2/hub.tsx.
// Where desktop and mobile differ, both strings are kept and the page shows
// the right one per breakpoint.

export type { HubCta };

export const HUB_TITLE = "رشيد: نقرة واحدة. كل إيصالاتك.";

// Plain-text version of the hero lead, for metadata.
export const HUB_DESCRIPTION =
  "انقر بجوالك على TapCeipt عند الكاشير، ويصل الإيصال إلى رشيد مرتبًا ومحفوظًا. صُمّم للأفراد، وللمتاجر التي يشترون منها، وللفرق التي تصرف.";

export const HUB = {
  logoAlt: "رشيد",
  // Hub video control (header) and footer nav names, for assistive tech.
  pauseLabel: "إيقاف فيديو الخلفية",
  playLabel: "تشغيل فيديو الخلفية",
  heroAlt: "عميل ينقر بجواله على جهاز TapCeipt عند الكاشير في مقهى",
  news: {
    href: "/ar/news",
    tag: "جديد",
    desktop: <><TapCeipt /> يرسل الآن إيصال PDF إلى كل جوال</>,
    mobile: "إيصالات PDF لكل جوال",
  },
  badge: "الإيصال بلا ورق",
  headline: {
    label: "نقرة واحدة. كل إيصالاتك.",
    lead: "نقرة واحدة.",
    lines: [
      { text: "كل إيصالاتك.", icon: "receipt" },
      { text: "كل هداياك.", icon: "gift" },
      { text: "كل قسائمك.", icon: "ticket" },
      { text: "كل مكافآتك.", icon: "star" },
    ] as { text: string; icon: IconName }[],
  },
  // The second sentence is desktop only (Mobile canvas drops it).
  lead: <>انقر بجوالك على <TapCeipt /> عند الكاشير، ويصل الإيصال إلى رشيد مرتبًا ومحفوظًا.</>,
  leadMore: "صُمّم للأفراد، وللمتاجر التي يشترون منها، وللفرق التي تصرف.",
  ctaLabel: "اختر رشيد المناسب لك",
  ctas: [
    { label: "حمّل التطبيق", href: "/ar/app", variant: "primary", icon: "download" },
    { label: "للمتاجر", href: "/ar/for-retailers", variant: "ghost", icon: "arrowRight" },
    { label: "للشركات", href: "/ar/for-corporates", variant: "ghost", icon: "arrowRight" },
  ] as HubCta[],
  statsLabel: "رشيد بالأرقام",
  stats: [
    { value: "[000K+]", label: "شخص يستخدم رشيد" },
    { value: "[0.0M+]", label: "إيصال محفوظ" },
    {
      value: "[000+]",
      label: <>جهاز <TapCeipt /><span className="hub-desk-only"> عند الكاشير</span></>,
    },
    { value: "[00K kg]", label: "ورق إيصالات تم توفيره", accent: true },
  ],
  footer: {
    copyright: "© رشيد 2026",
    navLabel: "تذييل الصفحة",
    // mobileHidden: links the Mobile canvas leaves out of its slim footer.
    // Privacy and Terms have no Arabic page yet, so they keep the shared paths.
    links: [
      { label: "الأخبار", href: "/ar/news" },
      { label: "الدعم", href: `mailto:${CONTACT.infoEmail}?subject=Support`, mobileHidden: true },
      { label: "الخصوصية", href: "/privacy" },
      { label: "الشروط", href: "/terms" },
      { label: CONTACT.infoEmail, href: `mailto:${CONTACT.infoEmail}`, mobileHidden: true },
    ],
  },
};
