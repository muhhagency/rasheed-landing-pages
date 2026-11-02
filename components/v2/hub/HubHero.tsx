import { Badge } from "@/components/v2/ui/Badge";
import { Button } from "@/components/v2/ui/Button";
import { FlipHeadline } from "@/components/v2/ui/FlipHeadline";
import type { IconName } from "@/components/v2/ui/Icon";
import { HubNewsPill } from "./HubNewsPill";
import type { HubCta } from "@/content/v2/hub";

export function HubHero({ news, badge, headline, lead, leadMore, ctaLabel, ctas }: {
  news: { href: string; tag: string; desktop: React.ReactNode; mobile: string };
  badge: string;
  headline: { label: string; lead: string; lines: { text: string; icon: IconName }[] };
  lead: React.ReactNode;
  leadMore: string;
  ctaLabel: string;
  ctas: HubCta[];
}) {
  return (
    <main id="main" className="hub-main">
      <HubNewsPill {...news} />
      <Badge icon="leaf">{badge}</Badge>
      <FlipHeadline className="hub-h1" lead={headline.lead} lines={headline.lines} label={headline.label} />
      <p className="hub-lead">
        {lead}
        <span className="hub-desk-only"> {leadMore}</span>
      </p>
      <nav aria-label={ctaLabel} className="hub-ctas">
        {ctas.map((c) => (
          <Button key={c.href} href={c.href} variant={c.variant} iconEnd={c.icon}>{c.label}</Button>
        ))}
      </nav>
    </main>
  );
}
