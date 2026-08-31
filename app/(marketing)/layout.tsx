// Pass-through group layout. Each route sets its OWN shell/variant:
//  - the hub (group index) via its page,
//  - each persona route via its nested layout.tsx.
// Nothing shared lives here — header/footer variants differ per route and
// there is no shared default (per the layout contract).
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
