// The pocket lip and stitch from the app's Pocket card, drawn full width.
// Colour comes from the parent: fill is currentColor, stitch is --stitch.
export function PocketEdge({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pocket-edge ${className}`}
      viewBox="0 0 1440 170"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M0 60C0 22 50 20 140 20C420 20 430 120 720 120C1010 120 1020 20 1300 20C1390 20 1440 22 1440 60V171H0Z"
      />
      <path
        className="pocket-edge__stitch"
        d="M0 90C20 46 60 42 150 42C408 42 440 144 720 144C1000 144 1032 42 1290 42C1380 42 1420 46 1440 90"
      />
    </svg>
  );
}
