type PocketTileProps = {
  type: "personal" | "shared" | "business";
  name: string;
  spent: string;
  left: string;
  cycle: string;
};

// A still of the in-app Pocket card. Sample figures, marked decorative: the
// meaning is in the heading and text next to it.
export function PocketTile({ type, name, spent, left, cycle }: PocketTileProps) {
  return (
    <div className={`pocket pocket--${type}`} aria-hidden="true">
      <span className="pocket__name">{name}</span>
      <svg className="pocket__front" viewBox="0 0 354 200" preserveAspectRatio="none">
        <path
          fill="currentColor"
          d="M0 72C0 60 8 56 18 56C70 56 78 104 177 104C276 104 284 56 336 56C346 56 354 60 354 72V200H0Z"
        />
        <path
          className="pocket__stitch"
          d="M10 78C10 70 14 67 22 67C66 67 80 114 177 114C274 114 288 67 332 67C340 67 344 70 344 78V178C344 184.6 338.6 190 332 190H22C15.400 190 10 184.600 10 178Z"
        />
      </svg>
      <span className="pocket__spent">
        <small>Spent</small>
        SAR {spent}
      </span>
      <span className="pocket__left">{left}</span>
      <span className="pocket__cycle">{cycle}</span>
    </div>
  );
}
