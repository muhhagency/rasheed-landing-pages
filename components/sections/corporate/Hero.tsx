import "../sections.css";
import { Container } from "@/components/ui/Container";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { IMAGES } from "@/components/ui/assetManifest";
import { Kicker } from "@/components/ui/Kicker";
import { Button } from "@/components/ui/Button";
import {
  CONTACT_CTA_LABEL,
  CONTACT_EMAIL_HREF,
  PHONE_HREF,
  PHONE_LABEL,
} from "@/components/layout/contact";
import { HERO } from "@/content/corporate";

// Hero — dashboard-forward, so the media is 16/9 (landscape), not 4/3 or 3/4.
export function Hero() {
  return (
    <section className="b2b-hero">
      <Container>
        <div className="b2b-hero__grid">
          <div className="b2b-hero__copy">
            <Kicker rule>{HERO.kicker}</Kicker>
            <h1 className="h1 b2b-hero__headline">{HERO.headline}</h1>
            <p className="body-lg b2b-hero__sub">{HERO.sub}</p>
            {/* Sign Up / Log in are TEMPORARILY replaced by Contact us + phone:
                /signup does not exist and the corporate portal is not live. The
                portal URL indicator that sat under the buttons is gone with
                them — that subdomain is not public. Restore (see
                docs/phase-7-polish.md § Temporarily removed):

                <div className="b2b-hero__actions">
                  <Button variant="primary" size="lg" href="/signup">
                    Sign Up
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    href="https://corporates.rasheedapp.com"
                  >
                    Log in
                  </Button>
                </div>
                <span className="b2b-hero__url">
                  <UrlIndicator url={HERO.urlIndicator} />
                </span>

                and re-import UrlIndicator. */}
            <div className="b2b-hero__actions">
              <Button variant="primary" size="lg" href={CONTACT_EMAIL_HREF}>
                {CONTACT_CTA_LABEL}
              </Button>
              {/* tel: so a mobile visitor taps to dial. Styled as the
                  secondary action, matching the Log in button it replaces. */}
              <Button variant="secondary" size="lg" href={PHONE_HREF}>
                {PHONE_LABEL}
              </Button>
            </div>
          </div>
          <div className="b2b-hero__media">
            <ResponsiveImage
              asset={IMAGES.corporateHero}
              alt="A team working together in a bright modern office"
              className="ui-image--16-9"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
