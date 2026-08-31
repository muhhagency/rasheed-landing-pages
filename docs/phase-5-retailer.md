# Phase 5 — Retailer (`/for-retailers`)

Copy comes from `docs/content-brief.md` §8. Verbatim.

Retail-forward and hardware-heavy. TapCeipt is the star of this page — it appears more here than anywhere else on the site. Cleaner and more product-shot than the consumer page, but still warm.

Anchors map cleanly to the Phase 2 nav — no reordering needed this time:

| Anchor | Section |
|---|---|
| `#why-tapceipt` | Meet TapCeipt (§8.4) |
| `#portal` | The Retailer Portal (§8.5) |
| `#vision-2030` | Built for a paperless Saudi Arabia (§8.7) |

---

## New shared component

### `HowItWorks`

Used here and on `/for-corporates`. Build it reusable.

```tsx
type HowItWorksProps = {
  kicker: string;
  headline: string;
  steps: { title: string; body: string }[];   // always 3
};
```

Three numbered steps, horizontal at desktop, stacked at mobile. Numerals should be a visible design element — large, `--primary-300` or similar, not tiny badges. A connecting line or arrow between steps at desktop, dropped at mobile.

---

## Section-by-section

### 1. Hero
Copy §8.3. CTAs: `Sign Up` (primary → `/signup`) and `Log in` (secondary → `https://retailers.rasheedapp.com`). Small URL indicator beneath the buttons: `retailers.rasheedapp.com`.

Media: `PlaceholderMedia` `4/3`, label *"TapCeipt at a checkout counter"*, alt *"A customer tapping their phone on a TapCeipt device at a retail checkout"*.

### 2. Meet TapCeipt — `#why-tapceipt`
Copy §8.4. `tone="dark"`. **This is the page's showpiece.**

Moody product-shot treatment — dramatic lighting, subtle brand glow. If the TapCeipt wordmark is set large anywhere on the site, it's here. Let the Michroma mark carry real weight; this is the one place it should feel like a logo rather than a word in a sentence.

Media: `PlaceholderMedia` `1/1`, `tone="dark"`, label *"TapCeipt device, product shot"*, alt *"The TapCeipt device"*.

### 3. The Retailer Portal — `#portal`
Copy §8.5. Four pillars in a 2×2 grid, plus a portal dashboard placeholder.

Media: `PlaceholderMedia` `16/9`, label *"Retailer portal dashboard"*, alt *"The Rasheed retailer portal showing branches, terminals, and offers"*.

Pillars: Branches, Terminals, Staff, Offers. Same visual treatment as the consumer page's pillar patterns — reuse rather than inventing a new card style.

### 4. Loyalty
Copy §8.6. `tone="subtle"`.

No nav anchor. The narrative beat that turns the hardware pitch into a business case — "the receipt is only the beginning." Can be copy-led without heavy media.

### 5. Vision 2030 & SGI — `#vision-2030`
Copy §8.7. Compliance and sustainability. Restrained and credible, not a green-splash moment — the Green Score palette belongs to the consumer page, not here. Keep it in the brand/neutral range.

### 6. How it works
`<HowItWorks />` with the three steps from §8.8: Sign Up, Deploy TapCeipt, Manage & Grow.

### 7. Trust strip
`<TrustStrip />` — already built in Phase 4.

### 8. Final CTA
```tsx
<FinalCta
  headline="Ready to go paperless?"
  body="Sign up and start deploying TapCeipt across your branches."
  actions="business"
  loginHref="https://retailers.rasheedapp.com"
/>
```

This is the first use of `actions="business"` — verify the variant renders Sign Up + Log in rather than store buttons and QR codes.

---

## Page shell

```tsx
<SiteHeader variant="retailer" />
<main id="main">…</main>
<SiteFooter variant="retailer" />
```

## Metadata

- Title: `Rasheed for Retailers — Turn every checkout into a customer moment.`
- Description: from §8.3 sub, trimmed to ~155 characters.

---

## Done when

- Three anchors scroll correctly with sticky-header offset
- `FinalCta actions="business"` renders correctly
- Footer uses `sales@rasheedapp.com`, not `info@`
- Renders at 1440 / 1024 / 768 / 390
- Every `TapCeipt` goes through `<TapCeipt />` — this page has the most instances
- No hardcoded hex, spacing, or radius outside `tokens.css`
- No Amazon mention anywhere, including alt text and metadata
