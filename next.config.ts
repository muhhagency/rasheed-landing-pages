import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Dev-only. Next blocks cross-origin requests for /_next/* dev resources by
  // default, so opening the dev server on the LAN address (to review on a
  // phone, or from another machine) silently fails to load the client chunks:
  // the page renders its server HTML but never hydrates. Anything driven by an
  // effect — the sticky header's scrolled background, scroll-reveal, the mobile
  // menu — appears broken. Allowing the private-network origins fixes it.
  //
  // Has no effect on `next build` / the static export.
  allowedDevOrigins: ["192.168.100.103", "localhost", "127.0.0.1"],
};

export default nextConfig;
