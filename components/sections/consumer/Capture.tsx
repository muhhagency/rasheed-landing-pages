import "../consumer.css";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { IMAGES } from "@/components/ui/assetManifest";
import { Kicker } from "@/components/ui/Kicker";
import { CAPTURE } from "@/content/consumer";

// #tapceipt — Every receipt, your way. TapCeipt is the hero of the four modes.
export function Capture() {
  return (
    <Section id="tapceipt" tone="subtle">
      <Container>
        <div className="section-head">
          <Kicker rule>{CAPTURE.kicker}</Kicker>
          <h2 className="h2 section-head__headline">{CAPTURE.headline}</h2>
          <p className="body-lg section-head__sub">{CAPTURE.body}</p>
        </div>

        <div className="capture__layout">
          {/* Hero card — TapCeipt as the default. */}
          <div className="capture-hero">
            <span className="capture-hero__label">Tap to receive</span>
            <span className="capture-hero__name">{CAPTURE.hero.name}</span>
            <p className="capture-hero__body">{CAPTURE.hero.body}</p>
            <div className="capture-hero__media">
              <ResponsiveImage
                asset={IMAGES.tapceiptMacro}
                alt="A phone tapping a TapCeipt device to receive a digital receipt"
                className="ui-image--16-9"
              />
            </div>
          </div>

          {/* Supporting trio — the fallbacks. */}
          <div className="capture-modes">
            {CAPTURE.modes.map((mode) => (
              <div key={mode.name} className="capture-mode">
                <span className="capture-mode__name">{mode.name}</span>
                <p className="capture-mode__body">{mode.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
