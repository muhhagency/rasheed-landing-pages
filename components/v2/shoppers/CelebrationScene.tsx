// The receipt celebration: a TapCeipt receipt is flipped in the app and its
// back reveals +10 Green Points. Layered artwork exported from the canvas
// (`/v2/celeb-*.webp`), drawn on a fixed 402x874 screen and scaled to fit
// whatever screen it sits in. Timing lives in shoppers.css (.sh-cel-*).
type Layer = { name: string; src: string; x: number; y: number; w: number; h: number };
type Group = { group: "paper" | "end" };

const LAYERS: (Layer | Group)[] = [
  { name: "bg", src: "celeb-bg.webp", x: 0, y: 0, w: 402, h: 874 },
  { group: "paper" },
  { name: "paper-base", src: "celeb-paper.webp", x: 26.67, y: 116.67, w: 348.67, h: 570.67 },
  { name: "balance-glow", src: "celeb-balance-glow.webp", x: 26.67, y: 341.33, w: 348.67, h: 146 },
  { name: "paper-glow", src: "celeb-paper-glow.webp", x: 94.67, y: 116.67, w: 212.67, h: 206.67 },
  { name: "mark", src: "celeb-mark.webp", x: 175.33, y: 190.67, w: 51.33, h: 51.33 },
  { name: "plus10", src: "celeb-plus10.webp", x: 160, y: 295.33, w: 83.33, h: 39.33 },
  { name: "from", src: "celeb-from.webp", x: 215.33, y: 408.67, w: 50, h: 14 },
  { name: "to", src: "celeb-to.webp", x: 270.67, y: 406.67, w: 72, h: 18.67 },
  { name: "old", src: "celeb-old.webp", x: 269.33, y: 406.67, w: 73.33, h: 18.67 },
  { group: "end" },
  { name: "torn", src: "celeb-torn.webp", x: 25.33, y: 683.33, w: 351.33, h: 13.33 },
  { name: "front", src: "celeb-front.webp", x: 26.67, y: 116.67, w: 348.67, h: 570.67 },
  { name: "slot", src: "celeb-slot.webp", x: 10.67, y: 100.67, w: 380.67, h: 34.67 },
  { name: "front-edge", src: "celeb-front-edge.webp", x: 25.33, y: 683.33, w: 351.33, h: 13.33 },
  { name: "done", src: "celeb-done.webp", x: 14.67, y: 738.67, w: 372.67, h: 50.67 },
  { name: "flipback", src: "celeb-flipback.webp", x: 124, y: 706.67, w: 155.33, h: 16 },
  { name: "pulse", src: "celeb-pulse.webp", x: 8.67, y: 708.67, w: 384.67, h: 66.67 },
  { name: "flipbtn", src: "celeb-flipbtn.webp", x: 14.67, y: 714.67, w: 372.67, h: 54.67 },
  { name: "later", src: "celeb-later.webp", x: 180.67, y: 780.67, w: 42, h: 15.33 },
  { name: "sp1", src: "celeb-sp1.webp", x: 136, y: 223.33, w: 18, h: 18 },
  { name: "sp2", src: "celeb-sp2.webp", x: 244.67, y: 222, w: 18.67, h: 18.67 },
  { name: "sp3", src: "celeb-sp3.webp", x: 110, y: 217.33, w: 17.33, h: 17.33 },
  { name: "sp4", src: "celeb-sp4.webp", x: 252, y: 227.33, w: 16, h: 16 },
  { name: "sp5", src: "celeb-sp5.webp", x: 138.67, y: 213.33, w: 20, h: 20.67 },
  { name: "sp6", src: "celeb-sp6.webp", x: 272, y: 212, w: 20, h: 19.33 },
  { name: "coin1", src: "celeb-coin.webp", x: 293.33, y: 402.67, w: 23.33, h: 23.33 },
  { name: "coin2", src: "celeb-coin.webp", x: 293.33, y: 402.67, w: 23.33, h: 23.33 },
  { name: "coin3", src: "celeb-coin.webp", x: 293.33, y: 402.67, w: 23.33, h: 23.33 },
  { name: "coin4", src: "celeb-coin.webp", x: 293.33, y: 402.67, w: 23.33, h: 23.33 },
  { name: "coin5", src: "celeb-coin.webp", x: 293.33, y: 402.67, w: 23.33, h: 23.33 },
  { name: "chip", src: "celeb-chip.webp", x: 304.67, y: 369.33, w: 44.67, h: 27.33 },
];

function LayerImg({ l }: { l: Layer }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={`sh-cel-layer sh-cel-${l.name}`}
      src={`/v2/${l.src}`}
      width={Math.round(l.w)}
      height={Math.round(l.h)}
      alt=""
      style={{ insetInlineStart: l.x, insetBlockStart: l.y, inlineSize: l.w, blockSize: l.h }}
    />
  );
}

export function CelebrationScene() {
  const before: Layer[] = [];
  const paper: Layer[] = [];
  const after: Layer[] = [];
  let bucket = before;
  for (const item of LAYERS) {
    if ("group" in item) {
      bucket = item.group === "paper" ? paper : after;
      continue;
    }
    bucket.push(item);
  }
  return (
    <div className="sh-cel" aria-hidden="true">
      {before.map((l) => <LayerImg key={l.name} l={l} />)}
      <div className="sh-cel-paper">
        {paper.map((l) => <LayerImg key={l.name} l={l} />)}
      </div>
      {after.map((l) => <LayerImg key={l.name} l={l} />)}
    </div>
  );
}
