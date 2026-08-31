import type { ReactNode } from "react";
import "./sections.css";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";

type HowItWorksProps = {
  kicker: string;
  // Tone is set by the page, not fixed here: this section is shared, and each
  // page needs it to alternate against different neighbours.
  tone?: "default" | "subtle";
  headline: string;
  // `title` widened from string to allow the TapCeipt wordmark inline
  // (e.g. "Deploy TapCeipt"); a plain string is still valid.
  steps: { title: ReactNode; body: ReactNode }[]; // always 3
};

export function HowItWorks({
  kicker,
  headline,
  steps,
  tone = "default",
}: HowItWorksProps) {
  return (
    <Section tone={tone}>
      <Container>
        <div className="how-it-works__head">
          <Kicker rule>{kicker}</Kicker>
          <h2 className="h2">{headline}</h2>
        </div>
        <ol className="how-it-works__steps">
          {steps.map((step, i) => (
            <li key={i} className="how-step">
              <span className="how-step__num" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="how-step__title">{step.title}</h3>
              <p className="how-step__body">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
