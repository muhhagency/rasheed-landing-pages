import type { IconName } from "@/components/v2/ui/Icon";
import type * as EN from "../corporates";
import type { CoFeature, CoPortal } from "../corporates";

// Arabic copy for /ar/for-corporates. Same exported names and shapes as the
// English file (content/v2/corporates.ts). Sample numbers and bracketed
// placeholders are kept as in English. "{TapCeipt}" renders the wordmark.

export type { CoFeature, CoPortal };

export const PORTAL: CoPortal = {
  label: "بوابة رشيد للشركات، بيانات تجريبية",
  windowTitle: "رشيد للشركات",
  nav: [
    { icon: "barChart", label: "نظرة عامة", active: true },
    { icon: "cube", label: "حافظة الأعمال" },
    { icon: "shieldCheck", label: "الموافقات" },
    { icon: "pieSplit", label: "الشرائح" },
    { icon: "staff", label: "الفريق" },
    { icon: "report", label: "التقارير" },
  ],
  title: "حافظة الأعمال",
  sub: "هذا الشهر · 46 موظفًا",
  sample: "بيانات تجريبية",
  kpis: [
    { label: "المصروف هذا الشهر", value: "48,250", note: "من ميزانية 80,000" },
    { label: "الإيصالات المحفوظة", value: "612", note: "0 مفقودة" },
    { label: "بانتظار الموافقة", value: "7", note: "الأقدم: منذ يومين" },
  ],
  slicesTitle: "الشرائح حسب القسم",
  slicesUsed: "المستخدم",
  slices: [
    { name: "المبيعات", people: "18 شخصًا", pct: 62 },
    { name: "العمليات", people: "11 شخصًا", pct: 41 },
    { name: "التسويق", people: "9 أشخاص", pct: 78, alt: true },
    { name: "السفر", people: "8 أشخاص", pct: 25 },
  ],
  approval: {
    kicker: "بانتظار الموافقة",
    title: "لينا · المبيعات · غداء مع عميل",
    meta: "320.00 · صورة · الآن",
    approve: "موافقة",
    reject: "رفض",
  },
  exportTitle: "تصدير",
  exportChips: ["حسب القسم", "حسب الشريحة", "حسب الموظف", "حسب التاريخ"],
};

export const HERO: typeof EN.HERO = {
  label: "رشيد للشركات",
  badge: { icon: "building" as IconName, text: "للشركات" },
  lead: "مصروفات فريقك،",
  lines: [
    { text: "بلا أوراق.", icon: "receipt" as IconName },
    { text: "بميزانية لكل فريق.", icon: "pieSplit" as IconName },
    { text: "أمامك لحظة بلحظة.", icon: "barChart" as IconName },
    { text: "جاهزة للتدقيق.", icon: "report" as IconName },
  ],
  h1Label: "مصروفات فريقك، بلا أوراق.",
  body: "امنح فريقك حافظة أعمال واحدة. حدد ميزانية لكل قسم وتابع كل مصروف لحظة حدوثه. لا داعي بعد اليوم لجمع الإيصالات في نهاية الشهر.",
  primary: "احجز عرضًا",
  secondary: "تواصل عبر واتساب",
  pointsLabel: "أبرز المزايا",
  points: [
    { icon: "cube" as IconName, title: "حافظة أعمال واحدة", text: "ميزانية واحدة للفريق كله." },
    { icon: "shieldCheck" as IconName, title: "موافقة المدير", text: "كل مصروف يُعتمد قبل أن يُحتسب." },
    { icon: "sync" as IconName, title: "مزامنة مع نظام ERP", text: "المصروفات المعتمدة تصل مباشرة إلى نظام ERP لديك." },
  ],
};

export const WHY: typeof EN.WHY = {
  badge: { icon: "swap" as IconName, text: "لماذا التغيير" },
  title: "وداعًا لجمع الإيصالات يدويًا.",
  before: {
    label: "الطريقة المعتادة",
    items: [
      "إيصالات في الجيوب والأدراج والبريد الإلكتروني",
      "تقارير مصروفات تُكتب يدويًا بعد أسابيع",
      "مراجعة الميزانية بعد صرف المال",
      "ملاحقة الموافقات بالبريد وعلى الورق",
      "المالية تطلب الإيصالات من الجميع في نهاية الشهر",
    ],
  },
  after: {
    label: "مع رشيد",
    items: [
      "كل إيصال يُحفظ في التطبيق لحظة الدفع",
      "كل مصروف يعتمده المدير قبل أن يُحتسب",
      "كل مصروف يذهب إلى القسم الصحيح تلقائيًا",
      "تابع صرف كل ميزانية مباشرة",
      "تقارير جاهزة متى احتاجتها المالية",
    ],
  },
};

