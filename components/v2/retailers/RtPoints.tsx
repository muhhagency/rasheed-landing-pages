import { Badge } from "@/components/v2/ui/Badge";
import { Checks } from "@/components/v2/ui/Checks";
import { Icon } from "@/components/v2/ui/Icon";
import { Section } from "@/components/v2/ui/Section";
import type { RT_POINTS } from "@/content/v2/retailers";
import { PhoneFrame } from "./PhoneFrame";

export function RtPoints({ content }: { content: typeof RT_POINTS }) {
  const c = content;
  return (
    <Section id="points" tone="deep" labelledBy="rt-points" className="rt-points">
      <div className="v2-split">
        <div>
          <Badge icon="award">{c.badge}</Badge>
          <h2 id="rt-points" className="v2-h2">
            {c.h2a}
            <br />
            <span className="rt-accent">{c.h2accent}</span> {c.h2b}
          </h2>
          <p className="v2-lead">{c.lead}</p>
          <Checks items={c.checks} />
        </div>
        <div className="rt-points__stage">
          <div className="rt-glow rt-glow--lg" aria-hidden="true" />
          <PhoneFrame src={c.phone.src} alt={c.phone.alt} width={300} framed className="rt-phone--shadow" />
          <div className="rt-chip rt-points__chip v2-float">
            <span className="rt-chip__icon rt-chip__icon--round"><Icon name="store" /></span>
            <span>
              <span className="rt-chip__title">{c.chip.title}</span>
              <span className="rt-chip__sub">{c.chip.sub}</span>
            </span>
            <span className="rt-chip__value" dir="ltr">{c.chip.value}</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
