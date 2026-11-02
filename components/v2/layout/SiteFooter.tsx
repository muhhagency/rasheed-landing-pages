import Link from "next/link";
import { SOCIALS } from "@/components/layout/SocialIcons";
import { LangToggle } from "@/components/layout/LangToggle";
import { Icon } from "@/components/v2/ui/Icon";
import { CONTACT, type PageKey } from "./contact";

// Footer for every inner page. B2B pages swap the app button for Book a demo
// and add phone + WhatsApp.
export function SiteFooter({ page }: { page: Exclude<PageKey, "hub"> }) {
  const b2b = page === "retailers" || page === "corporates";
  return (
    <footer className="v2-footer">
      <div className="v2-container">
        <div className="v2-footer__grid">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/v2/logo-dark-clean.svg" alt="Rasheed" width={136} height={44} />
            <p className="v2-footer__tag">One tap. Every receipt.</p>
            <p className="v2-footer__sub">The paperless receipt for shoppers, the stores they buy from, and the teams that spend.</p>
            {b2b ? (
              <a className="v2-btn v2-btn--primary v2-btn--sm v2-footer__cta" href={CONTACT.demoHref}><Icon name="calendar" />Book a demo</a>
            ) : (
              <a className="v2-btn v2-btn--primary v2-btn--sm v2-footer__cta" href={CONTACT.appHref}>Get the app<Icon name="download" /></a>
            )}
          </div>
          <nav aria-label="Rasheed" className="v2-footer__col">
            <div className="v2-footer__head">Rasheed</div>
            <Link href="/app">For shoppers</Link>
            <Link href="/for-retailers">For retailers</Link>
            <Link href="/for-corporates">For corporates</Link>
            <Link href="/news">News and events</Link>
          </nav>
          <nav aria-label="Company" className="v2-footer__col">
            <div className="v2-footer__head">Company</div>
            <a href="mailto:info@rasheedapp.com?subject=Support">Support</a>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </nav>
          <div className="v2-footer__col">
            <div className="v2-footer__head">Contact</div>
            <a href={`mailto:${CONTACT.infoEmail}`}>{CONTACT.infoEmail}</a>
            <a href={`mailto:${CONTACT.salesEmail}`}>{CONTACT.salesEmail}</a>
            {b2b && <a href={CONTACT.phoneHref} className="v2-footer__icon-link"><Icon name="phone" />{CONTACT.phoneLabel}</a>}
            {b2b && <a href={CONTACT.whatsappHref} className="v2-footer__icon-link"><Icon name="chat" />WhatsApp {CONTACT.phoneLabel}</a>}
            <div className="v2-footer__socials">
              {SOCIALS.map(({ key, label, href, Icon: S }) => (
                <a key={key} href={href} aria-label={`Rasheed on ${label}`} target="_blank" rel="noopener noreferrer"><S /></a>
              ))}
            </div>
          </div>
        </div>
        <div className="v2-footer__bottom">
          <span>© Rasheed 2026. All rights reserved.</span>
          <LangToggle />
        </div>
      </div>
    </footer>
  );
}
