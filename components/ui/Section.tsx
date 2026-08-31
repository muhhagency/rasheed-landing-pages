import React from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  children: React.ReactNode;
  tone?: "default" | "subtle" | "dark" | "brand"; // default 'default'
  id?: string; // anchor target
  as?: "section" | "div"; // default 'section'
  // Opt out of the scroll reveal (e.g. content already above the fold).
  reveal?: boolean; // default true
};

export function Section({
  children,
  tone = "default",
  id,
  as = "section",
  reveal = true,
}: SectionProps) {
  const Tag = as;
  return (
    // The reveal wraps the CONTENT, not the section element: the tone
    // background must never fade in, only the material inside it.
    <Tag id={id} className={`ui-section ui-section--${tone}`}>
      {reveal ? <Reveal>{children}</Reveal> : children}
    </Tag>
  );
}
