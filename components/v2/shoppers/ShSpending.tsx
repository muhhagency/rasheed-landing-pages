import type { SH_SPENDING } from "@/content/v2/shoppers";
import { Badge } from "@/components/v2/ui/Badge";
import { Checks } from "@/components/v2/ui/Checks";
import { Section } from "@/components/v2/ui/Section";

export function ShSpending({ content: c }: { content: typeof SH_SPENDING }) {
  const [home, details] = c.phones;
  return (
    <Section id={c.id} tone="down" labelledBy="sh-details" className="sh-tight sh-spending">
      <div className="v2-split">
        <div className="sh-art sh-art--phones">
          <div className="sh-art__stage">
            <div className="sh-glow sh-glow--green" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="sh-shot sh-spending__home" src={home.src} width={616} height={1256} alt={home.alt} loading="lazy" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="sh-shot sh-spending__details" src={details.src} width={616} height={1256} alt={details.alt} loading="lazy" />
          </div>
        </div>
        <div>
          <Badge icon={c.badge.icon}>{c.badge.label}</Badge>
          <h2 id="sh-details" className="v2-h2">{c.title}</h2>
          <p className="v2-lead">{c.lead}</p>
          <Checks items={c.checks} />
        </div>
      </div>
    </Section>
  );
}
