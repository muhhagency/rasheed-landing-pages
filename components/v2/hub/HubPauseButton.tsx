"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/v2/ui/Icon";

// Pause/play control for the hub background video (WCAG 2.2.2). Hidden by
// CSS wherever the video does not play (mobile, reduced motion).
export function HubPauseButton({ videoId = "hub-video", pauseLabel, playLabel }: { videoId?: string; pauseLabel: string; playLabel: string }) {
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const v = document.getElementById(videoId) as HTMLVideoElement | null;
    if (!v) return;
    const on = () => setPlaying(!v.paused);
    // Match the real state on mount: autoplay may be blocked or still pending.
    on();
    v.addEventListener("play", on);
    v.addEventListener("playing", on);
    v.addEventListener("pause", on);
    return () => {
      v.removeEventListener("play", on);
      v.removeEventListener("playing", on);
      v.removeEventListener("pause", on);
    };
  }, [videoId]);

  const toggle = () => {
    const v = document.getElementById(videoId) as HTMLVideoElement | null;
    if (!v) return;
    if (v.paused) {
      v.dataset.userPaused = "false";
      v.play().catch(() => {});
    } else {
      v.dataset.userPaused = "true";
      v.pause();
    }
  };

  return (
    <button
      type="button"
      className="hub-pause"
      aria-label={playing ? pauseLabel : playLabel}
      onClick={toggle}
    >
      <Icon name={playing ? "pause" : "playSolid"} strokeWidth={0} />
    </button>
  );
}
