// Contact points for the redesign. Phone and WhatsApp share one number.
export const CONTACT = {
  infoEmail: "info@rasheedapp.com",
  salesEmail: "sales@rasheedapp.com",
  phoneLabel: "+966 55 859 3522",
  phoneHref: "tel:+966558593522",
  whatsappHref: "https://wa.me/966558593522",
  demoHref: "mailto:sales@rasheedapp.com?subject=Book%20a%20demo",
  quoteHref: "mailto:sales@rasheedapp.com?subject=Get%20a%20quote",
  // Store listings. The App Store URL has no storefront code, so Apple sends
  // each visitor to their own store.
  iosHref: "https://apps.apple.com/app/rasheed/id6458787414",
  androidHref: "https://play.google.com/store/apps/details?id=com.rasheed.app",
  // "Get the app" target. AppLink swaps it for the visitor's store on a phone;
  // on desktop it lands on the Shoppers download section.
  appHref: "/app#get-app",
} as const;

// Arabic pages send "Get the app" to the Arabic Shoppers download section.
export const APP_HREF = { en: "/app#get-app", ar: "/ar/app#get-app" } as const;

export type PageKey = "hub" | "app" | "retailers" | "corporates" | "news";

// Page paths without a locale prefix.
export const PAGE_PATH: Record<PageKey, string> = {
  hub: "/",
  app: "/app",
  retailers: "/for-retailers",
  corporates: "/for-corporates",
  news: "/news",
};

export const NAV_KEYS = ["app", "retailers", "corporates", "news"] as const;

// Header button per page: B2B pages book a demo, the rest get the app.
export const HEADER_CTA_KIND: Record<Exclude<PageKey, "hub">, "app" | "demo"> = {
  app: "app",
  retailers: "demo",
  corporates: "demo",
  news: "app",
};
