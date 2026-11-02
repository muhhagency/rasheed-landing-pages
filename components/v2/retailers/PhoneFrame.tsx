// Phone mockup. `framed` images already include the device (canvas exports);
// otherwise the screen is placed inside /v2/phone-frame.webp (616x1256, screen
// at 28,19 sized 560x1217, radius 79), scaled proportionally to `width`.
export function PhoneFrame({ src, alt, width, framed = false, lazy = true, className }: {
  src: string;
  alt: string;
  width: number;
  framed?: boolean;
  lazy?: boolean;
  className?: string;
}) {
  const height = Math.round((width * 1256) / 616);
  const loading = lazy ? "lazy" : "eager";
  if (framed) {
    return (
      <div className={`rt-phone${className ? " " + className : ""}`} style={{ ["--rt-phone-w" as string]: `${width}px` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="rt-phone__img" src={src} alt={alt} width={width} height={height} loading={loading} />
      </div>
    );
  }
  return (
    <div className={`rt-phone${className ? " " + className : ""}`} style={{ ["--rt-phone-w" as string]: `${width}px` }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="rt-phone__screen" src={src} alt={alt} width={560} height={1217} loading={loading} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="rt-phone__frame" src="/v2/phone-frame.webp" alt="" width={width} height={height} loading={loading} />
    </div>
  );
}
