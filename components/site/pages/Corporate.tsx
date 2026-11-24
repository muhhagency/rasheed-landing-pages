import { Browser, Panel, Phone } from "@/components/site/Frames";
import { PocketEdge } from "@/components/site/PocketEdge";
import { PocketTile } from "@/components/site/PocketTile";
import { Intro } from "@/components/site/Intro";
import { ClosingPocket, FaqList, Steps, TrustLine } from "@/components/site/Blocks";
import { Button } from "@/components/ui/Button";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { IMAGES } from "@/components/ui/assetManifest";
import { CONTACT_CTA_LABEL, CONTACT_EMAIL_HREF, PHONE_HREF, PHONE_LABEL } from "@/components/layout/contact";
import { CAPTURE, CONTROL, FINAL_CTA, HERO, HOW, POCKET, REPORTS } from "@/content/corporate";
import { FAQ_CORPORATE } from "@/content/site/faq";

const contact = (
  <>
    <Button href={CONTACT_EMAIL_HREF} size="lg">{CONTACT_CTA_LABEL}</Button>
    <Button href={PHONE_HREF} size="lg" variant="secondary">{PHONE_LABEL}</Button>
  </>
);

export function Corporate() {
  return (
    <>
      <section className="hero hero--split hero--sand hero--photo">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <h1>{HERO.headline}</h1>
            <p>{HERO.sub}</p>
            <div className="hero__actions">{contact}</div>
          </div>
          <div className="hero__photo">
            <ResponsiveImage asset={IMAGES.corporateHero} alt="A team working together in a bright modern office" priority sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
        </div>
        <PocketEdge className="pocket-edge--hero" />
      </section>

      <section className="section section--pocket" id="business-pocket">
        <div className="wrap split">
          <div>
            <Intro kicker={POCKET.kicker} headline={POCKET.headline} body={POCKET.body} />
            <ul className="members" aria-label="Teams in one pocket">
              {POCKET.members.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
          <div className="split__tile">
            <PocketTile type="business" name="Marketing" spent="62,400" left="17,600 left" cycle="Monthly" />
          </div>
        </div>
      </section>

      <section className="section" id="team">
        <div className="wrap">
          <Intro kicker={CONTROL.kicker} headline={CONTROL.headline} />
          <Browser name="corporate-portal" label="Portal design preview, sample data" alt="Corporate portal overview with spend, approvals and departments" />
          <dl className="pillars">
            {CONTROL.pillars.map((p) => (
              <div key={p.name}>
                <dt>{p.name}</dt>
                <dd>{p.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section section--sand">
        <div className="wrap split split--reverse">
          <div className="split__media split__media--panel">
            <Phone name="approval-status" alt="A work expense waiting for manager review in Rasheed" />
          </div>
          <div>
            <Intro kicker={CAPTURE.kicker} headline={CAPTURE.headline} body={CAPTURE.body} />
            <dl className="pair">
              {CAPTURE.modes.map((m) => (
                <div key={m.name}>
                  <dt>{m.name}</dt>
                  <dd>{m.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section" id="reports">
        <div className="wrap split">
          <Intro kicker={REPORTS.kicker} headline={REPORTS.headline} body={REPORTS.body} />
          <Panel name="corporate-review" label="Portal design preview, sample data" alt="Reviewing one expense with its receipt, VAT and approval steps" />
        </div>
      </section>

      <Steps kicker={HOW.kicker} headline={HOW.headline} steps={HOW.steps} />
      <TrustLine />
      <FaqList items={FAQ_CORPORATE} />
      <ClosingPocket headline={FINAL_CTA.headline} body={FINAL_CTA.body}>{contact}</ClosingPocket>
    </>
  );
}
