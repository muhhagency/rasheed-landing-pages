import Link from "next/link";
import { SOCIALS } from "@/components/layout/SocialIcons";

// Slim footer row from the hub canvas.
export function HubFooter({ copyright, links }: {
  copyright: string;
  links: { label: string; href: string; mobileHidden?: boolean }[];
}) {
  return (
    <footer className="hub-footer">
      <span className="hub-footer__copy">{copyright}</span>
      <nav aria-label="Footer" className="hub-footer__nav">
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
          <a key={key} href={href} aria-label={`Rasheed on ${label}`} target="_blank" rel="noopener noreferrer"><S /></a>
        ))}
      </div>
    </footer>
  );
}
