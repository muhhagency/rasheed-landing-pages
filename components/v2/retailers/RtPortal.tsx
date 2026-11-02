import { Badge } from "@/components/v2/ui/Badge";
import { Section } from "@/components/v2/ui/Section";
import type { RT_PORTAL } from "@/content/v2/retailers";
import { PortalMock } from "./PortalMock";

export function RtPortal({ content }: { content: typeof RT_PORTAL }) {
  const c = content;
  return (
    <Section id="portal" tone="down" labelledBy="rt-portal" className="rt-portal-sec">
      <div className="v2-split--head">
        <div>
          <Badge icon="dashboard">{c.badge}</Badge>
          <h2 id="rt-portal" className="v2-h2">{c.h2}</h2>
        </div>
        <p className="rt-intro">{c.intro}</p>
      </div>
      <div className="rt-portal-sec__mock">
        <PortalMock mock={c.mock} />
      </div>
    </Section>
  );
}
