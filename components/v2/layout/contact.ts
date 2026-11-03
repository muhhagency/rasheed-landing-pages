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

export type PageKey = "hub" | "app" | "retailers" | "corporates" | "news";

export const NAV = [
  { key: "app", label: "Shoppers", href: "/app" },
  { key: "retailers", label: "Retailers", href: "/for-retailers" },
  { key: "corporates", label: "Corporates", href: "/for-corporates" },
  { key: "news", label: "News", href: "/news" },
] as const;

export const HEADER_CTA: Record<Exclude<PageKey, "hub">, { label: string; href: string }> = {
  app: { label: "Get the app", href: CONTACT.appHref },
  retailers: { label: "Book a demo", href: CONTACT.demoHref },
  corporates: { label: "Book a demo", href: CONTACT.demoHref },
  news: { label: "Get the app", href: CONTACT.appHref },
};
