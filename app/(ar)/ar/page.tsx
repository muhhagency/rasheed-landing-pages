import type { Metadata } from "next";
import { SkipLink } from "@/components/layout/SkipLink";
import { HubMedia } from "@/components/v2/hub/HubMedia";
import { HubHeader } from "@/components/v2/hub/HubHeader";
import { HubHero } from "@/components/v2/hub/HubHero";
import { HubStats } from "@/components/v2/hub/HubStats";
import { HubFooter } from "@/components/v2/hub/HubFooter";
import { HUB, HUB_TITLE, HUB_DESCRIPTION } from "@/content/v2/ar/hub";

export const metadata: Metadata = {
  title: HUB_TITLE,
  description: HUB_DESCRIPTION,
  alternates: { canonical: "/ar", languages: { en: "/", ar: "/ar" } },
  openGraph: { title: HUB_TITLE, description: HUB_DESCRIPTION, url: "/ar" },
};

// Hub (`/`): one full-viewport hero that routes to the three audiences.
// It renders its own minimal shell (no PageShell).
export default function HubPage() {
  return (
    <div className="tone-stage hub">
      <SkipLink locale="ar" />
      <HubMedia alt={HUB.heroAlt} />
      <div className="hub-frame">
        <HubHeader logoAlt={HUB.logoAlt} locale="ar" />
        <HubHero
          news={HUB.news}
          badge={HUB.badge}
          headline={HUB.headline}
          lead={HUB.lead}
          leadMore={HUB.leadMore}
          ctaLabel={HUB.ctaLabel}
          ctas={HUB.ctas}
        />
        <HubStats label={HUB.statsLabel} items={HUB.stats} />
        <HubFooter locale="ar" copyright={HUB.footer.copyright} links={HUB.footer.links} />
      </div>
    </div>
  );
}
