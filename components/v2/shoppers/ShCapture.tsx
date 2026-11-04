import type { SH_CAPTURE } from "@/content/v2/shoppers";
import { Badge } from "@/components/v2/ui/Badge";
import { Icon } from "@/components/v2/ui/Icon";
import { Section } from "@/components/v2/ui/Section";

export function ShCapture({ content: c }: { content: typeof SH_CAPTURE }) {
  return (
    <Section id={c.id} tone="down" labelledBy="sh-capture" className="sh-capture">
      <Badge icon={c.badge.icon}>{c.badge.label}</Badge>
      <h2 id="sh-capture" className="v2-h2">{c.title}</h2>
      <div className="sh-capture__grid">
        <div className="sh-capture__feature">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="sh-capture__img" src={c.feature.image.src} width={c.feature.image.width} height={c.feature.image.height} alt={c.feature.image.alt} loading="lazy" />
          <div className="sh-capture__fade" />
          <div className="sh-capture__copy">
            <span className="sh-pill">{c.feature.tag}</span>
            <h3 className="sh-capture__title">{c.feature.title}</h3>
            <p className="sh-capture__body">{c.feature.body}</p>
          </div>
        </div>
        <ul className="sh-capture__ways">
          {c.ways.map((w) => (
            <li key={w.title} className="sh-way">
              <span className="sh-way__icon"><Icon name={w.icon} /></span>
              <h3 className="sh-way__title">{w.title}</h3>
              <p className="sh-way__body">{w.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
