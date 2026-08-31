import "../corporate.css";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { CAPTURE } from "@/content/corporate";

// Three EQUAL capture modes — photo, voice, file. No TapCeipt, no hero mode.
// Deliberately NOT the /app capture layout (which is built around TapCeipt).
function PhotoIcon() {
  return (
    <svg
      className="c-capture-mode__icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden="true"
    >
      <path d="M4 8h3l1.5-2h7L17 8h3v11H4z" strokeLinejoin="round" />
      <circle cx="12" cy="13" r="3.5" />
    </svg>
  );
}
function VoiceIcon() {
  return (
    <svg
      className="c-capture-mode__icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden="true"
    >
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M6 11a6 6 0 0012 0M12 17v4" strokeLinecap="round" />
    </svg>
  );
}
function FileIcon() {
  return (
    <svg
      className="c-capture-mode__icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden="true"
    >
      <path d="M6 3h8l4 4v14H6z" strokeLinejoin="round" />
      <path d="M14 3v4h4M9 13h6M9 16h6" strokeLinecap="round" />
    </svg>
  );
}

const MODE_ICONS: Record<string, () => React.ReactElement> = {
  Photo: PhotoIcon,
  Voice: VoiceIcon,
  File: FileIcon,
};

export function Capture() {
  return (
    <Section>
      <Container>
        <div className="section-head">
          <Kicker rule>{CAPTURE.kicker}</Kicker>
          <h2 className="h2 section-head__headline">{CAPTURE.headline}</h2>
          <p className="body-lg section-head__sub">{CAPTURE.body}</p>
        </div>

        <div className="c-capture__modes">
          {CAPTURE.modes.map((mode) => {
            const Icon = MODE_ICONS[mode.name];
            return (
              <div key={mode.name} className="c-capture-mode">
                <Icon />
                <span className="c-capture-mode__name">{mode.name}</span>
                <p className="c-capture-mode__body">{mode.body}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
