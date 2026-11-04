import type { IconName } from "@/components/v2/ui/Icon";
import { TapCeipt } from "@/components/ui/TapCeipt";
import { APP_HREF, CONTACT } from "@/components/v2/layout/contact";
import { UI } from "@/components/v2/i18n";
import type { ShCta, FlipKind } from "../shoppers";

// Shoppers (`/ar/app`) Arabic content. Same names and shapes as content/v2/shoppers.tsx.
// "+10" is wrapped in LTR isolates (U+2066 ... U+2069) so the plus sign stays in front of the number.

export type { ShCta, FlipKind };

export const SHOPPERS_TITLE = "رشيد للأفراد";

export const SHOPPERS_DESCRIPTION =
  "قرّب جوالك من TapCeipt عند الدفع. يصل إيصالك مباشرة إلى رشيد. اقلبه لتربح مكافأة، واستخدم نقاطك للحصول على هدايا، واعرف أين تذهب أموالك.";

const GET_APP: ShCta = { label: "حمّل التطبيق", href: APP_HREF.ar, variant: "primary", icon: "download" };

const HERO_CTAS: ShCta[] = [GET_APP, { label: "شاهد كيف يعمل", href: "#capture", variant: "ghost", icon: "arrowDown" }];
const END_CTAS: ShCta[] = [GET_APP, { label: "شاهد كيف يعمل", href: "#capture", variant: "ghost", icon: "arrowUp" }];

const PLUS_10 = "⁦+10⁩";

export const SH_HERO = {
  badge: { icon: "user" as IconName, label: "للأفراد" },
  headline: {
    label: "كل إيصالاتك، في مكان واحد.",
    lead: "كل إيصالاتك،",
    lines: [
      { text: "في مكان واحد.", icon: "receipt" },
      { text: "وفيها مكافأة.", icon: "gift" },
      { text: "منظمة لك.", icon: "pieSplit" },
      { text: "لن تضيع بعد اليوم.", icon: "shieldCheck" },
    ] as { text: string; icon: IconName }[],
  },
  lead: <>قرّب جوالك من <TapCeipt /> عند الدفع. يصل إيصالك مباشرة إلى رشيد. اقلبه لتربح مكافأة، واستخدم نقاطك للحصول على هدايا، واعرف أين تذهب أموالك.</>,
  ctas: HERO_CTAS,
  note: <>مجاني على <a href={CONTACT.iosHref} target="_blank" rel="noopener noreferrer">آيفون</a> و<a href={CONTACT.androidHref} target="_blank" rel="noopener noreferrer">أندرويد</a>. ابدأ بدون حساب.</>,
  art: {
    gifts: "/v2/ar/ph-scr-gifts.webp",
    home: "/v2/ar/ph-scr-home.webp",
    label:
      `تطبيق رشيد: الشاشة الرئيسية مع الحافظات ومعاملاتك الأخيرة، وشاشة الهدايا، وإيصال يُقلب ليكشف ${PLUS_10} نقاط خضراء`,
  },
  earned: { kicker: "حصلت على", value: `${PLUS_10} نقاط خضراء` },
  saved: { title: "تم حفظ المصروف", sub: "مقهى الزاوية · قهوة" },
};

export const SH_CAPTURE = {
  id: "capture",
  badge: { icon: "camera" as IconName, label: "إضافة المصروفات" },
  title: "أضف أي مصروف، بالطريقة التي تحبها.",
  feature: {
    tag: "الأسرع",
    title: <>انقر على <TapCeipt /></>,
    body: <>في أي متجر فيه <TapCeipt />، قرّب جوالك من الجهاز. يظهر الإيصال كاملًا في التطبيق.</>,
    image: { src: "/v2/tap-card3.webp", width: 1600, height: 1073, alt: "جوال يلمس جهاز TapCeipt على طاولة مقهى" },
  },
  ways: [
    { icon: "pencil", title: "اكتب", body: "اكتبه بنفسك. يستغرق ثوانٍ قليلة." },
    { icon: "mic", title: "تحدث", body: "قله بصوتك. رشيد يحفظه." },
    { icon: "camera", title: "التقط", body: "صوّر الإيصال الورقي. رشيد يقرؤه." },
    { icon: "upload", title: "ارفق", body: "أضف ملف PDF أو صورة أو فاتورة. رشيد ينظمه." },
  ] as { icon: IconName; title: string; body: string }[],
};

