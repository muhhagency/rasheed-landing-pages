import type { CSSProperties } from "react";
import { Icon } from "@/components/v2/ui/Icon";
import type { RT_REWARDS, RtReward } from "@/content/v2/retailers";

// Receipt that flips to reveal its reward. Fixed px geometry (190px card)
// from the canvas; the wrapper scales it down on narrow screens. Animation is
// CSS only (3 cycles), staggered per card; reduced motion shows the back.
type Box = [number, number, number, number]; // left, top, width, height
type Spark = [number, number, number]; // left, top, size

const SPARK_D = "M10 0C10.8 6.2 13.8 9.2 20 10C13.8 10.8 10.8 13.8 10 20C9.2 13.8 6.2 10.8 0 10C6.2 9.2 9.2 6.2 10 0Z";
const QR_D = "M0 0h1v1h-1zM1 0h1v1h-1zM2 0h1v1h-1zM3 0h1v1h-1zM4 0h1v1h-1zM5 0h1v1h-1zM6 0h1v1h-1zM9 0h1v1h-1zM10 0h1v1h-1zM14 0h1v1h-1zM15 0h1v1h-1zM16 0h1v1h-1zM17 0h1v1h-1zM18 0h1v1h-1zM19 0h1v1h-1zM20 0h1v1h-1zM0 1h1v1h-1zM6 1h1v1h-1zM8 1h1v1h-1zM11 1h1v1h-1zM12 1h1v1h-1zM14 1h1v1h-1zM20 1h1v1h-1zM0 2h1v1h-1zM2 2h1v1h-1zM3 2h1v1h-1zM4 2h1v1h-1zM6 2h1v1h-1zM9 2h1v1h-1zM11 2h1v1h-1zM12 2h1v1h-1zM14 2h1v1h-1zM16 2h1v1h-1zM17 2h1v1h-1zM18 2h1v1h-1zM20 2h1v1h-1zM0 3h1v1h-1zM2 3h1v1h-1zM3 3h1v1h-1zM4 3h1v1h-1zM6 3h1v1h-1zM12 3h1v1h-1zM14 3h1v1h-1zM16 3h1v1h-1zM17 3h1v1h-1zM18 3h1v1h-1zM20 3h1v1h-1zM0 4h1v1h-1zM2 4h1v1h-1zM3 4h1v1h-1zM4 4h1v1h-1zM6 4h1v1h-1zM8 4h1v1h-1zM9 4h1v1h-1zM11 4h1v1h-1zM12 4h1v1h-1zM14 4h1v1h-1zM16 4h1v1h-1zM17 4h1v1h-1zM18 4h1v1h-1zM20 4h1v1h-1zM0 5h1v1h-1zM6 5h1v1h-1zM10 5h1v1h-1zM11 5h1v1h-1zM14 5h1v1h-1zM20 5h1v1h-1zM0 6h1v1h-1zM1 6h1v1h-1zM2 6h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1zM5 6h1v1h-1zM6 6h1v1h-1zM8 6h1v1h-1zM10 6h1v1h-1zM12 6h1v1h-1zM14 6h1v1h-1zM15 6h1v1h-1zM16 6h1v1h-1zM17 6h1v1h-1zM18 6h1v1h-1zM19 6h1v1h-1zM20 6h1v1h-1zM9 7h1v1h-1zM0 8h1v1h-1zM2 8h1v1h-1zM4 8h1v1h-1zM6 8h1v1h-1zM9 8h1v1h-1zM10 8h1v1h-1zM12 8h1v1h-1zM16 8h1v1h-1zM19 8h1v1h-1zM1 9h1v1h-1zM3 9h1v1h-1zM4 9h1v1h-1zM8 9h1v1h-1zM11 9h1v1h-1zM13 9h1v1h-1zM14 9h1v1h-1zM17 9h1v1h-1zM18 9h1v1h-1zM0 10h1v1h-1zM2 10h1v1h-1zM3 10h1v1h-1zM4 10h1v1h-1zM5 10h1v1h-1zM6 10h1v1h-1zM7 10h1v1h-1zM8 10h1v1h-1zM11 10h1v1h-1zM14 10h1v1h-1zM15 10h1v1h-1zM16 10h1v1h-1zM17 10h1v1h-1zM18 10h1v1h-1zM1 11h1v1h-1zM2 11h1v1h-1zM3 11h1v1h-1zM4 11h1v1h-1zM7 11h1v1h-1zM8 11h1v1h-1zM9 11h1v1h-1zM11 11h1v1h-1zM12 11h1v1h-1zM13 11h1v1h-1zM15 11h1v1h-1zM16 11h1v1h-1zM18 11h1v1h-1zM19 11h1v1h-1zM1 12h1v1h-1zM3 12h1v1h-1zM4 12h1v1h-1zM6 12h1v1h-1zM7 12h1v1h-1zM10 12h1v1h-1zM11 12h1v1h-1zM13 12h1v1h-1zM14 12h1v1h-1zM16 12h1v1h-1zM17 12h1v1h-1zM19 12h1v1h-1zM8 13h1v1h-1zM9 13h1v1h-1zM10 13h1v1h-1zM11 13h1v1h-1zM14 13h1v1h-1zM15 13h1v1h-1zM16 13h1v1h-1zM17 13h1v1h-1zM18 13h1v1h-1zM19 13h1v1h-1zM0 14h1v1h-1zM1 14h1v1h-1zM2 14h1v1h-1zM3 14h1v1h-1zM4 14h1v1h-1zM5 14h1v1h-1zM6 14h1v1h-1zM12 14h1v1h-1zM13 14h1v1h-1zM14 14h1v1h-1zM15 14h1v1h-1zM19 14h1v1h-1zM0 15h1v1h-1zM6 15h1v1h-1zM10 15h1v1h-1zM11 15h1v1h-1zM13 15h1v1h-1zM15 15h1v1h-1zM16 15h1v1h-1zM17 15h1v1h-1zM18 15h1v1h-1zM19 15h1v1h-1zM0 16h1v1h-1zM2 16h1v1h-1zM3 16h1v1h-1zM4 16h1v1h-1zM6 16h1v1h-1zM8 16h1v1h-1zM12 16h1v1h-1zM14 16h1v1h-1zM16 16h1v1h-1zM0 17h1v1h-1zM2 17h1v1h-1zM3 17h1v1h-1zM4 17h1v1h-1zM6 17h1v1h-1zM9 17h1v1h-1zM11 17h1v1h-1zM13 17h1v1h-1zM14 17h1v1h-1zM17 17h1v1h-1zM19 17h1v1h-1zM0 18h1v1h-1zM2 18h1v1h-1zM3 18h1v1h-1zM4 18h1v1h-1zM6 18h1v1h-1zM8 18h1v1h-1zM12 18h1v1h-1zM13 18h1v1h-1zM14 18h1v1h-1zM17 18h1v1h-1zM18 18h1v1h-1zM20 18h1v1h-1zM0 19h1v1h-1zM6 19h1v1h-1zM9 19h1v1h-1zM10 19h1v1h-1zM11 19h1v1h-1zM14 19h1v1h-1zM16 19h1v1h-1zM17 19h1v1h-1zM19 19h1v1h-1zM20 19h1v1h-1zM0 20h1v1h-1zM1 20h1v1h-1zM2 20h1v1h-1zM3 20h1v1h-1zM4 20h1v1h-1zM5 20h1v1h-1zM6 20h1v1h-1zM8 20h1v1h-1zM10 20h1v1h-1zM12 20h1v1h-1zM13 20h1v1h-1zM16 20h1v1h-1zM17 20h1v1h-1zM18 20h1v1h-1zM20 20h1v1h-1z";

