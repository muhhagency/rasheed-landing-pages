import { Badge } from "@/components/v2/ui/Badge";
import { Faq } from "@/components/v2/ui/Faq";
import { Section } from "@/components/v2/ui/Section";
import { CONTACT } from "@/components/v2/layout/contact";
import type { FAQ as FaqContent } from "@/content/v2/corporates";

export function CoFaq({ content }: { content: typeof FaqContent }) {
  const c = content.contact;
  return (
    <Section id="faq" tone="deep" labelledBy="co-faq" className="co-faq-sec">
      <div className="co-faq">
        <div>
          <Badge icon={content.badge.icon}>{content.badge.text}</Badge>
          <h2 id="co-faq" className="v2-h2 co-maxw-440">{content.title}</h2>
          <p className="co-faq__contact">
            {c.before}<a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">{c.whatsapp}</a>{c.middle}
            <a href={CONTACT.phoneHref} className="co-nowrap">{CONTACT.phoneLabel}</a>{c.after}
          </p>
        </div>
        <div className="co-faq__list"><Faq items={content.items} /></div>
      </div>
    </Section>
  );
}
