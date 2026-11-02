import { SkipLink } from "@/components/layout/SkipLink";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import type { PageKey } from "./contact";

// Shell for the four inner pages: dark stage tone, header over the hero,
// main landmark, footer.
export function PageShell({ page, children }: { page: Exclude<PageKey, "hub">; children: React.ReactNode }) {
  return (
    <div className="tone-stage v2-page">
      <SkipLink />
      <SiteHeader page={page} />
      <main id="main">{children}</main>
      <SiteFooter page={page} />
    </div>
  );
}
