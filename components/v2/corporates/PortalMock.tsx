/* eslint-disable @next/next/no-img-element */
import { Icon } from "@/components/v2/ui/Icon";
import type { CoPortal } from "@/content/v2/corporates";

// The corporate portal mock (sample data), drawn in HTML. Used in the hero
// (tilted, decorative) and in the Control section (as an image).
export function PortalMock({ data, decorative = false, className }: { data: CoPortal; decorative?: boolean; className?: string }) {
  const a11y = decorative ? { "aria-hidden": true as const } : { role: "img", "aria-label": data.label };
  return (
    <div className={`co-portal${className ? " " + className : ""}`} {...a11y}>
      <div className="co-portal__bar">
        <span className="co-portal__dot" /><span className="co-portal__dot" /><span className="co-portal__dot" />
        <span className="co-portal__wtitle">{data.windowTitle}</span>
      </div>
      <div className="co-portal__grid">
        <div className="co-portal__side">
          <img className="co-portal__logo" src="/v2/logo-dark-clean.svg" alt="" width={86} height={30} />
          {data.nav.map((n) => (
            <div key={n.label} className={`co-portal__nav${n.active ? " co-portal__nav--on" : ""}`}>
              <Icon name={n.icon} />{n.label}
            </div>
          ))}
        </div>
        <div className="co-portal__main">
          <div className="co-portal__head">
            <div>
              <div className="co-portal__title">{data.title}</div>
              <div className="co-portal__sub">{data.sub}</div>
            </div>
            <span className="co-portal__sample">{data.sample}</span>
          </div>
          <div className="co-portal__kpis">
            {data.kpis.map((k) => (
              <div key={k.label} className="co-portal__tile">
                <div className="co-portal__klabel">{k.label}</div>
                <div className="co-portal__kval">{k.value}</div>
                <div className="co-portal__knote">{k.note}</div>
              </div>
            ))}
          </div>
          <div className="co-portal__row">
            <div className="co-portal__tile">
              <div className="co-portal__shead"><span>{data.slicesTitle}</span><span className="co-portal__muted">{data.slicesUsed}</span></div>
              <div className="co-portal__slices">
                {data.slices.map((s) => (
                  <div key={s.name} className="co-portal__slice">
                    <div className="co-portal__sline">
                      <span><b>{s.name}</b><span className="co-portal__muted"> · {s.people}</span></span>
                      <span className="co-portal__pct">{s.pct}%</span>
                    </div>
                    <div className="co-portal__track"><div className={`co-portal__fill${s.alt ? " co-portal__fill--alt" : ""}`} style={{ inlineSize: `${s.pct}%` }} /></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="co-portal__col">
              <div className="co-portal__tile co-portal__latest">
                <div className="co-portal__kicker">{data.latest.kicker}</div>
                <div className="co-portal__ltitle">{data.latest.title}</div>
                <div className="co-portal__lmeta">{data.latest.meta}</div>
              </div>
              <div className="co-portal__tile">
                <div className="co-portal__etitle">{data.exportTitle}</div>
                <div className="co-portal__chips">
                  {data.exportChips.map((c) => <span key={c} className="co-portal__chip">{c}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
