import type { SH_HERO } from "@/content/v2/shoppers";
import { Badge } from "@/components/v2/ui/Badge";
import { Button } from "@/components/v2/ui/Button";
import { FlipHeadline } from "@/components/v2/ui/FlipHeadline";
import { Icon } from "@/components/v2/ui/Icon";
import { PhoneFrame } from "./PhoneFrame";
import { CelebrationScene } from "./CelebrationScene";

// Hero: rotating headline on the left, a 640x760 phone composition on the
// right (scaled as one piece to fit narrower screens).
export function ShHero({ content: c }: { content: typeof SH_HERO }) {
  return (
    <section className="sh-hero" aria-label={c.headline.label}>
      <div className="v2-container sh-hero__inner">
        <div className="sh-hero__text">
          <Badge icon={c.badge.icon}>{c.badge.label}</Badge>
          <FlipHeadline className="sh-hero__title" lead={c.headline.lead} lines={c.headline.lines} label={c.headline.label} />
          <p className="sh-hero__lead">{c.lead}</p>
          <div className="v2-btn-row v2-btn-row--stack sh-hero__ctas">
            {c.ctas.map((b) => (
              <Button key={b.label} href={b.href} variant={b.variant} iconEnd={b.icon}>{b.label}</Button>
            ))}
          </div>
          <p className="sh-hero__note">{c.note}</p>
        </div>
      </div>
      <div className="sh-art sh-hero__art" role="img" aria-label={c.art.label}>
        <div className="sh-art__stage">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="sh-shot sh-hero__ph1" src={c.art.gifts} width={616} height={1256} alt="" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="sh-shot sh-hero__ph2" src={c.art.home} width={616} height={1256} alt="" />
          <PhoneFrame className="sh-hero__ph3">
            <CelebrationScene />
          </PhoneFrame>
          <div className="sh-card v2-float sh-hero__earned">
            <span className="sh-hero__earned-icon"><Icon name="leaf" /></span>
            <span>
              <span className="sh-card__sub">{c.earned.kicker}</span>
              <span className="sh-hero__earned-value">{c.earned.value}</span>
            </span>
          </div>
          <div className="sh-card v2-float sh-hero__saved">
            <span className="sh-tick"><Icon name="check" strokeWidth={2.6} /></span>
            <span>
              <span className="sh-card__title">{c.saved.title}</span>
              <span className="sh-card__sub">{c.saved.sub}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
