import Image from "next/image";

type ShotProps = {
  /** Basename in public/screens, without extension. Exported from Figma v2. */
  name: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

export function Phone({ name, alt, priority, className = "" }: ShotProps) {
  return (
    <div className={`phone ${className}`}>
      <Image
        src={`/screens/${name}.webp`}
        alt={alt}
        width={804}
        height={1748}
        priority={priority}
      />
    </div>
  );
}

export function Browser({
  name,
  alt,
  label,
  priority,
  className = "",
}: ShotProps & { label: string }) {
  return (
    <figure className={`browser ${className}`}>
      <div className="browser__window">
        <div className="browser__bar" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <Image
          src={`/screens/${name}.webp`}
          alt={alt}
          width={2016}
          height={1433}
          priority={priority}
        />
      </div>
      <figcaption className="browser__label">{label}</figcaption>
    </figure>
  );
}

/** A cropped portal panel (drawer), shown on its own. */
export function Panel({ name, alt, label }: ShotProps & { label: string }) {
  return (
    <figure className="panel">
      <Image src={`/screens/${name}.webp`} alt={alt} width={728} height={1010} />
      <figcaption className="browser__label">{label}</figcaption>
    </figure>
  );
}
