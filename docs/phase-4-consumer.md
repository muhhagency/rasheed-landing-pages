# Phase 4 — Consumer (`/app`)

Copy comes from `docs/content-brief.md` §7. Verbatim.

The primary conversion page for the whole site. Warm, personal, human — everyday Saudi life, not a bank.

---

## ⚠ Nav anchor fix first

The consumer nav built in Phase 2 is `Features · TapCeipt · Cabinet · Rewards`, but the page's section order puts the TapCeipt-led capture section *before* the pockets section. Nav order and page order disagree.

**Fix:** reorder the consumer nav in `SiteHeader` to `TapCeipt · Features · Cabinet · Rewards`, and update `docs/layout-contracts.md` to match.

Anchor assignments:

| Anchor | Section |
|---|---|
| `#tapceipt` | Every receipt, your way (§7.4) |
| `#features` | Money that makes sense (§7.5) |
| `#cabinet` | Never lose a warranty (§7.6) |
| `#rewards` | Grow with every purchase (§7.7) |
| `#cta` | Final CTA (§7.9) |

---

## Shared sections — build as reusable

`TrustStrip` and `FinalCta` appear on all three persona pages. Build them properly here; Phases 5 and 6 consume them.

### `TrustStrip`

```tsx
type TrustStripProps = {
  tone?: 'default' | 'subtle';   // default 'subtle'
};
```

No content props — the five items are identical across all pages and live inside the component:
KSA data protection · Bank-grade encryption · Aligned with Vision 2030 & Saudi Green Initiative · No data selling · Guest-first — try before you sign up

Five columns at desktop, two or three at tablet, stacked at mobile. Single-line icons, restrained. This is a reassurance bar, not a feature section — keep it visually quiet.

### `FinalCta`

```tsx
type FinalCtaProps = {
  headline: string;
  body: string;
  actions: 'stores' | 'business';   // store buttons + QR, or Sign Up + Log in
  loginHref?: string;               // required when actions='business'
};
```

`tone="brand"` section. Consumer uses `actions="stores"` with both store buttons plus two QR codes labelled *iOS* and *Android*.

QR codes: generate at build time from the real store URLs, or render `PlaceholderMedia` at `1/1` if that's not wired yet. Do not use a third-party QR image API at runtime.

---

## Section-by-section

### 1. Hero
Not a `Section` tone variant — its own component with more vertical presence than a standard section.

Copy §7.3. Store buttons side by side.

Media: `PlaceholderMedia` `3/4`, label *"Phone + TapCeipt at grocery checkout"*, alt *"A shopper tapping their phone on a TapCeipt device at a Saudi grocery checkout"*.

Intent is a **product shot** — real-world setting, warm light. Not illustration, not a floating UI mockup on a gradient.

### 2. Every receipt, your way — `#tapceipt`
Copy §7.4. Four capture modes: TapCeipt, Voice, Photo, File.

**TapCeipt is the hero of the four — do not render four equal tiles.** Give it a larger card, its own media slot, or a full column, with the other three as a supporting set. The section exists to make TapCeipt feel like the default and the rest like fallbacks.

### 3. Money that makes sense — `#features`
Copy §7.5. Three cards: Personal Pockets, Shared Pockets, Fallah.

They're siblings but structurally different — Personal is solo, Shared is ongoing-multiplayer, Fallah is temporary-multiplayer. Let the treatment carry that: Fallah in particular has a lifecycle (accumulate → settle → close) that the other two don't.

Slices callout sits below all three, visually subordinate — it's a property of every pocket, not a fourth card.

### 4. Never lose a warranty — `#cabinet`
Copy §7.6. `tone="subtle"`.

Visual intent: safekeeping. Layered cards, an organized set, a sense of things filed and retrievable. **Not a literal cabinet illustration.**

### 5. Grow with every purchase — `#rewards`
Copy §7.7. Two cards: Green Score, Offers Hub.

**This is the only section where the palette shifts.** Use `--brand-deepgreen-*` directly — it's the unmapped ramp intended for this. Green Score card renders the four tiers as a visual progression: **Leaf → Plant → Tree → Forest**. Four tiers, no Seed. Organic, natural iconography — not flat corporate icons. Size or weight should increase across the progression.

Offers Hub card is the quieter of the two — two or three sample offer cards as texture, Saudi merchants (Panda, Jarir, Barn's Café).

### 6. Trust strip
`<TrustStrip />`

### 7. Final CTA — `#cta`
`<FinalCta headline="Ready to Rasheed?" body="Start scanning in seconds. No account required." actions="stores" />`

---

## Page shell

```tsx
<SiteHeader variant="consumer" />
<main id="main">…</main>
<SiteFooter variant="consumer" />
```

## Metadata

- Title: `Rasheed — Money that fits your life.`
- Description: from §7.3 sub, trimmed to ~155 characters.

---

## Done when

- All five anchors scroll to the right sections, with scroll-margin accounting for the sticky header
- Renders at 1440 / 1024 / 768 / 390
- Green Score tiers read Leaf → Plant → Tree → Forest, four only
- Every `TapCeipt` goes through `<TapCeipt />`
- No hardcoded hex, spacing, or radius outside `tokens.css`
- No mention of Amazon anywhere, including alt text and metadata