export const POCKET: typeof EN.POCKET = {
  badge: { icon: "briefcase" as IconName, text: "حافظة الأعمال" },
  title: "حافظة واحدة. لكل أعضاء الفريق.",
  body: "حافظة الأعمال ميزانية مشتركة واحدة لفريقك كله. لكل شخص صلاحياته وحدوده. والمالية ترى كل شيء في بوابة الشركة.",
  checks: [
    "أضف الموظفين وامنح كل واحد منهم دورًا",
    "حدد حدود الصرف لكل شخص أو لكل فريق",
    "كل مصروف يظهر في الحافظة فور إضافته",
  ],
  card: {
    name: "فريق المبيعات",
    type: "حافظة أعمال",
    spentLabel: "إجمالي المصروف",
    spent: "12,480.00",
    budgetLabel: "الميزانية",
    budget: "20,000.00",
    available: "المتاح: 7,520.00",
    pct: 62,
    cycle: "شهري · ينتهي بعد 16 يومًا",
    members: ["ل", "خ", "س", "ع"],
    moreMembers: "+14",
    membersLabel: "18 عضوًا",
    pending: "2 بانتظار الموافقة",
    slicesTitle: "الشرائح",
    slices: [
      { name: "وجبات العملاء", spent: "4,200", budget: "6,000", pct: 70, icon: "receipt" as IconName },
      { name: "السفر", spent: "5,100", budget: "8,000", pct: 64, icon: "truck" as IconName },
      { name: "المستلزمات", spent: "1,980", budget: "3,000", pct: 66, icon: "store" as IconName },
      { name: "الفعاليات", spent: "1,200", budget: "3,000", pct: 40, icon: "calendar" as IconName },
    ],
  },
  artLabel: "حافظة أعمال لفريق المبيعات: 12,480.00 مصروفة من ميزانية 20,000.00، و18 عضوًا، و2 بانتظار الموافقة، وأربع شرائح: وجبات العملاء والسفر والمستلزمات والفعاليات",
};

export const CONTROL: typeof EN.CONTROL = {
  badge: { icon: "sliders" as IconName, text: "التحكم" },
  title: "حدد الميزانية. وتابع الصرف.",
  body: "قسّم حافظة الأعمال إلى شرائح، شريحة لكل قسم. وتابع وضع كل واحدة في أي وقت، لا في نهاية الشهر فقط.",
  features: [
    { icon: "pieSplit", title: "الشرائح حسب القسم", text: "امنح كل فريق ميزانيته داخل حافظة واحدة." },
    { icon: "lock", title: "الأدوار والحدود", text: "حدد من يصرف، وكم، ومن أي شريحة." },
    { icon: "staff", title: "إضافة الموظفين", text: "أضف الأشخاص أو احذفهم أو انقلهم بنقرات قليلة." },
    { icon: "barChart", title: "رؤية فورية", text: "شاهد كل مصروف لحظة حدوثه، لا بعد أسابيع." },
  ] as CoFeature[],
  cycle: {
    title: "كل مصروف يُعتمد قبل أن يُحتسب.",
    text: "كل مصروف للفريق يمر بالخطوات الأربع نفسها.",
    steps: [
      { icon: "plus" as IconName, who: "الموظف", title: "إضافة", text: "يضيف الموظف المصروف في تطبيق رشيد." },
      { icon: "shieldCheck" as IconName, who: "المدير", title: "موافقة", text: "يوافق المدير على المصروف أو يرفضه." },
      { icon: "dashboard" as IconName, who: "المالية", title: "مراجعة", text: "تراه المالية في بوابة الشركة." },
      { icon: "sync" as IconName, who: "تلقائيًا", title: "مزامنة مع ERP", text: "يصل إلى نظام ERP لديك مع إيصاله." },
    ],
  },
};

