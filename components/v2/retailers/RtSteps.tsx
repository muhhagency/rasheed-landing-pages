import { Badge } from "@/components/v2/ui/Badge";
import { Icon } from "@/components/v2/ui/Icon";
import { Section } from "@/components/v2/ui/Section";
import type { RT_STEPS } from "@/content/v2/retailers";

export function RtSteps({ content }: { content: typeof RT_STEPS }) {
  const c = content;
  return (
    <Section id="start" tone="up" labelledBy="rt-start" className="rt-steps">
      <Badge icon="play">{c.badge}</Badge>
      <h2 id="rt-start" className="v2-h2">{c.h2}</h2>
      <ol className="rt-steps__grid">
        {c.steps.map((s, i) => (
          <li key={i} className="rt-step">
            <div className="rt-step__top">
              <span className="rt-num rt-num--lg" aria-hidden="true">{i + 1}</span>
              <Icon name={s.icon} className="rt-step__icon" />
            </div>
            <h3 className="rt-step__title">{s.title}</h3>
            <p className="rt-step__body">{s.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
