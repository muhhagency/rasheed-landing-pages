import type { SH_POCKETS } from "@/content/v2/shoppers";
import { Badge } from "@/components/v2/ui/Badge";
import { Icon } from "@/components/v2/ui/Icon";
import { Section } from "@/components/v2/ui/Section";

export function ShPockets({ content: c }: { content: typeof SH_POCKETS }) {
  const { shared: s, stats: t } = c;
  return (
    <Section id={c.id} tone="raised" labelledBy="sh-pockets" className="sh-pockets">
      <Badge icon={c.badge.icon}>{c.badge.label}</Badge>
      <h2 id="sh-pockets" className="v2-h2">{c.title}</h2>
      <div className="sh-pockets__grid">
        <article className="sh-panel">
          <div className="sh-panel__copy">
            <div className="sh-panel__kicker">{s.kicker}</div>
            <h3 className="sh-panel__title">{s.title}</h3>
            <p className="sh-panel__body">{s.body}</p>
          </div>
          <div className="sh-panel__media">
            <div className="sh-panel__glow" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="sh-shot sh-panel__phone" src={s.phone.src} width={616} height={1256} alt={s.phone.alt} loading="lazy" />
            <div className="sh-card sh-panel__chip sh-panel__chip--end">
              <span className="sh-tick"><Icon name="check" strokeWidth={2.6} /></span>
              <span>
                <span className="sh-card__title">{s.chip.title}</span>
                <span className="sh-card__sub">{s.chip.sub}</span>
              </span>
            </div>
          </div>
        </article>
        <article className="sh-panel">
          <div className="sh-panel__copy">
            <div className="sh-panel__kicker">{t.kicker}</div>
            <h3 className="sh-panel__title">{t.title}</h3>
            <p className="sh-panel__body">{t.body}</p>
          </div>
          <div className="sh-panel__media">
            <div className="sh-panel__glow" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="sh-shot sh-panel__phone" src={t.phone.src} width={616} height={1256} alt={t.phone.alt} loading="lazy" />
            <div className="sh-card sh-panel__chip sh-panel__chip--start sh-stat">
              <span className="sh-card__sub">{t.chip.kicker}</span>
              <span className="sh-stat__value">{t.chip.value}</span>
              <span className="sh-stat__tag">{t.chip.tag}</span>
            </div>
          </div>
        </article>
      </div>
    </Section>
  );
}
