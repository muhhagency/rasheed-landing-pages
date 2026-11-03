import {
  FLIP_EASES,
  FLIP_STAGE,
  RECEIPT_FLIPS,
  type FlipArt,
  type FlipKind,
  type FlipLayer,
  type FlipNode,
  type FlipTrack,
} from "@/content/v2/receiptFlip";

// Builds the stylesheet for ReceiptFlip from the layer data in content/v2/receiptFlip.ts:
// one @keyframes per shared track, placed inside the cycle, plus one rule per layer
// (box, sprite cut, transform origin, animations and resting state). Served as the
// static file /receipt-flip.css (app/receipt-flip.css/route.ts) so the HTML stays small.
//
// A cycle is LEAD + the Figma timeline + HOLD + FLIP: front, flip and celebration as
// designed, the back held, then the receipt flips back to its front for the next cycle.
// Layers play 3 cycles and rest on the back; the flip-back wrappers play 2 (v2.css).
export const FLIP_TIMING = {
  lead: 1.4, // front on screen, including the flip in from the previous cycle
  hold: 2.4, // back on screen after the celebration
  flip: 0.3, // flip out at the end of a cycle, and flip in at the start of the next
  stagger: 0.8, // between neighbouring cards
};

export const FLIP_KINDS = Object.keys(RECEIPT_FLIPS) as FlipKind[];
export const flipCycle = (art: FlipArt) => FLIP_TIMING.lead + art.figma + FLIP_TIMING.hold + FLIP_TIMING.flip;
export const flipRound = (v: number) => Math.round(v * 1000) / 1000;
const anim = (kind: FlipKind, i: number | string) => `rf-${kind}-${i}`;

/** Class of the n-th node (pre-order) of a kind's layer tree. */
export const flipNodeClass = (kind: FlipKind, n: number) => `rf-${kind[0]}${n}`;

/** Visits every node in pre-order with its index; the component and the stylesheet share it. */
export function walkFlip(nodes: FlipNode[], visit: (n: FlipNode, i: number) => void, counter = { i: 0 }) {
  for (const n of nodes) {
    visit(n, counter.i++);
    const l = "clip" in n ? n.l : n;
    if ("clip" in n) visit(l, counter.i++);
    if (l.c) walkFlip(l.c, visit, counter);
  }
}

function decl(p: FlipTrack[0], v: number | [number, number]): string {
  const [a, b] = Array.isArray(v) ? v : [v, v];
  switch (p) {
    case "t": return `translate:${a}px ${b}px`;
    case "s": return `scale:${a} ${b}`;
    case "r": return `rotate:${a}deg`;
    case "o": return `opacity:${a}`;
    case "x": return `--rf-x:${a}px`;
    case "y": return `--rf-y:${a}px`;
  }
}

function keyframes(kind: FlipKind, art: FlipArt): string[] {
  const total = flipCycle(art);
  const at = (t: number) => flipRound(((FLIP_TIMING.lead + t * art.figma) / total) * 100);
  const css = art.tracks.map(([p, times, values, eases], i) => {
    const vals = values as (number | [number, number])[];
    const stops = [`0%{${decl(p, vals[0])}}`];
    times.forEach((t, j) => {
      const ease = eases[j] ? `animation-timing-function:${FLIP_EASES[eases[j]]};` : ""; // 0 is linear, the default
      stops.push(`${at(t)}%{${ease}${decl(p, vals[j])}}`);
    });
    stops.push(`100%{${decl(p, vals[vals.length - 1])}}`);
    return `@keyframes ${anim(kind, i)}{${stops.join("")}}`;
  });
  const out = flipRound(((total - FLIP_TIMING.flip) / total) * 100);
  const back = flipRound((FLIP_TIMING.flip / total) * 100);
  css.push(`@keyframes ${anim(kind, "out")}{0%,${out}%{animation-timing-function:${FLIP_EASES[1]};scale:1 1}100%{scale:.02 1}}`);
  css.push(`@keyframes ${anim(kind, "in")}{0%{animation-timing-function:${FLIP_EASES[2]};scale:.02 1}${back}%,100%{scale:1 1}}`);
  return css;
}

