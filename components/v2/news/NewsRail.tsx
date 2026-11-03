"use client";

import { useCallback, useContext, useEffect, useId, useRef, useState } from "react";
import { Icon } from "../ui/Icon";
import { NewsFilterContext } from "./NewsFilterRoot";

type Labels = { title: string; note: string; seeAll: string; seeFewer: string; prev: string; next: string };

// Latest news head plus the card track. The track is a sideways scroll row
// (scroll-snap) by default; "See all news" turns it into the full grid.
// Without JS the row shows and the controls stay hidden.
export function NewsRail({ labels, children }: { labels: Labels; children: React.ReactNode }) {
  const { filter } = useContext(NewsFilterContext);
  const trackId = useId();
  const track = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [state, setState] = useState({ overflow: false, atStart: true, atEnd: true });

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    // scrollLeft runs negative in RTL, so compare magnitudes.
    const pos = Math.abs(el.scrollLeft);
    const max = el.scrollWidth - el.clientWidth;
    setState({ overflow: max > 1, atStart: pos <= 1, atEnd: pos >= max - 1 });
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const ro = new ResizeObserver(measure);
    ro.observe(el); // fires once on observe, so the first measure happens here
    el.addEventListener("scroll", measure, { passive: true });
    return () => {
      ro.disconnect();
      el.removeEventListener("scroll", measure);
    };
  }, [measure]);

  // Filter chips hide cards, which changes how much there is to scroll.
  useEffect(() => {
    const raf = requestAnimationFrame(measure);
    return () => cancelAnimationFrame(raf);
  }, [filter, expanded, measure]);

  const step = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const rtl = getComputedStyle(el).direction === "rtl";
    el.scrollBy({ left: dir * (rtl ? -1 : 1) * el.clientWidth * 0.9 });
  };

  const showToggle = expanded || state.overflow;
  const showArrows = !expanded && state.overflow;

  return (
    <>
      <div className="nw-latest__head">
        <div className="nw-latest__heading">
          <h2 id="nw-latest" className="nw-latest__title">{labels.title}</h2>
          <span className="nw-note">{labels.note}</span>
        </div>
        <div className="nw-latest__controls">
          {showArrows && (
            <>
              <button type="button" className="nw-arrow" onClick={() => step(-1)} disabled={state.atStart} aria-label={labels.prev} aria-controls={trackId}>
                <Icon name="chevronLeft" />
              </button>
              <button type="button" className="nw-arrow" onClick={() => step(1)} disabled={state.atEnd} aria-label={labels.next} aria-controls={trackId}>
                <Icon name="chevronRight" />
              </button>
            </>
          )}
          {showToggle && (
            <button
              type="button"
              className="v2-btn v2-btn--ghost v2-btn--sm nw-seeall"
              aria-expanded={expanded}
              aria-controls={trackId}
              onClick={() => setExpanded((v) => !v)}
            >
              {expanded ? labels.seeFewer : labels.seeAll}
            </button>
          )}
        </div>
      </div>
      <div
        id={trackId}
        ref={track}
        className={expanded ? "nw-grid" : "nw-rail"}
        role="region"
        aria-labelledby="nw-latest"
        tabIndex={expanded ? undefined : 0}
      >
        {children}
      </div>
    </>
  );
}
