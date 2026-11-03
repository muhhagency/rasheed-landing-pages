import { RECEIPT_BACKS, RECEIPT_FRONT, type ReceiptBack } from "@/content/v2/receipts";

// A full app receipt that flips from its front to the reward on its back.
// CSS only: plays 2.5 cycles and rests on the back; reduced motion shows the back.
export function ReceiptFlip({ back, index = 0 }: { back: ReceiptBack; index?: number }) {
  const b = RECEIPT_BACKS[back];
  return (
    <div className="v2-rflip" role="img" aria-label={`${RECEIPT_FRONT.alt}. ${b.alt}`}>
      <div className="v2-rflip__inner" style={{ ["--rflip-delay" as string]: `${index * 0.9}s` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="v2-rflip__face" src={RECEIPT_FRONT.src} width={RECEIPT_FRONT.width} height={RECEIPT_FRONT.height} alt="" loading="lazy" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="v2-rflip__face v2-rflip__face--back" src={b.src} width={b.width} height={b.height} alt="" loading="lazy" />
      </div>
    </div>
  );
}
