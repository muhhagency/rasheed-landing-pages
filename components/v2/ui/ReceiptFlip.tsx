import type { CSSProperties, ReactNode } from "react";
import { FLIP_STAGE, RECEIPT_FLIPS, type FlipArt, type FlipKind, type FlipNode } from "@/content/v2/receiptFlip";
import { FLIP_TIMING, flipNodeClass, flipRound, flipSplitsXY, walkFlip } from "./receiptFlipCss";

// The app's receipt flip for one reward, as designed in Figma: the receipt front,
// the flip and the full celebration, then the back. Layer geometry and keyframes
// live in /receipt-flip.css (built from content/v2/receiptFlip.ts); this renders
// the layer tree. Under reduced motion every layer shows its resting (back) state.
function tree(kind: FlipKind, art: FlipArt): ReactNode[] {
  const index = new Map<FlipNode, number>();
  walkFlip(art.layers, (n, i) => index.set(n, i));
  const render = (n: FlipNode): ReactNode => {
    const i = index.get(n)!;
    if ("clip" in n) {
      return (
        <div key={i} className={`v2-rflip__clip ${flipNodeClass(kind, i)}`}>
          {render(n.l)}
        </div>
      );
    }
    const cls = ["v2-rflip__l", flipNodeClass(kind, i)];
    if (n.s) cls.push("v2-rflip__l--img");
    if (n.g) cls.push(n.m ? "v2-rflip__glow v2-rflip__glow--under" : "v2-rflip__glow");
    if (flipSplitsXY(art, n)) cls.push("v2-rflip__l--xy");
    const kids = n.c && (
      <div className={n.kc === 1 ? "v2-rflip__kids v2-rflip__kids--clip" : "v2-rflip__kids"}>{n.c.map(render)}</div>
    );
    const el = (
      <div key={i} className={cls.join(" ")}>
        {kids}
      </div>
    );
    return n.f ? <div key={i} className="v2-rflip__fade">{el}</div> : el;
  };
  return art.layers.map(render);
}

export function ReceiptFlip({ kind, index = 0 }: { kind: FlipKind; index?: number }) {
  const art = RECEIPT_FLIPS[kind];
  const style = { "--rf-delay": `${flipRound(index * FLIP_TIMING.stagger)}s` } as CSSProperties;
  return (
    <div className={`v2-rflip rf-${kind}`} role="img" aria-label={art.label} style={style}>
      {/* Built at export by app/receipt-flip.css/route.ts; React hoists and dedupes it. */}
      {/* eslint-disable-next-line @next/next/no-css-tags */}
      <link rel="stylesheet" href="/receipt-flip.css" precedence="default" />
      <div className="v2-rflip__stage" style={{ inlineSize: FLIP_STAGE.w, blockSize: FLIP_STAGE.h }}>
        <div className="v2-rflip__out">
          <div className="v2-rflip__in">{tree(kind, art)}</div>
        </div>
      </div>
    </div>
  );
}
