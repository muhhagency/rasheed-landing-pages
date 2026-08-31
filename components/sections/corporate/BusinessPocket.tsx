import "../corporate.css";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { POCKET } from "@/content/corporate";

// #business-pocket — one Pocket (the same family from /app), configured for
// teams: a single pocket with multiple members attached.
export function BusinessPocket() {
  return (
    <Section id="business-pocket">
      <Container>
        <div className="c-pocket__grid">
          <div className="c-pocket__copy">
            <Kicker rule>{POCKET.kicker}</Kicker>
            <h2 className="h2 c-pocket__headline">{POCKET.headline}</h2>
            <p className="body-lg c-pocket__body">{POCKET.body}</p>
          </div>

          <div className="c-pocket-viz">
            <span className="c-pocket-viz__label">Business Pocket</span>
            <span className="c-pocket-viz__name">One shared pocket</span>
            <div className="c-pocket-viz__members">
              {POCKET.members.map((m) => (
                <span key={m} className="c-pocket-viz__member">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
