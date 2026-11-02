import type { Metadata } from "next";
import { NEWS } from "@/content/v2/news";
import { NewsFilterRoot } from "@/components/v2/news/NewsFilterRoot";
import { NewsIntro } from "@/components/v2/news/NewsIntro";
import { LatestNews } from "@/components/v2/news/LatestNews";
import { EventsSection } from "@/components/v2/news/EventsSection";
import { Subscribe } from "@/components/v2/news/Subscribe";

const title = "News and events | Rasheed";
const description = NEWS.intro.lead;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/news" },
  openGraph: { title, description, url: "/news" },
};

// News and events page (/news).
export default function NewsPage() {
  return (
    <NewsFilterRoot>
      <NewsIntro intro={NEWS.intro} featured={NEWS.featured} />
      <LatestNews latest={NEWS.latest} />
      <EventsSection events={NEWS.events} />
      <Subscribe subscribe={NEWS.subscribe} />
    </NewsFilterRoot>
  );
}
