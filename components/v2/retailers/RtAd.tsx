import { Badge } from "@/components/v2/ui/Badge";
import { Section } from "@/components/v2/ui/Section";
import type { RT_AD } from "@/content/v2/retailers";
import { PhoneFrame } from "./PhoneFrame";

export function RtAd({ content }: { content: typeof RT_AD }) {
  const c = content;
  return (
    <Section tone="up" labelledBy="rt-ad" className="rt-ad">
      <div className="v2-split">
        <div>
          <Badge icon="megaphone">{c.badge}</Badge>
          <h2 id="rt-ad" className="v2-h2">{c.h2}</h2>
          <p className="v2-lead">{c.lead}</p>
          <div className="rt-ad__cards">
            {c.cards.map((k) => (
              <div key={k.title} className="rt-ad__card">
                <h3 className="rt-ad__title">{k.title}</h3>
                <p className="rt-ad__body">{k.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rt-ad__stage">
          <div className="rt-glow" aria-hidden="true" />
          <div className="rt-ad__phone">
            <PhoneFrame src={c.phone.src} alt={c.phone.alt} width={292} framed className="rt-phone--shadow" />
            <div className="rt-ad__pulse" aria-hidden="true" />
            <div className="rt-ad__tag" aria-hidden="true">
              <span className="rt-ad__line" />
              <span className="rt-ad__pill">{c.tag}</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
