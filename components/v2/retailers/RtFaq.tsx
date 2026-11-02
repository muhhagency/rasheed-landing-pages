import { Badge } from "@/components/v2/ui/Badge";
import { Faq } from "@/components/v2/ui/Faq";
import { Section } from "@/components/v2/ui/Section";
import { CONTACT } from "@/components/v2/layout/contact";
import type { RT_FAQ } from "@/content/v2/retailers";

export function RtFaq({ content }: { content: typeof RT_FAQ }) {
  const c = content;
  return (
    <Section id="faq" tone="deep" labelledBy="rt-faq" className="rt-faq">
      <div className="rt-faq__grid">
        <div>
          <Badge icon="help">{c.badge}</Badge>
          <h2 id="rt-faq" className="v2-h2 rt-faq__h2">{c.h2}</h2>
          <p className="rt-faq__ask">
            {c.askPre}{" "}
            <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">{c.askWhatsapp}</a> {c.askMid}{" "}
            <a href={CONTACT.phoneHref} className="rt-nowrap">{CONTACT.phoneLabel}</a>.
          </p>
        </div>
        <div className="rt-faq__list">
          <Faq items={c.items} />
        </div>
      </div>
    </Section>
  );
}
