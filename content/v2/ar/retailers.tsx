// Arabic copy for /ar/for-retailers. Same exports and shapes as ../retailers.
// Bracketed values are placeholders awaiting real data.
import { TapCeipt } from "@/components/ui/TapCeipt";
import { CONTACT } from "@/components/v2/layout/contact";
import type * as EN from "../retailers";

export type { RtLink, RtReward } from "../retailers";

export const RT_META: typeof EN.RT_META = {
  title: "رشيد للمتاجر",
  description:
    "ضع TapCeipt عند الكاشير. لا إيصالات ورقية بعد اليوم، ودفع أسرع، ويبقى متجرك في هاتف عميلك بعد أن يغادر.",
};

export const RT_HERO: typeof EN.RT_HERO = {
  ariaLabel: "رشيد للمتاجر",
  badge: "للمتاجر",
  h1Lead: "كل عملية دفع،",
  h1Label: "كل عملية دفع، لحظة مع عميلك.",
  lines: [
    { text: "لحظة مع عميلك.", icon: "receipt" },
    { text: "إعلان يقرؤه.", icon: "speaker" },
    { text: "سبب ليعود.", icon: "gift" },
    { text: "عميل دائم.", icon: "star" },
  ],
  lead: (
    <>
      ضع <TapCeipt /> عند الكاشير. لا إيصالات ورقية بعد اليوم، ودفع أسرع، ويبقى متجرك في هاتف عميلك بعد أن يغادر.
    </>
  ),
  image: {
    src: "/v2/hero-tap.webp",
    alt: "عميل يقرّب هاتفه من جهاز TapCeipt على كاونتر مقهى",
    width: 2400,
    height: 1610,
  },
  ctas: [
    { label: "احجز عرضًا في متجرك", href: CONTACT.demoHref, icon: "calendar" },
    { label: "تواصل عبر واتساب", href: CONTACT.whatsappHref, icon: "chat", external: true },
  ],
  partners: {
    label: "شعارات الشركاء",
    pauseLabel: "إيقاف",
    playLabel: "تشغيل",
    title: <>متاجر تستخدم <TapCeipt /> اليوم</>,
    note: "شعارات توضيحية",
    logos: ["NORTHWIND", "lumen", "Oakline", "BRIGHTMART", "kova.", "Palmway"],
  },
};

export const RT_PAPERLESS: typeof EN.RT_PAPERLESS = {
  badge: "بلا ورق",
  h2: ["استغنِ عن الورق.", "أفضل لمتجرك ولكوكبنا."],
  paper: {
    label: "الإيصال الورقي",
    items: [
      "يُطبع ثم يُرمى",
      "لفائف ورق تشتريها مرة بعد مرة",
      "الحبر يبهت خلال أسابيع",
      "العميل ينسى متجرك",
    ],
  },
  digital: {
    label: <>إيصال <TapCeipt /></>,
    items: [
      "يصل إلى هاتف العميل بنقرة واحدة",
      "لا ورق، لا حبر، لا أعطال طابعة",
      "محفوظ للأبد، مع سجل رقمي لكل عملية بيع",
      "يعرض إعلانك ونقاط متجرك",
    ],
    image: { src: "/v2/tap-card2.webp", alt: "عميل يقرّب هاتفه من جهاز TapCeipt", width: 1600, height: 1195 },
  },
};

