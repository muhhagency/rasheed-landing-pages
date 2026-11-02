import { Badge } from "@/components/v2/ui/Badge";
import { Section } from "@/components/v2/ui/Section";
import type { RT_REWARDS } from "@/content/v2/retailers";
import { RewardFlipArt } from "./RewardFlipArt";

export function RtRewards({ content }: { content: typeof RT_REWARDS }) {
  const c = content;
  return (
    <Section tone="deep" labelledBy="rt-rewards" className="rt-rewards">
      <div className="v2-split--head">
        <div>
          <Badge icon="sparkle">{c.badge}</Badge>
          <h2 id="rt-rewards" className="v2-h2 rt-rewards__h2">{c.h2}</h2>
        </div>
        <p className="rt-intro">
          {c.intro} <b className="rt-accent">{c.introStrong}</b>
        </p>
      </div>
      <ul className="rt-rewards__grid">
        {c.cards.map((k, i) => (
          <li key={k.title} className="rt-reward">
            <p className="rt-reward__kicker">{k.kicker}</p>
            <RewardFlipArt art={k.art} index={i} voucher={c.voucher} />
            <h3 className="rt-reward__title">{k.title}</h3>
            <p className="rt-reward__body">{k.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
