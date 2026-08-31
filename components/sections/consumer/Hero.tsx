import "../consumer.css";
import { Container } from "@/components/ui/Container";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { IMAGES } from "@/components/ui/assetManifest";
import { Kicker } from "@/components/ui/Kicker";
import { StoreButton } from "@/components/ui/StoreButton";
import { HERO } from "@/content/consumer";

export function Hero() {
  return (
    <section className="hero">
      <Container>
        <div className="hero__grid">
          <div className="hero__copy">
            <Kicker rule>{HERO.kicker}</Kicker>
            <h1 className="h1 hero__headline">{HERO.headline}</h1>
            <p className="body-lg hero__sub">{HERO.sub}</p>
            <div className="hero__actions">
              <StoreButton store="appstore" />
              <StoreButton store="googleplay" />
            </div>
          </div>
          <div className="hero__media">
            <ResponsiveImage
              asset={IMAGES.consumerHero}
              alt="A shopper tapping their phone on a TapCeipt device at a Saudi grocery checkout"
              className="ui-image--3-4"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
