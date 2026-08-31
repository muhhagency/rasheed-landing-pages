# Rasheed — Marketing Site

Rebuild of rasheedapp.com. A hub that routes to three self-contained persona landing pages.

## Stack

- Next.js (App Router), TypeScript
- Tailwind v4 — consumes CSS custom properties from `app/styles/tokens.css` directly
- Static export (`output: 'export'`) — no server runtime needed
- No CMS. Content lives in typed TS objects under `content/`.

## Routes

| Route | Page | Primary CTA |
|---|---|---|
| `/` | Hub — routes to three personas | none (routing only) |
| `/app` | Consumer | App Store + Google Play |
| `/for-retailers` | Retailer | Sign Up → `/signup`, Log in → `retailers.rasheedapp.com` |
| `/for-corporates` | Corporate | Sign Up → `/signup`, Log in → `corporates.rasheedapp.com` |

`/signup` is a separate unified registration form with a Retailer/Corporate persona toggle. **Out of scope for this repo** — link to it, don't build it.

## Source of truth

- **Copy** — `docs/content-brief.md`. Every headline, subhead, and body string is specified there. Do not paraphrase, rewrite, or "improve" it. If a string is missing, stop and flag it rather than inventing one.
- **Design tokens** — `app/styles/tokens.css`, extracted from the Figma design system (file `3hcXxu77vHXA0NU5OAP9Mq`). Do not edit values here; they mirror Figma.

## Token rules

Three tiers: `--brand-*` primitives → `--primary-*` / `--neutral-*` etc. aliases → `--text-*` / `--surface-*` / `--icon-*` / `--border-*` role tokens.

- **Use role tokens in components.** `var(--text-headings)`, not `var(--neutral-800)`, and never `#18161d`.
- Fall back to an alias only when no role token fits.
- Never hardcode a hex, spacing value, or radius. Everything has a token.
- If a needed token genuinely doesn't exist, add it to the `MAPPED` section of `tokens.css` and note it in the PR description so it can be pushed back to Figma.
- **Tone scopes rebind role tokens; they never set `color` directly.** A dark or brand surface (`.ui-section--dark`, `.ui-section--brand`, `.site-footer`, `.persona-band--dark`, `PlaceholderMedia tone="dark"`, and any future dark region) redefines the role tokens — `--surface-page`, `--border-primary`, plus the full text set below — inside its own scope. Every descendant then resolves the right value with no per-element overrides, even against base rules like `.body-md { color: var(--text-body) }`. Never fix a tone with more-specific `color` selectors; rebind the token instead.
- **A tone scope must rebind the COMPLETE text role set, not just the tokens visibly in use today:**

  ```css
  --text-headings
  --text-body
  --text-action
  --text-action-hover
  --text-disabled
  ```

  Rebind all five even when the scope currently renders no link, no hover state, and no disabled text. A partial rebind is a latent bug, not a smaller one: the unbound tokens keep their light-surface values and silently resolve to dark-on-dark the moment any component that reads them is placed in that scope — or the moment an existing component changes which role it reads.

  **This was the root cause of all 37 contrast failures found in Phase 7.** Every one traced to a scope that rebound the roles it was using at the time and stopped there. Concrete cases:

  - `.site-footer` rebound `--text-body`/`--text-headings` but not `--text-action`, so `LangToggle`'s active "EN" rendered dark purple on near-black — **1.26:1**.
  - `.ui-placeholder--dark` rebound only `--text-disabled`. When `PlaceholderMedia`'s label was moved from `--text-disabled` to `--text-body` for AA, that scope had no `--text-body` binding and the label went dark-on-dark.

  A component switching which role token it reads is a routine, correct change. It must never be able to break a tone scope — which it can only do if the scope's rebinding is incomplete.

  Surface, border, and icon roles follow the same rule when the scope contains, or could contain, elements that read them.

### Known token gaps

These are unresolved in the Figma system. Do not silently invent values.

- `--font-secondary` is Inter, same as `--font-primary`. The system has no display face. Headings currently render in Inter.
- Four brand ramps are unmapped: `softlavender`, `warmpeach`, `deepgreen`, `electricblue`. **`deepgreen` is the intended Green Score palette** — use `--brand-deepgreen-*` directly for that section and flag it.
- The type scale tops out at 60px (h1) with zero letter-spacing. That's a product-UI ramp, not a marketing ramp. Hero headlines may need larger sizes and negative tracking; if so, define them as `--font-size-display-*` in a clearly marked `MARKETING EXTENSIONS` block at the bottom of `tokens.css`.

## Product terminology — non-negotiable

These are product names. Never substitute, pluralize creatively, or paraphrase.

- **TapCeipt** — NFC hardware at point of sale. Capital T, capital C, one word. Never "TapCeit," "TAPCEIPT," "digital printer," or "scanner."
- **Pockets** — money containers. Three types:
  - **Personal**
  - **Business** — Corporates only
  - **Shared** — two subtypes: **Regular Shared** (permanent, fixed budget + cycle) and **Fallah** (accumulate → settle → close, cannot convert to permanent)
  - Never "Buckets." Never "accounts."
- **Slices** — budget allocations by category *inside* a pocket. Slices are the budget; categories are where spending happened. Never conflate.
- **Cabinet** — stores warranty cards, vouchers, medicine notes captured from receipts.
- **Green Score** — four tiers only: **Leaf → Plant → Tree → Forest**. No Seed.
- **Offers Hub** — curated partner deals redeemable in-app.

### Hard content rules

- **Never mention Amazon anywhere** — backend fulfillment only. Use "gifts," "rewards," or "partner deals."
- No avatars or imagery implying demographic targeting (KSA compliance).
- Currency is **SAR**. Saudi merchant references are fine: Panda, Jarir, Barn's Café, Tamimi.
- **Corporates do not get TapCeipt hardware.** Value is app + portal only. Never imply hardware on `/for-corporates`.

## TapCeipt wordmark

The name is always set in **Michroma**, everywhere it appears — headings, body, nav, buttons, footers.

```tsx
// components/TapCeipt.tsx
export function TapCeipt() {
  return <span className="tapceipt">TapCeipt</span>;
}
```

The `.tapceipt` class is defined in `tokens.css`. Michroma runs wide and heavy, so it's set to `0.9em` relative to surrounding text. Import from Google Fonts via `next/font`. Use the `<TapCeipt />` component rather than typing the string inline — that way the styling can never be missed.

## Language

English only for now. Include a non-functional EN/AR toggle in nav and footer as a visual placeholder. Do not build i18n routing, do not write Arabic copy. Arabic is a post-launch pass with full RTL — keep layouts logical-property-based (`margin-inline-start`, not `margin-left`) so the RTL pass isn't a rewrite.

## Conventions

- Server Components by default. `'use client'` only where interactivity requires it (nav dropdown, mobile menu).
- One component per file, colocated under `components/`.
- Section components take content as props; content objects live in `content/`.
- No component libraries. No shadcn. Build the primitives.
- No `localStorage`, no browser storage.
- Accessibility: semantic landmarks, visible focus states using `--border-focus`, alt text on every image, WCAG AA contrast minimum.

## Assets

No final photography or portal screenshots exist yet. Use clearly-marked placeholder components with correct aspect ratios and `alt` text written as if the real asset were present. Do not generate decorative filler illustrations.

See `docs/build-plan.md` for the ordered task list.
