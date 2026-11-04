// Locales for the redesign. English lives at the root, Arabic under /ar.
export type Locale = "en" | "ar";

// Prefix a site path for a locale: ("ar", "/app") -> "/ar/app", ("ar", "/") -> "/ar".
export function localePath(locale: Locale, path: string): string {
  if (locale === "en") return path;
  if (path === "/") return "/ar";
  return path.startsWith("/") ? `/ar${path}` : path;
}

// Shared interface strings (header, footer, controls). Page copy lives in content/v2.
export const UI = {
  en: {
    skip: "Skip to content",
    logoAlt: "Rasheed",
    home: "Rasheed home",
    navMain: "Main",
    nav: { app: "Shoppers", retailers: "Retailers", corporates: "Corporates", news: "News" },
    getApp: "Get the app",
    bookDemo: "Book a demo",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    lang: "Language",
    footer: {
      tag: "One tap. Every receipt.",
      sub: "The paperless receipt for shoppers, the stores they buy from, and the teams that spend.",
      headRasheed: "Rasheed",
      headCompany: "Company",
      headContact: "Contact",
      shoppers: "For shoppers",
      retailers: "For retailers",
      corporates: "For corporates",
      news: "News and events",
      support: "Support",
      privacy: "Privacy",
      terms: "Terms",
      whatsapp: "WhatsApp",
      rights: "© Rasheed 2026. All rights reserved.",
      socialOn: (s: string) => `Rasheed on ${s}`,
    },
    pause: "Pause",
    play: "Play",
  },
  ar: {
    skip: "انتقل إلى المحتوى",
    logoAlt: "رشيد",
    home: "الصفحة الرئيسية لرشيد",
    navMain: "القائمة الرئيسية",
    nav: { app: "الأفراد", retailers: "المتاجر", corporates: "الشركات", news: "الأخبار" },
    getApp: "حمّل التطبيق",
    bookDemo: "احجز عرضًا",
    openMenu: "افتح القائمة",
    closeMenu: "أغلق القائمة",
    lang: "اللغة",
    footer: {
      tag: "نقرة واحدة. كل إيصالاتك.",
      sub: "الإيصال الرقمي للأفراد، وللمتاجر التي يشترون منها، وللفرق التي تصرف.",
      headRasheed: "رشيد",
      headCompany: "الشركة",
      headContact: "تواصل معنا",
      shoppers: "للأفراد",
      retailers: "للمتاجر",
      corporates: "للشركات",
      news: "الأخبار والفعاليات",
      support: "الدعم",
      privacy: "الخصوصية",
      terms: "الشروط",
      whatsapp: "واتساب",
      rights: "© رشيد 2026. جميع الحقوق محفوظة.",
      socialOn: (s: string) => `رشيد على ${s}`,
    },
    pause: "إيقاف",
    play: "تشغيل",
  },
} as const;
