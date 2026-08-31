import React from "react";

type KickerProps = {
  children: React.ReactNode;
  tone?: "default" | "on-dark" | "brand"; // default 'default'
  rule?: boolean; // optional leading hairline rule before the text
};

export function Kicker({ children, tone = "default", rule = false }: KickerProps) {
  return (
    <span className={`ui-kicker ui-kicker--${tone}`}>
      {rule ? <span className="ui-kicker__rule" aria-hidden="true" /> : null}
      {children}
    </span>
  );
}
