import type { FlipKind } from "@/content/v2/shoppers";
import { Icon } from "@/components/v2/ui/Icon";

// One animated receipt that flips from its front to the reward on its back.
// Fixed 190px artwork exported from the canvas (`/v2/flipcards-*.webp`);
// timing lives in shoppers.css (.sh-fc-*). The four cards share one 7s cycle,
// each starting 1.75s after the previous one.

type Box = [x: number, y: number, w: number, h?: number];
type Coin = { x: number; y: number; mx: number; my: number; tx: number; ty: number };

const SPARKLE = "M10 0C10.8 6.2 13.8 9.2 20 10C13.8 10.8 10.8 13.8 10 20C9.2 13.8 6.2 10.8 0 10C6.2 9.2 9.2 6.2 10 0Z";
const QR = "M0 0h1v1h-1zM1 0h1v1h-1zM2 0h1v1h-1zM3 0h1v1h-1zM4 0h1v1h-1zM5 0h1v1h-1zM6 0h1v1h-1zM9 0h1v1h-1zM10 0h1v1h-1zM14 0h1v1h-1zM15 0h1v1h-1zM16 0h1v1h-1zM17 0h1v1h-1zM18 0h1v1h-1zM19 0h1v1h-1zM20 0h1v1h-1zM0 1h1v1h-1zM6 1h1v1h-1zM8 1h1v1h-1zM11 1h1v1h-1zM12 1h1v1h-1zM14 1h1v1h-1zM20 1h1v1h-1zM0 2h1v1h-1zM2 2h1v1h-1zM3 2h1v1h-1zM4 2h1v1h-1zM6 2h1v1h-1zM9 2h1v1h-1zM11 2h1v1h-1zM12 2h1v1h-1zM14 2h1v1h-1zM16 2h1v1h-1zM17 2h1v1h-1zM18 2h1v1h-1zM20 2h1v1h-1zM0 3h1v1h-1zM2 3h1v1h-1zM3 3h1v1h-1zM4 3h1v1h-1zM6 3h1v1h-1zM12 3h1v1h-1zM14 3h1v1h-1zM16 3h1v1h-1zM17 3h1v1h-1zM18 3h1v1h-1zM20 3h1v1h-1zM0 4h1v1h-1zM2 4h1v1h-1zM3 4h1v1h-1zM4 4h1v1h-1zM6 4h1v1h-1zM8 4h1v1h-1zM9 4h1v1h-1zM11 4h1v1h-1zM12 4h1v1h-1zM14 4h1v1h-1zM16 4h1v1h-1zM17 4h1v1h-1zM18 4h1v1h-1zM20 4h1v1h-1zM0 5h1v1h-1zM6 5h1v1h-1zM10 5h1v1h-1zM11 5h1v1h-1zM14 5h1v1h-1zM20 5h1v1h-1zM0 6h1v1h-1zM1 6h1v1h-1zM2 6h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1zM5 6h1v1h-1zM6 6h1v1h-1zM8 6h1v1h-1zM10 6h1v1h-1zM12 6h1v1h-1zM14 6h1v1h-1zM15 6h1v1h-1zM16 6h1v1h-1zM17 6h1v1h-1zM18 6h1v1h-1zM19 6h1v1h-1zM20 6h1v1h-1zM9 7h1v1h-1zM0 8h1v1h-1zM2 8h1v1h-1zM4 8h1v1h-1zM6 8h1v1h-1zM9 8h1v1h-1zM10 8h1v1h-1zM12 8h1v1h-1zM16 8h1v1h-1zM19 8h1v1h-1zM1 9h1v1h-1zM3 9h1v1h-1zM4 9h1v1h-1zM8 9h1v1h-1zM11 9h1v1h-1zM13 9h1v1h-1zM14 9h1v1h-1zM17 9h1v1h-1zM18 9h1v1h-1zM0 10h1v1h-1zM2 10h1v1h-1zM3 10h1v1h-1zM4 10h1v1h-1zM5 10h1v1h-1zM6 10h1v1h-1zM7 10h1v1h-1zM8 10h1v1h-1zM11 10h1v1h-1zM14 10h1v1h-1zM15 10h1v1h-1zM16 10h1v1h-1zM17 10h1v1h-1zM18 10h1v1h-1zM1 11h1v1h-1zM2 11h1v1h-1zM3 11h1v1h-1zM4 11h1v1h-1zM7 11h1v1h-1zM8 11h1v1h-1zM9 11h1v1h-1zM11 11h1v1h-1zM12 11h1v1h-1zM13 11h1v1h-1zM15 11h1v1h-1zM16 11h1v1h-1zM18 11h1v1h-1zM19 11h1v1h-1zM1 12h1v1h-1zM3 12h1v1h-1zM4 12h1v1h-1zM6 12h1v1h-1zM7 12h1v1h-1zM10 12h1v1h-1zM11 12h1v1h-1zM13 12h1v1h-1zM14 12h1v1h-1zM16 12h1v1h-1zM17 12h1v1h-1zM19 12h1v1h-1zM8 13h1v1h-1zM9 13h1v1h-1zM10 13h1v1h-1zM11 13h1v1h-1zM14 13h1v1h-1zM15 13h1v1h-1zM16 13h1v1h-1zM17 13h1v1h-1zM18 13h1v1h-1zM19 13h1v1h-1zM0 14h1v1h-1zM1 14h1v1h-1zM2 14h1v1h-1zM3 14h1v1h-1zM4 14h1v1h-1zM5 14h1v1h-1zM6 14h1v1h-1zM12 14h1v1h-1zM13 14h1v1h-1zM14 14h1v1h-1zM15 14h1v1h-1zM19 14h1v1h-1zM0 15h1v1h-1zM6 15h1v1h-1zM10 15h1v1h-1zM11 15h1v1h-1zM13 15h1v1h-1zM15 15h1v1h-1zM16 15h1v1h-1zM17 15h1v1h-1zM18 15h1v1h-1zM19 15h1v1h-1zM0 16h1v1h-1zM2 16h1v1h-1zM3 16h1v1h-1zM4 16h1v1h-1zM6 16h1v1h-1zM8 16h1v1h-1zM12 16h1v1h-1zM14 16h1v1h-1zM16 16h1v1h-1zM0 17h1v1h-1zM2 17h1v1h-1zM3 17h1v1h-1zM4 17h1v1h-1zM6 17h1v1h-1zM9 17h1v1h-1zM11 17h1v1h-1zM13 17h1v1h-1zM14 17h1v1h-1zM17 17h1v1h-1zM19 17h1v1h-1zM0 18h1v1h-1zM2 18h1v1h-1zM3 18h1v1h-1zM4 18h1v1h-1zM6 18h1v1h-1zM8 18h1v1h-1zM12 18h1v1h-1zM13 18h1v1h-1zM14 18h1v1h-1zM17 18h1v1h-1zM18 18h1v1h-1zM20 18h1v1h-1zM0 19h1v1h-1zM6 19h1v1h-1zM9 19h1v1h-1zM10 19h1v1h-1zM11 19h1v1h-1zM14 19h1v1h-1zM16 19h1v1h-1zM17 19h1v1h-1zM19 19h1v1h-1zM20 19h1v1h-1zM0 20h1v1h-1zM1 20h1v1h-1zM2 20h1v1h-1zM3 20h1v1h-1zM4 20h1v1h-1zM5 20h1v1h-1zM6 20h1v1h-1zM8 20h1v1h-1zM10 20h1v1h-1zM12 20h1v1h-1zM13 20h1v1h-1zM16 20h1v1h-1zM17 20h1v1h-1zM18 20h1v1h-1zM20 20h1v1h-1z";

