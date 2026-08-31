import "../corporate.css";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { IMAGES } from "@/components/ui/assetManifest";
import { Kicker } from "@/components/ui/Kicker";
import { REPORTS } from "@/content/corporate";

// #reports — restrained; legibility over drama. Department report + export.
export function Reports() {
  return (
    <Section id="reports" tone="subtle">
      <Container>
        <div className="c-reports__grid">
          <div className="c-reports__copy">
            <Kicker rule>{REPORTS.kicker}</Kicker>
            <h2 className="h2 c-reports__headline">{REPORTS.headline}</h2>
            <p className="body-lg c-reports__body">{REPORTS.body}</p>
          </div>
          <ResponsiveImage
            asset={IMAGES.corporateReports}
            alt="Printed documents and a notebook on a desk beside a laptop"
            className="ui-image--4-3"
          />
        </div>
      </Container>
    </Section>
  );
}
