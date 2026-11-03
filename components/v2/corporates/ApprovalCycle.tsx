import { Icon } from "@/components/v2/ui/Icon";
import type { CONTROL as ControlContent } from "@/content/v2/corporates";

// The four-step approval cycle: Add, Approve, Review, Sync to ERP.
export function ApprovalCycle({ content }: { content: (typeof ControlContent)["cycle"] }) {
  return (
    <div className="co-cycle">
      <div className="co-cycle__head">
        <h3 className="co-cycle__title">{content.title}</h3>
        <p className="co-cycle__text">{content.text}</p>
      </div>
      <ol className="co-cycle__steps">
        {content.steps.map((s, i) => (
          <li key={s.title} className="co-cycle__step">
            <div className="co-cycle__rail" aria-hidden="true">
              <span className="co-cycle__icon"><Icon name={s.icon} /></span>
              {i < content.steps.length - 1 && <span className="co-cycle__line"><Icon name="arrowRight" className="co-cycle__arrow" /></span>}
            </div>
            <div className="co-cycle__body">
              <span className="co-cycle__who">{i + 1} · {s.who}</span>
              <h4 className="co-cycle__stitle">{s.title}</h4>
              <p className="co-cycle__stext">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
