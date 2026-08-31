import type { ReactNode } from "react";

type PlaceholderMediaProps = {
  aspectRatio: "1/1" | "4/3" | "3/4" | "16/9" | "9/16";
  // Widened from `string` to allow the TapCeipt wordmark inline; a plain
  // string is still valid. The `alt` (below) stays a string for the a11y label.
  label: ReactNode; // what the real asset will be, e.g. "TapCeipt at grocery checkout"
  alt: string; // written as if the real asset were present
  tone?: "default" | "dark";
};

export function PlaceholderMedia({
  aspectRatio,
  label,
  alt,
  tone = "default",
}: PlaceholderMediaProps) {
  return (
    <div
      className={`ui-placeholder ui-placeholder--${tone}`}
      style={{ aspectRatio: aspectRatio.replace("/", " / ") }}
      role="img"
      aria-label={alt}
    >
      <span aria-hidden="true">{label}</span>
    </div>
  );
}
