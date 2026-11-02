import { Badge } from "@/components/v2/ui/Badge";
import { Button } from "@/components/v2/ui/Button";
import { FlipHeadline } from "@/components/v2/ui/FlipHeadline";
import { Stats } from "@/components/v2/ui/Stats";
import { CONTACT } from "@/components/v2/layout/contact";
import type { HERO as HeroContent, CoPortal } from "@/content/v2/corporates";
import { PortalMock } from "./PortalMock";

export function CoHero({ content, portal }: { content: typeof HeroContent; portal: CoPortal }) {
  return (
    <section className="co-hero" aria-label={content.label}>
      <div className="co-hero__art" aria-hidden="true">
        <div className="co-hero__tilt"><PortalMock data={portal} decorative /></div>
      </div>
      <div className="co-hero__veil" aria-hidden="true" />
      <div className="v2-container co-hero__inner">
        <div className="co-hero__copy">
          <Badge icon={content.badge.icon}>{content.badge.text}</Badge>
          <FlipHeadline className="co-hero__h1" lead={content.lead} lines={content.lines} label={content.h1Label} />
          <p className="co-hero__body">{content.body}</p>
          <div className="v2-btn-row v2-btn-row--stack co-hero__ctas">
            <Button href={CONTACT.demoHref} icon="calendar">{content.primary}</Button>
            <Button href={CONTACT.whatsappHref} variant="ghost" icon="chat" external>{content.secondary}</Button>
          </div>
        </div>
        <div className="co-hero__stats">
          <Stats label={content.statsLabel} items={content.stats} />
        </div>
      </div>
    </section>
  );
}
