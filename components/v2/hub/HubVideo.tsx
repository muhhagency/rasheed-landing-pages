"use client";

import { useEffect, useRef } from "react";

// Desktop-only background video. It ships with preload="none" and no
// autoplay attribute, so phones and reduced-motion visitors never download
// it; it only starts when the viewport is wide and motion is allowed.
// HubPauseButton finds it by id and sets data-user-paused when paused by hand.
const PLAY_QUERY = "(min-width: 901px) and (prefers-reduced-motion: no-preference)";

export function HubVideo({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const mq = window.matchMedia(PLAY_QUERY);
    const sync = () => {
      if (mq.matches && v.dataset.userPaused !== "true") {
        v.play().catch(() => {});
      } else if (!mq.matches) {
        v.pause();
      }
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <video
      ref={ref}
      id="hub-video"
      className="hub-media__video"
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
    />
  );
}
