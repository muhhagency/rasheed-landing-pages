import { Icon } from "./Icon";

export function Checks({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="v2-checks">
      {items.map((it, i) => (
        <li key={i}><Icon name="check" strokeWidth={2.2} /><span>{it}</span></li>
      ))}
    </ul>
  );
}
