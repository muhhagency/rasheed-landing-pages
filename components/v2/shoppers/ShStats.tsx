import type { SH_STATS } from "@/content/v2/shoppers";
import { Badge } from "@/components/v2/ui/Badge";
import { Checks } from "@/components/v2/ui/Checks";
import { Section } from "@/components/v2/ui/Section";

export function ShStats({ content: c }: { content: typeof SH_STATS }) {
  return (
    <Section id={c.id} tone="down" labelledBy="sh-stats" className="sh-tight sh-stats">
      <div className="v2-split">
        <div className="sh-art sh-art--phones">
          <div className="sh-art__stage">
            <div className="sh-glow sh-glow--green" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="sh-shot sh-stats__phone" src={c.phone.src} width={616} height={1256} alt={c.phone.alt} loading="lazy" />
            <div className="sh-card sh-stat sh-stats__chip">
              <span className="sh-card__sub">{c.chip.kicker}</span>
              <span className="sh-stat__value">{c.chip.value}</span>
              <span className="sh-stat__tag">{c.chip.tag}</span>
            </div>
          </div>
        </div>
        <div>
          <Badge icon={c.badge.icon}>{c.badge.label}</Badge>
          <h2 id="sh-stats" className="v2-h2">{c.title}</h2>
          <p className="v2-lead">{c.lead}</p>
          <Checks items={c.checks} />
        </div>
      </div>
    </Section>
  );
}