export const RT_TILL: typeof EN.RT_TILL = {
  badge: "عند الكاشير",
  h2: "نقرة واحدة. وهذا كل شيء.",
  intro: (
    <>
      يعمل الكاشير كالمعتاد. يقرّب العميل هاتفه من <TapCeipt />. ويصل الإيصال إلى هاتفه مباشرة.
    </>
  ),
  image: {
    src: "/v2/till-tap.webp",
    alt: "عميل يقرّب هاتفه من جهاز TapCeipt على كاونتر مقهى",
    width: 2200,
    height: 1476,
  },
  steps: [
    { title: "سجّل عملية البيع", body: "يستخدم الكاشير نظام نقاط البيع كالمعتاد. لا شيء جديد لتتعلمه." },
    { title: "العميل ينقر", body: <>يقرّب هاتفه من <TapCeipt /> عند الكاشير.</> },
    {
      title: "الإيصال في هاتفه",
      body: "مع رشيد، يُحفظ في التطبيق مع مكافأة. ومن دون التطبيق، يصله إيصال PDF.",
    },
  ],
  note: { strong: "لا حاجة للتطبيق.", text: "أي عميل يمكنه النقر واستلام إيصال PDF على هاتفه." },
};

export const RT_AD: typeof EN.RT_AD = {
  badge: "الإيصال وسيلتك الإعلانية",
  h2: "إعلانك، على كل إيصال.",
  lead: "في كل إيصال مساحة لإعلان، ويمكنك حجزها اليوم. يفتح العملاء الإيصال بعد الدفع مباشرة، فيرون عرضك في أفضل لحظة.",
  cards: [
    { title: "يراه الناس فعلًا", body: "إعلان واحد في كل إيصال، يفتحه الشخص الذي دفع للتو." },
    { title: "خاطب عملاءك أنت", body: "ادعهم للعودة بعرض لزيارتهم القادمة." },
  ],
  phone: { src: "/v2/front-barcode.webp", alt: "واجهة إيصال فيها باركود وإعلان في الأسفل" },
  tag: "إعلانك هنا",
};

export const RT_REWARDS: typeof EN.RT_REWARDS = {
  badge: "مكافآت على ظهر الإيصال",
  h2: "سبب يعيد عملاءك إليك.",
  intro: "على ظهر كل إيصال مكافأة. يقلب العميل الإيصال ويربح شيئًا في كل مرة.",
  cards: [
    { kicker: "كل إيصال", title: "النقاط الخضراء", body: "نقاط على كل إيصال.", art: "points" },
    { kicker: "إيصال محظوظ", title: "نقاط إضافية", body: "حتى تسعة أضعاف المعتاد.", art: "extra" },
    { kicker: "أفضل", title: "قسائم", body: "خصم يُستخدم برمز QR.", art: "voucher" },
    { kicker: "الجائزة الكبرى", title: "هدايا مجانية", body: "أحيانًا، منتج حقيقي.", art: "gift" },
  ],
};

export const RT_POINTS: typeof EN.RT_POINTS = {
  badge: "نقاط متجرك",
  h2a: "ليس لديك برنامج نقاط؟",
  h2accent: "لا تقلق.",
  h2b: "رشيد هنا.",
  lead: "أنشئ نقاط متجرك داخل رشيد، باسم متجرك. بلا بطاقات وبلا نظام إضافي. يجمع العملاء نقاطك مع كل إيصال، ويستخدمونها عند الكاشير برمز QR.",
  checks: [
    "يحصل العملاء على نقاطك مع كل نقرة، تلقائيًا",
    "لاستخدام النقاط، يعرض العميل رمز QR. يمسحه الكاشير ثم يوافق العميل.",
    "نقاطك تبقى لك. وهي منفصلة عن النقاط الخضراء من رشيد.",
  ],
  phone: { src: "/v2/ph-scr-partner.webp", alt: "بطاقة نقاط متجر في رشيد مع رمز QR لاستخدامها عند الكاشير" },
  chip: { title: "نقاط متجر رشيد", sub: "أُضيفت من إيصال اليوم", value: "+12" },
};

