import Link from "next/link";
import { Phone } from "@/components/site/Frames";
import { PocketEdge } from "@/components/site/PocketEdge";
import { Steps, TrustLine } from "@/components/site/Blocks";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { DOORS, HUB_HERO, HUB_JOURNEY } from "@/content/site/hub";

export function Hub() {
  return (
    <>
      <section className="hero hero--hub">
        <div className="wrap hero__copy hero__copy--center">
          <h1>{HUB_HERO.headline}</h1>
          <p>{HUB_HERO.sub}</p>
        </div>
        <div className="hero__rise" >
          <Phone name="pockets" className="phone--side" alt="Three pockets in Rasheed: personal, family and work" />
          <Phone name="receipt-front" priority alt="A digital receipt from Panda Market in Rasheed" />
          <Phone name="points" className="phone--side" alt="Green Points balance and gifts in Rasheed" />
        </div>
        <PocketEdge className="pocket-edge--hero" />
      </section>

      <section className="doors" aria-label="Choose your Rasheed">
        <div className="wrap doors__grid">
          {DOORS.map((d) => (
            <Link key={d.href} href={d.href} className={`door door--${d.tone} ui-focusable`}>
              <span className="door__text">
                <span className="door__kicker">{d.kicker}</span>
                <span className="door__title">{d.headline}</span>
                <span className="door__body">{d.body}</span>
                <span className="door__cta">{d.cta}</span>
              </span>
              <ResponsiveImage asset={d.asset} alt={d.alt} sizes="(max-width: 900px) 100vw, 33vw" className="door__img" />
            </Link>
          ))}
        </div>
      </section>

      <Steps kicker={HUB_JOURNEY.kicker} headline={HUB_JOURNEY.headline} steps={HUB_JOURNEY.steps} />
      <TrustLine />
    </>
  );
}
