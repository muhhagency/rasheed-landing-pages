import { Badge } from "@/components/v2/ui/Badge";
import { Section } from "@/components/v2/ui/Section";
import type { CONTROL as ControlContent, CoPortal } from "@/content/v2/corporates";
import { PortalMock } from "./PortalMock";
import { FeatureCard } from "./FeatureCard";

export function Control({ content, portal }: { content: typeof ControlContent; portal: CoPortal }) {
  return (
    <Section id="team" tone="up" labelledBy="co-control" className="co-sec">
      <div className="v2-split--head">
        <div>
          <Badge icon={content.badge.icon}>{content.badge.text}</Badge>
          <h2 id="co-control" className="v2-h2 co-maxw-900">{content.title}</h2>
        </div>
        <p className="co-head-body">{content.body}</p>
      </div>
      <div className="co-control__portal"><PortalMock data={portal} /></div>
      <div className="co-control__features">
        {content.features.map((f) => <FeatureCard key={f.title} item={f} />)}
      </div>
    </Section>
  );
}
