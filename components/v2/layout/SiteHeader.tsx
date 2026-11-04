"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LangToggle } from "@/components/layout/LangToggle";
import { Icon } from "@/components/v2/ui/Icon";
import { AppLink } from "@/components/v2/ui/AppLink";
import { localePath, UI, type Locale } from "@/components/v2/i18n";
import { APP_HREF, CONTACT, HEADER_CTA_KIND, NAV_KEYS, PAGE_PATH, type PageKey } from "./contact";

// Redesign header. Sits on top of each page's hero (transparent), gains a
// stage background once the page scrolls. Mobile: menu button → full panel.
export function SiteHeader({ page, locale = "en" }: { page: Exclude<PageKey, "hub">; locale?: Locale }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = UI[locale];
  const kind = HEADER_CTA_KIND[page];
  const ctaLabel = kind === "app" ? t.getApp : t.bookDemo;

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

  const cta = (cls: string) =>
    kind === "app" ? (
      <AppLink className={cls} fallback={APP_HREF[locale]} onClick={() => setOpen(false)}>{ctaLabel}</AppLink>
    ) : (
      <a className={cls} href={CONTACT.demoHref}>{ctaLabel}</a>
    );

  const links = (cls: string, close = false) =>
    NAV_KEYS.map((k) => (
      <Link key={k} href={localePath(locale, PAGE_PATH[k])} aria-current={k === page ? "page" : undefined} className={cls} onClick={close ? () => setOpen(false) : undefined}>
        {t.nav[k]}
      </Link>
    ));

  return (
    <header className={`v2-header${scrolled ? " v2-header--scrolled" : ""}`}>
      <div className="v2-container v2-header__bar">
        <Link href={localePath(locale, "/")} aria-label={t.home} className="v2-header__logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/v2/logo-dark-clean.svg" alt={t.logoAlt} width={124} height={40} />
        </Link>
        <nav aria-label={t.navMain} className="v2-header__nav">
          {links("v2-header__link")}
          <LangToggle locale={locale} path={PAGE_PATH[page]} />
          {cta("v2-btn v2-btn--primary v2-btn--sm")}
        </nav>
        <button type="button" className="v2-header__menu" aria-expanded={open} aria-controls="v2-mobile-menu" aria-label={open ? t.closeMenu : t.openMenu} onClick={() => setOpen(!open)}>
          <Icon name={open ? "close" : "menu"} strokeWidth={2} />
        </button>
      </div>
      {open && (
        <div id="v2-mobile-menu" className="v2-header__panel">
          <nav aria-label={t.navMain} className="v2-container">
            {links("v2-header__panel-link", true)}
            <div className="v2-header__panel-foot">
              {cta("v2-btn v2-btn--primary")}
              <LangToggle locale={locale} path={PAGE_PATH[page]} />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
