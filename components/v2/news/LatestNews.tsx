import type { NEWS } from "@/content/v2/news";
import { NewsCard } from "./NewsCard";

// Three-up grid of recent stories.
export function LatestNews({ latest }: { latest: typeof NEWS.latest }) {
  const kinds = Array.from(new Set(latest.items.map((i) => i.tag))).join(" ");
  return (
    <section className="nw-latest" aria-labelledby="nw-latest" data-kinds={kinds}>
      <div className="v2-container">
        <div className="nw-latest__head">
          <h2 id="nw-latest" className="nw-latest__title">{latest.title}</h2>
          <span className="nw-note">{latest.note}</span>
        </div>
        <div className="nw-grid">
          {latest.items.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
