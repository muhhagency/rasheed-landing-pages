import type { ReactNode } from "react";
import "./sections.css";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { StoreButton } from "@/components/ui/StoreButton";
import { Button } from "@/components/ui/Button";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { UrlIndicator } from "@/components/ui/UrlIndicator";
import {
  CONTACT_CTA_LABEL,
  CONTACT_EMAIL_HREF,
  PHONE_HREF,
  PHONE_LABEL,
} from "@/components/layout/contact";

type FinalCtaProps = {
  headline: string;
  // Widened from string so a TapCeipt wordmark can be embedded (e.g. the
  // retailer CTA body); a plain string is still valid.
  body: ReactNode;
  // 'stores'   — store buttons + QR codes (consumer)
  // 'business'  — Sign Up + Log in + portal URL indicator (B2B)
  // 'contact'   — Contact us (mailto) + phone (tel:)
  // 'none'      — headline and body only, no action row.
  //
  // 'contact' is in use on BOTH B2B pages while /signup and the portals are not
  // live. The 'business' branch below is intact and unused; restoring it is a
  // one-word change per page. See docs/phase-7-polish.md § Temporarily removed.
  actions: "stores" | "business" | "contact" | "none";
  loginHref?: string; // required when actions='business'
  // Portal host shown under the B2B buttons, matching the hero CTA pattern.
  loginUrlLabel?: string; // required when actions='business'
  id?: string;
};

export function FinalCta({
  headline,
  body,
  actions,
  loginHref,
  loginUrlLabel,
  id,
}: FinalCtaProps) {
  return (
    <Section tone="brand" id={id}>
      <Container width="narrow">
        {/* With no action row, the flex `gap` that separated headline / body /
            actions would leave the section bottom-heavy, so the copy-only case
            gets its own modifier that tightens the stack. */}
        <div
          className={`final-cta${actions === "none" ? " final-cta--copy-only" : ""}`}
        >
          <h2 className="h2 final-cta__headline">{headline}</h2>
          <p className="body-lg final-cta__body">{body}</p>

          {actions === "none" ? null : actions === "contact" ? (
            <div className="final-cta__actions">
              <Button variant="primary" size="lg" href={CONTACT_EMAIL_HREF}>
                {CONTACT_CTA_LABEL}
              </Button>
              {/* tel: so a mobile visitor taps to dial rather than copying. */}
              <Button variant="secondary" size="lg" href={PHONE_HREF}>
                {PHONE_LABEL}
              </Button>
            </div>
          ) : actions === "stores" ? (
            <>
              <div className="final-cta__actions">
                <StoreButton store="appstore" tone="light" />
                <StoreButton store="googleplay" tone="light" />
              </div>
              {/* QR codes: PlaceholderMedia 1/1 until build-time QR generation
                  is wired. No third-party QR API at runtime (per Phase 4). */}
              <div className="final-cta__qrs">
                <div className="final-cta__qr">
                  <PlaceholderMedia
                    aspectRatio="1/1"
                    label="iOS QR"
                    alt="QR code linking to Rasheed on the App Store"
                  />
                  <span className="final-cta__qr-label">iOS</span>
                </div>
                <div className="final-cta__qr">
                  <PlaceholderMedia
                    aspectRatio="1/1"
                    label="Android QR"
                    alt="QR code linking to Rasheed on Google Play"
                  />
                  <span className="final-cta__qr-label">Android</span>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="final-cta__actions">
                <Button variant="primary" size="lg" href="/signup">
                  Sign Up
                </Button>
                {loginHref && (
                  <Button variant="ghost" size="lg" href={loginHref}>
                    Log in
                  </Button>
                )}
              </div>
              {/* Same URL indicator as the hero CTA — the B2B pattern is
                  presented identically in both places. */}
              {loginUrlLabel && (
                <span className="final-cta__url">
                  <UrlIndicator url={loginUrlLabel} />
                </span>
              )}
            </>
          )}
        </div>
      </Container>
    </Section>
  );
}
