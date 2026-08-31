import "../retailer.css";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { LOYALTY } from "@/content/retailer";

// Loyalty — no nav anchor. Copy-led beat, subtle tone.
export function Loyalty() {
  return (
    <Section tone="subtle">
      <Container width="narrow">
        <div className="r-loyalty">
          <Kicker rule>{LOYALTY.kicker}</Kicker>
          <h2 className="h2 r-loyalty__headline">{LOYALTY.headline}</h2>
          <p className="body-lg r-loyalty__body">{LOYALTY.body}</p>
        </div>
      </Container>
    </Section>
  );
}
