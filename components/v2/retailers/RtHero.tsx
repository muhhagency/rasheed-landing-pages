import { Badge } from "@/components/v2/ui/Badge";
import { Button } from "@/components/v2/ui/Button";
import { FlipHeadline } from "@/components/v2/ui/FlipHeadline";
import type { RT_HERO } from "@/content/v2/retailers";
import { Marquee } from "@/components/v2/ui/Marquee";

export function RtHero({ content }: { content: typeof RT_HERO }) {
  const c = content;
  return (
    <section className="rt-hero" aria-label="Rasheed for retailers">
      <div className="rt-hero__media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="rt-hero__img"
          src={c.image.src}
          alt={c.image.alt}
          width={c.image.width}
          height={c.image.height}
          fetchPriority="high"
        />
        <div className="rt-hero__fade" aria-hidden="true" />
        <div className="rt-hero__scrim" aria-hidden="true" />
      </div>
      <div className="v2-container rt-hero__inner">
        <div className="rt-hero__main">
          <Badge icon="store">{c.badge}</Badge>
          <FlipHeadline lead={c.h1Lead} lines={c.lines} label={c.h1Label} className="rt-hero__h1" />
          <p className="rt-hero__lead">{c.lead}</p>
          <div className="v2-btn-row v2-btn-row--stack rt-hero__ctas">
            {c.ctas.map((b, i) => (
              <Button key={b.label} href={b.href} icon={b.icon} external={b.external} variant={i === 0 ? "primary" : "ghost"}>
                {b.label}
              </Button>
            ))}
          </div>
        </div>
        <div className="rt-partners">
          <p className="rt-partners__head">
            <span className="rt-partners__title">{c.partners.title}</span>
            <span className="rt-partners__note">{c.partners.note}</span>
          </p>
          <Marquee
            label={c.partners.label}
            variant="logos"
            seconds={40}
            items={c.partners.logos.map((l, i) => (
              <span key={l} className={`rt-logo rt-logo--${i}`}>{l}</span>
            ))}
          />
        </div>
      </div>
    </section>
  );
}
