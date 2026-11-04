import type { Metadata } from "next";
import { arabic, inter, michroma } from "../fonts";
import "../globals.css";

const SITE_URL = "https://rasheedapp.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "رشيد", template: "%s" },
  description: "رشيد: احفظ إيصالاتك، ونظّم مصروفاتك، واربح المكافآت.",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
    apple: "/apple-touch-icon.png",
  },
  openGraph: { siteName: "رشيد", type: "website", locale: "ar" },
  twitter: { card: "summary_large_image" },
};

// Arabic root layout: right-to-left document. Pages live under /ar.
export default function ArabicRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${arabic.variable} ${inter.variable} ${michroma.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
