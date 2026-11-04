import { IBM_Plex_Sans_Arabic, Inter, Michroma } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const michroma = Michroma({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-michroma",
  display: "swap",
});

// Interim Arabic face. The approved Arabic face is Neo Sans Arabic (the app's
// font, a licensed font): it is listed first in the Arabic font stack and takes
// over once its files are added with next/font/local.
export const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});
