# Phase 3 — Hub (`/`)

Copy comes from `docs/content-brief.md` §6. Verbatim.

The hub is a router. Three doors, nothing else. No hero above them, no download buttons, no feature explanation, no trust strip.

**The design problem:** this page is nearly empty by design, and the default failure mode is that it reads as unfinished. Solve it with scale, typography, and confident whitespace — not by adding content. If it looks sparse and deliberate, it's right. If it looks like a page that's missing sections, it's wrong.

This is the first real page in the build. Whatever visual language it establishes, Phases 4–6 inherit. Treat it accordingly.

---

## `PersonaBand`

```tsx
type PersonaBandProps = {
  kicker: string;
  headline: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  media: { aspectRatio: '4/3' | '3/4' | '1/1'; label: string; alt: string };
  tone: 'default' | 'subtle' | 'dark';
  reverse?: boolean;   // media on the left instead of the right
};
```

- Two-column at ≥900px, stacked below (copy first, media second, in both directions).
- Each band is full-width and generously tall — target roughly 80vh at desktop, but let content set the floor. Do not force exact viewport heights.
- CTA is `Button variant="secondary" size="lg"` with a trailing arrow, except on the `dark` band where `variant="primary"` reads better against the surface.
- The whole band is **not** a single link. The CTA is the only interactive target — keeps focus order clean and avoids nested-interactive issues.

---

## The three bands

Alternate tone and side so scrolling has cadence rather than three identical slabs.

**Band 1 — For You** → `/app`
- `tone="default"`, media right
- Media: `3/4`, label *"Phone showing Rasheed home screen"*, alt *"The Rasheed app displaying pockets and recent receipts"*

**Band 2 — For Retailers** → `/for-retailers`
- `tone="subtle"`, `reverse` (media left)
- Media: `4/3`, label *"TapCeipt at a checkout counter"*, alt *"A TapCeipt device at a retail checkout counter"*

**Band 3 — For Corporates** → `/for-corporates`
- `tone="dark"`, media right
- Media: `4/3`, label *"Corporate portal dashboard"*, alt *"The Rasheed corporate portal showing department spend"*

The dark band closing the page also gives the footer something to sit against rather than a hard tonal jump.

---

## Page shell

```tsx
<SiteHeader variant="hub" />
<main id="main">
  {/* three PersonaBand */}
</main>
<SiteFooter variant="hub" />
```

No anchor IDs needed — hub nav has no in-page links.

---

## Metadata

- Title: `Rasheed — Every receipt. Every riyal.`
- Description: one sentence covering all three audiences, drawn from the content brief. Do not write marketing copy that isn't in the brief; if nothing fits, flag it.

---

## Done when

- Renders correctly at 1440 / 1024 / 768 / 390
- All text legible on all three tones (the dark band is the one to check)
- Keyboard: skip link → logo → log-in dropdown → three CTAs → footer, in order
- No hardcoded hex, spacing, or radius values
- `TapCeipt` in band 2's media label goes through the `<TapCeipt />` component
