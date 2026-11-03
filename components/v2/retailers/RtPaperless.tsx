import { Badge } from "@/components/v2/ui/Badge";
import { Icon } from "@/components/v2/ui/Icon";
import { Section } from "@/components/v2/ui/Section";
import type { RT_PAPERLESS } from "@/content/v2/retailers";
import { PaperReceiptArt } from "./PaperReceiptArt";

export function RtPaperless({ content }: { content: typeof RT_PAPERLESS }) {
  const c = content;
  return (
    <Section tone="down" labelledBy="rt-why" className="rt-why">
      <Badge icon="leaf">{c.badge}</Badge>
      <h2 id="rt-why" className="v2-h2 rt-why__h2">
        {c.h2[0]}
        <br />
        {c.h2[1]}
      </h2>
      <div className="rt-why__compare">
        <div className="rt-paper">
          <h3 className="rt-why__label">{c.paper.label}</h3>
          <ul className="rt-why__list rt-why__list--paper">
            {c.paper.items.map((t) => (
              <li key={t}><Icon name="close" strokeWidth={2} /><span>{t}</span></li>
            ))}
          </ul>
          <PaperReceiptArt />
        </div>
        <div className="rt-digital">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="rt-digital__img"
            src={c.digital.image.src}
            alt={c.digital.image.alt}
            width={c.digital.image.width}
            height={c.digital.image.height}
            loading="lazy"
          />
          <div className="rt-digital__fade" aria-hidden="true" />
          <div className="rt-digital__body">
            <h3 className="rt-why__label rt-why__label--accent">{c.digital.label}</h3>
            <ul className="rt-why__list">
              {c.digital.items.map((t) => (
                <li key={t}><Icon name="check" strokeWidth={2.2} /><span>{t}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
