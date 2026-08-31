# Phase 2 — Layout Shell Contracts

`SiteHeader` and `SiteFooter` each render four variants. The variant is set per route, once, in the page file. No page overrides individual links.

---

## `SiteHeader`

```tsx
type SiteHeaderProps = {
  variant: 'hub' | 'consumer' | 'retailer' | 'corporate';
};
```

Client Component — needs scroll state and mobile menu state.

### Behavior

- Sticky, `position: sticky; top: 0`.
- Transparent at scroll top; on scroll past 8px gains `--surface-page` background at 85% opacity plus `backdrop-filter: saturate(180%) blur(20px)` and a `--border-primary` bottom hairline. Transition the background and border, not the blur.
- Logo always links to `/`. This is the only cross-page navigation in the site — there is no persona switcher.
- Below 900px: nav links collapse into a hamburger opening a full-screen menu. Menu traps focus, closes on `Escape`, closes on route change, and locks body scroll while open.
- EN/AR toggle renders in all variants as a **non-functional visual placeholder**. EN is active. Do not wire it.

### Variant contents

**`hub`**
```
[Logo]                                    Log in ▾    EN | AR
```
- `Log in ▾` — dropdown, two items: *Retailer Portal* → `https://retailers.rasheedapp.com`, *Corporate Portal* → `https://corporates.rasheedapp.com`
- Nothing else. No download, no Sign Up, no product links. The hub is a router.

**`consumer`**
```
[Logo]  TapCeipt  Features  Cabinet  Rewards        [Download]  EN | AR
```
- Links are in-page anchors: `#tapceipt`, `#features`, `#cabinet`, `#rewards`
- Nav order follows the page's section order (the TapCeipt-led capture
  section precedes Money that makes sense), per Phase 4.
- `Download` — `Button variant="primary"`, anchors to `#cta`
- `TapCeipt` nav label uses the `<TapCeipt />` component

**`retailer`**
```
[Logo]  Why TapCeipt  Portal  Vision 2030      Log in  [Sign Up]  EN | AR
```
- Anchors: `#why-tapceipt`, `#portal`, `#vision-2030`
- `Log in` — `Button variant="ghost"` → `https://retailers.rasheedapp.com`
- `Sign Up` — `Button variant="primary"` → `/signup`

**`corporate`**
```
[Logo]  Business Pocket  Team  Reports          Log in  [Sign Up]  EN | AR
```
- Anchors: `#business-pocket`, `#team`, `#reports`
- `Log in` — `Button variant="ghost"` → `https://corporates.rasheedapp.com`
- `Sign Up` — `Button variant="primary"` → `/signup`

---

## `SiteFooter`

```tsx
type SiteFooterProps = {
  variant: 'hub' | 'consumer' | 'retailer' | 'corporate';
};
```

Server Component.

### Structure

Brand column (logo + tagline) plus one to three link columns, then a bottom bar: `© Rasheed 2026` · social icons · `EN | AR`.

Tagline in all variants: *Every receipt. Every riyal. All in one Rasheed.*

Surface: `--neutral-800`. Text `--neutral-300`, headings `--neutral-white`, hairline `--neutral-700`.

### Variant contents

**`hub`** — minimal. Brand column + one column:
- Privacy, Terms, `info@rasheedapp.com`

**`consumer`**
- **Product** — Features, TapCeipt, Cabinet, Rewards
- **Company** — Privacy, Terms, `info@rasheedapp.com`

**`retailer`**
- **Product** — Why TapCeipt, Portal, Vision 2030
- **Company** — Support, Privacy, Terms, `sales@rasheedapp.com`

**`corporate`**
- **Product** — Business Pocket, Team, Reports
- **Company** — Support, Privacy, Terms, `sales@rasheedapp.com`

Note the email split: consumer uses `info@`, both B2B variants use `sales@`.

Social icons: X, LinkedIn, Instagram, YouTube. Inline SVG, `--neutral-400`, hover `--neutral-white`. Hrefs are `#` placeholders until real handles are supplied — flag this rather than inventing URLs.

---

## `layout.tsx` per route

Each route group sets its own header/footer variant. Don't put a header in the root layout — the variants differ and there's no shared default.

```tsx
// app/(marketing)/app/layout.tsx  — example
<SiteHeader variant="consumer" />
<main>{children}</main>
<SiteFooter variant="consumer" />
```

Root layout holds `<html>`, `<body>`, fonts, and the global stylesheet only.

---

## Skip link

First focusable element in the DOM, visually hidden until focused: *Skip to content* → `#main`. `<main id="main">` on every page.

---

## Additions to the kitchen sink

Render both `SiteHeader` and `SiteFooter` in all four variants, stacked with labels. Verify at 1440 / 1024 / 768 / 390.
