import Link from "next/link";
import { LangToggle } from "@/components/layout/LangToggle";
import { HubPauseButton } from "./HubPauseButton";

export function HubHeader({ logoAlt }: { logoAlt: string }) {
  return (
    <header className="hub-header">
      <Link href="/" aria-label="Rasheed home" className="hub-header__logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/v2/logo-dark-clean.svg" alt={logoAlt} width={123} height={40} />
      </Link>
      <div className="hub-header__end">
        <LangToggle />
        <HubPauseButton />
      </div>
    </header>
  );
}
