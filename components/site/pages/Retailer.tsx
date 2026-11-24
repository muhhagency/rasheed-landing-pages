import { Browser } from "@/components/site/Frames";
import { PocketEdge } from "@/components/site/PocketEdge";
import { Intro } from "@/components/site/Intro";
import { ClosingPocket, FaqList, Steps, TrustLine } from "@/components/site/Blocks";
import { Button } from "@/components/ui/Button";
import { TapCeipt } from "@/components/ui/TapCeipt";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { IMAGES } from "@/components/ui/assetManifest";
import { CONTACT_CTA_LABEL, CONTACT_EMAIL_HREF, PHONE_HREF, PHONE_LABEL } from "@/components/layout/contact";
import { FINAL_CTA, HERO, HOW, LOYALTY, MEET, PORTAL, VISION } from "@/content/retailer";
import { FAQ_RETAILER } from "@/content/site/faq";

const contact = (
  <>
    <Button href={CONTACT_EMAIL_HREF} size="lg">{CONTACT_CTA_LABEL}</Button>
    <Button href={PHONE_HREF} size="lg" variant="secondary">{PHONE_LABEL}</Button>
  </>
);

export function Retailer() {
  return (
    <>
      <section className="hero hero--split hero--photo">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <h1>{HERO.headline}</h1>
            <p>{HERO.sub}</p>
            <div className="hero__actions">{contact}</div>
          </div>
          <div className="hero__photo">
            <ResponsiveImage asset={IMAGES.retailerHero} alt="A customer taps a TapCeipt at a shop counter" priority sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
        </div>
        <PocketEdge className="pocket-edge--hero" />
      </section>

      <section className="section section--pocket section--showpiece" id="why-tapceipt">
        <div className="wrap split">
          <div>
            <p className="wordmark"><TapCeipt /></p>
            <Intro kicker={MEET.kicker} headline={MEET.headline} body={MEET.body} />
          </div>
          <ResponsiveImage asset={IMAGES.tapceiptDark} alt="The TapCeipt stand" sizes="(max-width: 900px) 100vw, 45vw" className="rounded" />
        </div>
      </section>

      <section className="section" id="portal">
        <div className="wrap">
          <Intro kicker={PORTAL.kicker} headline={PORTAL.headline} body={PORTAL.body} />
          <Browser name="retailer-portal" label="Portal design preview, sample data" alt="Retailer portal overview with receipts, sales, branches and alerts" />
          <dl className="pillars">
            {PORTAL.pillars.map((p, i) => (
              <div key={i}>
                <dt>{p.name}</dt>
                <dd>{p.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section section--mint" id="loyalty">
        <div className="wrap split">
          <Intro kicker={LOYALTY.kicker} headline={LOYALTY.headline} body={LOYALTY.body} />
          <div className="ticket" aria-hidden="true">
            <span className="ticket__where">Any Noor Market branch</span>
            <span className="ticket__value">SAR 20 off</span>
            <span className="ticket__exp">Found on a receipt. Expires 30 Nov</span>
          </div>
        </div>
      </section>

      <section className="section" id="vision-2030">
        <div className="wrap split split--reverse">
          <ResponsiveImage asset={IMAGES.retailerPortal} alt="A bright supermarket with digital receipts at every till" sizes="(max-width: 900px) 100vw, 50vw" className="rounded" />
          <Intro kicker={VISION.kicker} headline={VISION.headline} body={VISION.body} />
        </div>
      </section>

      <Steps kicker={HOW.kicker} headline={HOW.headline} steps={HOW.steps} />
      <TrustLine />
      <FaqList items={FAQ_RETAILER} />
      <ClosingPocket headline={FINAL_CTA.headline} body={FINAL_CTA.body}>{contact}</ClosingPocket>
    </>
  );
}
