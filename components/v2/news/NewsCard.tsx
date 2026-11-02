import type { NewsItem } from "@/content/v2/news";
import { Icon } from "../ui/Icon";
import { NewsMeta } from "./NewsMeta";
import { RichText } from "./RichText";

// One story in the Latest news grid.
export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article id={item.id} className="nw-card" data-kinds={item.tag}>
      <div className={`nw-card__media${item.backdrop ? ` nw-card__media--${item.backdrop}` : ""}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image.src}
          alt={item.image.alt}
          width={item.image.width}
          height={item.image.height}
          loading="lazy"
          style={{ objectPosition: item.image.position }}
        />
      </div>
      <div className="nw-card__body">
        <NewsMeta tag={item.tagLabel} date={item.date} />
        <h3 className="nw-card__title"><RichText text={item.title} /></h3>
        <p className="nw-card__text"><RichText text={item.text} /></p>
        <a className="nw-more" href={item.href}>
          {item.cta}
          <span className="v2-sr">: {item.title}</span>
          <Icon name="arrowRight" />
        </a>
      </div>
    </article>
  );
}
