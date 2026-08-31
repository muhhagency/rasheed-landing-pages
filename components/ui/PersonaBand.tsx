import type { ReactNode } from "react";
import type { ImageAsset } from "./assetManifest";
import "./PersonaBand.css";
import { Container } from "./Container";
import { Kicker } from "./Kicker";
import { Button } from "./Button";
import { ResponsiveImage } from "./ResponsiveImage";
import { Reveal } from "./Reveal";

type PersonaBandProps = {
  kicker: string;
  headline: string;
  // Widened from `string` to allow the TapCeipt wordmark component inline
  // (a plain string is still valid). See docs/phase-3-hub.md band 2.
  body: ReactNode;
  ctaLabel: string;
  ctaHref: string;
  media: {
    asset: ImageAsset;
    ratio: "4/3" | "3/4" | "1/1";
    alt: string;
    priority?: boolean;
  };
  tone: "default" | "subtle" | "dark";
  reverse?: boolean; // media on the left instead of the right
};

function ArrowRight() {
  return (
    <svg
      className="persona-band__cta-arrow"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PersonaBand({
  kicker,
  headline,
  body,
  ctaLabel,
  ctaHref,
  media,
  tone,
  reverse = false,
}: PersonaBandProps) {
  // Dark band: primary CTA reads better on the surface; otherwise secondary.
  const ctaVariant = tone === "dark" ? "primary" : "secondary";
  const kickerTone = tone === "dark" ? "on-dark" : "default";

  return (
    <section
      className={[
        "persona-band",
        `persona-band--${tone}`,
        reverse ? "persona-band--reverse" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Container>
        <Reveal>
          <div className="persona-band__grid">
            <div className="persona-band__copy">
              <Kicker tone={kickerTone} rule>
                {kicker}
              </Kicker>
              <h2 className="h2 persona-band__headline">{headline}</h2>
              <p className="body-lg persona-band__body">{body}</p>
              <div className="persona-band__cta">
                <Button variant={ctaVariant} size="lg" href={ctaHref}>
                  {ctaLabel}
                  <ArrowRight />
                </Button>
              </div>
            </div>

            <div className="persona-band__media">
              <ResponsiveImage
                asset={media.asset}
                alt={media.alt}
                className={`ui-image--${media.ratio.replace("/", "-")}`}
                priority={media.priority}
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
