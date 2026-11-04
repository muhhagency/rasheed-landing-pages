type Tone = "deep" | "raised" | "down" | "up";

// Full-bleed band with the shared vertical rhythm and a centred container.
export function Section({ id, tone = "deep", labelledBy, label, className, children }: {
  id?: string; tone?: Tone; labelledBy?: string; label?: string; className?: string; children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} aria-label={label} className={`v2-section v2-section--${tone}${className ? " " + className : ""}`}>
      <div className="v2-container">{children}</div>
    </section>
  );
}
