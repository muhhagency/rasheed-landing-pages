import type { ReactNode } from "react";
import { Intro } from "./Intro";
import { PocketEdge } from "./PocketEdge";

export type Faq = { q: ReactNode; a: ReactNode };

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <section className="section" id="faq">
      <div className="wrap faq">
        <Intro headline="Questions people ask" />
        <div className="faq__list">
          {items.map((item, i) => (
            <details key={i} className="faq__item" open={i === 0}>
              <summary className="ui-focusable">
                <span>{item.q}</span>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Steps({
  headline,
  kicker,
  steps,
}: {
  kicker: ReactNode;
  headline: ReactNode;
  steps: { title: ReactNode; body: ReactNode }[];
}) {
  return (
    <section className="section">
      <div className="wrap">
        <Intro kicker={kicker} headline={headline} />
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={i} className="steps__item">
              <span className="steps__n" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const TRUST = [
  "KSA data protection",
  "Bank-grade encryption",
  "Aligned with Vision 2030 & Saudi Green Initiative",
  "No data selling",
  "Guest-first — try before you sign up",
];

export function TrustLine() {
  return (
    <section className="trust" aria-label="Trust">
      <ul className="wrap trust__list">
        {TRUST.map((z) => (
          <li key={z}>{z}</li>
        ))}
      </ul>
    </section>
  );
}

export function ClosingPocket({
  id,
  headline,
  body,
  children,
}: {
  id?: string;
  headline: ReactNode;
  body: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="closing" id={id}>
      <PocketEdge />
      <div className="closing__in">
        <div className="wrap closing__content">
          <h2>{headline}</h2>
          <p>{body}</p>
          <div className="closing__actions">{children}</div>
        </div>
      </div>
    </section>
  );
}
