import "../consumer.css";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { POCKETS } from "@/content/consumer";

function ArrowIcon() {
  return (
    <svg
      className="pocket-lifecycle__arrow"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SlicesIcon() {
  return (
    <svg
      className="slices-callout__icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v9l6.5 3.5" strokeLinecap="round" />
    </svg>
  );
}

const BADGE_LABEL: Record<string, string> = {
  solo: "Solo",
  ongoing: "Ongoing",
  lifecycle: "One-off",
};

// #features — Money that makes sense. Three structurally different cards.
export function Pockets() {
  return (
    <Section id="features">
      <Container>
        <div className="section-head">
          <Kicker rule>{POCKETS.kicker}</Kicker>
          <h2 className="h2 section-head__headline">{POCKETS.headline}</h2>
          <p className="body-lg section-head__sub">{POCKETS.sub}</p>
        </div>

        <div className="pockets__grid">
          {POCKETS.cards.map((card) => (
            <article
              key={card.name}
              className={`pocket-card pocket-card--${card.kind}`}
            >
              <span className="pocket-card__badge">{BADGE_LABEL[card.kind]}</span>
              <h3 className="pocket-card__name">{card.name}</h3>
              <p className="pocket-card__body">{card.body}</p>

              {/* Fallah's lifecycle — the trait the other two don't have. */}
              {card.kind === "lifecycle" && (
                <div className="pocket-lifecycle" aria-hidden="true">
                  <span className="pocket-lifecycle__step">Accumulate</span>
                  <ArrowIcon />
                  <span className="pocket-lifecycle__step">Settle</span>
                  <ArrowIcon />
                  <span className="pocket-lifecycle__step">Close</span>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Slices — a property of every pocket, subordinate to the cards. */}
        <div className="slices-callout">
          <SlicesIcon />
          <p className="body-md">{POCKETS.slicesCallout}</p>
        </div>
      </Container>
    </Section>
  );
}