const ART: Record<RtReward["art"], {
  size: [number, number];
  rotate?: number;
  innerRotate?: number;
  glow: [number, number, number];
  back: Box;
  sparks: Spark[];
  coins?: { at: [number, number]; mid: [number, number][]; to: [number, number] };
}> = {
  points: {
    size: [190, 167.9], rotate: -3, glow: [-5, -1.6, 200], back: [0, 0, 190, 167.9],
    sparks: [[27, 53.4, 14], [148, 48.4, 12], [17, 103.4, 10], [159, 97.4, 14], [51.5, 29.9, 9], [131, 143.4, 10]],
    coins: { at: [87, 89.4], mid: [[4, -36], [18, -42], [32, -48]], to: [60, 56] },
  },
  extra: {
    size: [190, 178.9], rotate: 3, glow: [-5, -10.1, 200], back: [0, 0, 190, 178.9],
    sparks: [[27, 44.9, 14], [148, 39.9, 12], [17, 94.9, 10], [159, 88.9, 14], [51.5, 21.4, 9], [131, 134.9, 10]],
    coins: { at: [87, 80.9], mid: [[4, -36], [18, -42], [32, -48]], to: [60, 75] },
  },
  voucher: {
    size: [190, 167.9], innerRotate: -4, glow: [-5, -16.1, 200], back: [-17, 31.9, 224, 104],
    sparks: [[10.5, 29.4, 14], [161.5, 22.9, 12], [-2.5, 91.4, 10], [175.5, 84.4, 14], [40.5, -0.6, 9], [140, 141.4, 10]],
  },
  gift: {
    size: [190, 167.9], glow: [-20, -31.1, 230], back: [0, -4.8, 190, 177.5],
    sparks: [[7.4, 17.5, 14], [164.4, 10.7, 12], [-6.2, 81.9, 10], [179, 74.7, 14], [38.5, -13.8, 9], [142, 133.9, 10]],
    coins: { at: [86, 54.9], mid: [[-14, -36], [0, -42], [14, -48]], to: [0, -74] },
  },
};

const box = ([l, t, w, h]: Box): CSSProperties => ({ insetInlineStart: l, insetBlockStart: t, inlineSize: w, blockSize: h });

