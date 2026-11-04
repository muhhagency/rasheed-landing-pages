// Tag pill plus date, shown above every story headline.
export function NewsMeta({ tag, date }: { tag: string; date: string }) {
  return (
    <div className="nw-meta">
      <span className="nw-tag">{tag}</span>
      <span className="nw-date">{date}</span>
    </div>
  );
}
