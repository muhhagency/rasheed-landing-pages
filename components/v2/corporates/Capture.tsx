import { Badge } from "@/components/v2/ui/Badge";
import { Section } from "@/components/v2/ui/Section";
import type { CAPTURE as CaptureContent } from "@/content/v2/corporates";
import { PhoneFrame } from "./PhoneFrame";
import { FeatureCard } from "./FeatureCard";

export function Capture({ content }: { content: typeof CaptureContent }) {
  return (
    <Section id="capture" tone="deep" labelledBy="co-capture" className="co-sec">
      <div className="v2-split co-capture">
        <div className="co-capture__media">
          <div className="co-capture__glow" aria-hidden="true" />
          <PhoneFrame src={content.phone.src} alt={content.phone.alt} width={300} framed className="co-capture__phone" />
        </div>
        <div>
          <Badge icon={content.badge.icon}>{content.badge.text}</Badge>
          <h2 id="co-capture" className="v2-h2 co-maxw-560">{content.title}</h2>
          <p className="v2-lead">{content.body}</p>
          <div className="co-capture__features">
            {content.features.map((f) => <FeatureCard key={f.title} item={f} />)}
          </div>
        </div>
      </div>
    </Section>
  );
}
