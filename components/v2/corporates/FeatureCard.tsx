import { Icon } from "@/components/v2/ui/Icon";
import type { CoFeature } from "@/content/v2/corporates";

export function FeatureCard({ item }: { item: CoFeature }) {
  return (
    <div className="co-feature">
      <div className="co-feature__icon"><Icon name={item.icon} /></div>
      <h3 className="co-feature__title">{item.title}</h3>
      <p className="co-feature__text">{item.text}</p>
    </div>
  );
}
