import { Icon } from "@/components/v2/ui/Icon";
import type { RT_PROOF } from "@/content/v2/retailers";

export function RtEvent({ event }: { event: typeof RT_PROOF.event }) {
  const e = event;
  return (
    <div className="rt-event">
      <div className="rt-event__date" aria-hidden="true">
        <span className="rt-event__month">{e.month}</span>
        <span className="rt-event__day">{e.day}</span>
      </div>
      <div>
        <p className="rt-event__kicker">{e.kicker}</p>
        <h3 className="rt-event__title">{e.title}</h3>
        <p className="rt-event__meta">
          <span className="v2-sr">{e.month} {e.day} · </span>
          {e.meta}
        </p>
      </div>
      <div className="rt-event__ctas">
        <a className="v2-btn v2-btn--primary rt-event__btn" href={e.register.href}>
          {e.register.label}
          <Icon name="arrowRight" strokeWidth={2} />
        </a>
        <a className="v2-btn v2-btn--ghost rt-event__btn" href={e.all.href}>{e.all.label}</a>
      </div>
    </div>
  );
}
