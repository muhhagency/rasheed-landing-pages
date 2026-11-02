import { Icon, type IconName } from "./Icon";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  size?: "md" | "sm";
  icon?: IconName;
  iconEnd?: IconName;
  external?: boolean;
};

// Link-styled button for the redesign. Always an <a>: every CTA navigates.
export function Button({ href, children, variant = "primary", size = "md", icon, iconEnd, external }: Props) {
  const cls = `v2-btn v2-btn--${variant}${size === "sm" ? " v2-btn--sm" : ""}`;
  return (
    <a className={cls} href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {icon && <Icon name={icon} />}
      {children}
      {iconEnd && <Icon name={iconEnd} />}
    </a>
  );
}
