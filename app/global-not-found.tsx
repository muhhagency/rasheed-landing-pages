import type { Metadata } from "next";
import Link from "next/link";
import { inter, michroma } from "./fonts";
import "./globals.css";

export const metadata: Metadata = { title: "Page not found | Rasheed" };

// 404 for any unmatched URL (the site has two root layouts, English and Arabic).
export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${inter.variable} ${michroma.variable} h-full antialiased`}>
      <body className="min-h-full">
        <div className="tone-stage v2-page">
          <main id="main" className="v2-container v2-section">
            <h1 className="v2-h2">Page not found.</h1>
            <p className="v2-lead">This page does not exist. <Link href="/">Go to the home page</Link> · <Link href="/ar" lang="ar">الصفحة الرئيسية</Link></p>
          </main>
        </div>
      </body>
    </html>
  );
}
