import { Icon, type IconName } from "./Icon";

// Hero headline: a fixed first line, then a rotating second line.
// Plays three cycles (WCAG 2.2.2) and stops for reduced motion. The h1's
// accessible name is the static sentence; the rotating track is aria-hidden.
export function FlipHeadline({ lead, lines, label, className }: {
  lead: string;
  lines: { text: string; icon: IconName }[];
  label: string;
  className?: string;
}) {
  const all = [...lines, lines[0]]; // repeat the first line so the loop ends where it starts
  return (
    <h1 className={`v2-h1${className ? " " + className : ""}`} aria-label={label}>
      <span style={{ display: "block" }}>{lead}</span>
      <span className="v2-flip">
        <span className="v2-flip__track" aria-hidden="true">
          {all.map((l, i) => (
            <span className="v2-flip__line" key={i}>
              <span className={`v2-flip__icon${i % 2 ? " v2-flip__icon--alt" : ""}`}><Icon name={l.icon} /></span>
              <span>{l.text}</span>
            </span>
          ))}
        </span>
      </span>
    </h1>
  );
}
