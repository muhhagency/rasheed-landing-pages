import type { Locale } from "@/components/v2/i18n";
import { UI } from "@/components/v2/i18n";

// First focusable element in the DOM. Visually hidden until focused.
// Targets <main id="main"> present on every page.
export function SkipLink({ locale = "en" }: { locale?: Locale }) {
  return (
    <a href="#main" className="skip-link">
      {UI[locale].skip}
    </a>
  );
}