export const SH_FLIP = {
  id: "flip",
  badge: { icon: "flip" as IconName, label: "اقلب الإيصال" },
  title: "اقلب إيصالك. واربح في كل مرة.",
  lead: <>كل إيصال من <TapCeipt /> له وجه خلفي. اقلبه لترى مكافأتك. هناك دائمًا شيء لك، وأحيانًا يكون كبيرًا.</>,
  cards: [
    { kind: "points", kicker: "كل إيصال", title: "النقاط الخضراء", body: "احصل على نقاط مع كل إيصال. تضاف مباشرة إلى رصيدك." },
    { kind: "extra", kicker: "إيصال محظوظ", title: "نقاط إضافية", body: "بعض الإيصالات تمنحك أكثر، حتى تسعة أضعاف نقاطك المعتادة." },
    { kind: "voucher", kicker: "أفضل", title: "قسائم", body: "خصم في متجر. تنتظرك في هداياي. اعرض رمز QR عند الدفع." },
    { kind: "gift", kicker: "الجائزة الكبرى", title: "هدايا مجانية", body: "أحيانًا تربح منتجًا حقيقيًا. نوصله لك، أو تستلمه بنفسك." },
  ] as { kind: FlipKind; kicker: string; title: string; body: string }[],
};

export const SH_GIFTS = {
  id: "gifts",
  badge: { icon: "gift" as IconName, label: "النقاط والهدايا" },
  title: "استخدم نقاطك واحصل على هدايا حقيقية.",
  lead: "كل إيصال يمنحك نقاطًا خضراء. استخدمها للحصول على منتجات حقيقية. نوصلها لك، أو تستلمها من المتجر.",
  checks: [
    "احصل على النقاط الخضراء مع كل إيصال",
    "اختر هدية. نوصلها لك أو تستلمها بنفسك، حسب الهدية.",
    "تجد كل هداياك وقسائمك في هداياي",
  ],
  phone: {
    src: "/v2/ar/ph-scr-allgifts.webp",
    alt: "تطبيق رشيد يعرض كل الهدايا: طقم عطر عود، وسماعات لاسلكية، وطقم عناية بالبشرة، ويد تحكم للألعاب، ولكل منها سعر بالنقاط",
  },
  balance: { label: "النقاط الخضراء", value: "1,870", unit: "نقطة", note: `${PLUS_10} من آخر إيصال` },
  delivery: { thumb: "/v2/thumb-headphones.webp", title: "سماعات لاسلكية", sub: "توصيل · في الطريق" },
};

export const SH_STORES = {
  id: "stores",
  badge: { icon: "card" as IconName, label: "نقاط المتجر" },
  title: "كل بطاقات متاجرك في مكان واحد.",
  lead: "أضف بطاقات نقاط متاجرك المفضلة. تحصل على نقاطها مع إيصالاتك تلقائيًا. ولاستخدامها، اعرض رمز QR عند الدفع.",
  checks: [
    "أضف بطاقة المتجر مرة واحدة. واحصل على النقاط مع كل إيصال.",
    "أخبر الكاشير كم نقطة تريد أن تستخدم. يمسح الرمز، وأنت توافق.",
    "نقاط كل متجر خاصة به. وهي منفصلة عن نقاطك الخضراء.",
  ],
  phone: { src: "/v2/ar/ph-scr-storelist.webp", alt: "النقاط والهدايا في رشيد، تبويب نقاط المتاجر: خمس بطاقات متاجر (متجر رشيد، السوق الأخضر، صيدلية الرعاية، ركن الكتاب، بيت العود) ولكل منها نقاطها" },
};

export const SH_SPENDING = {
  id: "spending",
  badge: { icon: "pie" as IconName, label: "مصروفاتك" },
  title: "اعرف كل تفاصيل مشترياتك.",
  lead: "كل مصروف يحفظ منتجاته والمبلغ الإجمالي والفاتورة الضريبية. رشيد يضعه في فئة وفي حافظة، فتعرف دائمًا أين تذهب أموالك.",
  checks: [
    "شاهد كل منتج والفاتورة الضريبية بنقرة واحدة",
    "غيّر الفئة أو الحافظة أو طريقة الدفع متى شئت",
    "الحافظات تعرض ما صرفته وما تبقى هذا الشهر",
  ],
  phones: [
    { src: "/v2/ar/ph-scr-home.webp", alt: "الشاشة الرئيسية في رشيد مع حافظة، وأزرار إضافة مصروف، ومعاملاتك الأخيرة" },
    { src: "/v2/ar/ph-scr-details.webp", alt: "تفاصيل الإيصال مع المنتجات والفاتورة الضريبية والفئة وطريقة الدفع" },
  ],
};

export const SH_SHARED = {
  id: "shared-pocket",
  badge: { icon: "users" as IconName, label: "حافظة جماعية" },
  title: "شارك مصروفاتك مع عائلتك.",
  lead: "أنشئ حافظة جماعية لعائلتك. كل واحد يضيف ما يصرفه، وترون جميعًا ميزانية واحدة. أضف أطفالك أيضًا، ليتعلموا عادات صرف جيدة.",
  checks: [
    "ادعُ عائلتك إلى حافظة جماعية واحدة",
    "كل مصروف يظهر في مكان واحد، للجميع",
    "أضف أطفالك ليتعلموا التخطيط والصرف بحكمة",
  ],
  phone: {
    src: "/v2/ar/ph-scr-shared.webp",
    alt: "حافظة جماعية باسم العائلة في تطبيق رشيد: ميزانية شهرية 5,000 صُرف منها 2,480، وأعضاؤها الأربعة: أنت المالك، وشريكك مشرف، وطفلان، مع ما صرفه كل واحد",
  },
  chip: { title: "2,480 من 5,000", sub: "صرفتموها معًا هذا الشهر" },
};

