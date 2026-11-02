"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LangToggle } from "@/components/layout/LangToggle";
import { Icon } from "@/components/v2/ui/Icon";
import { AppLink } from "@/components/v2/ui/AppLink";
import { NAV, HEADER_CTA, CONTACT, type PageKey } from "./contact";

// Redesign header. Sits on top of each page's hero (transparent), gains a
// stage background once the page scrolls. Mobile: menu button → full panel.
export function SiteHeader({ page }: { page: Exclude<PageKey, "hub"> }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const cta = HEADER_CTA[page];

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`v2-header${scrolled ? " v2-header--scrolled" : ""}`}>
      <div className="v2-container v2-header__bar">
        <Link href="/" aria-label="Rasheed home" className="v2-header__logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/v2/logo-dark-clean.svg" alt="Rasheed" width={124} height={40} />
        </Link>
        <nav aria-label="Main" className="v2-header__nav">
          {NAV.map((n) => (
            <Link key={n.key} href={n.href} aria-current={n.key === page ? "page" : undefined} className="v2-header__link">
              {n.label}
            </Link>
          ))}
          <LangToggle />
          {cta.href === CONTACT.appHref ? (
            <AppLink className="v2-btn v2-btn--primary v2-btn--sm">{cta.label}</AppLink>
          ) : (
            <a className="v2-btn v2-btn--primary v2-btn--sm" href={cta.href}>{cta.label}</a>
          )}
        </nav>
        <button type="button" className="v2-header__menu" aria-expanded={open} aria-controls="v2-mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          <Icon name={open ? "close" : "menu"} strokeWidth={2} />
        </button>
      </div>
      {open && (
        <div id="v2-mobile-menu" className="v2-header__panel">
          <nav aria-label="Main" className="v2-container">
            {NAV.map((n) => (
              <Link key={n.key} href={n.href} aria-current={n.key === page ? "page" : undefined} className="v2-header__panel-link" onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            ))}
            <div className="v2-header__panel-foot">
              {cta.href === CONTACT.appHref ? (
                <AppLink className="v2-btn v2-btn--primary" onClick={() => setOpen(false)}>{cta.label}</AppLink>
              ) : (
                <a className="v2-btn v2-btn--primary" href={cta.href}>{cta.label}</a>
              )}
              <LangToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
