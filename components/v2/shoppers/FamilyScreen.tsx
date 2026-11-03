import type { SH_FAMILY } from "@/content/v2/shoppers";
import { Icon } from "@/components/v2/ui/Icon";

// HTML mock of the Family Pocket screen, drawn on a 402px-wide app screen and
// scaled with the phone (all sizes are multiples of --u, see shoppers.css).
export function FamilyScreen({ screen: s }: { screen: (typeof SH_FAMILY)["screen"] }) {
  const p = s.pocket;
  return (
    <div className="sh-fam" aria-hidden="true">
      <div className="sh-fam__status">{s.time}</div>
      <div className="sh-fam__heading">{s.heading}</div>
      <div className="sh-fam__pocket">
        <div className="sh-fam__pocket-top">
          <span className="sh-fam__pocket-name"><Icon name="users" />{p.name}</span>
          <span className="sh-fam__pocket-type">{p.type}</span>
        </div>
        <div className="sh-fam__pocket-body">
          <div className="sh-fam__pocket-label">{p.spentLabel}</div>
          <div className="sh-fam__pocket-value">{p.spent}</div>
          <div className="sh-fam__pocket-left">{p.left}</div>
          <div className="sh-fam__pocket-foot">
            <span className="sh-fam__pill">{p.cycle}</span>
            <span className="sh-fam__pill">{p.progress}%</span>
          </div>
          <div className="sh-fam__bar"><span style={{ inlineSize: `${p.progress}%` }} /></div>
        </div>
      </div>
      <div className="sh-fam__title">{s.membersTitle}</div>
      <ul className="sh-fam__members">
        {s.members.map((m) => (
          <li key={m.initials}>
            <span className={`sh-fam__avatar${m.role === "Kid" ? " sh-fam__avatar--kid" : ""}`}>{m.initials}</span>
            <span className="sh-fam__role">{m.role}</span>
          </li>
        ))}
        <li>
          <span className="sh-fam__avatar sh-fam__avatar--add"><Icon name="plus" /></span>
          <span className="sh-fam__role">&nbsp;</span>
        </li>
      </ul>
      <div className="sh-fam__title">{s.recentTitle}</div>
      <ul className="sh-fam__list">
        {s.recent.map((r) => (
          <li key={r.title} className={`sh-fam__row${r.kid ? " sh-fam__row--kid" : ""}`}>
            <span className="sh-fam__row-icon"><Icon name={r.icon} /></span>
            <span className="sh-fam__row-text">
              <span className="sh-fam__row-title">{r.title}</span>
              <span className="sh-fam__row-sub">{r.sub}</span>
            </span>
            <span className="sh-fam__row-amount">{r.amount}</span>
          </li>
        ))}
      </ul>
      <div className="sh-fam__tabs">
        {s.tabs.map((t) => (
          <span key={t.label} className={`sh-fam__tab${t.active ? " sh-fam__tab--active" : ""}`}>
            <Icon name={t.icon} />{t.label}
          </span>
        ))}
      </div>
    </div>
  );
}
