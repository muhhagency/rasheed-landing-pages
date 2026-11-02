// Crumpled-looking paper receipt, drawn on a 240x400 grid (decorative).
const TEETH = Array.from({ length: 23 }, (_, i) => `${230 - i * 10},${i % 2 === 0 ? 390 : 400}`).join(" ");

const LINES: [number, number, number, number, number?][] = [
  [24, 80, 120, 6], [180, 80, 36, 6],
  [24, 100, 90, 6, 0.7], [180, 100, 36, 6, 0.7],
  [24, 120, 140, 6, 0.5], [180, 120, 36, 6, 0.5],
  [24, 140, 100, 6, 0.35], [180, 140, 36, 6, 0.35],
  [24, 160, 70, 6, 0.2],
  [24, 200, 60, 9, 0.3], [160, 200, 56, 9, 0.3],
];

export function PaperReceiptArt() {
  return (
    <svg className="rt-paper__art" aria-hidden="true" focusable="false" width="150" height="250" viewBox="0 0 240 400">
      <polygon className="rt-paper__sheet" points={`0,0 240,0 240,400 ${TEETH} 0,400`} />
      <g className="rt-paper__ink">
        <rect x="70" y="28" width="100" height="10" rx="2" />
        <rect x="90" y="46" width="60" height="6" rx="2" />
        {LINES.map(([x, y, w, h, o], i) => (
          <rect key={i} x={x} y={y} width={w} height={h} rx="2" opacity={o} />
        ))}
        <rect x="60" y="250" width="120" height="34" rx="1" opacity=".18" />
      </g>
    </svg>
  );
}
