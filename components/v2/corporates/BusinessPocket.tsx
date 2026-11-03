import { Badge } from "@/components/v2/ui/Badge";
import { Checks } from "@/components/v2/ui/Checks";
import { Section } from "@/components/v2/ui/Section";
import type { POCKET as PocketContent } from "@/content/v2/corporates";
import { PocketCard } from "./PocketCard";

export function BusinessPocket({ content }: { content: typeof PocketContent }) {
  return (
    <Section id="business-pocket" tone="raised" labelledBy="co-pocket" className="co-sec">
      <div className="co-pocket">
        <div>
          <Badge icon={content.badge.icon}>{content.badge.text}</Badge>
          <h2 id="co-pocket" className="v2-h2 co-maxw-560">{content.title}</h2>
          <p className="v2-lead">{content.body}</p>
          <Checks items={content.checks} />
        </div>
        <PocketCard content={content} />
      </div>
    </Section>
  );
}
