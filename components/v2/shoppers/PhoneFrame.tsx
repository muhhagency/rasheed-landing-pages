// A phone frame (`/v2/phone-frame.webp`, 616x1256) with any screen content
// placed in its screen opening (28,19, 560x1217, radius 79 on the full-size
// frame). Everything is in percentages, so the frame scales with its width.
export function PhoneFrame({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`sh-phone${className ? " " + className : ""}`}>
      <div className="sh-phone__screen">{children}</div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="sh-phone__frame" src="/v2/phone-frame.webp" width={616} height={1256} alt="" />
    </div>
  );
}
