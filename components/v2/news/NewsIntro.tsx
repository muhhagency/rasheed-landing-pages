import type { NEWS } from "@/content/v2/news";
import { Badge } from "../ui/Badge";
import { FeaturedStory } from "./FeaturedStory";
import { NewsFilterChips } from "./NewsFilterChips";

// Page hero: badge, h1, lead, filter chips and the featured story.
export function NewsIntro({ intro, featured }: { intro: typeof NEWS.intro; featured: typeof NEWS.featured }) {
  return (
    <section className="nw-hero" aria-labelledby="nw-title">
      <div className="v2-container">
        <Badge icon="sparkle">{intro.badge}</Badge>
        <div className="nw-hero__head">
          <div>
            <h1 id="nw-title" className="v2-h1 nw-hero__title">{intro.title}</h1>
            <p className="nw-hero__lead">{intro.lead}</p>
          </div>
          <NewsFilterChips label={intro.filterLabel} filters={intro.filters} />
        </div>
        <FeaturedStory item={featured} />
      </div>
    </section>
  );
}
