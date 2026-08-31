# Build Plan

Ordered. Each phase should end in a working, viewable state. Don't start a phase before the previous one renders.

Read `CLAUDE.md` first. Copy comes from `docs/content-brief.md` verbatim.

---

## Phase 0 — Scaffold

1. `create-next-app` — TypeScript, App Router, Tailwind, no `src/` dir, import alias `@/*`.
2. Set `output: 'export'` in `next.config.ts`.
3. Import `app/styles/tokens.css` into `app/globals.css` **before** Tailwind layers.
4. Wire Tailwind v4 `@theme` to reference the CSS variables so utilities resolve to tokens rather than Tailwind defaults.
5. Load fonts via `next/font/google`: Inter (400, 600, 700) and Michroma (400).
6. Verify: blank page renders, `var(--primary-default)` resolves to `#301473` in devtools.

**Do not proceed until token resolution is confirmed in the browser.**

---

## Phase 1 — Primitives

Build in `components/ui/`. Every one consumes role tokens only.

- `Button` — variants: `primary`, `secondary`, `ghost`. Sizes: `md`, `lg`. Renders as `<a>` when `href` present.
- `StoreButton` — App Store and Google Play, with real vendor glyphs as inline SVG.
- `Container` — max-width wrapper with responsive inline padding.
- `Section` — vertical rhythm wrapper, optional `tone` prop (`default`, `subtle`, `dark`, `brand`).
- `Kicker` — the small uppercase label above headings.
- `TapCeipt` — the Michroma-wrapped wordmark. **Build this early**; every page uses it.
- `PlaceholderMedia` — marked placeholder with `aspectRatio` and `label` props.

Ship a `/kitchen-sink` route rendering every primitive in every variant. Keep it out of the sitemap and delete before launch.

---

## Phase 2 — Layout shell

- `SiteHeader` — accepts a `variant` prop, since nav differs per page:
  - Hub: `Logo · Log in ▾ · EN|AR`
  - Consumer: `Logo · Features · TapCeipt · Cabinet · Rewards · [Download] · EN|AR`
  - Retailer: `Logo · Why TapCeipt · Portal · Vision 2030 · [Log in] · [Sign Up] · EN|AR`
  - Corporate: `Logo · Business Pocket · Team · Reports · [Log in] · [Sign Up] · EN|AR`
- Sticky with backdrop blur on scroll. Mobile: hamburger → full-screen menu.
- `SiteFooter` — same variant approach; column contents differ per page. Consumer uses `info@rasheedapp.com`, both B2B pages use `sales@rasheedapp.com`.
- Logo always links to `/`. That is the only cross-page navigation — there is no persona switcher.

---

## Phase 3 — Hub (`/`)

Content brief §6.

Three full-width stacked persona bands. Not a three-column grid. Each gets its own visual, copy, and CTA, and should feel like a distinct world.

- Alternate which side the visual sits on so scrolling has cadence.
- No hero above them. No download buttons. Routing only.
- Design challenge: this page is nearly empty by design. Make it feel intentional through scale, type, and restraint rather than adding filler.

---

## Phase 4 — Consumer (`/app`)

Content brief §7. Sections in order:

1. Hero — product-shot placeholder: phone + TapCeipt at a Saudi grocery checkout
2. Every receipt, your way — four capture modes. **Give TapCeipt visual weight over the other three**; not four equal tiles.
3. Money that makes sense — three pocket cards. Personal is solo, Shared is ongoing-multiplayer, Fallah is temporary-multiplayer. Let the treatment carry that difference. Slices callout sits below.
4. Cabinet — safekeeping metaphor, layered cards. Not a literal cabinet illustration.
5. Grow with every purchase — Green Score + Offers Hub. **Only section where the palette shifts**: use `--brand-deepgreen-*` for the Leaf → Forest progression.
6. Trust strip — five items
7. Final CTA — store buttons + QR codes, `--surface-action` background
8. Footer

---

## Phase 5 — Retailer (`/for-retailers`)

Content brief §8. Sections in order:

1. Hero — TapCeipt at a checkout counter
2. Meet TapCeipt — **dark section, the page's showpiece.** TapCeipt appears more here than anywhere; if the wordmark is set large anywhere on the site, it's here.
3. The Retailer Portal — four pillars 2×2 + abstracted dashboard placeholder
4. Loyalty — "The receipt is only the beginning"
5. Vision 2030 & SGI
6. How it works — three numbered steps
7. Trust strip
8. Final CTA
9. Footer

---

## Phase 6 — Corporate (`/for-corporates`)

Content brief §9. Sections in order:

1. Hero — corporate portal dashboard placeholder
2. The Business Pocket
3. Control — four pillars 2×2
4. Capture — **photo, voice, file only. No TapCeipt.**
5. Reports — export/table preview placeholder
6. How it works — three numbered steps
7. Trust strip
8. Final CTA
9. Footer

Most restrained page of the four. Professional, data-forward — but still Rasheed, not enterprise-beige.

---

## Phase 7 — Polish

- Responsive pass: 1440 / 1024 / 768 / 390.
- Motion: subtle scroll-reveal on section entry. Respect `prefers-reduced-motion`.
- Metadata per route — title, description, OG tags, favicon.
- Accessibility audit: heading order, landmarks, focus traps in mobile menu, contrast, keyboard nav.
- Lighthouse: 95+ on Performance and Accessibility.
- Confirm zero hardcoded hex values outside `tokens.css`: `grep -rn "#[0-9a-fA-F]\{3,6\}" app components --include="*.tsx"` should return nothing.
- Confirm every `TapCeipt` string goes through the component: `grep -rn "TapCeipt" app components --include="*.tsx" | grep -v "components/ui/TapCeipt"` should only show imports and JSX usage.

---

## Blocked / needs input

Flag rather than guess:

- Real photography and portal screenshots — none exist. Placeholders throughout.
- Whether to add a display typeface for marketing headlines, or stay Inter-only.
- Whether the marketing type scale extension is approved (hero sizes above 60px).
- `/signup` form spec — linked to, not built.