const FRONT_H = 167.9;

const ART: Record<FlipKind, { h: number; tilt: number; glow: Box; sparkles: Box[]; coins: Coin[] }> = {
  points: {
    h: 167.9, tilt: -3, glow: [-5, -1.6, 200],
    sparkles: [[27, 53.4, 14], [148, 48.4, 12], [17, 103.4, 10], [159, 97.4, 14], [51.5, 29.9, 9], [131, 143.4, 10]],
    coins: [4, 18, 32].map((mx, i) => ({ x: 87, y: 89.4, mx, my: -36 - 6 * i, tx: 60, ty: 56 })),
  },
  extra: {
    h: 178.9, tilt: 3, glow: [-5, -10.1, 200],
    sparkles: [[27, 44.9, 14], [148, 39.9, 12], [17, 94.9, 10], [159, 88.9, 14], [51.5, 21.4, 9], [131, 134.9, 10]],
    coins: [4, 18, 32].map((mx, i) => ({ x: 87, y: 80.9, mx, my: -36 - 6 * i, tx: 60, ty: 75 })),
  },
  voucher: {
    h: 167.9, tilt: -4, glow: [-5, -16.1, 200],
    sparkles: [[10.5, 29.4, 14], [161.5, 22.9, 12], [-2.5, 91.4, 10], [175.5, 84.4, 14], [40.5, -0.6, 9], [140, 141.4, 10]],
    coins: [],
  },
  gift: {
    h: 167.9, tilt: 0, glow: [-20, -31.1, 230],
    sparkles: [[7.4, 17.5, 14], [164.4, 10.7, 12], [-6.2, 81.9, 10], [179, 74.7, 14], [38.5, -13.8, 9], [142, 133.9, 10]],
    coins: [-14, 0, 14].map((mx, i) => ({ x: 86, y: 54.9, mx, my: -36 - 6 * i, tx: 0, ty: -74 })),
  },
};

function pos([x, y, w, h]: Box): React.CSSProperties {
  return { insetInlineStart: x, insetBlockStart: y, inlineSize: w, blockSize: h ?? w };
}

