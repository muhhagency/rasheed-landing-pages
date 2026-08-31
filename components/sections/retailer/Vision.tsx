import "../retailer.css";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { VISION } from "@/content/retailer";

// #vision-2030 — restrained and credible. Brand/neutral only, NOT the
// Green Score palette (that belongs to the consumer page).
export function Vision() {
  return (
    <Section id="vision-2030">
      <Container>
        <div className="r-vision__grid">
          <Kicker rule>{VISION.kicker}</Kicker>
          <h2 className="h2 r-vision__headline">{VISION.headline}</h2>
          <p className="body-lg r-vision__body">{VISION.body}</p>
        </div>
      </Container>
    </Section>
  );
}
