// Phone mockup. The frame artwork is 616 x 1256; the screen sits at 28,19,
// 560 x 1217 with a 79px corner radius. Geometry is expressed as percentages
// so the phone scales with its width. Pass `framed` when the image already
// has the frame composited in (the ph-scr-* exports do), so it is not drawn twice.
export function PhoneFrame({ src, alt, width, framed = false, lazy = true, className }: {
  src: string;
  alt: string;
  width: number;
  framed?: boolean;
  lazy?: boolean;
  className?: string;
}) {
  const height = Math.round((width * 1256) / 616);
  return (
    <div className={`co-phone${className ? " " + className : ""}`} style={{ inlineSize: width }}>
      {framed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="co-phone__full" src={src} alt={alt} width={width} height={height} loading={lazy ? "lazy" : "eager"} />
      ) : (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="co-phone__screen" src={src} alt={alt} width={560} height={1217} loading={lazy ? "lazy" : "eager"} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="co-phone__frame" src="/v2/phone-frame.webp" alt="" width={width} height={height} loading={lazy ? "lazy" : "eager"} />
        </>
      )}
    </div>
  );
}
