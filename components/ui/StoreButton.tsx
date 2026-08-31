type StoreButtonProps = {
  store: "appstore" | "googleplay";
  tone?: "dark" | "light"; // default 'dark'; 'light' for use on dark surfaces
};

// One lead line for both buttons. They sit side by side in every placement, so
// the platforms' own wordings ("Download on the" / "Get it on") read as two
// unrelated CTAs rather than one choice of store. "Get Rasheed on" is parallel
// across both and names the product at the point of action.
//
// Note this is a deliberate departure from Apple's and Google's badge
// guidelines, which mandate their respective phrases. It applies here because
// these are custom buttons built from our own type and tokens, not the official
// badge artwork. If the official badges are ever adopted, their wording comes
// with them and this constant goes away.
const STORE_LEAD = "Get Rasheed on";

const STORES = {
  appstore: {
    href: "https://apps.apple.com/us/app/rasheed/id6458787414",
    name: "App Store",
  },
  googleplay: {
    href: "https://play.google.com/store/apps/details?id=com.rasheed.app",
    name: "Google Play",
  },
} as const;

// Apple logo glyph.
function AppleGlyph() {
  return (
    <svg
      className="ui-storebutton__glyph"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M17.05 12.54c-.02-2.02 1.65-2.99 1.73-3.04-.94-1.38-2.41-1.57-2.93-1.59-1.25-.13-2.44.73-3.07.73-.63 0-1.61-.71-2.64-.69-1.36.02-2.61.79-3.31 2-1.41 2.45-.36 6.07 1.01 8.05.67.97 1.47 2.06 2.52 2.02 1.01-.04 1.39-.65 2.61-.65 1.22 0 1.56.65 2.63.63 1.09-.02 1.77-.99 2.44-1.96.77-1.12 1.09-2.21 1.1-2.27-.02-.01-2.11-.81-2.13-3.21zM15.03 6.6c.56-.68.94-1.62.83-2.56-.81.03-1.79.54-2.37 1.21-.52.6-.97 1.56-.85 2.48.9.07 1.83-.46 2.39-1.13z" />
    </svg>
  );
}

// DOCUMENTED TOKEN EXEMPTION — third-party trademark colors.
//
// These four hexes are Google's official Google Play logo colors. They are
// deliberately NOT tokenized and must never be swapped for brand tokens:
//   - They belong to Google, not to the Rasheed design system. Putting them in
//     tokens.css would imply they are ours to re-theme.
//   - Google's Play Store brand guidelines require the logo be reproduced in
//     its exact colors; recoloring it is a trademark violation.
//   - They must not shift with our palette, light/dark tone, or any rebrand.
//
// The Apple glyph needs no equivalent block: it is a single-color mark and
// correctly uses `fill="currentColor"`.
//
// The Phase 7 hex assertion (docs/phase-7-polish.md §7) excludes this file for
// exactly this reason. Any OTHER hardcoded hex anywhere is still a defect.
const GOOGLE_PLAY_BRAND = {
  blue: "#00d4ff",
  yellow: "#ffce00",
  red: "#ff3d47",
  green: "#00f076",
} as const;

// Google Play triangle glyph.
function GooglePlayGlyph() {
  return (
    <svg
      className="ui-storebutton__glyph"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M3.6 2.3c-.3.3-.5.8-.5 1.4v16.6c0 .6.2 1.1.5 1.4l.1.1 9.3-9.3v-.2L3.7 2.2l-.1.1z"
        fill={GOOGLE_PLAY_BRAND.blue}
      />
      <path
        d="M16.3 15.3l-3.3-3.3v-.2l3.3-3.3.1.1 3.9 2.2c1.1.6 1.1 1.6 0 2.3l-3.9 2.2h-.1z"
        fill={GOOGLE_PLAY_BRAND.yellow}
      />
      <path
        d="M16.4 15.2L13 11.9l-9.4 9.4c.4.4 1 .4 1.7.1l11.1-6.2z"
        fill={GOOGLE_PLAY_BRAND.red}
      />
      <path
        d="M16.4 8.6L5.3 2.4c-.7-.4-1.3-.3-1.7.1L13 11.9l3.4-3.3z"
        fill={GOOGLE_PLAY_BRAND.green}
      />
    </svg>
  );
}

// No aria-label: the visible text ("Download on the" + "App Store") already
// forms the accessible name. An aria-label duplicating it made the accessible
// name a non-contiguous match for the visible text, which breaks voice control
// ("click Download on the App Store") and trips
// axe's label-content-name-mismatch.
export function StoreButton({ store, tone = "dark" }: StoreButtonProps) {
  const meta = STORES[store];
  const Glyph = store === "appstore" ? AppleGlyph : GooglePlayGlyph;

  return (
    <a
      href={meta.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`ui-storebutton ui-storebutton--${tone} ui-focusable`}
    >
      <Glyph />
      <span className="ui-storebutton__label">
        <span className="ui-storebutton__lead">{STORE_LEAD}</span>
        <span className="ui-storebutton__name">{meta.name}</span>
      </span>
    </a>
  );
}
