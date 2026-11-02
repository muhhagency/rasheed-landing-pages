import { Badge } from "@/components/v2/ui/Badge";
import { Icon } from "@/components/v2/ui/Icon";
import { Section } from "@/components/v2/ui/Section";
import type { HOW as HowContent } from "@/content/v2/corporates";

export function HowItWorks({ content }: { content: typeof HowContent }) {
  return (
    <Section id="how" tone="raised" labelledBy="co-how" className="co-sec">
      <Badge icon={content.badge.icon}>{content.badge.text}</Badge>
      <h2 id="co-how" className="v2-h2 co-maxw-900">{content.title}</h2>
      <ol className="co-how">
        {content.steps.map((s, i) => (
          <li key={s.title} className="co-how__step">
            <div className="co-how__top">
              <span className="co-how__num">{i + 1}</span>
              <Icon name={s.icon} className="co-how__icon" />
            </div>
            <h3 className="co-how__title">{s.title}</h3>
            <p className="co-how__text">{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
