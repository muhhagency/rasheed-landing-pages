import "../retailer.css";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { IMAGES } from "@/components/ui/assetManifest";
import { Kicker } from "@/components/ui/Kicker";
import { TapCeipt } from "@/components/ui/TapCeipt";
import { MEET } from "@/content/retailer";

// #why-tapceipt — the page's showpiece. Dark, moody, wordmark set large.
export function Meet() {
  return (
    <Section id="why-tapceipt" tone="dark">
      <Container>
        <div className="r-meet__grid">
          <div className="r-meet__copy">
            {/* No tone override: ui-section--dark rebinds --text-body, so the
                default kicker already resolves light. */}
            <Kicker rule>{MEET.kicker}</Kicker>
            {/* The one place TapCeipt should feel like a logo, set large. */}
            <span className="r-meet__wordmark">
              <TapCeipt />
            </span>
            <h2 className="h2 r-meet__headline">{MEET.headline}</h2>
            <p className="body-lg r-meet__body">{MEET.body}</p>
          </div>
          <div className="r-meet__media">
            <ResponsiveImage
              asset={IMAGES.tapceiptDark}
              alt="The TapCeipt device"
              className="ui-image--1-1"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
