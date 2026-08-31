import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { SOCIALS } from "./SocialIcons";
import {
  FOOTER_CONFIG,
  FOOTER_TAGLINE,
  type FooterVariant,
} from "./footerConfig";

type SiteFooterProps = {
  variant: FooterVariant;
};

export function SiteFooter({ variant }: SiteFooterProps) {
  const config = FOOTER_CONFIG[variant];

  return (
    <footer className={`site-footer site-footer--${variant}`}>
      <div className="ui-container ui-container--default">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Link
              href="/"
              className="site-footer__brand-logo"
              aria-label="Rasheed home"
            >
              <Logo tone="dark" />
            </Link>
            <p className="site-footer__tagline">{FOOTER_TAGLINE}</p>
          </div>

          {config.columns.map((col) => (
            <div key={col.title} className="site-footer__col">
              <h2 className="site-footer__col-title">{col.title}</h2>
              <nav className="site-footer__links" aria-label={col.title}>
                {col.links.map((link, i) => (
                  <a key={i} href={link.href} className="site-footer__link">
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="site-footer__bar">
          <span className="site-footer__copyright">© Rasheed 2026</span>

          <div className="site-footer__social">
            {/* Entries whose href is still "#" are skipped rather than rendered
                as dead links — a social icon that goes nowhere is worse than an
                absent one. They appear automatically once SocialIcons.tsx has
                the real URL. */}
            {SOCIALS.filter(({ href }) => href !== "#").map(
              ({ key, label, href, Icon }) => (
                <a
                  key={key}
                  href={href}
                  className="site-footer__social-link"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </a>
              )
            )}
          </div>

          {/* TEMPORARILY REMOVED — <LangToggle /> (EN/AR placeholder).
              See docs/phase-7-polish.md § Temporarily removed. */}
        </div>
      </div>
    </footer>
  );
}
