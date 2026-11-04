import { Badge } from "@/components/v2/ui/Badge";
import { Icon } from "@/components/v2/ui/Icon";
import { Section } from "@/components/v2/ui/Section";
import type { RT_TILL } from "@/content/v2/retailers";

export function RtTill({ content }: { content: typeof RT_TILL }) {
  const c = content;
  return (
    <Section id="how" tone="raised" labelledBy="rt-till" className="rt-till">
      <div className="v2-split--head">
        <div>
          <Badge icon="receipt">{c.badge}</Badge>
          <h2 id="rt-till" className="v2-h2">{c.h2}</h2>
        </div>
        <p className="rt-intro">{c.intro}</p>
      </div>
      <div className="rt-till__stage">
        <div className="rt-till__media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={c.image.src} alt={c.image.alt} width={c.image.width} height={c.image.height} loading="lazy" />
          <div className="rt-till__fade" aria-hidden="true" />
        </div>
        <ol className="rt-till__steps">
          {c.steps.map((s, i) => (
            <li key={i}>
              <span className="rt-num" aria-hidden="true">{i + 1}</span>
              <div>
                <h3 className="rt-till__title">{s.title}</h3>
                <p className="rt-till__body">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="rt-chip rt-till__note">
          <span className="rt-chip__icon"><Icon name="doc" /></span>
          <span><b>{c.note.strong}</b> {c.note.text}</span>
        </p>
      </div>
    </Section>
  );
}
