// Real receipt faces from the app (Figma "Website v3 · Receipt faces"),
// neutral copies: Rasheed Store, no currency, no partner brands.
export type ReceiptBack = "points" | "extra" | "voucher" | "gift";

export const RECEIPT_FRONT = {
  src: "/v2/rcpt-front.webp", width: 1044, height: 1740,
  alt: "Front of a Rasheed Store receipt in the Rasheed app: items, subtotal, VAT and a total of 38.78",
};

export const RECEIPT_BACKS: Record<ReceiptBack, { src: string; width: number; height: number; alt: string }> = {
  points: { src: "/v2/rcpt-points.webp", width: 1044, height: 1740, alt: "Back of the receipt: Congratulations! You earned +10 Green Points, plus 12 Rasheed Store points" },
  extra: { src: "/v2/rcpt-extra.webp", width: 1044, height: 1740, alt: "Back of a lucky receipt: +90 Green Points, extra points at 9 times the usual" },
  voucher: { src: "/v2/rcpt-voucher.webp", width: 918, height: 1845, alt: "Back of the receipt: a Rasheed Store voucher for 20% off the next visit, with a coupon barcode and an expiry countdown" },
  gift: { src: "/v2/rcpt-gift.webp", width: 1044, height: 1740, alt: "Back of the receipt: You won a gift! A free pair of wireless headphones, for pick up or delivery" },
};
