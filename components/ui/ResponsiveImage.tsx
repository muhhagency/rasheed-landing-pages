import Image from "next/image";
import "./ui.css";
import type { ImageAsset } from "./assetManifest";

type ResponsiveImageProps = {
  /** Entry from `IMAGES` in assetManifest.ts — carries name + intrinsic size. */
  asset: ImageAsset;
  /** Written as if the real asset were present. Carried over verbatim from the
   *  PlaceholderMedia this replaces — the copy was authored for the photo. */
  alt: string;
  /** Above-the-fold images only. Sets fetchpriority=high and disables lazy
   *  loading; everything else stays lazy. */
  priority?: boolean;
  /** Responsive `sizes` hint. Defaults to the common half-width-on-desktop
   *  case, which is what every current slot except the QR codes needs. */
  sizes?: string;
  /** Extra class on the <picture>, for slot-specific framing. */
  className?: string;
};

// A photograph, served WebP-first with a JPEG fallback.
//
// <picture> does the format negotiation: browsers that understand
// image/webp take the <source>; everything else falls through to the
// next/image <img>, which points at the .jpg. Since next.config sets
// images.unoptimized (static export), next/image renders a plain <img> with no
// srcset of its own, so the <source> above it is respected rather than
// competing with it.
//
// width/height are the file's intrinsic pixels, so the browser can reserve the
// correct box before download — the layout never shifts as images arrive.
export function ResponsiveImage({
  asset,
  alt,
  priority = false,
  sizes = "(min-width: 900px) 50vw, 100vw",
  className,
}: ResponsiveImageProps) {
  const base = `/images/${asset.name}`;

  return (
    <>
      {/* next/image's own `priority` preload points at `src` — the JPEG — which
          the <picture> below then discards in favour of the WebP, so the hero
          downloads twice. Preload the WebP by hand instead (imageSrcSet + type
          make the preload resolve exactly like the <source> does) and leave
          next/image's preload off. */}
      {priority && (
        <link
          rel="preload"
          as="image"
          // No `href`: imageSrcSet + type is the responsive-preload form, and
          // React 19 hoists this into <head>. Supplying both href and
          // imageSrcSet made React emit the tag twice.
          imageSrcSet={`${base}.webp`}
          imageSizes={sizes}
          type="image/webp"
          // The hint must be on the PRELOAD too, not just the <img>: the
          // preload is what actually issues the request, so without it the
          // LCP image is fetched at default priority.
          fetchPriority="high"
        />
      )}
      <picture className={["ui-image", className].filter(Boolean).join(" ")}>
        <source srcSet={`${base}.webp`} type="image/webp" />
        <Image
          src={`${base}.jpg`}
          alt={alt}
          width={asset.width}
          height={asset.height}
          sizes={sizes}
          // priority is deliberately NOT passed through: it would emit a second,
          // JPEG-targeted preload. The hand-rolled WebP preload above covers the
          // above-the-fold case; here we only need eager loading + high fetch
          // priority on the element itself.
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          className="ui-image__img"
        />
      </picture>
    </>
  );
}