function Img({ src, w, h, className, style }: { src: string; w: number; h: number; className?: string; style?: React.CSSProperties }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={className} src={src} width={Math.round(w)} height={Math.round(h)} alt="" loading="lazy" style={style} />
  );
}

function Back({ kind, voucher }: { kind: FlipKind; voucher: VoucherCopy }) {
  if (kind === "points") {
    return (
      <div className="sh-fc-back" style={pos([0, 0, 190, 167.9])}>
        <Img className="sh-fc-card" src="/v2/flipcards-pts-base.webp" w={190} h={167.9} />
        <Img className="sh-fc-pop sh-fc-pop1" src="/v2/flipcards-pts-mark.webp" w={30.4} h={29.6} style={pos([80.2, 30, 30.4, 29.6])} />
        <Img className="sh-fc-pop sh-fc-pop2" src="/v2/flipcards-pts-num.webp" w={51.4} h={29.2} style={pos([70.3, 83.7, 51.4, 29.2])} />
      </div>
    );
  }
  if (kind === "extra") {
    return (
      <div className="sh-fc-back" style={pos([0, 0, 190, 178.9])}>
        <Img className="sh-fc-card" src="/v2/flipcards-ext-base.webp" w={190} h={178.9} />
        <Img className="sh-fc-pop sh-fc-pop1" src="/v2/flipcards-ext-mark.webp" w={30} h={30} style={pos([80.6, 24.9, 30, 30])} />
        <Img className="sh-fc-pop sh-fc-pop2" src="/v2/flipcards-ext-num.webp" w={56.1} h={28} style={pos([67.9, 75.8, 56.1, 28])} />
        <Img className="sh-fc-pop sh-fc-pop3" src="/v2/flipcards-ext-badge.webp" w={35.2} h={35.6} style={pos([111, 19, 35.2, 35.6])} />
      </div>
    );
  }
  if (kind === "voucher") {
    return (
      <div className="sh-fc-back" style={pos([-17, 31.9, 224, 104])}>
        <div className="sh-voucher">
          <div className="sh-voucher__main">
            <span className="sh-voucher__label">{voucher.label}</span>
            <span className="sh-voucher__amount">{voucher.amount} <span>{voucher.unit}</span></span>
            <span className="sh-voucher__label">{voucher.note}</span>
          </div>
          <div className="sh-voucher__stub">
            <div className="sh-fc-pop sh-fc-pop3 sh-voucher__qr">
              <svg width="44" height="44" viewBox="0 0 21 21" shapeRendering="crispEdges" aria-hidden="true"><path d={QR} fill="currentColor" /></svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="sh-fc-back" style={pos([0, -4.8, 190, 177.5])}>
      <div className="sh-fc-bump">
        <Img className="sh-fc-wiggle" src="/v2/flipcards-gift.webp" w={190} h={177.5} />
      </div>
    </div>
  );
}

type VoucherCopy = { label: string; amount: string; unit: string; note: string; saved: string };

export function FlipArt({ kind, index, voucher }: { kind: FlipKind; index: number; voucher: VoucherCopy }) {
  const a = ART[kind];
  const layers = (
    <>
      <div className="sh-fc-glow" style={pos(a.glow)} />
      <div className="sh-fc-front" style={pos([0, 0, 190, FRONT_H])}>
        <Img className="sh-fc-card" src="/v2/flipcards-front.webp" w={190} h={FRONT_H} />
      </div>
      <Back kind={kind} voucher={voucher} />
      {a.sparkles.map((b, i) => (
        <svg key={i} className={`sh-fc-sp sh-fc-sp${i}`} style={pos(b)} viewBox="0 0 20 20" aria-hidden="true"><path d={SPARKLE} fill="currentColor" /></svg>
      ))}
      {a.coins.map((c, i) => (
        <Img
          key={i}
          className={`sh-fc-coin sh-fc-coin${i}`}
          src="/v2/celeb-coin.webp"
          w={18}
          h={18}
          style={{ ...pos([c.x, c.y, 18]), ["--sh-mx" as string]: `${c.mx}px`, ["--sh-my" as string]: `${c.my}px`, ["--sh-tx" as string]: `${c.tx}px`, ["--sh-ty" as string]: `${c.ty}px` }}
        />
      ))}
      {kind === "voucher" && (
        <div className="sh-fc-chip"><Icon name="check" strokeWidth={2.4} />{voucher.saved}</div>
      )}
    </>
  );
  const tiltOuter = kind !== "voucher" && a.tilt !== 0;
  return (
    <div className="sh-fc-stage" aria-hidden="true">
      <div
        className="sh-fc"
        style={{ blockSize: a.h, ["--sh-fc-delay" as string]: `${index * 1.75}s`, ...(tiltOuter ? { rotate: `${a.tilt}deg` } : {}) }}
      >
        {kind === "voucher" ? <div className="sh-fc-tilt" style={{ rotate: `${a.tilt}deg` }}>{layers}</div> : layers}
      </div>
    </div>
  );
}
