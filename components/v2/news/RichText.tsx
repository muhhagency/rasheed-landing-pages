import { Fragment } from "react";
import { TapCeipt } from "@/components/ui/TapCeipt";

// Renders a plain content string, setting every "TapCeipt" as the wordmark.
export function RichText({ text }: { text: string }) {
  const parts = text.split("TapCeipt");
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {i > 0 && <TapCeipt />}
          {part}
        </Fragment>
      ))}
    </>
  );
}
