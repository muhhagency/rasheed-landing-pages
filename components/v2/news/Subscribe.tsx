import type { NEWS } from "@/content/v2/news";

// Newsletter sign-up panel. No mailing backend exists yet, so the form
// has no action; wire it to the list provider when one is chosen.
export function Subscribe({ subscribe }: { subscribe: typeof NEWS.subscribe }) {
  return (
    <section className="nw-sub" aria-labelledby="nw-sub">
      <div className="v2-container">
        <div className="nw-sub__panel">
          <div>
            <h2 id="nw-sub" className="nw-sub__title">{subscribe.title}</h2>
            <p className="nw-sub__lead">{subscribe.lead}</p>
          </div>
          <form className="nw-sub__form">
            <label htmlFor="nw-email" className="v2-sr">{subscribe.label}</label>
            <input id="nw-email" name="email" type="email" autoComplete="email" required placeholder={subscribe.placeholder} className="nw-sub__input" />
            <button type="submit" className="v2-btn v2-btn--primary nw-sub__btn">{subscribe.cta}</button>
          </form>
        </div>
      </div>
    </section>
  );
}
