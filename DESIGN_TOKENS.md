# Design Tokens

Single source of truth for the visual foundation. Values are mapped from the
**[AmolinoAI Design System v2](https://www.figma.com/design/FYmCSI0de3OD65goQDQhYi/AmolinoAI-Design-System-v2)**
Figma file and implemented in [`src/styles/tailwind.css`](src/styles/tailwind.css).

> **Rule:** never use raw Tailwind colors (`gray-*`, `blue-*`, `slate-*`, …).
> Use the semantic token scales below. See `CLAUDE.md`.

## Typography

- **Font family:** Manrope (`--font-sans` → `var(--font-manrope)`), loaded via
  `next/font/google` in `src/app/layout.tsx`. Applies document-wide through
  Tailwind's preflight.
- **DS type scale (desktop):**

  | Role | Size / line-height / tracking | Weight |
  |------|-------------------------------|--------|
  | Title H1 | 56 / 64 / −1.40 | 600 |
  | Title H2 | 48 / 56 / −0.96 | 600 |
  | Title H3 | 40 / 48 / −0.80 | 600 |
  | Title H4 | 32 / 40 / −0.48 | 600 |
  | Title H5 | 24 / 32 / −0.24 | 600 |
  | Title H6 | 20 / 28 / −0.10 | 600 |
  | Paragraph L/M/S/XS | 18/16/14/12 (lh 24/24/20/16) | 500 |
  | Label L/M/S/XS | 18/16/14/12 | 600 |
  | Subheading M/S/XS/2XS | 16/14/12/11, wide positive tracking | 600 |

  > The DS specifies a **single desktop scale only** — no mobile/tablet sizes.
  > Responsive type ramps stay in code (Tailwind `sm:`/`md:`/`lg:`); map Figma
  > values to the **large end** of each ramp.

## Color

All scales run `50 → 950`. The DS defines stops `50–900`; the `950` stop extends
each scale (≈ the 900 value darkened) to preserve the 11-stop token API.

| Token | DS hue | 50 | 500 | 900 |
|-------|--------|----|-----|-----|
| `primary-*` | Blue (brand) | `#f1f9fe` | `#19a4de` | `#0b2f46` |
| `neutral-*` | Neutral (cool slate) | `#fafbfd` | `#717784` | `#0e121b` |
| `secondary-*` | Orange | `#fff1eb` | `#ff8447` | `#682f12` |
| `tertiary-*` | Purple | `#efebff` | `#7d52f4` | `#351a75` |
| `success-*` | Green | `#e0faec` | `#1fc16b` | `#0b4627` |
| `warning-*` | Yellow | `#fffaeb` | `#f6b51e` | `#624c18` |
| `error-*` | Red | `#ffebec` | `#fb3748` | `#681219` |
| `info-*` | Blue (= primary) | `#f1f9fe` | `#19a4de` | `#0b2f46` |
| `teal-*` | Teal (accent) | `#e4fbf8` | `#22d3bb` | `#0b463e` |
| `pink-*` | Pink (accent) | `#ffebf4` | `#fb4ba3` | `#68123d` |

- The DS has a single blue, so `info-*` intentionally mirrors `primary-*`.
- `teal-*` and `pink-*` are available DS accents not yet used in the site.

## Shadows

`shadow-xs`, `shadow-sm`, `shadow-md`, `shadow-lg` — the DS slate elevation scale.
`shadow-brand` — blue glow (`rgba(12,113,165,…)`) for primary CTAs / highlights.

## Radii

| Utility | Value | Use |
|---------|-------|-----|
| `rounded-control` | 5px | buttons, inputs |
| `rounded-card` | 16px | cards, modals, containers |
| `rounded-pill` | 40px | pills / fully-rounded chips |
| `rounded-4xl` | 32px | legacy large radius (existing usage) |

## Breakpoints (owned by code, not the DS)

The DS provides no responsive breakpoints (its only grid is a single 12-column
layout at 1920px, gutter 16, margin 80). We use Tailwind's defaults:

`sm 640 · md 768 · lg 1024 · xl 1280 · 2xl 1536`

## Dark mode

Not used anywhere on the site. Dead `data-dark:*` classes should be removed as
components are migrated.
