import { Stats } from "@/components/v2/ui/Stats";

export function HubStats({ label, items }: {
  label: string;
  items: { value: string; label: React.ReactNode; accent?: boolean }[];
}) {
  return (
    <div className="hub-stats">
      <Stats label={label} items={items} />
    </div>
  );
}
