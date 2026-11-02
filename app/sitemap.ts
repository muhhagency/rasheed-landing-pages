import type { MetadataRoute } from "next";

const SITE_URL = "https://rasheedapp.com";

// Required by `output: "export"` — the sitemap is emitted at build time.
export const dynamic = "force-static";

// The five public routes. /kitchen-sink is deliberately excluded (it is also
// disallowed in robots.txt) and /signup lives outside this repo.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/app`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/for-retailers`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/for-corporates`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/news`, changeFrequency: "weekly", priority: 0.6 },
  ];
}
