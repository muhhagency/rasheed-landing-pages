"use client";

import { useEffect, useRef } from "react";
import "./reveal.css";

type RevealProps = {
  children: React.ReactNode;
};

// Scroll-reveal on section entry: opacity + a small translate, nothing more.
//
// Content is visible by default and only *becomes* hidden if this script runs
// AND the user has not asked for reduced motion. That ordering matters: with no
// JS, or with `prefers-reduced-motion: reduce`, nothing is ever hidden, so the
// page can never get stuck in a blank state.
export function Reveal({ children }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Honour the OS setting. Checked here (not only in CSS) so we never even
    // arm the observer when reduced motion is requested.
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    // Already in view on load (e.g. the hero): leave it alone, no fade-in.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) return;

    el.dataset.revealArmed = "true";

    const reveal = () => {
      el.dataset.revealed = "true";
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.revealed = "true";
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );
    io.observe(el);

    // Safety net for jumped scrolls (anchor links, browser scroll restoration,
    // find-in-page). A large jump can skip an element past the viewport without
    // the observer ever seeing it intersect, which would strand it invisible.
    // If the element is above the fold after any scroll, reveal it outright.
    const onScroll = () => {
      if (el.dataset.revealed === "true") return;
      if (el.getBoundingClientRect().top < window.innerHeight) {
        reveal();
        io.unobserve(el);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={ref} className="ui-reveal">
      {children}
    </div>
  );
}
