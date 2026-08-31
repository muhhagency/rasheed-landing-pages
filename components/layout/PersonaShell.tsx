import type { ReactNode } from "react";
import { SkipLink } from "./SkipLink";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import type { HeaderVariant } from "./navConfig";

type PersonaShellProps = {
  variant: HeaderVariant;
  children: ReactNode;
};

// Wraps a route with its skip link, header, main landmark, and footer.
// The variant is set once, in each route's layout.tsx — no page overrides links.
export function PersonaShell({ variant, children }: PersonaShellProps) {
  return (
    <>
      <SkipLink />
      <SiteHeader variant={variant} />
      {/* tabindex="-1" makes the skip link actually MOVE focus here, not just
          change the hash — without it the browser scrolls but focus stays on
          body, so the next Tab returns to the header. */}
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter variant={variant} />
    </>
  );
}
