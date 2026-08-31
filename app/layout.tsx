import type { Metadata } from "next";
import { Inter, Michroma } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const michroma = Michroma({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-michroma",
  display: "swap",
});

// Canonical production origin. metadataBase makes every per-route relative
// canonical/OG URL below resolve to an absolute one.
const SITE_URL = "https://rasheedapp.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Rasheed",
    template: "%s",
  },
  description:
    "Rasheed — capture receipts, organize your money, and earn rewards.",
  // Both are declared explicitly: an explicit `icon` would otherwise suppress
  // Next's file-based app/icon.png convention, leaving only the 48px-max .ico.
  // Modern browsers take the 512 PNG (sharp on retina tabs); the .ico covers
  // legacy clients and the 16/32/48 tab sizes.
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    siteName: "Rasheed",
    type: "website",
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${michroma.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
