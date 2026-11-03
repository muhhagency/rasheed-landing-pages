import type { SH_SHARED } from "@/content/v2/shoppers";
import { Badge } from "@/components/v2/ui/Badge";
import { Checks } from "@/components/v2/ui/Checks";
import { Icon } from "@/components/v2/ui/Icon";
import { Section } from "@/components/v2/ui/Section";

// Shared Pocket, with the family as its main use case.
export function ShShared({ content: c }: { content: typeof SH_SHARED }) {
  return (
    <Section id={c.id} tone="up" labelledBy="sh-shared" className="sh-tight">
      <div className="v2-split">
        <div>
          <Badge icon={c.badge.icon}>{c.badge.label}</Badge>
          <h2 id="sh-shared" className="v2-h2">{c.title}</h2>
          <p className="v2-lead">{c.lead}</p>
          <Checks items={c.checks} />
        </div>
        <div className="sh-art sh-art--phones">
          <div className="sh-art__stage">
            <div className="sh-glow sh-glow--violet" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="sh-shot sh-shared__phone" src={c.phone.src} width={616} height={1256} alt={c.phone.alt} loading="lazy" />
            <div className="sh-card sh-shared__chip" aria-hidden="true">
              <span className="sh-tick"><Icon name="users" strokeWidth={2.2} /></span>
              <span>
                <span className="sh-card__title">{c.chip.title}</span>
                <span className="sh-card__sub">{c.chip.sub}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
