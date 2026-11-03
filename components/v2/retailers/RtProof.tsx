import type { RT_PROOF } from "@/content/v2/retailers";
import { RtEvent } from "./RtEvent";
import { Marquee } from "@/components/v2/ui/Marquee";

const QUOTE_D = "M4 18v-5.5C4 8.4 6.2 6 10 5l.7 1.6C8.5 7.4 7.6 8.8 7.5 11H10v7zm10 0v-5.5C14 8.4 16.2 6 20 5l.7 1.6c-2.2.8-3.1 2.2-3.2 4.4H20v7z";

export function RtProof({ content }: { content: typeof RT_PROOF }) {
  const c = content;
  return (
    <section aria-labelledby="rt-proof" className="v2-section v2-section--deep rt-proof">
      <div className="v2-container">
        <div className="rt-proof__head">
          <h2 id="rt-proof" className="rt-proof__title">{c.quotesTitle}</h2>
          <span className="rt-proof__note">{c.quotesNote}</span>
        </div>
        <Marquee
          label="testimonials"
          items={c.quotes.map((q) => (
            <figure key={q.initials} className="rt-quote">
              <div>
                <svg className="rt-quote__mark" width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={QUOTE_D} /></svg>
                <blockquote className="rt-quote__text">{q.quote}</blockquote>
              </div>
              <figcaption className="rt-quote__by">
                <span className="rt-quote__avatar" aria-hidden="true">{q.initials}</span>
                <span>
                  <span className="rt-quote__name">{q.name}</span>
                  <span className="rt-quote__role">{q.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        />
        <RtEvent event={c.event} />
      </div>
    </section>
  );
}
