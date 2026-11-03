import type { EventItem } from "@/content/v2/news";
import { Icon } from "../ui/Icon";

// Announcement bar under the fixed header for the next upcoming event.
// Register uses the same mailto link as the event row further down.
export function EventBanner({ label, item }: { label: string; item: EventItem }) {
  return (
    <aside className="nw-ann" aria-label={label}>
      <div className="nw-ann__bar">
        <div className="v2-container nw-ann__inner">
          <div className="nw-ann__date" aria-hidden="true">
            <span className="nw-ann__month">{item.month}</span>
            <span className="nw-ann__day">{item.day}</span>
          </div>
          <div className="nw-ann__body">
            <p className="nw-ann__title">
              <span className="nw-ann__label">{label}</span>
              <span className="v2-sr">: {item.month} {item.day}. </span>
              {item.title}
            </p>
            <p className="nw-ann__info">
              <span>{item.where}</span>
              <span>{item.when}</span>
            </p>
          </div>
          <a className="v2-btn v2-btn--primary v2-btn--sm nw-ann__cta" href={item.href}>
            {item.cta}
            <span className="v2-sr">: {item.title}</span>
            <Icon name="arrowRight" />
          </a>
        </div>
      </div>
    </aside>
  );
}
