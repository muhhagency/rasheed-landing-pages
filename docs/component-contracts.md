# Phase 1 — Component Contracts

Lock these APIs before building. Every page consumes them; drift here costs more later than it saves now.

All components live in `components/ui/`. All are Server Components unless noted. None accept a `className` for color, spacing, or radius overrides — if a variant is needed, add it to the variant union rather than passing arbitrary classes.

---

## `TapCeipt`

Build first. Everything else references it.

```tsx
export function TapCeipt(): JSX.Element
```

No props. Renders `<span className="tapceipt">TapCeipt</span>`.

Never type the string `TapCeipt` inline anywhere else in the codebase — always this component. Phase 7 greps for violations.

---

## `Button`

```tsx
type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';   // default 'primary'
  size?: 'md' | 'lg';                             // default 'md'
  href?: string;                                  // renders <a> when present, else <button>
  external?: boolean;                             // adds target/rel; auto-true for http(s) hrefs
  onClick?: () => void;
  disabled?: boolean;
  'aria-label'?: string;
};
```

Token mapping:

| Variant | Background | Text | Border |
|---|---|---|---|
| `primary` | `--surface-action` → hover `--surface-action-hover` | `--text-on-action` | none |
| `secondary` | transparent | `--text-action` | `--border-action` → hover `--border-action-hover` |
| `ghost` | transparent | `--text-action` → hover `--text-action-hover` | none |
| `primary` disabled | `--surface-disabled` | `--text-on-disabled` | none |
| `secondary` disabled | transparent | `--text-disabled` | `--border-disabled` |
| `ghost` disabled | transparent | `--text-disabled` | none |

Disabled is per-variant, not one shared style: only `primary` fills with `--surface-disabled`. `secondary` and `ghost` keep transparent backgrounds — their text drops to `--text-disabled`, and `secondary`'s border drops to `--border-disabled`. All disabled buttons use `cursor: not-allowed` and suppress hover shifts.

Sizes: `md` = `--spacing-sm` block / `--spacing-lg` inline. `lg` = `--spacing-md` / `--spacing-xl`.
Radius: `--border-radius-lg`. Focus ring: `--border-focus`, 2px offset, always visible on keyboard focus.

---

## `StoreButton`

```tsx
type StoreButtonProps = {
  store: 'appstore' | 'googleplay';
  tone?: 'dark' | 'light';   // default 'dark'; 'light' for use on dark surfaces
};
```

Hrefs are constants inside the component, not props:
- App Store — `https://apps.apple.com/us/app/rasheed/id6458787414`
- Google Play — `https://play.google.com/store/apps/details?id=com.rasheed.app`

Vendor glyphs as inline SVG. Two-line label: small "Download on" / "Get it on" above a larger store name. Do not use vendor badge images — they're licensed assets with usage rules.

---

## `Container`

```tsx
type ContainerProps = {
  children: React.ReactNode;
  width?: 'default' | 'narrow';   // default 1200px, narrow 800px
};
```

Inline padding uses logical properties: `padding-inline`, scaling `--spacing-md` → `--spacing-xl` across breakpoints. Never `padding-left/right`.

---

## `Section`

```tsx
type SectionProps = {
  children: React.ReactNode;
  tone?: 'default' | 'subtle' | 'dark' | 'brand';   // default 'default'
  id?: string;                                       // anchor target
  as?: 'section' | 'div';                            // default 'section'
};
```

| Tone | Background | Heading text | Body text |
|---|---|---|---|
| `default` | `--surface-page` | `--text-headings` | `--text-body` |
| `subtle` | `--surface-disabled` | `--text-headings` | `--text-body` |
| `dark` | `--neutral-800` | `--neutral-white` | `--neutral-300` |
| `brand` | `--surface-action` | `--text-on-action` | `--primary-200` |

`dark` and `brand` set their own text colors via a scoped block so children don't each need overrides.
Vertical rhythm: `--spacing-3xl` block padding, reduced one step below 768px.

---

## `Kicker`

```tsx
type KickerProps = {
  children: React.ReactNode;
  tone?: 'default' | 'on-dark' | 'brand';   // default 'default'
};
```

Uppercase, `--font-size-body-sm`, `--font-weight-semibold`, letter-spacing `0.15em`. Optional leading rule (24px hairline) before the text. Colors: `default` → `--text-body`; `on-dark` → `--neutral-300`; `brand` → `--text-action`.

---

## `PlaceholderMedia`

Marks where real assets go. Must look deliberate, not broken.

```tsx
type PlaceholderMediaProps = {
  aspectRatio: '1/1' | '4/3' | '3/4' | '16/9' | '9/16';
  label: string;        // what the real asset will be, e.g. "TapCeipt at grocery checkout"
  alt: string;          // written as if the real asset were present
  tone?: 'default' | 'dark';
};
```

Renders a bordered block at the given ratio with the label centered in `--text-disabled`. Border `--border-disabled`, dashed, `--border-radius-lg`.

The `alt` prop is written now, for the real image later — so swapping in photography is a one-line change and accessibility is already correct.

---

## Kitchen sink

Route `/kitchen-sink`, rendering every component in every variant and tone, grouped by component, on both light and dark surfaces.

Exclude from sitemap and `robots.txt`. Delete before launch — add a Phase 7 checklist item.

---

## Rules that apply to all of the above

- No hardcoded hex, px spacing, or radius. Tokens only.
- Logical properties throughout (`margin-inline-start`, `padding-inline`) — this is the RTL groundwork.
- Every interactive element has a visible keyboard focus state using `--border-focus`.
- No `className` escape hatch for theming. Add variants instead.
- Components take content as props; no copy strings live inside `components/ui/`.
