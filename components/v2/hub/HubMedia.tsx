import { HubVideo } from "./HubVideo";

// Background layers: poster/mobile image (picture swaps at 900px), the
// desktop video on top, then the readability scrim. The image alt carries
// the scene; the video repeats it in motion, so it is hidden from AT.
export function HubMedia({ alt }: { alt: string }) {
  return (
    <div className="hub-media">
      <picture>
        <source media="(max-width: 900px)" srcSet="/v2/mobile-hero.webp" width={780} height={1216} />
        <img className="hub-media__img" src="/v2/poster-cafe3.webp" alt={alt} width={1920} height={1080} fetchPriority="high" />
      </picture>
      <HubVideo src="/v2/hero-cafe3.mp4" poster="/v2/poster-cafe3.webp" />
      <div className="hub-media__scrim" aria-hidden="true" />
    </div>
  );
}