export const CAPTURE: typeof EN.CAPTURE = {
  badge: { icon: "camera" as IconName, text: "الالتقاط" },
  title: "أضف الإيصال. ورشيد يرتّبه.",
  body: "يضيف الموظفون إيصالاتهم في تطبيق رشيد عند الدفع. كل إيصال يذهب إلى الشريحة الصحيحة تلقائيًا. بلا تقارير مصروفات، وبلا إيصالات ضائعة.",
  phone: {
    src: "/v2/ph-scr-bizhome-v2.webp",
    alt: "تطبيق رشيد على هاتف موظف: حافظة أعمال فريق المبيعات وآخر مصروفات العمل",
  },
  features: [
    { icon: "camera", title: "صورة", text: "التقط صورة للإيصال الورقي. ورشيد يقرؤه." },
    { icon: "mic", title: "صوت", text: "تحدث بصوت عالٍ. ورشيد يحفظه." },
    { icon: "upload", title: "ملف", text: "ارفق ملف PDF أو صورة أو فاتورة. ورشيد ينظمه." },
  ] as CoFeature[],
};

export const REPORTS: typeof EN.REPORTS = {
  badge: { icon: "report" as IconName, text: "التقارير" },
  title: "سجلات واضحة، مع كل إيصال.",
  body: "صدّر حسب القسم أو الشريحة أو الموظف أو التاريخ. كل سطر مرتبط بإيصاله، وجاهز للضريبة والتدقيق.",
  checks: [
    "تقارير جاهزة للمالية بنقرات قليلة",
    "كل مصروف مرتبط بإيصاله",
    "لا مزيد من مطابقة الجداول في نهاية الشهر",
  ],
  panel: {
    title: "التقارير",
    label: "لوحة التقارير، بيانات تجريبية",
    chips: ["حسب القسم", "حسب الشريحة", "حسب الموظف", "حسب الفترة"],
    rows: [
      { title: "الصرف حسب القسم، الربع الثالث", meta: "4 أقسام · 1,846 مصروفًا" },
      { title: "شريحة التسويق، سبتمبر", meta: "212 مصروفًا · مع الإيصالات" },
      { title: "لينا، المبيعات، آخر 90 يومًا", meta: "38 مصروفًا · مع الإيصالات" },
    ],
    action: "تصدير",
  },
};

export const ERP: typeof EN.ERP = {
  badge: { icon: "plug" as IconName, text: "الربط مع ERP" },
  title: "يتصل بنظام ERP لديك.",
  body: "المصروفات المعتمدة تصل إلى نظام ERP لديك تلقائيًا. كل مصروف يصل مع إيصاله وفئته ومركز التكلفة. بلا إدخال مزدوج.",
  checks: [
    "لا تُرسل إلا المصروفات المعتمدة",
    "الإيصال والفئة ومركز التكلفة في كل سطر",
    "لا داعي لإدخال المصروف نفسه مرتين",
  ],
  diagram: {
    label: "المصروفات المعتمدة تنتقل من بوابة رشيد إلى نظام ERP لديك، بيانات تجريبية",
    source: "بوابة رشيد",
    rows: [
      { title: "غداء مع عميل", meta: "المبيعات · 320.00" },
      { title: "تاكسي إلى المطار", meta: "السفر · 85.00" },
      { title: "ورق طابعة", meta: "العمليات · 46.50" },
    ],
    status: "معتمد",
    sync: "مزامنة تلقائية",
    target: "نظام ERP لديك",
    targetSub: "نظامك المحاسبي",
    tiles: [
      { icon: "report" as IconName, label: "المحاسبة" },
      { icon: "staff" as IconName, label: "الرواتب" },
      { icon: "pieSplit" as IconName, label: "مراكز التكلفة" },
    ],
    fields: ["الإيصال", "الفئة", "مركز التكلفة"],
  },
};

