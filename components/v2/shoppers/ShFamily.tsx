import type { SH_FAMILY } from "@/content/v2/shoppers";
import { Badge } from "@/components/v2/ui/Badge";
import { Checks } from "@/components/v2/ui/Checks";
import { Icon } from "@/components/v2/ui/Icon";
import { Section } from "@/components/v2/ui/Section";
import { FamilyScreen } from "./FamilyScreen";
import { PhoneFrame } from "./PhoneFrame";

export function ShFamily({ content: c }: { content: typeof SH_FAMILY }) {
  return (
    <Section id={c.id} tone="up" labelledBy="sh-family" className="sh-tight">
      <div className="v2-split">
        <div>
          <Badge icon={c.badge.icon}>{c.badge.label}</Badge>
          <h2 id="sh-family" className="v2-h2">{c.title}</h2>
          <p className="v2-lead">{c.lead}</p>
          <Checks items={c.checks} />
        </div>
        <div className="sh-art sh-art--phones" role="img" aria-label={c.screen.label}>
          <div className="sh-art__stage">
            <div className="sh-glow sh-glow--violet" />
            <PhoneFrame className="sh-family__phone">
              <FamilyScreen screen={c.screen} />
            </PhoneFrame>
            <div className="sh-card sh-family__chip">
              <span className="sh-tick"><Icon name="check" strokeWidth={2.6} /></span>
              <span>
                <span className="sh-card__title">{c.chip.title}</span>
                <span className="sh-card__sub">{c.chip.sub}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
