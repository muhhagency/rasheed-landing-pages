import type { SH_FLIP } from "@/content/v2/shoppers";
import { Badge } from "@/components/v2/ui/Badge";
import { Section } from "@/components/v2/ui/Section";
import { ReceiptFlip } from "@/components/v2/ui/ReceiptFlip";

export function ShFlip({ content: c }: { content: typeof SH_FLIP }) {
  return (
    <Section id={c.id} tone="raised" labelledBy="sh-flip" className="sh-flip">
      <div className="sh-flip__head">
        <div>
          <Badge icon={c.badge.icon}>{c.badge.label}</Badge>
          <h2 id="sh-flip" className="v2-h2">{c.title}</h2>
        </div>
        <p className="sh-flip__lead">{c.lead}</p>
      </div>
      <ul className="sh-flip__grid">
        {c.cards.map((card, i) => (
          <li key={card.kind} className={`sh-flipcard sh-flipcard--${card.kind}`}>
            <div className="sh-flipcard__kicker">{card.kicker}</div>
            <ReceiptFlip kind={card.kind} index={i} />
            <h3 className="sh-flipcard__title">{card.title}</h3>
            <p className="sh-flipcard__body">{card.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