export const HOW: typeof EN.HOW = {
  badge: { icon: "steps" as IconName, text: "كيف يعمل" },
  title: "ابدأ في ثلاث خطوات بسيطة.",
  steps: [
    { icon: "message" as IconName, title: "احجز عرضًا", text: "نريك كيف يعمل ونرسل لك عرض سعر. ثم نجهز حافظة الأعمال معك." },
    { icon: "staff" as IconName, title: "أضف فريقك", text: "أضف الموظفين، ووزّع الأدوار، وأنشئ شريحة لكل قسم." },
    { icon: "barChart" as IconName, title: "تابع واستخرج التقارير", text: "وافق على المصروفات، وتابع الصرف مباشرة، وأرسلها إلى نظام ERP لديك. وصدّر التقارير متى احتجت." },
  ],
};

export const NEWS: typeof EN.NEWS = {
  title: "آخر أخبار رشيد",
  sample: "محتوى تجريبي",
  all: "كل الأخبار والفعاليات",
  href: "/ar/news",
  more: "اقرأ المزيد",
  cards: [
    {
      img: "/v2/tap-card2.webp", w: 1600, h: 1195, pos: "60% 50%",
      alt: "عميل ينقر بهاتفه على جهاز TapCeipt",
      tag: "منتج", date: "[28 أكتوبر 2026]",
      title: "{TapCeipt} يرسل الآن إيصال PDF إلى كل هاتف",
    },
    {
      img: "/v2/ph-scr-stats.webp", w: 616, h: 1256, pos: "50% 18%",
      alt: "إحصائيات رشيد: الصرف والميزانية ومقارنة شهرية",
      tag: "منتج", date: "[02 أكتوبر 2026]",
      title: "جديد: صدّر تقارير الصرف حسب الشريحة بنقرة واحدة",
      tint: true,
    },
    {
      img: "/v2/till-tap.webp", w: 2200, h: 1476, pos: "55% 55%",
      alt: "عميل ينقر بهاتفه على TapCeipt عند كاشير مقهى",
      tag: "فعالية", date: "[18 نوفمبر 2026]",
      title: "قابلنا في [Retail Expo 2026]",
    },
  ],
};

export const FAQ: typeof EN.FAQ = {
  badge: { icon: "help" as IconName, text: "الأسئلة الشائعة" },
  title: "أسئلة شائعة.",
  contact: { before: "لديك سؤال آخر؟ ", whatsapp: "تواصل عبر واتساب", middle: " أو اتصل على ", after: "." },
  items: [
    { q: "كيف نبدأ؟", a: "احجز عرضًا. نجهز لكم حافظة الأعمال، ثم تضيف فريقك وتنشئ شرائح لكل قسم." },
    { q: "هل يمكننا تحديد ميزانية لكل قسم؟", a: "نعم. الشرائح تقسم حافظة الأعمال إلى ميزانيات، واحدة لكل قسم أو فريق. ويمكنك متابعة كل واحدة مباشرة." },
    { q: "من يرى ماذا؟", a: "أنت تقرر. الأدوار والصلاحيات تحدد من يصرف، وكم، وما يراه كل شخص." },
    { q: "كيف تعمل الموافقة على المصروفات؟", a: "يضيف الموظف المصروف في تطبيق رشيد. ويوافق عليه مديره أو يرفضه. ثم تراه المالية في بوابة الشركة، ويصل إلى نظام ERP لديك." },
    { q: "كيف يضيف الموظفون الإيصالات؟", a: "في تطبيق رشيد، بالصورة أو الصوت أو الملف. وكل مصروف يذهب إلى الشريحة الصحيحة تلقائيًا." },
    { q: "هل يمكننا التصدير للمحاسبة؟", a: "نعم. صدّر حسب القسم أو الشريحة أو الموظف أو الفترة، وكل سطر مرتبط بإيصاله. ويمكن أيضًا إرسال المصروفات المعتمدة إلى نظام ERP لديك." },
    { q: "كم السعر؟", a: "يعتمد السعر على حجم فريقك. اطلب عرض سعر وسنقترح عليك الخطة المناسبة." },
  ],
};

export const CTA: typeof EN.CTA = {
  title: "جاهز لتودّع جمع الإيصالات؟",
  body: "اجمع مصروفات فريقك في حافظة أعمال واحدة. وأغلق كل شهر في موعده.",
  demo: "احجز عرضًا",
  quote: "اطلب عرض سعر",
  whatsapp: "تواصل عبر واتساب",
  call: "أو اتصل بنا: ",
};

export const META: typeof EN.META = {
  title: "رشيد للشركات",
  description: HERO.body,
};
