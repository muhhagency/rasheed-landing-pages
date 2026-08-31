import "../consumer.css";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { REWARDS } from "@/content/consumer";

// Organic tier glyphs — a growth progression, not flat corporate icons.
function LeafGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 4C11 4 5 9 5 16c0 1.4.3 2.7.8 3.9C8 14 12 11 18 9.5 13 12 9.4 15 8 20.5c7.6.6 12-5 12-16.5z" />
    </svg>
  );
}
function PlantGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 22v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M12 15C9 15 6 13 6 9c4 0 6 2 6 6zM12 13c3 0 6-2.5 6-7-4.5 0-6 3-6 7z" />
    </svg>
  );
}
function TreeGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11 22v-5h2v5z" />
      <path d="M12 2c-3.3 0-6 2.7-6 6 0 2.6 1.7 4.8 4 5.6V15h4v-1.4c2.3-.8 4-3 4-5.6 0-3.3-2.7-6-6-6z" />
    </svg>
  );
}
function ForestGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6 21v-4h1.5v4zM16.5 21v-4H18v4z" />
      <path d="M7 3l4 6H8l3 5H3l3-5H3l4-6z" />
      <path d="M17 6l3.5 5H18l2.5 4h-7l2.5-4h-2.5L17 6z" />
    </svg>
  );
}

const TIER_GLYPHS = [LeafGlyph, PlantGlyph, TreeGlyph, ForestGlyph];

function TierArrow() {
  return (
    <svg
      className="green-tier__arrow"
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

// #rewards — the only section where the palette shifts to deepgreen.
export function Rewards() {
  const { greenScore, offersHub } = REWARDS;
  return (
    <Section id="rewards">
      <Container>
        <div className="section-head">
          <Kicker rule>{REWARDS.kicker}</Kicker>
          <h2 className="h2 section-head__headline">{REWARDS.headline}</h2>
        </div>

        <div className="rewards__grid">
          {/* Green Score — deepgreen, the louder card. The tier progression
              is the focal element: name, then the big Leaf→Forest ramp, then
              supporting copy below. */}
          <div className="green-score">
            <h3 className="green-score__name">{greenScore.name}</h3>
            <div className="green-tiers">
              {greenScore.tiers.map((tier, i) => {
                const Glyph = TIER_GLYPHS[i];
                return (
                  <div key={tier} style={{ display: "contents" }}>
                    <div className={`green-tier green-tier--${i + 1}`}>
                      <Glyph className="green-tier__glyph" />
                      <span className="green-tier__name">{tier}</span>
                    </div>
                    {i < greenScore.tiers.length - 1 && <TierArrow />}
                  </div>
                );
              })}
            </div>
            <p className="green-score__body">{greenScore.body}</p>
          </div>

          {/* Offers Hub — quieter; sample Saudi merchants as texture. */}
          <div className="offers-hub">
            <h3 className="offers-hub__name">{offersHub.name}</h3>
            <p className="offers-hub__body">{offersHub.body}</p>
            <div className="offers-hub__samples">
              {offersHub.sampleOffers.map((merchant) => (
                <div key={merchant} className="offer-chip">
                  <span className="offer-chip__merchant">{merchant}</span>
                  <span>Partner deal</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