export const RT_PORTAL: typeof EN.RT_PORTAL = {
  badge: "البوابة",
  h2: "بوابة واحدة. لكل الفروع.",
  intro: (
    <>
      أدر الفروع والأجهزة والموظفين والعروض وإعلانات الإيصالات من مكان واحد. وتابع أداء كل جهاز <TapCeipt />.
    </>
  ),
  mock: {
    label: "بوابة رشيد للمتاجر، بيانات توضيحية",
    windowTitle: "رشيد للمتاجر",
    nav: [
      { label: "نظرة عامة", icon: "barChart" },
      { label: "الفروع", icon: "store" },
      { label: "الأجهزة", icon: "nfc" },
      { label: "الموظفون", icon: "staff" },
      { label: "العروض", icon: "gift" },
      { label: "إعلانات الإيصالات", icon: "speaker" },
    ],
    title: "نظرة عامة",
    sub: "كل الفروع · هذا الأسبوع",
    sample: "بيانات توضيحية",
    kpis: [
      { label: "إيصالات مُرسلة", value: "2,418", note: "زيادة 12% عن الأسبوع الماضي" },
      { label: "عملاء قلبوا الإيصال", value: "1,972", note: "82% من الإيصالات" },
      { label: "أجهزة متصلة", value: "12 / 12", note: "كل الفروع" },
    ],
    chartTitle: "الإيصالات يوميًا",
    bars: [
      { day: "إثنين", h: 64 },
      { day: "ثلاثاء", h: 84 },
      { day: "أربعاء", h: 73 },
      { day: "خميس", h: 96 },
      { day: "جمعة", h: 107 },
      { day: "سبت", h: 140, top: true },
      { day: "أحد", h: 123 },
    ],
    branchesTitle: "الفروع",
    branchesCol: "الإيصالات",
    branches: [
      { name: "وسط المدينة", meta: "· 4 أجهزة", value: "1,104" },
      { name: "ضفة النهر", meta: "· 3 أجهزة", value: "702" },
      { name: "المطار", meta: "· 3 أجهزة", value: "448" },
      { name: "البلدة القديمة", meta: "· جهازان", value: "164" },
    ],
    offer: { kicker: "عرض فعّال", title: "عرض المخبز لنهاية الأسبوع", sub: "يظهر على واجهة الإيصال · من الجمعة إلى الأحد" },
  },
};

export const RT_STEPS: typeof EN.RT_STEPS = {
  badge: "البداية",
  h2: "ابدأ في ثلاث خطوات سهلة.",
  steps: [
    {
      icon: "message",
      title: "احجز عرضًا",
      body: "نزور متجرك ونريك كيف يعمل. ثم نرسل لك عرض السعر.",
    },
    {
      icon: "plug",
      title: <>نركّب <TapCeipt /></>,
      body: <>نربط <TapCeipt /> بنظام نقاط البيع ونركّبه عند كل كاشير.</>,
    },
    {
      icon: "rocket",
      title: "انطلق وكبّر متجرك",
      body: "يبدأ العملاء بالنقر. وتتابع الإيصالات والعروض والإعلانات من البوابة.",
    },
  ],
};

