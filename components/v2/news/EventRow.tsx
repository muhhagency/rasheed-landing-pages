import type { EventItem } from "@/content/v2/news";
import { Icon } from "../ui/Icon";

// One event: date tile, kind, title, place and time, Register link.
export function EventRow({ item }: { item: EventItem }) {
  return (
    <article id={item.id} className="nw-event">
      <div className="nw-event__date" aria-hidden="true">
        <span className="nw-event__month">{item.month}</span>
        <span className="nw-event__day">{item.day}</span>
      </div>
      <div className="nw-event__body">
        <span className="nw-tag">{item.kind}</span>
        <h3 className="nw-event__title">{item.title}</h3>
        <p className="nw-event__info">
          <span className="v2-sr">{item.dateLabel ?? `${item.month} ${item.day}`}. </span>
          <span>{item.where}</span>
          <span>{item.when}</span>
        </p>
      </div>
      <a className="v2-btn v2-btn--ghost nw-event__cta" href={item.href}>
        {item.cta}
        <span className="v2-sr">: {item.title}</span>
        <Icon name="arrowRight" />
      </a>
    </article>
  );
}
