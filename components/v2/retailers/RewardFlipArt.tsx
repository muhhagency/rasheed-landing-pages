import { Icon } from "@/components/v2/ui/Icon";
import type { RT_REWARDS, RtReward } from "@/content/v2/retailers";

// A paper receipt that flips to show its reward on the back. Built in HTML/CSS
// (white paper, torn zigzag edges via CSS mask). CSS-only motion, staggered per
// card and capped; it ends, and rests under reduced motion, on the back.
const SPARK_D = "M10 0C10.8 6.2 13.8 9.2 20 10C13.8 10.8 10.8 13.8 10 20C9.2 13.8 6.2 10.8 0 10C6.2 9.2 9.2 6.2 10 0Z";
const QR_D = "M0 0h7v7h-7zM1 1v5h5v-5zM2 2h3v3h-3zM14 0h7v7h-7zM15 1v5h5v-5zM16 2h3v3h-3zM0 14h7v7h-7zM1 15v5h5v-5zM2 16h3v3h-3zM9 0h2v2h-2zM8 3h2v2h-2zM11 4h2v3h-2zM9 8h3v2h-3zM0 9h2v2h-2zM3 8h3v2h-3zM13 9h3v2h-3zM18 8h3v3h-3zM8 12h2v3h-2zM12 12h3v2h-3zM17 13h4v2h-4zM9 17h3v2h-3zM14 16h2v5h-2zM18 17h3v2h-3zM10 20h2v1h-2zM17 20h4v1h-4z";
// Pseudo-random bar widths for the barcode (purely decorative).
const BARS = [2, 1, 3, 1, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2, 1, 1, 3, 1, 2, 2, 1, 3, 1, 1, 2, 1, 2, 3, 1, 1, 2, 1, 3, 2, 1];

type Receipt = typeof RT_REWARDS.receipt;
type Backs = typeof RT_REWARDS.backs;

function Front({ r }: { r: Receipt }) {
  return (
    <div className="rt-rc__paper rt-rc__front">
      <div className="rt-rc__head">
        <span className="rt-rc__logo"><Icon name="store" /></span>
        <span className="rt-rc__store">{r.store}</span>
        <span className="rt-rc__muted">{r.branch}</span>
      </div>
      <div className="rt-rc__rule" />
      <ul className="rt-rc__items">
        {r.items.map((it) => (
          <li key={it.name}>
            <span className="rt-rc__item">
              <span>{it.name}</span>
              <span className="rt-rc__muted">{it.qty}</span>
            </span>
            <span className="rt-rc__price">{it.price}</span>
          </li>
        ))}
      </ul>
      <div className="rt-rc__rule" />
      <div className="rt-rc__total">
        <span>{r.totalLabel}</span>
        <span>{r.total}</span>
      </div>
      <div className="rt-rc__barcode">
        {BARS.map((w, i) => (
          <span key={i} style={{ inlineSize: w }} />
        ))}
      </div>
    </div>
  );
}

function Back({ art, r, b }: { art: RtReward["art"]; r: Receipt; b: Backs }) {
  let body;
  if (art === "points" || art === "extra") {
    const k = art === "points" ? b.points : b.extra;
    body = (
      <>
        <span className="rt-rc__kicker">{k.kicker}</span>
        <span className="rt-rc__badge rt-fc-pop1"><Icon name={art === "points" ? "leaf" : "star"} /></span>
        <span className="rt-rc__value rt-fc-pop2">{k.value}</span>
        <span className="rt-rc__label">{k.label}</span>
        {art === "extra" && <span className="rt-rc__chip rt-fc-pop3">{b.extra.chip}</span>}
      </>
    );
  } else if (art === "voucher") {
    const k = b.voucher;
    body = (
      <>
        <span className="rt-rc__kicker">{k.kicker}</span>
        <span className="rt-rc__value rt-rc__value--voucher rt-fc-pop2">{k.value} <span>{k.unit}</span></span>
        <span className="rt-rc__label">{k.label}</span>
        <span className="rt-rc__qr rt-fc-pop3">
          <svg viewBox="0 0 21 21" shapeRendering="crispEdges" fillRule="evenodd" aria-hidden="true" focusable="false"><path d={QR_D} /></svg>
        </span>
        <span className="rt-rc__muted">{k.hint}</span>
      </>
    );
  } else {
    const k = b.gift;
    body = (
      <>
        <span className="rt-rc__kicker">{k.kicker}</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="rt-rc__gift rt-fc-pop2" src="/v2/flipcards-gift.webp" alt="" width={440} height={411} loading="lazy" />
        <span className="rt-rc__label">{k.label}</span>
      </>
    );
  }
  return (
    <div className={`rt-rc__paper rt-rc__back rt-rc__back--${art}`}>
      <span className="rt-rc__backstore">{r.store}</span>
      <div className="rt-rc__reward">{body}</div>
    </div>
  );
}

export function RewardFlipArt({
  art,
  index,
  receipt,
  backs,
}: {
  art: RtReward["art"];
  index: number;
  receipt: Receipt;
  backs: Backs;
}) {
  return (
    <div className={`rt-rc rt-rc--${index}`} aria-hidden="true">
      <div className="rt-rc__glow rt-fc-glow" />
      <div className="rt-rc__shadow">
        <div className="rt-rc__flip rt-fc-flip">
          <Front r={receipt} />
          <Back art={art} r={receipt} b={backs} />
        </div>
      </div>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`rt-rc__spark rt-rc__spark--${i} rt-fc-sp${i}`}>
          <svg width="100%" height="100%" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d={SPARK_D} /></svg>
        </span>
      ))}
    </div>
  );
}
