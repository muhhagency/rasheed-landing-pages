// First focusable element in the DOM. Visually hidden until focused.
// Targets <main id="main"> present on every page.
export function SkipLink() {
  return (
    <a href="#main" className="skip-link">
      Skip to content
    </a>
  );
}
