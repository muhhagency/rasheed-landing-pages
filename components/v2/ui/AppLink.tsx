"use client";

import { useSyncExternalStore } from "react";
import { CONTACT } from "@/components/v2/layout/contact";

// Store for the current device: App Store on iPhone/iPad, Google Play on
// Android, otherwise null (desktop keeps the Shoppers download section).
function storeFor(ua: string, touchMac: boolean): string | null {
  if (/iPhone|iPad|iPod/.test(ua) || touchMac) return CONTACT.iosHref;
  if (/Android/.test(ua)) return CONTACT.androidHref;
  return null;
}
const subscribe = () => () => {};
const getStore = () =>
  storeFor(navigator.userAgent, /Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints > 1);

// "Get the app" link. Server HTML points at the Shoppers download section;
// after hydration a phone gets its own store, opened in a new tab.
export function AppLink({ className, children, onClick, fallback = CONTACT.appHref }: { className?: string; children: React.ReactNode; onClick?: () => void; fallback?: string }) {
  const store = useSyncExternalStore(subscribe, getStore, () => null);
  return (
    <a
      className={className}
      href={store ?? fallback}
      onClick={onClick}
      {...(store ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