export const SH_STATS = {
  id: "statistics",
  badge: { icon: "barChart" as IconName, label: "الإحصائيات" },
  title: "اعرف مصروفاتك بوضوح.",
  lead: "شاهد شهرك حسب الفئة وحسب المتجر. وقارنه بالشهر الماضي وبميزانيتك.",
  checks: [
    "اعرف أكثر متجر وأكثر فئة تصرف فيهما",
    "قارن هذا الشهر بالشهر الماضي",
    "اعرف كم تبقى من ميزانيتك",
  ],
  phone: { src: "/v2/ar/ph-scr-stats.webp", alt: "الإحصائيات في رشيد: إجمالي المصروفات، وأكثر متجر وفئة، والميزانية، ورسم بياني يقارن الأشهر" },
  chip: { kicker: "هذا الشهر", value: "12% أقل", tag: "مقارنة بالشهر الماضي" },
};

export const SH_VOICES = {
  title: "ماذا يقول الناس",
  note: "آراء تجريبية",
  marquee: { label: "آراء المستخدمين", pause: UI.ar.pause, play: UI.ar.play },
  quotes: [
    { quote: "صرت أعرف أين تذهب أموالي كل شهر. أراجعها كل جمعة.", initials: "ن ع", name: "[Name]", role: "مستخدم رشيد" },
    { quote: "قلبت إيصالًا وربحت هدية مجانية. صرت أنقر في كل مرة.", initials: "س ع", name: "[Name]", role: "مستخدم رشيد" },
    { quote: "عائلتنا تشترك الآن في حافظة واحدة. أطفالي يضيفون مصروفاتهم ويفكرون قبل الشراء.", initials: "ك ف", name: "[Name]", role: "مستخدم رشيد" },
    { quote: "أقول ما دفعته فقط، ورشيد يحفظه. يستغرق ثانيتين.", initials: "ر م", name: "[Name]", role: "مستخدم رشيد" },
    { quote: "كل نقاط متاجري في مكان واحد. لم أعد أحمل بطاقات المتاجر.", initials: "ه س", name: "[Name]", role: "مستخدم رشيد" },
    { quote: "الإحصائيات الشهرية أظهرت لي أين أصرف كثيرًا. الآن أخطط قبل أن أشتري.", initials: "ي ت", name: "[Name]", role: "مستخدم رشيد" },
  ],
};

export const SH_FAQ = {
  id: "faq",
  badge: { icon: "help" as IconName, label: "الأسئلة الشائعة" },
  title: "أسئلة شائعة.",
  more: "لديك سؤال آخر؟",
  email: CONTACT.infoEmail,
  items: [
    { q: "هل أحتاج إلى حساب للبدء؟", a: "لا. حمّل رشيد وابدأ فورًا. وعندما تسجل لاحقًا، تبقى مصروفاتك معك." },
    { q: <>ماذا لو لم يكن في المتجر <TapCeipt />؟</>, a: "أضف المصروف بنفسك. اكتبه، أو قله بصوتك، أو صوّر الإيصال الورقي، أو ارفق ملفًا." },
    { q: "ماذا أحصل عليه عندما أقلب الإيصال؟", a: "واحد من أربعة: نقاط خضراء، أو نقاط إضافية، أو قسيمة، أو هدية مجانية. تحصل دائمًا على شيء." },
    { q: "كيف أستخدم القسيمة؟", a: "افتحها في هداياي واعرض رمز QR عند الدفع. يمسحه الكاشير. هذا كل شيء." },
    { q: "هل النقاط الخضراء هي نفسها نقاط المتجر؟", a: "لا. النقاط الخضراء من رشيد، وتستخدمها للهدايا. أما نقاط المتجر فهي خاصة بكل متجر، وتستخدمها في ذلك المتجر فقط." },
  ] as { q: React.ReactNode; a: React.ReactNode }[],
};

export const SH_CTA = {
  id: "get-app",
  title: "ابدأ مع رشيد اليوم.",
  lead: "احصل على إيصالك الأول خلال ثوانٍ. بدون حساب.",
  ctas: END_CTAS,
  note: <>مجاني على <a href={CONTACT.iosHref} target="_blank" rel="noopener noreferrer">آيفون</a> و<a href={CONTACT.androidHref} target="_blank" rel="noopener noreferrer">أندرويد</a></>,
};
