import { Icon, type IconName } from "./Icon";
import { AppLink } from "./AppLink";
import { APP_HREF } from "@/components/v2/layout/contact";

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
  if (href === APP_HREF.en || href === APP_HREF.ar) {
    return (
      <AppLink className={cls} fallback={href}>
        {icon && <Icon name={icon} />}
        {children}
        {iconEnd && <Icon name={iconEnd} />}
      </AppLink>
    );
  }
  return (
    <a className={cls} href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {icon && <Icon name={icon} />}
      {children}
      {iconEnd && <Icon name={iconEnd} />}
    </a>
  );
}
