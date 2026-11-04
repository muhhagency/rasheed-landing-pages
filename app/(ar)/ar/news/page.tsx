import type { Metadata } from "next";
import { NEWS } from "@/content/v2/ar/news";
import { NewsFilterRoot } from "@/components/v2/news/NewsFilterRoot";
import { EventBanner } from "@/components/v2/news/EventBanner";
import { NewsIntro } from "@/components/v2/news/NewsIntro";
import { LatestNews } from "@/components/v2/news/LatestNews";
import { EventsSection } from "@/components/v2/news/EventsSection";
import { Subscribe } from "@/components/v2/news/Subscribe";

const title = NEWS.meta.title;
const description = NEWS.intro.lead;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/ar/news", languages: { en: "/news", ar: "/ar/news" } },
  openGraph: { title, description, url: "/ar/news" },
};

// The banner shows the event named in NEWS.banner, falling back to the first listed.
const nextEvent = NEWS.events.items.find((e) => e.id === NEWS.banner.eventId) ?? NEWS.events.items[0];

// Arabic news and events page (/ar/news).
export default function NewsPage() {
  return (
    <NewsFilterRoot>
      <EventBanner label={NEWS.banner.label} item={nextEvent} />
      <NewsIntro intro={NEWS.intro} featured={NEWS.featured} />
      <LatestNews latest={NEWS.latest} />
      <EventsSection events={NEWS.events} />
      <Subscribe subscribe={NEWS.subscribe} />
    </NewsFilterRoot>
  );
}
