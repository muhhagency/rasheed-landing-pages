import Link from "next/link";
import type { Locale } from "@/components/v2/i18n";
import { localePath, UI } from "@/components/v2/i18n";

// EN | AR switch. Links to the same page in the other language.
export function LangToggle({ locale = "en", path = "/" }: { locale?: Locale; path?: string }) {
  return (
    <span className="lang-toggle" role="group" aria-label={UI[locale].lang}>
      <Link className="lang-toggle__opt" href={localePath("en", path)} lang="en" hrefLang="en" aria-current={locale === "en" ? "true" : undefined}>
        EN
      </Link>
      <span className="lang-toggle__sep" aria-hidden="true">|</span>
      <Link className="lang-toggle__opt" href={localePath("ar", path)} lang="ar" hrefLang="ar" aria-current={locale === "ar" ? "true" : undefined}>
        AR
      </Link>
    </span>
  );
}
