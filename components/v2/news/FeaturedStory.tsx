import type { NewsItem } from "@/content/v2/news";
import { Icon } from "../ui/Icon";
import { NewsMeta } from "./NewsMeta";
import { RichText } from "./RichText";

// Large lead story: image on one side, headline and CTA on the other.
export function FeaturedStory({ item }: { item: NewsItem }) {
  return (
    <article id={item.id} className="nw-featured" data-kinds={item.tag}>
      <div className="nw-featured__media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image.src}
          alt={item.image.alt}
          width={item.image.width}
          height={item.image.height}
          style={{ objectPosition: item.image.position }}
        />
      </div>
      <div className="nw-featured__body">
        <NewsMeta tag={item.tagLabel} date={item.date} />
        <h2 className="nw-featured__title"><RichText text={item.title} /></h2>
        <p className="nw-featured__text"><RichText text={item.text} /></p>
        <a className="v2-btn v2-btn--primary nw-featured__cta" href={item.href}>
          {item.cta}
          <Icon name="arrowRight" />
        </a>
      </div>
    </article>
  );
}
