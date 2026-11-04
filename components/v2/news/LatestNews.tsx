import type { NEWS } from "@/content/v2/news";
import { NewsCard } from "./NewsCard";
import { NewsRail } from "./NewsRail";

// Recent stories: a sideways scroll row that can expand into the full grid.
export function LatestNews({ latest }: { latest: typeof NEWS.latest }) {
  const kinds = Array.from(new Set(latest.items.map((i) => i.tag))).join(" ");
  const { items, ...labels } = latest;
  return (
    <section className="nw-latest" aria-labelledby="nw-latest" data-kinds={kinds}>
      <div className="v2-container">
        <NewsRail labels={labels}>
          {items.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </NewsRail>
      </div>
    </section>
  );
}