function Img({ src, w, h, className, style }: { src: string; w: number; h: number; className?: string; style?: CSSProperties }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={className} src={src} alt="" width={Math.round(w)} height={Math.round(h)} loading="lazy" style={style} />
  );
}

function Back({ art, voucher }: { art: RtReward["art"]; voucher: typeof RT_REWARDS.voucher }) {
  if (art === "points") {
    return (
      <>
        <Img className="rt-fc__card" src="/v2/flipcards-pts-base.webp" w={190} h={167.9} />
        <Img className="rt-fc__pop rt-fc-pop1" src="/v2/flipcards-pts-mark.webp" w={30.4} h={29.6} style={box([80.2, 30, 30.4, 29.6])} />
        <Img className="rt-fc__pop rt-fc-pop2" src="/v2/flipcards-pts-num.webp" w={51.4} h={29.2} style={box([70.3, 83.7, 51.4, 29.2])} />
      </>
    );
  }
  if (art === "extra") {
    return (
      <>
        <Img className="rt-fc__card" src="/v2/flipcards-ext-base.webp" w={190} h={178.9} />
        <Img className="rt-fc__pop rt-fc-pop1" src="/v2/flipcards-ext-mark.webp" w={30} h={30} style={box([80.6, 24.9, 30, 30])} />
        <Img className="rt-fc__pop rt-fc-pop2" src="/v2/flipcards-ext-num.webp" w={56.1} h={28} style={box([67.9, 75.8, 56.1, 28])} />
        <Img className="rt-fc__pop rt-fc-pop3" src="/v2/flipcards-ext-badge.webp" w={35.2} h={35.6} style={box([111, 19, 35.2, 35.6])} />
      </>
    );
  }
  if (art === "voucher") {
    return (
      <div className="rt-voucher">
        <div className="rt-voucher__main">
          <span className="rt-voucher__label">{voucher.label}</span>
          <span className="rt-voucher__amount">{voucher.amount} <span>{voucher.unit}</span></span>
          <span className="rt-voucher__label">{voucher.hint}</span>
        </div>
        <div className="rt-voucher__stub">
          <div className="rt-voucher__qr rt-fc-pop3">
            <svg width="44" height="44" viewBox="0 0 21 21" shapeRendering="crispEdges" aria-hidden="true" focusable="false">
              <path d={QR_D} />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="rt-fc__bump rt-fc-bump">
      <Img className="rt-fc__gift rt-fc-wiggle" src="/v2/flipcards-gift.webp" w={190} h={177.5} />
    </div>
  );
}

export function RewardFlipArt({ art, index, voucher }: { art: RtReward["art"]; index: number; voucher: typeof RT_REWARDS.voucher }) {
  const a = ART[art];
  const layers = (
    <>
      <div className="rt-fc-glow rt-fc__glow" style={{ insetInlineStart: a.glow[0], insetBlockStart: a.glow[1], inlineSize: a.glow[2], blockSize: a.glow[2] }} />
      <div className="rt-fc-front rt-fc__face" style={box([0, 0, 190, 167.9])}>
        <Img className="rt-fc__card" src="/v2/flipcards-front.webp" w={190} h={167.9} />
      </div>
      <div className="rt-fc-back rt-fc__face" style={box(a.back)}>
        <Back art={art} voucher={voucher} />
      </div>
      {a.sparks.map(([l, t, s], i) => (
        <div key={i} className={`rt-fc__spark rt-fc-sp${i}`} style={box([l, t, s, s])}>
          <svg width="100%" height="100%" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d={SPARK_D} /></svg>
        </div>
      ))}
      {art === "voucher" && (
        <div className="rt-fc__chip rt-fc-chip">
          <Icon name="check" strokeWidth={2.4} />
          {voucher.chip}
        </div>
      )}
    </>
  );
  return (
    <div className="rt-fc__stage" aria-hidden="true">
      <div className="rt-fc__scale">
        <div
          className={`rt-fc rt-fc--${index}`}
          style={{ inlineSize: a.size[0], blockSize: a.size[1], transform: a.rotate ? `rotate(${a.rotate}deg)` : undefined }}
        >
          {a.innerRotate ? <div className="rt-fc__tilt" style={{ transform: `rotate(${a.innerRotate}deg)` }}>{layers}</div> : layers}
          {a.coins &&
            a.coins.mid.map(([mx, my], i) => (
              <Img
                key={i}
                className={`rt-fc__coin rt-fc-coin${i}`}
                src="/v2/celeb-coin.webp"
                w={18}
                h={18}
                style={{
                  ...box([a.coins!.at[0], a.coins!.at[1], 18, 18]),
                  ["--mx" as string]: `${mx}px`,
                  ["--my" as string]: `${my}px`,
                  ["--tx" as string]: `${a.coins!.to[0]}px`,
                  ["--ty" as string]: `${a.coins!.to[1]}px`,
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
