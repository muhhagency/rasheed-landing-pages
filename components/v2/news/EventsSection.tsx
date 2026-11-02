import type { NEWS } from "@/content/v2/news";
import { Badge } from "../ui/Badge";
import { EventRow } from "./EventRow";
import { RichText } from "./RichText";

// Upcoming events: heading column beside a list of event rows.
export function EventsSection({ events }: { events: typeof NEWS.events }) {
  return (
    <section className="nw-events" aria-labelledby="nw-events" data-kinds="events">
      <div className="v2-container nw-events__grid">
        <div>
          <Badge icon="sparkle">{events.badge}</Badge>
          <h2 id="nw-events" className="v2-h2">{events.title}</h2>
          <p className="nw-events__lead"><RichText text={events.lead} /></p>
          <span className="nw-note nw-events__note">{events.note}</span>
        </div>
        <div className="nw-events__list">
          {events.items.map((item) => (
            <EventRow key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
