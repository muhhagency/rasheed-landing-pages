// Non-functional EN/AR visual placeholder. EN is active; AR is disabled.
// Do NOT wire this — i18n routing is a post-launch pass.
export function LangToggle() {
  return (
    <span className="lang-toggle" aria-label="Language (English selected)">
      <span className="lang-toggle__opt" aria-current="true">
        EN
      </span>
      <span className="lang-toggle__sep" aria-hidden="true">
        |
      </span>
      <span className="lang-toggle__opt" aria-disabled="true">
        AR
      </span>
    </span>
  );
}
