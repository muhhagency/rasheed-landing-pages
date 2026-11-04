import Link from "next/link";
import { SOCIALS } from "@/components/layout/SocialIcons";
import { LangToggle } from "@/components/layout/LangToggle";
import { Icon } from "@/components/v2/ui/Icon";
import { AppLink } from "@/components/v2/ui/AppLink";
import { localePath, UI, type Locale } from "@/components/v2/i18n";
import { APP_HREF, CONTACT, PAGE_PATH, type PageKey } from "./contact";

// Footer for every inner page. B2B pages swap the app button for Book a demo
// and add phone + WhatsApp.
export function SiteFooter({ page, locale = "en" }: { page: Exclude<PageKey, "hub">; locale?: Locale }) {
  const b2b = page === "retailers" || page === "corporates";
  const t = UI[locale];
  const f = t.footer;
  const lp = (k: PageKey) => localePath(locale, PAGE_PATH[k]);
  return (
    <footer className="v2-footer">
      <div className="v2-container">
        <div className="v2-footer__grid">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/v2/logo-dark-clean.svg" alt={t.logoAlt} width={136} height={44} />
            <p className="v2-footer__tag">{f.tag}</p>
            <p className="v2-footer__sub">{f.sub}</p>
            {b2b ? (
              <a className="v2-btn v2-btn--primary v2-btn--sm v2-footer__cta" href={CONTACT.demoHref}><Icon name="calendar" />{t.bookDemo}</a>
            ) : (
              <AppLink className="v2-btn v2-btn--primary v2-btn--sm v2-footer__cta" fallback={APP_HREF[locale]}>{t.getApp}<Icon name="download" /></AppLink>
            )}
          </div>
          <nav aria-label={f.headRasheed} className="v2-footer__col">
            <div className="v2-footer__head">{f.headRasheed}</div>
            <Link href={lp("app")}>{f.shoppers}</Link>
            <Link href={lp("retailers")}>{f.retailers}</Link>
            <Link href={lp("corporates")}>{f.corporates}</Link>
            <Link href={lp("news")}>{f.news}</Link>
          </nav>
          <nav aria-label={f.headCompany} className="v2-footer__col">
            <div className="v2-footer__head">{f.headCompany}</div>
            <a href="mailto:info@rasheedapp.com?subject=Support">{f.support}</a>
            <a href="/privacy">{f.privacy}</a>
            <a href="/terms">{f.terms}</a>
          </nav>
          <div className="v2-footer__col">
            <div className="v2-footer__head">{f.headContact}</div>
            <a href={`mailto:${CONTACT.infoEmail}`}>{CONTACT.infoEmail}</a>
            <a href={`mailto:${CONTACT.salesEmail}`}>{CONTACT.salesEmail}</a>
            {b2b && <a href={CONTACT.phoneHref} className="v2-footer__icon-link"><Icon name="phone" /><bdi dir="ltr">{CONTACT.phoneLabel}</bdi></a>}
            {b2b && <a href={CONTACT.whatsappHref} className="v2-footer__icon-link"><Icon name="chat" />{f.whatsapp} <bdi dir="ltr">{CONTACT.phoneLabel}</bdi></a>}
            <div className="v2-footer__socials">
              {SOCIALS.map(({ key, label, href, Icon: S }) => (
                <a key={key} href={href} aria-label={f.socialOn(label)} target="_blank" rel="noopener noreferrer"><S /></a>
              ))}
            </div>
          </div>
        </div>
        <div className="v2-footer__bottom">
          <span>{f.rights}</span>
          <LangToggle locale={locale} path={PAGE_PATH[page]} />
        </div>
      </div>
    </footer>
  );
}
