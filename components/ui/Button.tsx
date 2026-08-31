import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  href?: string;
  external?: boolean; // adds target/rel; auto-true for http(s) hrefs
  onClick?: () => void;
  disabled?: boolean;
  "aria-label"?: string;
};

function isHttp(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external,
  onClick,
  disabled = false,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = [
    "ui-button",
    `ui-button--${variant}`,
    `ui-button--${size}`,
    "ui-focusable",
    disabled ? "ui-button--disabled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  if (href && !disabled) {
    const isExternal = external ?? isHttp(href);
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
