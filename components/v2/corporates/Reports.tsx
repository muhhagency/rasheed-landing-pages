import { Badge } from "@/components/v2/ui/Badge";
import { Checks } from "@/components/v2/ui/Checks";
import { Icon } from "@/components/v2/ui/Icon";
import { Section } from "@/components/v2/ui/Section";
import type { REPORTS as ReportsContent } from "@/content/v2/corporates";

export function Reports({ content }: { content: typeof ReportsContent }) {
  const p = content.panel;
  return (
    <Section id="reports" tone="down" labelledBy="co-reports" className="co-sec">
      <div className="v2-split">
        <div>
          <Badge icon={content.badge.icon}>{content.badge.text}</Badge>
          <h2 id="co-reports" className="v2-h2 co-maxw-560">{content.title}</h2>
          <p className="v2-lead">{content.body}</p>
          <Checks items={content.checks} />
        </div>
        <div className="co-reports" role="img" aria-label={p.label}>
          <div className="co-reports__title">{p.title}</div>
          <div className="co-reports__chips">
            {p.chips.map((c, i) => <span key={c} className={`co-reports__chip${i === 0 ? " co-reports__chip--on" : ""}`}>{c}</span>)}
          </div>
          <div className="co-reports__rows">
            {p.rows.map((r) => (
              <div key={r.title} className="co-reports__row">
                <span className="co-reports__icon"><Icon name="report" /></span>
                <span className="co-reports__text">
                  <span className="co-reports__rtitle">{r.title}</span>
                  <span className="co-reports__rmeta">{r.meta}</span>
                </span>
                <span className="co-reports__btn">{p.action}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
