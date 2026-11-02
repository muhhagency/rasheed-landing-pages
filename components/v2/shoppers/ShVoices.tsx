import type { SH_VOICES } from "@/content/v2/shoppers";

const QUOTE = "M4 18v-5.5C4 8.4 6.2 6 10 5l.7 1.6C8.5 7.4 7.6 8.8 7.5 11H10v7zm10 0v-5.5C14 8.4 16.2 6 20 5l.7 1.6c-2.2.8-3.1 2.2-3.2 4.4H20v7z";

export function ShVoices({ content: c }: { content: typeof SH_VOICES }) {
  return (
    <section aria-labelledby="sh-voices" className="sh-voices">
      <div className="v2-container">
        <div className="sh-voices__head">
          <h2 id="sh-voices" className="sh-voices__title">{c.title}</h2>
          <span className="sh-voices__note">{c.note}</span>
        </div>
        <div className="sh-voices__grid">
          {c.quotes.map((q) => (
            <figure key={q.initials} className="sh-quote">
              <div>
                <svg className="sh-quote__mark" width="28" height="28" viewBox="0 0 24 24" aria-hidden="true"><path d={QUOTE} fill="currentColor" /></svg>
                <blockquote className="sh-quote__text">{q.quote}</blockquote>
              </div>
              <figcaption className="sh-quote__by">
                <span className="sh-quote__initials" aria-hidden="true">{q.initials}</span>
                <span>
                  <span className="sh-quote__name">{q.name}</span>
                  <span className="sh-quote__role">{q.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
