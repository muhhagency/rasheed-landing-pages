import { Icon } from "@/components/v2/ui/Icon";
import type { POCKET as PocketContent } from "@/content/v2/corporates";

// Fixed 600 x 600 artwork; .co-orbit scales it down to fit narrow columns.
export function PocketOrbit({ content }: { content: typeof PocketContent }) {
  const c = content.card;
  return (
    <div className="co-orbit" role="img" aria-label={content.artLabel}>
      <div className="co-orbit__stage" aria-hidden="true">
        <div className="co-orbit__ring" />
        <div className="co-orbit__card">
          <div className="co-orbit__top">
            <span className="co-orbit__name"><Icon name="cube" />{c.title}</span>
            <span className="co-orbit__members">{c.members}</span>
          </div>
          <div className="co-orbit__label">{c.spentLabel}</div>
          <div className="co-orbit__value">{c.spent}</div>
          <div className="co-orbit__track"><div className="co-orbit__fill" style={{ inlineSize: `${c.pct}%` }} /></div>
          <div className="co-orbit__meta">{c.meta}</div>
        </div>
        {content.members.map((m) => (
          <div key={m.name} className="co-orbit__chip" style={{ insetInlineStart: m.x, insetBlockStart: m.y }}>
            <span className="co-orbit__avatar">{m.initials}</span>
            <span className="co-orbit__who"><span className="co-orbit__cname">{m.name}</span><span className="co-orbit__team">{m.team}</span></span>
          </div>
        ))}
      </div>
    </div>
  );
}
