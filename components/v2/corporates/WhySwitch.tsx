import { Badge } from "@/components/v2/ui/Badge";
import { Icon } from "@/components/v2/ui/Icon";
import { Section } from "@/components/v2/ui/Section";
import type { WHY as WhyContent } from "@/content/v2/corporates";

export function WhySwitch({ content }: { content: typeof WhyContent }) {
  return (
    <Section id="why" tone="down" labelledBy="co-why" className="co-sec">
      <Badge icon={content.badge.icon}>{content.badge.text}</Badge>
      <h2 id="co-why" className="v2-h2 co-why__title">{content.title}</h2>
      <div className="co-why__grid">
        <div className="co-why__card">
          <h3 className="co-why__label">{content.before.label}</h3>
          <ul className="co-why__list">
            {content.before.items.map((t) => (
              <li key={t}><Icon name="close" strokeWidth={2} className="co-why__x" />{t}</li>
            ))}
          </ul>
        </div>
        <div className="co-why__card co-why__card--after">
          <h3 className="co-why__label co-why__label--after">{content.after.label}</h3>
          <ul className="co-why__list">
            {content.after.items.map((t) => (
              <li key={t}><Icon name="check" strokeWidth={2.2} className="co-why__check" />{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
