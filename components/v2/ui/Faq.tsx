import { Icon } from "./Icon";

export function Faq({ items }: { items: { q: React.ReactNode; a: React.ReactNode }[] }) {
  return (
    <div className="v2-faq">
      {items.map((it, i) => (
        <details key={i} open={i === 0}>
          <summary><span>{it.q}</span><Icon name="plus" strokeWidth={2} /></summary>
          <p>{it.a}</p>
        </details>
      ))}
    </div>
  );
}
