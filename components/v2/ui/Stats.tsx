// Stats row. Values are placeholders in [brackets] until real numbers exist.
export function Stats({ items, label }: { items: { value: string; label: React.ReactNode; accent?: boolean }[]; label: string }) {
  return (
    <section aria-label={label} className="v2-stats" style={{ ["--cols" as string]: items.length }}>
      {items.map((s, i) => (
        <div key={i}>
          <div className={`v2-stats__num${s.accent ? " v2-stats__num--accent" : ""}`}>{s.value}</div>
          <div className="v2-stats__label">{s.label}</div>
        </div>
      ))}
    </section>
  );
}
