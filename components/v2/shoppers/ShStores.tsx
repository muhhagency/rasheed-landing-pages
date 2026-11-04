import type { SH_STORES } from "@/content/v2/shoppers";
import { Badge } from "@/components/v2/ui/Badge";
import { Checks } from "@/components/v2/ui/Checks";
import { Section } from "@/components/v2/ui/Section";

export function ShStores({ content: c }: { content: typeof SH_STORES }) {
  return (
    <Section id={c.id} tone="deep" labelledBy="sh-stores" className="sh-tight">
      <div className="v2-split">
        <div>
          <Badge icon={c.badge.icon}>{c.badge.label}</Badge>
          <h2 id="sh-stores" className="v2-h2">{c.title}</h2>
          <p className="v2-lead">{c.lead}</p>
          <Checks items={c.checks} />
        </div>
        <div className="sh-art sh-art--phones">
          <div className="sh-art__stage">
            <div className="sh-glow sh-glow--violet" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="sh-shot sh-stores__phone" src={c.phone.src} width={616} height={1256} alt={c.phone.alt} loading="lazy" />
          </div>
        </div>
      </div>
    </Section>
  );
}
