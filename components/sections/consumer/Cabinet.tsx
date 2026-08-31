import "../consumer.css";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { CABINET } from "@/content/consumer";

// #cabinet — Never lose a warranty. Subtle tone; safekeeping metaphor.
export function Cabinet() {
  return (
    <Section id="cabinet" tone="subtle">
      <Container>
        <div className="cabinet__grid">
          <div className="section-head section-head--flush">
            <Kicker rule>{CABINET.kicker}</Kicker>
            <h2 className="h2 section-head__headline">{CABINET.headline}</h2>
            <p className="body-lg section-head__sub">{CABINET.body}</p>
          </div>

          {/* Layered set — filed and retrievable, not a literal cabinet. */}
          <div className="cabinet-stack">
            {CABINET.items.map((item) => (
              <div key={item} className="cabinet-file">
                <span className="cabinet-file__tab" aria-hidden="true" />
                <span className="cabinet-file__label">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
