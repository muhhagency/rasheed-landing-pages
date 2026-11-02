/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Icon } from "@/components/v2/ui/Icon";
import type { NEWS as NewsContent } from "@/content/v2/corporates";
import { TextWithTapCeipt } from "./TextWithTapCeipt";

export function NewsStrip({ content }: { content: typeof NewsContent }) {
  return (
    <section aria-labelledby="co-news" className="co-news">
      <div className="v2-container">
        <div className="co-news__head">
          <h2 id="co-news" className="co-news__title">{content.title}</h2>
          <div className="co-news__aside">
            <span className="co-news__sample">{content.sample}</span>
            <Link href={content.href} className="co-link">{content.all}<Icon name="arrowRight" strokeWidth={2} /></Link>
          </div>
        </div>
        <div className="co-news__grid">
          {content.cards.map((c) => (
            <article key={c.date} className="co-news__card">
              <div className={`co-news__media${c.tint ? " co-news__media--tint" : ""}`}>
                <img src={c.img} alt={c.alt} width={c.w} height={c.h} loading="lazy" style={{ objectPosition: c.pos }} />
              </div>
              <div className="co-news__body">
                <div className="co-news__meta">
                  <span className="co-news__tag">{c.tag}</span>
                  <span className="co-news__date">{c.date}</span>
                </div>
                <h3 className="co-news__ctitle"><TextWithTapCeipt text={c.title} /></h3>
                <Link href={content.href} className="co-link co-news__more">
                  {content.more}<span className="v2-sr">: {c.title.replace("{TapCeipt}", "TapCeipt")}</span><Icon name="arrowRight" strokeWidth={2} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
