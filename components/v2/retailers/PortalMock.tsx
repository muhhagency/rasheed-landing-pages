import { Icon } from "@/components/v2/ui/Icon";
import type { RT_PORTAL } from "@/content/v2/retailers";

// Retailer portal mock-up with sample data. Exposed as one image.
export function PortalMock({ mock }: { mock: typeof RT_PORTAL.mock }) {
  const m = mock;
  return (
    <div className="rt-portal" role="img" aria-label={m.label}>
      <div className="rt-portal__bar">
        <span /><span /><span />
        <span className="rt-portal__wintitle">{m.windowTitle}</span>
      </div>
      <div className="rt-portal__body">
        <div className="rt-portal__side">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="rt-portal__logo" src="/v2/logo-dark-clean.svg" alt="" width={70} height={30} loading="lazy" />
          {m.nav.map((n, i) => (
            <div key={n.label} className={`rt-portal__nav${i === 0 ? " rt-portal__nav--on" : ""}`}>
              <Icon name={n.icon} />
              {n.label}
            </div>
          ))}
        </div>
        <div className="rt-portal__main">
          <div className="rt-portal__head">
            <div>
              <div className="rt-portal__title">{m.title}</div>
              <div className="rt-portal__sub">{m.sub}</div>
            </div>
            <span className="rt-portal__sample">{m.sample}</span>
          </div>
          <div className="rt-portal__kpis">
            {m.kpis.map((k) => (
              <div key={k.label} className="rt-portal__card">
                <div className="rt-portal__klabel">{k.label}</div>
                <div className="rt-portal__kvalue">{k.value}</div>
                <div className="rt-portal__knote">{k.note}</div>
              </div>
            ))}
          </div>
          <div className="rt-portal__row">
            <div className="rt-portal__card">
              <div className="rt-portal__ctitle">{m.chartTitle}</div>
              <div className="rt-portal__chart">
                {m.bars.map((b) => (
                  <div key={b.day} className="rt-portal__col">
                    <div className={`rt-portal__bar-v${b.top ? " rt-portal__bar-v--top" : ""}`} style={{ blockSize: `${b.h}px` }} />
                    <span>{b.day}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rt-portal__stack">
              <div className="rt-portal__card">
                <div className="rt-portal__ctitle rt-portal__ctitle--split">
                  <span>{m.branchesTitle}</span>
                  <span className="rt-portal__muted">{m.branchesCol}</span>
                </div>
                <div className="rt-portal__list">
                  {m.branches.map((b) => (
                    <div key={b.name} className="rt-portal__li">
                      <span><b>{b.name}</b> <span className="rt-portal__muted">{b.meta}</span></span>
                      <b>{b.value}</b>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rt-portal__card rt-portal__offer">
                <div className="rt-portal__okicker">{m.offer.kicker}</div>
                <div className="rt-portal__otitle">{m.offer.title}</div>
                <div className="rt-portal__osub">{m.offer.sub}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