const box = ([x, y, w, h]: number[]) =>
  `inset-inline-start:${x}px;inset-block-start:${y}px;inline-size:${w}px;block-size:${h}px`;

/** Clip path for children of a parent drawn rotated by `deg` inside its upright bounds. */
function rotatedClip([, , w0, h0]: number[], deg: number): string {
  const a = (deg * Math.PI) / 180;
  const c = Math.cos(a), s = Math.abs(Math.sin(a));
  const w = (w0 * c - h0 * s) / (c * c - s * s), h = (h0 * c - w0 * s) / (c * c - s * s);
  const pts = [[-w / 2, -h / 2], [w / 2, -h / 2], [w / 2, h / 2], [-w / 2, h / 2]].map(([x, y]) => {
    const px = x * Math.cos(a) - y * Math.sin(a) + w0 / 2;
    const py = x * Math.sin(a) + y * Math.cos(a) + h0 / 2;
    return `${flipRound(px)}px ${flipRound(py)}px`;
  });
  return `polygon(${pts.join(",")})`;
}

function layerRule(kind: FlipKind, art: FlipArt, l: FlipLayer): string {
  const d = [box(l.b)];
  if (l.s) d.push(`background-position:${-l.s[0]}px ${-l.s[1]}px`);
  if (l.g) d.push(`filter:blur(${l.g / 2}px)`);
  if (l.o) d.push(`transform-origin:${l.o[0]}px ${l.o[1]}px`);
  if (l.k) d.push(`animation-name:${l.k.map((i) => anim(kind, i)).join(",")}`);
  const e = l.e ?? {};
  if (e.o !== undefined) d.push(`opacity:${e.o}`);
  if (e.t) d.push(`translate:${e.t[0]}px ${e.t[1]}px`);
  if (e.s) d.push(`scale:${e.s[0]} ${e.s[1]}`);
  if (e.r !== undefined) d.push(`rotate:${e.r}deg`);
  if (e.x !== undefined) d.push(`--rf-x:${e.x}px`);
  if (e.y !== undefined) d.push(`--rf-y:${e.y}px`);
  return d.join(";");
}

/** True when a layer's translate is animated per axis (see .v2-rflip__l--xy). */
export const flipSplitsXY = (art: FlipArt, l: FlipLayer) =>
  !!l.k?.some((i) => art.tracks[i][0] === "x" || art.tracks[i][0] === "y");

export function receiptFlipCss(): string {
  const css: string[] = [];
  for (const kind of FLIP_KINDS) {
    const art = RECEIPT_FLIPS[kind];
    const root = `.rf-${kind}`;
    css.push(
      `${root}{--rf-cycle:${flipRound(flipCycle(art))}s;--rf-stage-w:${FLIP_STAGE.w}px;--rf-sheet:url(${art.sheet.src});` +
        `--rf-sheet-size:${art.sheet.w}px ${art.sheet.h}px;aspect-ratio:${FLIP_STAGE.w}/${FLIP_STAGE.h}}`,
      `${root} .v2-rflip__out{animation-name:${anim(kind, "out")}}`,
      `${root} .v2-rflip__in{animation-name:${anim(kind, "in")}}`,
      ...keyframes(kind, art),
    );
    walkFlip(art.layers, (n, i) => {
      const sel = `.${flipNodeClass(kind, i)}`;
      if ("clip" in n) css.push(`${sel}{${box(n.clip)}}`);
      else {
        css.push(`${sel}{${layerRule(kind, art, n)}}`);
        if (n.kb) {
          const clip = n.kc && n.kc !== 1 ? `;clip-path:${rotatedClip(n.kb, n.kc)}` : "";
          css.push(`${sel}>.v2-rflip__kids{${box(n.kb)}${clip}}`);
        }
      }
    });
  }
  return css.join("\n");
}
