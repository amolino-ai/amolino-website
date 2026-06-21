# Design System & Frontend Guide

How to build UI in this repo: where things live, the design tokens (colors,
fonts, shadows, radii), the component library, and the conventions to follow.
For the exhaustive token *values*, see **[`DESIGN_TOKENS.md`](DESIGN_TOKENS.md)**;
this guide is the *how-to* that sits on top of it.

The visual language is mapped from the **AmolinoAI Design System v2** (Figma).
That file is a product/app UI kit, so we take its **foundation** (color, type,
shadow, radius) and its **primitives** (Button, Badge, inputs, tables, modals),
and apply them across a marketing site that the Figma file doesn't otherwise
cover.

---

## 1. Where things live

```
src/
  app/                  Next.js App Router pages & layouts
  components/           The component library (start here before building UI)
    headings/           Typography primitives (Heading, Subheading, SectionHeader, DocsHeading)
    Bento/              Bento grid layouts
    Navbar/             Navbar dropdowns
    icons/              SVG icon components
  lib/content/          Content loading (YAML + MDX parsing, typed)
  styles/tailwind.css   THE design tokens (Tailwind v4 @theme block)
content/                User-facing content (MDX posts, YAML page content)
DESIGN_TOKENS.md        Exact token values (colors, type scale, shadows, radii)
```

Two rules that matter before you write anything:

- **Check `src/components/` before creating a component.** We have a library and
  want to avoid duplicates. If you genuinely need a new one, ask first.
- **Content goes in `content/`** (MDX/YAML), never hardcoded in components.

---

## 2. Design tokens (colors, fonts, shadows, radii)

All tokens are defined in **`src/styles/tailwind.css`** inside the Tailwind v4
`@theme { … }` block. Because they're theme tokens, they generate normal
Tailwind utilities (`bg-primary-600`, `text-neutral-700`, `shadow-md`, …) and
apply globally.

### Colors — use semantic tokens, never raw Tailwind colors

> **Rule:** Never use `gray-*`, `blue-*`, `indigo-*`, `slate-*`, etc. Use the
> semantic scales below. (There are zero raw Tailwind colors in `src` today —
> keep it that way.)

Every scale runs `50 → 950`:

| Token | Use it for |
|-------|-----------|
| `primary-*` | Brand (the design-system blue). Links, primary accents. |
| `neutral-*` | Text, borders, backgrounds (cool blue-slate). |
| `secondary-*` | Warm orange accent. |
| `tertiary-*` | Purple accent. |
| `success-* / warning-* / error-*` | Semantic states. |
| `info-*` | Informational blue (mirrors `primary` — the DS has one blue). |
| `teal-* / pink-*` | Extra DS accents, available when needed. |

```tsx
// ✅ do
<p className="text-neutral-600">…</p>
<div className="bg-primary-50 ring-1 ring-primary-200" />

// ❌ don't
<p className="text-gray-600">…</p>
<div className="bg-blue-50 ring-1 ring-indigo-200" />
```

### Typography — Manrope

- The site font is **Manrope**, loaded via `next/font` in `src/app/layout.tsx`
  and wired to `--font-sans`, so it applies document-wide.
- Use the **typography components** (below) rather than ad-hoc `text-4xl
  font-bold …` strings.
- The DS specifies a single *desktop* type scale; pick the responsive ramp
  (`sm:`/`lg:`) yourself — see §5.

### Shadows & radii

- Elevation: `shadow-xs`, `shadow-sm`, `shadow-md`, `shadow-lg`, plus
  `shadow-brand` (a blue glow for primary emphasis).
- Radii: `rounded-control` (5px — buttons/inputs), `rounded-card` (16px —
  cards/modals), `rounded-pill`.

---

## 3. The component library

Check here first. The most-used building blocks:

### Layout
- **`Container`** — centered, responsive horizontal padding.
- **`Section`** — full-width section primitive: token background, vertical
  padding, and a centered max-width container in one. Prefer this over
  hand-rolling `max-w-7xl mx-auto px-6 …`.
  ```tsx
  <Section background="dark-gradient" padding="md">
    <Heading as="h2" dark>Why it matters</Heading>
  </Section>
  ```

