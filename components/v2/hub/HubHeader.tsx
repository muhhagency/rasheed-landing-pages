import Link from "next/link";
import { LangToggle } from "@/components/layout/LangToggle";
import { HubPauseButton } from "./HubPauseButton";
import { localePath, UI, type Locale } from "@/components/v2/i18n";

export function HubHeader({ logoAlt, locale = "en", pauseLabel, playLabel }: { logoAlt: string; locale?: Locale; pauseLabel?: string; playLabel?: string }) {
  return (
    <header className="hub-header">
      <Link href={localePath(locale, "/")} aria-label={UI[locale].home} className="hub-header__logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/v2/logo-dark-clean.svg" alt={logoAlt} width={123} height={40} />
      </Link>
      <div className="hub-header__end">
        <LangToggle locale={locale} path="/" />
        <HubPauseButton pauseLabel={pauseLabel} playLabel={playLabel} />
      </div>
    </header>
  );
}
