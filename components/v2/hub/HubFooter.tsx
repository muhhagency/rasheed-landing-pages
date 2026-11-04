import Link from "next/link";
import { SOCIALS } from "@/components/layout/SocialIcons";
import { UI, type Locale } from "@/components/v2/i18n";

// Slim footer row from the hub canvas.
export function HubFooter({ copyright, links, locale = "en", navLabel }: {
  locale?: Locale;
  navLabel: string;
  copyright: string;
  links: { label: string; href: string; mobileHidden?: boolean }[];
}) {
  return (
    <footer className="hub-footer">
      <span className="hub-footer__copy">{copyright}</span>
      <nav aria-label={navLabel} className="hub-footer__nav">
        {links.map((l) => {
          const cls = l.mobileHidden ? "hub-desk-only" : undefined;
          return l.href.startsWith("/") ? (
            <Link key={l.label} href={l.href} className={cls}>{l.label}</Link>
          ) : (
            <a key={l.label} href={l.href} className={cls}>{l.label}</a>
          );
        })}
      </nav>
      <div className="hub-footer__socials">
        {SOCIALS.map(({ key, label, href, Icon: S }) => (
          <a key={key} href={href} aria-label={UI[locale].footer.socialOn(label)} target="_blank" rel="noopener noreferrer"><S /></a>
        ))}
      </div>
    </footer>
  );
}
