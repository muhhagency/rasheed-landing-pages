import type { SH_FAQ } from "@/content/v2/shoppers";
import { Badge } from "@/components/v2/ui/Badge";
import { Faq } from "@/components/v2/ui/Faq";
import { Section } from "@/components/v2/ui/Section";

export function ShFaq({ content: c }: { content: typeof SH_FAQ }) {
  return (
    <Section id={c.id} tone="raised" labelledBy="sh-faq" className="sh-faq">
      <div className="sh-faq__grid">
        <div>
          <Badge icon={c.badge.icon}>{c.badge.label}</Badge>
          <h2 id="sh-faq" className="v2-h2">{c.title}</h2>
          <p className="sh-faq__more">{c.more} <a href={`mailto:${c.email}`}>{c.email}</a></p>
        </div>
        <div className="sh-faq__list">
          <Faq items={c.items} />
        </div>
      </div>
    </Section>
  );
}
