import { Button } from "@/components/v2/ui/Button";
import { CONTACT } from "@/components/v2/layout/contact";
import type { CTA as CtaContent } from "@/content/v2/corporates";

export function FinalCta({ content }: { content: typeof CtaContent }) {
  return (
    <section aria-labelledby="co-cta" className="co-cta">
      <div className="v2-container">
        <div className="co-cta__panel">
          <h2 id="co-cta" className="co-cta__title">{content.title}</h2>
          <p className="co-cta__body">{content.body}</p>
          <div className="v2-btn-row v2-btn-row--stack co-cta__btns">
            <Button href={CONTACT.demoHref} icon="calendar">{content.demo}</Button>
            <Button href={CONTACT.quoteHref} variant="ghost" icon="doc">{content.quote}</Button>
            <Button href={CONTACT.whatsappHref} variant="ghost" icon="chat" external>{content.whatsapp}</Button>
          </div>
          <p className="co-cta__call">{content.call}<a href={CONTACT.phoneHref}>{CONTACT.phoneLabel}</a></p>
        </div>
      </div>
    </section>
  );
}
