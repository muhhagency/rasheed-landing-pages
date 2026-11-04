import type { SH_GIFTS } from "@/content/v2/shoppers";
import { Badge } from "@/components/v2/ui/Badge";
import { Checks } from "@/components/v2/ui/Checks";
import { Icon } from "@/components/v2/ui/Icon";
import { Section } from "@/components/v2/ui/Section";

export function ShGifts({ content: c }: { content: typeof SH_GIFTS }) {
  return (
    <Section id={c.id} tone="up" labelledBy="sh-gifts" className="sh-tight">
      <div className="v2-split">
        <div className="sh-art sh-gifts__art">
          <div className="sh-art__stage">
            <div className="sh-glow sh-gifts__glow" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="sh-shot sh-gifts__phone" src={c.phone.src} width={616} height={1256} alt={c.phone.alt} loading="lazy" />
            <div className="sh-gifts__balance">
              <div className="sh-gifts__balance-label"><Icon name="leaf" />{c.balance.label}</div>
              <div className="sh-gifts__balance-value">{c.balance.value} <span>{c.balance.unit}</span></div>
              <div className="sh-gifts__balance-note">{c.balance.note}</div>
            </div>
            <div className="sh-card sh-gifts__delivery">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="sh-gifts__thumb" src={c.delivery.thumb} width={52} height={52} alt="" loading="lazy" />
              <span>
                <span className="sh-card__title">{c.delivery.title}</span>
                <span className="sh-card__sub">{c.delivery.sub}</span>
              </span>
              <span className="sh-tick"><Icon name="check" strokeWidth={2.6} /></span>
            </div>
          </div>
        </div>
        <div>
          <Badge icon={c.badge.icon}>{c.badge.label}</Badge>
          <h2 id="sh-gifts" className="v2-h2">{c.title}</h2>
          <p className="v2-lead">{c.lead}</p>
          <Checks items={c.checks} />
        </div>
      </div>
    </Section>
  );
}