export const RT_PROOF: typeof EN.RT_PROOF = {
  quotesTitle: "ماذا يقول أصحاب المتاجر",
  quotesNote: "آراء توضيحية",
  quotesLabel: "آراء أصحاب المتاجر",
  pauseLabel: "إيقاف",
  playLabel: "تشغيل",
  quotes: [
    {
      quote: "صار العملاء يطلبون النقر. توقفنا عن شراء لفائف الورق، وصار الدفع أسرع.",
      initials: "NA",
      name: "[Name]",
      role: "مدير متجر · [Store]",
    },
    {
      quote: "الإعلان على الإيصال يعيد الناس إلينا في نهاية الأسبوع. ونرى ذلك في البوابة.",
      initials: "KF",
      name: "[Name]",
      role: "مالك · [Café]",
    },
    {
      quote: "التركيب أخذ بعد ظهر واحد. ولم يحتج الكاشير إلى أي تدريب.",
      initials: "LS",
      name: "[Name]",
      role: "مسؤول العمليات · [Chain]",
    },
    {
      quote: "عملاؤنا الدائمون يجمعون نقاط متجرنا في رشيد. ولم نضطر لبناء أي شيء.",
      initials: "SM",
      name: "[Name]",
      role: "مالك · [Bakery]",
    },
    {
      quote: "البوابة تعرض كل الفروع في مكان واحد. أتابعها كل صباح.",
      initials: "OH",
      name: "[Name]",
      role: "مدير إقليمي · [Chain]",
    },
    {
      quote: "العملاء يحبون قلب الإيصال. وبعضهم يعود فقط من أجل المكافأة التالية.",
      initials: "RA",
      name: "[Name]",
      role: "مدير متجر · [Store]",
    },
  ],
  event: {
    month: "نوفمبر",
    day: "18",
    kicker: "قابلنا شخصيًا · فعالية توضيحية",
    title: <>شاهد <TapCeipt /> مباشرة في <bdi>[Retail Expo 2026]</bdi></>,
    meta: "[City] · [Venue]، القاعة [0] · من 10:00 إلى 18:00",
    register: { label: "سجّل الآن", href: "/ar/news#rasheed-at-retail-expo-2026" },
    all: { label: "كل الأخبار والفعاليات", href: "/ar/news" },
  },
};

export const RT_FAQ: typeof EN.RT_FAQ = {
  badge: "الأسئلة الشائعة",
  h2: "أسئلة شائعة.",
  askPre: "عندك سؤال آخر؟",
  askWhatsapp: "تواصل عبر واتساب",
  askMid: "أو اتصل على",
  items: [
    {
      q: <>هل يعمل <TapCeipt /> مع نظام نقاط البيع لديّ؟</>,
      a: (
        <>
          <TapCeipt /> يتصل بنظام نقاط البيع لديك، فتصل الإيصالات إلى العميل مباشرة. <bdi>[List of supported POS systems to confirm.]</bdi> أخبرنا بالنظام الذي تستخدمه وسنتحقق منه لك.
        </>
      ),
    },
    {
      q: "كم التكلفة؟",
      a: <>تدفع اشتراكًا شهريًا مقابل <TapCeipt />. اطلب عرض سعر وسنضع خطة تناسب متاجرك ونقاط الدفع لديك.</>,
    },
    {
      q: "ماذا لو لم يكن لدى العميل تطبيق رشيد؟",
      a: (
        <>
          لا مشكلة. يمكنه أن يقرّب هاتفه من <TapCeipt /> ويستلم إيصال PDF على هاتفه. وإذا حمّل رشيد، تُحفظ إيصالاته
          القادمة في التطبيق مع مكافآت.
        </>
      ),
    },
    {
      q: "من يدفع ثمن المكافآت التي يحصل عليها العملاء؟",
      a: "رشيد. كل مكافأة على ظهر الإيصال يدفعها رشيد، لا أنت.",
    },
    { q: "هل يمكنني الإعلان على الإيصالات؟", a: "نعم، من اليوم. في كل إيصال مساحة لإعلان. تواصل معنا لحجزها." },
    {
      q: "هل يحصل العملاء على فاتورة ضريبية؟",
      a: "نعم. كل إيصال في رشيد معه فاتورة ضريبية رقمية. يفتحها العميل بنقرة واحدة.",
    },
  ],
};

export const RT_CTA: typeof EN.RT_CTA = {
  h2: "شاهده في متجرك.",
  lead: <>نحضر <TapCeipt /> إلى متجرك ونريك كيف يعمل. مجانًا، وفي 20 دقيقة فقط.</>,
  ctas: [
    { label: "احجز عرضًا في متجرك", href: CONTACT.demoHref, icon: "calendar" },
    { label: "اطلب عرض سعر", href: CONTACT.quoteHref, icon: "doc" },
    { label: "تواصل عبر واتساب", href: CONTACT.whatsappHref, icon: "chat", external: true },
  ],
  callPre: "أو اتصل بنا:",
};
