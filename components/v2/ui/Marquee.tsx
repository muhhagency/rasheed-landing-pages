"use client";

import { useState } from "react";
import { Icon } from "./Icon";

// Endless sideways row (testimonials). Pauses on hover, on keyboard focus and
// with its own Pause button (WCAG 2.2.2). Reduced motion: no movement, the row
// scrolls by hand instead. The second copy only fills the loop and is hidden
// from assistive tech.
export function Marquee({ label, items, seconds = 60, variant, pauseLabel = "Pause", playLabel = "Play" }: { label: string; items: React.ReactNode[]; seconds?: number; variant?: "logos"; pauseLabel?: string; playLabel?: string }) {
  const [paused, setPaused] = useState(false);
  return (
    <div className={`v2-marquee${variant ? ` v2-marquee--${variant}` : ""}`} data-paused={paused ? "true" : undefined}>
      <div className="v2-marquee__viewport" role="region" aria-label={label}>
        <div className="v2-marquee__track" style={{ ["--marquee-duration" as string]: `${seconds}s` }}>
          <ul className="v2-marquee__list">
            {items.map((it, i) => <li key={i}>{it}</li>)}
          </ul>
          <ul className="v2-marquee__list v2-marquee__list--copy" aria-hidden="true" inert>
            {items.map((it, i) => <li key={i}>{it}</li>)}
          </ul>
        </div>
      </div>
      <button type="button" className="v2-marquee__toggle" aria-label={`${paused ? playLabel : pauseLabel} ${label}`} onClick={() => setPaused(!paused)}>
        <Icon name={paused ? "playSolid" : "pause"} strokeWidth={0} />
      </button>
    </div>
  );
}
