import Link from "next/link";
import { Icon } from "@/components/v2/ui/Icon";

// Announcement pill. Desktop and mobile copy differ in the canvas.
export function HubNewsPill({ href, tag, desktop, mobile }: {
  href: string; tag: string; desktop: React.ReactNode; mobile: string;
}) {
  return (
    <Link href={href} className="hub-pill">
      <span className="hub-pill__tag">{tag}</span>
      <span className="hub-desk-only">{desktop}</span>
      <span className="hub-mob-only">{mobile}</span>
      <Icon name="arrowRight" strokeWidth={2} />
    </Link>
  );
}
