import { Icon } from "@/components/v2/ui/Icon";
import type { POCKET as PocketContent } from "@/content/v2/corporates";

// Business Pocket card drawn in HTML, in the style of the app's pocket card
// (see /v2/ph-scr-bizhome.webp): a sleeve with the pocket name, a pocket
// front with spend and budget, members, then the pocket's Slices.
export function PocketCard({ content }: { content: typeof PocketContent }) {
  const c = content.card;
  return (
    <div className="co-pcard" role="img" aria-label={content.artLabel}>
      <div className="co-pcard__glow" aria-hidden="true" />
      <div className="co-pcard__stack" aria-hidden="true">
        <div className="co-pcard__wallet">
          <div className="co-pcard__sleeve">
            <span className="co-pcard__name"><Icon name="building" />{c.name}</span>
            <span className="co-pcard__mark"><Icon name="leaf" /></span>
          </div>
          <div className="co-pcard__front">
            <svg className="co-pcard__shape" viewBox="0 0 400 300" preserveAspectRatio="none" focusable="false">
              <defs>
                <linearGradient id="co-pcard-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" className="co-pcard__stop1" />
                  <stop offset="1" className="co-pcard__stop2" />
                </linearGradient>
              </defs>
              <path className="co-pcard__fill" d="M0 22C0 8 8 0 22 0H96C138 0 152 44 200 44C248 44 262 0 304 0H378C392 0 400 8 400 22V280C400 292 392 300 380 300H20C8 300 0 292 0 280Z" />
              <path className="co-pcard__dash" vectorEffect="non-scaling-stroke" d="M12 30C12 19 18 13 28 13H94C130 13 146 57 200 57C254 57 270 13 306 13H372C382 13 388 19 388 30V274C388 283 383 288 374 288H26C17 288 12 283 12 274Z" />
            </svg>
            <div className="co-pcard__body">
              <div className="co-pcard__toprow">
                <span className="co-pcard__type"><Icon name="briefcase" />{c.type}</span>
                <span className="co-pcard__pending"><span className="co-pcard__dot" />{c.pending}</span>
              </div>
              <div className="co-pcard__money">
                <div>
                  <div className="co-pcard__label">{c.spentLabel}</div>
                  <div className="co-pcard__value">{c.spent}</div>
                </div>
                <div className="co-pcard__budget">
                  <div className="co-pcard__label">{c.budgetLabel}</div>
                  <div className="co-pcard__bval">{c.budget}</div>
                </div>
              </div>
              <div className="co-pcard__track"><div className="co-pcard__bar" style={{ inlineSize: `${c.pct}%` }} /></div>
              <div className="co-pcard__meta">
                <span className="co-pcard__cycle"><Icon name="calendar" />{c.cycle}</span>
                <span className="co-pcard__pct">{c.pct}%</span>
              </div>
              <div className="co-pcard__foot">
                <span className="co-pcard__avatars">
                  {c.members.map((m) => <span key={m} className="co-pcard__avatar">{m}</span>)}
                  <span className="co-pcard__avatar co-pcard__avatar--more">{c.moreMembers}</span>
                </span>
                <span className="co-pcard__mcount">{c.membersLabel}</span>
                <span className="co-pcard__avail">{c.available}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="co-pcard__slices">
          <div className="co-pcard__shead">{c.slicesTitle}</div>
          {c.slices.map((s) => (
            <div key={s.name} className="co-pcard__slice">
              <span className="co-pcard__sicon"><Icon name={s.icon} /></span>
              <span className="co-pcard__smain">
                <span className="co-pcard__sline">
                  <span className="co-pcard__sname">{s.name}</span>
                  <span className="co-pcard__samt"><b>{s.spent}</b> / {s.budget}</span>
                </span>
                <span className="co-pcard__strack"><span className="co-pcard__sbar" style={{ inlineSize: `${s.pct}%` }} /></span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
