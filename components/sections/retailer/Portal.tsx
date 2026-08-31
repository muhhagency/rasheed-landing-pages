import "../retailer.css";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { IMAGES } from "@/components/ui/assetManifest";
import { Kicker } from "@/components/ui/Kicker";
import { PillarGrid } from "@/components/sections/PillarGrid";
import { PORTAL } from "@/content/retailer";

// #portal — four pillars 2×2 + a portal dashboard placeholder.
export function Portal() {
  return (
    <Section id="portal">
      <Container>
        <div className="section-head">
          <Kicker rule>{PORTAL.kicker}</Kicker>
          <h2 className="h2 section-head__headline">{PORTAL.headline}</h2>
          <p className="body-lg section-head__sub">{PORTAL.body}</p>
        </div>

        <div className="r-portal__grid">
          <PillarGrid pillars={PORTAL.pillars} />
          <ResponsiveImage
            asset={IMAGES.retailerPortal}
            alt="A modern Saudi supermarket interior with several checkout lanes"
            className="ui-image--16-9"
          />
        </div>
      </Container>
    </Section>
  );
}
