import Image from "next/image";

type LogoProps = {
  // `light` = dark ink for light surfaces; `dark` = light ink for dark surfaces.
  tone?: "light" | "dark";
  // Horizontal lockup (icon + wordmark) or the icon mark alone.
  variant?: "lockup" | "icon";
};

// Intrinsic viewBox ratios from the source SVGs, so width scales from height.
const ASSETS = {
  lockup: {
    light: { src: "/logo/logo-h-light.svg", w: 3553.15, h: 1080 },
    dark: { src: "/logo/logo-h-dark.svg", w: 3327.73, h: 1080 },
  },
  icon: {
    light: { src: "/logo/icon-light.svg", w: 1227.66, h: 1080 },
    dark: { src: "/logo/icon-dark.svg", w: 1181.78, h: 1080 },
  },
} as const;

export function Logo({ tone = "light", variant = "lockup" }: LogoProps) {
  const asset = ASSETS[variant][tone];
  return (
    <Image
      src={asset.src}
      alt="Rasheed"
      width={asset.w}
      height={asset.h}
      priority
      className={variant === "lockup" ? "logo logo--lockup" : "logo logo--icon"}
    />
  );
}
