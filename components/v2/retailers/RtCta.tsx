import { Button } from "@/components/v2/ui/Button";
import { CONTACT } from "@/components/v2/layout/contact";
import type { RT_CTA } from "@/content/v2/retailers";

export function RtCta({ content }: { content: typeof RT_CTA }) {
  const c = content;
  return (
    <section aria-labelledby="rt-cta" className="rt-cta">
      <div className="v2-container">
        <div className="rt-cta__panel">
          <h2 id="rt-cta" className="rt-cta__h2">{c.h2}</h2>
          <p className="rt-cta__lead">{c.lead}</p>
          <div className="v2-btn-row v2-btn-row--stack rt-cta__ctas">
            {c.ctas.map((b, i) => (
              <Button key={b.label} href={b.href} icon={b.icon} external={b.external} variant={i === 0 ? "primary" : "ghost"}>
                {b.label}
              </Button>
            ))}
          </div>
          <p className="rt-cta__call">
            {c.callPre} <a href={CONTACT.phoneHref}><bdi dir="ltr">{CONTACT.phoneLabel}</bdi></a>
          </p>
        </div>
      </div>
    </section>
  );
}
