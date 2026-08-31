import type { ReactNode } from "react";
import "./sections.css";

type Pillar = {
  name: string;
  // ReactNode so a pillar body can embed the TapCeipt wordmark inline.
  body: ReactNode;
};

type PillarGridProps = {
  pillars: Pillar[]; // always 4 — renders 2×2 at ≥600px, 1 column below
};

// The 2×2 pillar grid shared by /for-retailers (#portal) and
// /for-corporates (#team). One component, one treatment — the two pages must
// not drift into lookalikes.
export function PillarGrid({ pillars }: PillarGridProps) {
  return (
    <div className="pillar-grid">
      {pillars.map((pillar) => (
        <div key={pillar.name} className="pillar">
          <span className="pillar__name">{pillar.name}</span>
          <p className="pillar__body">{pillar.body}</p>
        </div>
      ))}
    </div>
  );
}
