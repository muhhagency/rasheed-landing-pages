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
  // Next already emits a content-hashed <link> for app/favicon.ico via its
  // file-based convention, which is what busts the cache when the icon changes.
  // Declaring `icon` here as well would ADD an unhashed /favicon.ico link that
  // browsers happily serve from a stale cache — favicons are cached hard and
  // often survive a hard reload.
  //
  // So only app/icon.png is declared explicitly (Next does not auto-link it
  // alongside a favicon.ico), and the .ico is left to the convention.
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
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
