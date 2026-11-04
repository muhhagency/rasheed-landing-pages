import type { SH_CTA } from "@/content/v2/shoppers";
import { Button } from "@/components/v2/ui/Button";

export function ShCta({ content: c }: { content: typeof SH_CTA }) {
  return (
    <section id={c.id} aria-labelledby="sh-cta" className="sh-cta">
      <div className="v2-container">
        <div className="sh-cta__panel">
          <h2 id="sh-cta" className="sh-cta__title">{c.title}</h2>
          <p className="sh-cta__lead">{c.lead}</p>
          <div className="v2-btn-row v2-btn-row--stack sh-cta__btns">
            {c.ctas.map((b) => (
              <Button key={b.label} href={b.href} variant={b.variant} iconEnd={b.icon}>{b.label}</Button>
            ))}
          </div>
          <p className="sh-cta__note">{c.note}</p>
        </div>
      </div>
    </section>
  );
}
