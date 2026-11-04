import { SkipLink } from "@/components/layout/SkipLink";
import type { Locale } from "@/components/v2/i18n";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import type { PageKey } from "./contact";

// Shell for the four inner pages: dark stage tone, header over the hero,
// main landmark, footer.
export function PageShell({ page, locale = "en", children }: { page: Exclude<PageKey, "hub">; locale?: Locale; children: React.ReactNode }) {
  return (
    <div className="tone-stage v2-page">
      <SkipLink locale={locale} />
      <SiteHeader page={page} locale={locale} />
      <main id="main">{children}</main>
      <SiteFooter page={page} locale={locale} />
    </div>
  );
}
