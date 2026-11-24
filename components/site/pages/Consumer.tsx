import { Phone } from "@/components/site/Frames";
import { PocketEdge } from "@/components/site/PocketEdge";
import { PocketTile } from "@/components/site/PocketTile";
import { Intro } from "@/components/site/Intro";
import { ClosingPocket, FaqList, TrustLine } from "@/components/site/Blocks";
import { StoreButton } from "@/components/ui/StoreButton";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { IMAGES } from "@/components/ui/assetManifest";
import Image from "next/image";
import { CABINET, CAPTURE, FINAL_CTA, HERO, POCKETS, REWARDS } from "@/content/consumer";
import { FAQ_CONSUMER } from "@/content/site/faq";

const TILES = [
  { type: "personal", name: "Essentials", spent: "1,962", left: "3,038 left", cycle: "Monthly" },
  { type: "shared", name: "Family", spent: "2,480", left: "2,520 left", cycle: "Monthly" },
  { type: "shared", name: "AlUla trip", spent: "1,240", left: "You get back 190", cycle: "Fallah" },
] as const;

export function Consumer() {
  return (
    <>
      <section className="hero hero--split">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <h1>{HERO.headline}</h1>
            <p>{HERO.sub}</p>
            <div className="hero__actions">
              <StoreButton store="appstore" />
              <StoreButton store="googleplay" />
            </div>
          </div>
          <div className="hero__pair">
            <Phone name="receipt-front" className="phone--back" alt="A digital receipt in Rasheed" />
            <Phone name="home" priority alt="Rasheed home with pockets and recent expenses" />
          </div>
        </div>
        <PocketEdge className="pocket-edge--hero" />
      </section>

      <section className="section section--pocket" id="tapceipt">
        <div className="wrap">
          <Intro kicker={CAPTURE.kicker} headline={CAPTURE.headline} body={CAPTURE.body} />
          <div className="capture">
            <div className="capture__tap">
              <div>
                <h3>{CAPTURE.hero.name}</h3>
                <p>{CAPTURE.hero.body}</p>
              </div>
              <ResponsiveImage asset={IMAGES.tapceiptMacro} alt="A phone tapping a TapCeipt at a checkout" sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
            <ul className="capture__modes">
              {CAPTURE.modes.map((m) => (
                <li key={m.name}>
                  <h3>{m.name}</h3>
                  <p>{m.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <div className="wrap">
          <Intro kicker={POCKETS.kicker} headline={POCKETS.headline} body={POCKETS.sub} />
          <ul className="pockets">
            {POCKETS.cards.map((card, i) => (
              <li key={card.name}>
                <PocketTile {...TILES[i]} />
                <h3>{card.name}</h3>
                <p>{card.body}</p>
              </li>
            ))}
          </ul>
          <p className="callout">{POCKETS.slicesCallout}</p>
        </div>
      </section>

      <section className="section section--mint" id="rewards">
        <div className="wrap split split--reverse">
          <div className="split__media split__media--flip">
            <Phone name="receipt-back" alt="The back of a receipt showing 10 Green Points earned" />
            <Phone name="points" className="phone--lower" alt="Green Points balance, extra points and gifts" />
          </div>
          <div>
            <Intro kicker={REWARDS.kicker} headline={REWARDS.headline} />
            <dl className="pair">
              <div>
                <dt>{REWARDS.greenScore.name}</dt>
                <dd>{REWARDS.greenScore.body}</dd>
                <dd>
                  <ol className="tiers" aria-label="Green Score tiers">
                    {REWARDS.greenScore.tiers.map((z) => (
                      <li key={z}>{z}</li>
                    ))}
                  </ol>
                </dd>
              </div>
              <div>
                <dt>{REWARDS.offersHub.name}</dt>
                <dd>{REWARDS.offersHub.body}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section" id="cabinet">
        <div className="wrap split">
          <Intro kicker={CABINET.kicker} headline={CABINET.headline} body={CABINET.body} />
          <div className="split__media split__media--panel">
            <Phone name="cabinet" alt="The Cabinet with vouchers, warranty cards and medicine notes" />
          </div>
        </div>
      </section>

      <TrustLine />
      <FaqList items={FAQ_CONSUMER} />

      <ClosingPocket id="cta" headline={FINAL_CTA.headline} body={FINAL_CTA.body}>
        <StoreButton store="appstore" tone="light" />
        <StoreButton store="googleplay" tone="light" />
        <div className="qrs">
          <figure>
            <Image src="/images/qr-appstore.png" alt="QR code to download Rasheed on the App Store" width={140} height={140} />
            <figcaption>iOS</figcaption>
          </figure>
          <figure>
            <Image src="/images/qr-googleplay.png" alt="QR code to download Rasheed on Google Play" width={140} height={140} />
            <figcaption>Android</figcaption>
          </figure>
        </div>
      </ClosingPocket>
    </>
  );
}