### Typography (`src/components/headings/` + `Text.tsx`)
- **`Heading`** — large marketing headings (`as` chooses h1–h6; `dark` for
  on-dark-surface white text).
- **`Subheading`** — small uppercase eyebrow label.
- **`SectionHeader`** — composed subheading + heading + description.
- **`Lead`** — large intro paragraph.
- **`DocsHeading`** — headings with anchor links / TOC (docs pages).
- Blog/MDX prose is rendered by **`Mdx.tsx`** and keeps its own spacing/rhythm —
  it's intentionally distinct from marketing typography (see §5).

### Actions & labels
- **`Button`** — one component, several axes:
  - `variant`: `primary` | `secondary` | `outline` | `text`
  - `shape`: **`control`** (default, 5px design-system shape) | `pill`
  - `arrow`: `left` | `right`; renders as a link when given `href`.
  ```tsx
  <Button href="/demo">Book a demo</Button>            {/* DS control shape */}
  <Button href="/demo" shape="pill">Book a demo</Button> {/* marketing pill */}
  ```
- **`Badge`** — the canonical label/chip. Variant groups: label/eyebrow text
  (`default`, `callout`, `highlight`, …), API `tag` (with `color`+`size`), and
  decorative (`ring-glow`, `dot-glass`, …).
  - **`Tag`** and **`Eyebrow`** still exist but are thin wrappers around `Badge`
    — fine to keep using; new code can use `Badge` directly.

### Other primitives
- **`Breadcrumb`**, **`Search`** (DS text-input styling), **`VideoModal`**,
  **`ComparisonTable`**, **`Screenshot`**, **`LogoCloud`**, **`Bento`** /
  **`BentoCard`**, **`PlusGrid`**, **`Card`**, icons in `components/icons/`.

---

## 4. Conventions

- **No raw Tailwind colors.** Semantic tokens only (§2).
- **No dark mode.** The site doesn't use OS/media dark mode — don't add `dark:`
  classes. (Note: `data-dark:` is *not* dark mode — it's an explicit `dark` prop
  some components use to render white text on dark backgrounds. That's fine.)
- **Strongly typed.** No `any`; type props and content (DTOs for external data).
  Don't disable eslint/TS rules without discussing.
- **Validate external data at the boundary** before passing it inward.
- **No magic numbers** — named, shared constants.
- **PostHog stays in `src/lib/posthog/`**; event names use the `EVENTS` enum.

---

## 5. Responsiveness & the blog (two things people get wrong)

- **Responsiveness lives in code, not the design system.** The Figma file only
  specifies a desktop scale. Use Tailwind breakpoints (`sm 640 · md 768 · lg
  1024 · xl 1280 · 2xl 1536`) and map Figma values to the *large* end of each
  ramp. Don't expect the design system to define mobile/tablet behavior.
- **Blog prose is its own thing.** Marketing typography (the `headings/`
  components) and blog/MDX prose (`Mdx.tsx`) share the same *tokens* but keep
  *different* spacing and rhythm. Keep them separate; don't force marketing
  heading styles into prose or vice-versa. The `editorial` blog template is a
  deliberate off-design-system style.

---

## 6. How-to recipes

**Add or change a color/token**
1. Edit the `@theme` block in `src/styles/tailwind.css`.
2. Keep full `50–950` scales; reuse an existing semantic family if you can.
3. Update **`DESIGN_TOKENS.md`** so the reference stays accurate.

**Add a new component**
1. Search `src/components/` first — extend/compose before creating.
2. If new: strongly typed props, token classes only, and prefer composing
   `Section`/`Container`/typography primitives over raw layout.
3. Add it where it fits the existing folder structure.

**Build a page section** → wrap content in `<Section>` (background + padding +
container) and use `SectionHeader` for the heading block.

**Add a button / label** → use `Button` (pick `variant` + `shape`) and `Badge`
(pick the variant). Don't reinvent.

---

## 7. Before you call it done

Always run the full check (eslint + prettier + TypeScript + SEO audit):

```bash
npm run build
```

Node is pinned to **24.x** (`.nvmrc` + `engines`); match it locally so builds
behave the same as CI/Vercel. Don't check code into `main` without review.
