"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import {
  HEADER_CONFIG,
  type HeaderVariant,
  type NavCta,
} from "./navConfig";

type SiteHeaderProps = {
  variant: HeaderVariant;
};

function CaretIcon() {
  return (
    <svg
      className="site-header__dropdown-caret"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

function CtaButton({ cta, onNavigate }: { cta: NavCta; onNavigate?: () => void }) {
  return (
    <Button variant={cta.variant} href={cta.href} onClick={onNavigate}>
      {cta.label}
    </Button>
  );
}

export function SiteHeader({ variant }: SiteHeaderProps) {
  const config = HEADER_CONFIG[variant];
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [overDark, setOverDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  // Scrolled background state (past 8px).
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Is a dark-toned region sitting directly under the (transparent) header?
  // While un-scrolled the header has no background of its own, so light-surface
  // nav text over a dark section renders near-black on near-black. This flips
  // the header into its over-dark token scope for that case.
  //
  // No page currently opens with a dark section, so this is defensive: it
  // covers a future page whose first section is dark, and deep links that land
  // with a dark region already under the header.
  useEffect(() => {
    const probe = () => {
      // Sample just below the header's own height, at the horizontal centre.
      const header = document.querySelector<HTMLElement>(".site-header");
      const y = (header?.offsetHeight ?? 64) + 8;
      const under = document
        .elementsFromPoint(window.innerWidth / 2, y)
        .find(
          (el) =>
            el.closest(".ui-section--dark, .persona-band--dark") &&
            !el.closest(".site-header")
        );
      setOverDark(!!under);
    };
    probe();
    window.addEventListener("scroll", probe, { passive: true });
    window.addEventListener("resize", probe);
    return () => {
      window.removeEventListener("scroll", probe);
      window.removeEventListener("resize", probe);
    };
  }, []);

  // Close menu + dropdown on route change. Reacting to an external navigation
  // event (pathname change) is a legitimate effect; the functional updaters are
  // no-ops when already closed, so there are no cascading renders.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen((open) => (open ? false : open));
    setDropdownOpen((open) => (open ? false : open));
  }, [pathname]);

  // Close dropdown on outside click, or on Escape.
  useEffect(() => {
    if (!dropdownOpen) return;
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    // Escape must close it: a keyboard user who opens the menu needs a way out
    // that does not require tabbing through every item.
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setDropdownOpen(false);
      // Return focus to the trigger, so the tab position is not lost.
      dropdownRef.current
        ?.querySelector<HTMLButtonElement>(".site-header__dropdown-trigger")
        ?.focus();
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [dropdownOpen]);

  // Mobile menu: lock body scroll, trap focus, Escape to close.
  useEffect(() => {
    if (!menuOpen) return;
    const triggerEl = hamburgerRef.current; // capture for cleanup
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const menuEl = menuRef.current;
    const focusables = menuEl
      ? menuEl.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      : null;
    focusables?.[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (e.key === "Tab" && focusables && focusables.length > 0) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
      // Return focus to the trigger on close.
      triggerEl?.focus();
    };
  }, [menuOpen]);

  const hasNav = config.navLinks.length > 0 || !!config.loginDropdown;

  return (
    <header
      className="site-header"
      data-scrolled={scrolled}
      data-over-dark={overDark}
    >
      <div className="ui-container ui-container--default">
        <div className="site-header__inner">
          <Link href="/" className="site-header__logo" aria-label="Rasheed home">
            {/* The logo is an SVG image with baked-in colours, so the token
                rebind that handles the nav text cannot reach it — it needs the
                light-ink artwork swapped in over a dark section. */}
            <Logo tone={overDark && !scrolled ? "dark" : "light"} />
          </Link>

          {/* Desktop nav */}
          {config.navLinks.length > 0 && (
            <nav className="site-header__nav" aria-label="Primary">
              {config.navLinks.map((link, i) => (
                <a key={i} href={link.href} className="site-header__nav-link">
                  {link.label}
                </a>
              ))}
            </nav>
          )}

          {/* Desktop actions */}
          <div className="site-header__actions">
            {config.loginDropdown && (
              <div className="site-header__dropdown" ref={dropdownRef}>
                <button
                  type="button"
                  className="site-header__dropdown-trigger"
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                  onClick={() => setDropdownOpen((o) => !o)}
                >
                  Log in
                  <CaretIcon />
                </button>
                {dropdownOpen && (
                  <div className="site-header__dropdown-menu" role="menu">
                    {config.loginDropdown.map((item, i) => (
                      <a
                        key={i}
                        href={item.href}
                        className="site-header__dropdown-item"
                        role="menuitem"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}
            {config.ctas.map((cta, i) => (
              <CtaButton key={i} cta={cta} />
            ))}
            {/* TEMPORARILY REMOVED — <LangToggle /> (EN/AR placeholder).
                A visible dead control is worse than none while Arabic is
                unbuilt. Restore here and in the mobile menu below; see
                docs/phase-7-polish.md § Temporarily removed. */}
          </div>

          {/* Hamburger (mobile) */}
          {hasNav && (
            <button
              ref={hamburgerRef}
              type="button"
              className="site-header__hamburger"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <MenuIcon />
            </button>
          )}
        </div>
      </div>

      {/* Full-screen mobile menu */}
      {menuOpen && (
        <div
          className="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="mobile-menu__top">
            <Link
              href="/"
              className="site-header__logo"
              aria-label="Rasheed home"
            >
              <Logo tone="light" />
            </Link>
            <button
              type="button"
              className="mobile-menu__close"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>

          {config.navLinks.length > 0 && (
            <nav className="mobile-menu__nav" aria-label="Primary">
              {config.navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="mobile-menu__link"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}

          {config.loginDropdown && (
            <nav className="mobile-menu__nav" aria-label="Log in">
              {config.loginDropdown.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="mobile-menu__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}

          {config.ctas.length > 0 && (
            <div className="mobile-menu__actions">
              {config.ctas.map((cta, i) => (
                <CtaButton
                  key={i}
                  cta={cta}
                  onNavigate={() => setMenuOpen(false)}
                />
              ))}
            </div>
          )}

          {/* TEMPORARILY REMOVED — mobile menu <LangToggle />. The wrapper
              goes with it: an empty .mobile-menu__footer would still add its
              border and padding. Restore both together.
          <div className="mobile-menu__footer">
            <LangToggle />
          </div>
          */}
        </div>
      )}
    </header>
  );
}
