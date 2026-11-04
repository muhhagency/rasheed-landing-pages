import { Badge } from "@/components/v2/ui/Badge";
import { Checks } from "@/components/v2/ui/Checks";
import { Icon } from "@/components/v2/ui/Icon";
import { Section } from "@/components/v2/ui/Section";
import type { ERP as ErpContent } from "@/content/v2/corporates";

// ERP integration: approved expenses flow from the Rasheed portal to a
// generic "Your ERP" block. No real ERP names or logos.
export function ErpSync({ content }: { content: typeof ErpContent }) {
  const d = content.diagram;
  return (
    <Section id="erp" tone="up" labelledBy="co-erp" className="co-sec">
      <div className="v2-split">
        <div>
          <Badge icon={content.badge.icon}>{content.badge.text}</Badge>
          <h2 id="co-erp" className="v2-h2 co-maxw-560">{content.title}</h2>
          <p className="v2-lead">{content.body}</p>
          <Checks items={content.checks} />
        </div>
        <div className="co-erp" role="img" aria-label={d.label}>
          <div className="co-erp__box" aria-hidden="true">
            <div className="co-erp__bhead"><Icon name="dashboard" />{d.source}</div>
            <div className="co-erp__rows">
              {d.rows.map((r) => (
                <div key={r.title} className="co-erp__row">
                  <span className="co-erp__rtext">
                    <span className="co-erp__rtitle">{r.title}</span>
                    <span className="co-erp__rmeta">{r.meta}</span>
                  </span>
                  <span className="co-erp__ok"><Icon name="check" strokeWidth={2.4} />{d.status}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="co-erp__link" aria-hidden="true">
            <span className="co-erp__pipe"><span className="co-erp__pulse" /></span>
            <span className="co-erp__badge"><Icon name="sync" />{d.sync}</span>
            <span className="co-erp__fields">
              {d.fields.map((f) => <span key={f} className="co-erp__field">{f}</span>)}
            </span>
            <span className="co-erp__pipe"><span className="co-erp__pulse" /></span>
          </div>
          <div className="co-erp__box co-erp__box--target" aria-hidden="true">
            <div className="co-erp__bhead"><Icon name="database" />{d.target}<span className="co-erp__bsub">{d.targetSub}</span></div>
            <div className="co-erp__tiles">
              {d.tiles.map((t) => (
                <span key={t.label} className="co-erp__tile"><Icon name={t.icon} />{t.label}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
