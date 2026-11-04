import { TapCeipt } from "@/components/ui/TapCeipt";

// Renders a content string, swapping each "{TapCeipt}" for the wordmark.
export function TextWithTapCeipt({ text }: { text: string }) {
  const parts = text.split("{TapCeipt}");
  return (
    <>
      {parts.map((p, i) => (
        <span key={i}>
          {i > 0 && <TapCeipt />}
          {p}
        </span>
      ))}
    </>
  );
}
