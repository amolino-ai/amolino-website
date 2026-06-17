# Design System Alignment — Audit & Migration Plan

**Source of truth:** [AmolinoAI Design System v2](https://www.figma.com/design/FYmCSI0de3OD65goQDQhYi/AmolinoAI-Design-System-v2) (last modified 2026-06-16)
**Target:** `amolino-website` (this repo)
**Status:** Proposal for review — no code changed yet.

---

## 1. Executive summary

The Figma file is a **Primer-derived product/application UI kit** (its component list — `ActionMenu`, `ActionList`, `UnderlineNav`, `ButtonGroup`, `CommandMenu`, `DatePicker`, `Table`, `TextInput` — is GitHub Primer's vocabulary). Its grid system is defined only for **app layouts with a sidebar at 1440 / 1920px**. This has two big consequences:

1. **The design system's real value to a marketing site is its _foundation_ (color, typography, shadows, radii) plus a handful of UI _primitives_ (Button, Badge, Breadcrumbs, Modal, Tooltip, TextInput, Banner/Alert).** Adopting that foundation is what makes every component "feel" like the design system.
2. **The design system does not define responsive behavior.** There are no mobile/tablet/desktop frames and no breakpoint tokens anywhere in the file — only a single 12-column grid at 1920px (gutter 16, margin 80). So **responsive behavior must stay owned by the website's existing Tailwind breakpoints**; we take _appearance_ from Figma and keep _layout/responsiveness_ in code. (See §6.)

The marketing site has ~30 **composite marketing components** (Hero, Bento, LogoCloud, SplitHero, ProblemSection, etc.) that have **no design-system equivalent** and never will — those should simply consume the new foundation tokens, not be "matched" to a Figma component.

**The single highest-leverage change is the token foundation** (§3). Once `tailwind.css` matches the design system, most components inherit the look-and-feel for free.

---

## 2. Key findings up front

| # | Finding | Impact |
|---|---------|--------|
| F1 | **Font mismatch.** DS uses **Manrope** (weights 500/600); repo uses **Switzer**. | Every text surface looks different from the DS. Highest-visibility change. |
| F2 | **Primary already matches.** Repo `primary-*` == DS **Blue** scale (`#f1f9fe`→`#0b2f46`), to rounding. | No work needed; confirms lineage. |
| F3 | **Neutrals mismatch.** Repo neutrals are warm zinc (`#27272a`…); DS neutrals are cool blue-slate (`#0e121b, #525866, #717784, #99a0ae, #e1e4ea, #f5f7fa, #fafbfd`). | Backgrounds, borders, body text all read warmer than the DS. |
| F4 | **Accent palettes mismatch.** Repo secondary/tertiary/success/warning/error/info use generic Tailwind values; DS defines its own Green `#1fc16b`, Red `#fb3748`, Orange `#ff8447`, Yellow `#f6b51e`, Purple `#7d52f4`, Pink `#e9358f`. | Badges, alerts, status colors differ. |
| F5 | **No shadow or radius scale in repo.** DS defines `shadow/xs…lg`, a `shadow/brand` (blue glow `rgba(12,113,165,…)`), and radii `5 / 16 / 40px`. Repo has only `--radius-4xl`. | Cards/buttons/modals can't match DS elevation until tokens exist. |
| F6 | **Token-file bugs.** `tailwind.css` has duplicate `neutral-600/700` (both `#52525b`), duplicate `tertiary-300/400` and `tertiary-700/800`, an invalid value `--color-test-two: ##5ac5b5`, and leftover `--color-test-one/two`. | Fix during the token pass. |
| F7 | **Raw Tailwind colors used widely**, violating the repo's own rule (e.g. `headings/Heading.tsx` uses `text-gray-950`, `Mdx.tsx` uses `text-blue-600/text-gray-600`). | The migration is the moment to convert these to semantic tokens. |
| F8 | **`DESIGN_TOKENS.md` referenced by `CLAUDE.md` does not exist.** | Create it as part of this work. |
| F9 | **DS has no dark mode story relevant to us** and the repo explicitly doesn't use dark mode, yet components carry `data-dark:*` classes (e.g. `Heading.tsx`, `BentoCard`). | Strip dead dark-mode classes opportunistically. |

---

## 3. Token foundation mapping (do this first)

### 3.1 Typography — DS scale (font: **Manrope**)

| DS style | Size / line-height / tracking | Weight |
|----------|-------------------------------|--------|
| Title/H1 | 56 / 64 / −1.40 | 600 |
| Title/H2 | 48 / 56 / −0.96 | 600 |
| Title/H3 | 40 / 48 / −0.80 | 600 |
| Title/H4 | 32 / 40 / −0.48 | 600 |
| Title/H5 | 24 / 32 / −0.24 | 600 |
| Title/H6 | 20 / 28 / −0.10 | 600 |
| Paragraph/L · M · S · XS | 18·16·14·12 / 24·24·20·16 | 500 |
| Label/L · M · S · XS | 18·16·14·12 | 600 |
| Subheading/M · S · XS · 2XS | 16·14·12·11 with wide positive tracking (+0.5…+1.0) | 600 |

> Note: this is a **single (desktop) scale** — the DS does not specify smaller mobile sizes. Our responsive type ramp (e.g. `text-4xl sm:text-6xl`) stays a code concern; Figma gives us the _desktop end_ of each ramp.

### 3.2 Color — target scales

- **Brand / primary** = DS **Blue** → keep current `primary-*` (already correct).
- **Neutral** → re-map to DS slate: `950 #0e121b · 800 #222530 · 700 #2b303b · 600 #525866 · 500 #717784 · 400 #99a0ae · 300 #cacfd8 · 200 #e1e4ea · 100 #f5f7fa · 50 #fafbfd` (exact mid-stops to be pulled per-swatch during implementation).
- **Accents** → re-map `success → DS Green (#1fc16b)`, `error → DS Red (#fb3748)`, `secondary/orange → #ff8447`, `warning/yellow → #f6b51e`, `tertiary/purple → #7d52f4`; add **pink `#e9358f`** if the DS "Pink" family is used.
- The DS also defines **semantic alias tokens** (`bg`, `fg`, `border`, `state/*`). Optional later step: introduce semantic aliases on top of the primitive scales.

### 3.3 Shadows (new tokens)

`shadow/xs` (`0 1 2 rgba(10,13,20,.04)`), `sm`, `md`, `lg` (layered slate shadows), and **`shadow/brand`** (`0 8 24 -6 rgba(12,113,165,.3)` + `0 2 6 rgba(12,113,165,.14)`) for primary CTAs/highlights.

### 3.4 Radii (new tokens)

DS uses `5px` (controls/inputs), `16px` (cards/containers), `40px` (pills). Add `--radius-sm/md/full` accordingly; keep `--radius-4xl` if still used.

### 3.5 Deliverables for this phase
1. Rewrite `src/styles/tailwind.css` `@theme` block: swap font to Manrope, re-map neutral + accent scales, add shadow + radius tokens, **delete the buggy/leftover tokens (F6)**.
2. Add the Manrope font (next/font) and update `--font-sans`.
3. Create `DESIGN_TOKENS.md` documenting the final token set (resolves F8).

---

## 4. Component cross-reference

Legend: ✅ DS has a direct equivalent (restyle to match) · 🟡 DS has a related primitive (adapt) · ❌ Not in DS (foundation-only: just adopt tokens) · ⛔ DS component we don't currently need.

### 4.1 Repo components WITH a design-system equivalent

| Repo component | DS component | Action |
|----------------|-------------|--------|
| `Button.tsx` | ✅ Button (+ Compact, Link, Social variants; radii 5/16/40; ~40px height; dark `#0e121b` primary fill) | Re-map variants to DS Button set; align radius/height/fills; add `shadow/brand` option on primary CTA. |
| `Badge.tsx` | ✅ Badge | Re-map the 4 visual variants to DS Badge styles + accent colors. |
| `Tag.tsx` | 🟡 Badge | **Merge into Badge** (see §5). |
| `Eyebrow.tsx` | 🟡 Subheading / Label | Map to DS Subheading type tokens; consider merging (see §5). |
| `headings/Subheading.tsx` | ✅ Subheading/* type styles | Re-map to DS Subheading sizes + tracking. |
| `headings/Heading.tsx`, `Text.tsx`(`Lead`) | ✅ Title/H1–H6, Paragraph/Large | Re-map to DS type scale; remove raw `text-gray-*`/`data-dark:*`. |
| `Breadcrumb.tsx` | ✅ Breadcrumbs | Restyle to DS breadcrumb. |
| `ComparisonTable.tsx`, `Mdx` `table` | ✅ Table | Adopt DS table styling (borders, header, row hover). |
| `VideoModal.tsx` | ✅ Modal | Adopt DS modal chrome (radius, shadow, overlay). |
| `Search.tsx` | ✅ TextInput | Adopt DS input styling. |
| `Navbar*`, `Header.tsx`, `Navigation.tsx`, `MobileNavigation.tsx` | ✅ Product → Header / Navigation | Align colors/spacing/type to DS; keep our responsive logic. |
| `LinkedAvatars.tsx` | 🟡 Avatar / Avatars | Adopt DS avatar styling (if kept — currently unused). |
| `Code.tsx`/`Pre` (blog) | 🟡 (no code component; ContentDivider/TextInput tokens only) | Token-only alignment. |

### 4.2 Repo components with NO design-system equivalent — **foundation-only** (adopt tokens, no Figma match exists)

These are marketing/composite components. They should consume the new tokens (color, type, shadow, radius) but there is nothing in the DS to "match" them to:

`Hero.tsx`, `SplitHeroWithImage.tsx`, `Bento.tsx` + `Bento/*` + `BentoCard.tsx`, `Card.tsx`, `ProblemSection.tsx`, `OutcomeSection.tsx`, `ComparisonSection.tsx`, `FeatureSection.tsx`, `IntegrationsSection.tsx`, `LogoCloud.tsx`, `StatsShowcase.tsx`, `AnimatedNumber.tsx`, `ProcessWorkflow.tsx`, `PlusGrid.tsx`, `Screenshot.tsx`, `Gradient.tsx`, `GridPattern.tsx`, `DecorativeTriangles.tsx`, `Container.tsx`, `Layout.tsx`, `Footer.tsx`, `RelatedContentSection.tsx`, `SectionProvider.tsx`, `Logo.tsx`, icons/*, `TrackingScripts.tsx`, `Prose.tsx`, `Mdx.tsx` (blog — see §7), `headings/SectionHeader.tsx` (composition), `headings/DocsHeading.tsx`.

### 4.3 Design-system components we do NOT currently use (⛔ — out of scope unless a need arises)

`Accordion`, `ActionMenu`, `ActionList`, `Alert/Notification/Toast`, `Banner`, `ButtonGroup`, `Checkbox & Radio`, `ContentDivider`, `CommandMenu`, `DatePicker`, `UnderlineNav`, `Tooltip`. Worth keeping in mind: if we ever add forms, toasts, or in-app surfaces, the DS already specifies them.

### 4.4 Unused repo components (decide: delete or keep)

`ContentNavigation`, `FeatureSection`, `Feedback`, `GuidanceCard`, `Guides`, `keyboard`, `LinkedAvatars`, `LinkedInLink`, `map`, `Resources`, `Testimonials`, `ThemeToggle` have **0 imports** from `src/app/`. Recommend deleting (or archiving) rather than restyling — don't spend migration effort on dead code. `ThemeToggle` especially, since we don't use dark mode.

---

## 5. Look-alike components to merge

| Merge group | Recommendation |
|-------------|----------------|
| `Badge` + `Tag` + `Eyebrow` | Consolidate into a single **`Badge`** with `variant`/`size` props mapped to DS Badge + Subheading/Label tokens. `Eyebrow`'s 8 ad-hoc variants collapse into a small, token-backed set. |
| Section wrappers: `Hero`, `SplitHeroWithImage`, `OutcomeSection`, `ProblemSection`, `ComparisonSection`, `FeatureSection` | Introduce one **`Section`** primitive (padding/Container/background tokens) and keep thin layout-specific wrappers on top, OR a single `Section` with a `layout` prop. Removes duplicated padding/width logic and centralizes token usage. |
| `Heading` vs `DocsHeading` vs `Mdx` h1–h6 | Keep **one heading primitive** with a `level`/`as` prop; blog/docs variants live in a separate folder but reuse the same type tokens (see §7). |
| `Button` vs `Link` | Keep separate (different semantics) but ensure both pull the same DS interaction tokens. |

---

## 6. Viewports / responsive strategy (your explicit ask)

- The DS provides **desktop appearance only** (single 1920px, 12-col, gutter 16, margin 80; no mobile/tablet frames; no breakpoint tokens).
- **Decision: responsiveness stays in code.** We map Figma values to the **desktop end** of each responsive ramp and keep Tailwind's `sm:`/`md:`/`lg:` breakpoints owning the mobile→desktop transition exactly as today.
- Practical rule for implementers: when a DS component spec is "H1 = 56px," wire it as the large end (`... lg:text-[56px]`) and choose the mobile end from the existing ramp, not from Figma.
- Recommend documenting our actual breakpoints (Tailwind defaults: 640/768/1024/1280/1536) in `DESIGN_TOKENS.md`, since the DS won't.

---

## 7. Blog vs. website (keep prose distinct)

Today: blog body flows through `Prose.tsx` + `Mdx.tsx` overrides (the `prose` plugin); marketing pages compose `Heading`/`Subheading`/`Lead`. Keep this seam. Proposal:

- **Shared type tokens, separate components.** One set of token-backed heading/text primitives in `src/components/typography/` for marketing; a parallel set (or `prose` config) under a `blog`/`prose` folder that reuses the **same tokens** but with prose-specific rhythm (line length, vertical spacing, link styling, code blocks).
- Concretely: an `h1` used on marketing pages and an `h1` used in MDX can both pull DS `Title/H1` tokens, but live in different folders and differ in spacing/measure — exactly your instinct.
- The `editorial` blog template (Playfair Display, warm beige) is intentionally off-DS; leave it out of this migration and document it as a deliberate exception.

---

## 8. Phased migration plan

**Phase 0 — Foundations (highest leverage).**
Rewrite `tailwind.css` `@theme` (Manrope font, neutral + accent re-map, add shadow + radius tokens, delete buggy/leftover tokens). Add Manrope via next/font. Create `DESIGN_TOKENS.md`. Run `npm run build`. _Outcome: the whole site shifts toward the DS look automatically._

**Phase 1 — Typography primitives.**
Re-map `Heading`, `Subheading`, `Lead`, `SectionHeader` to DS type scale; strip raw `text-gray-*` and `data-dark:*`. Establish the shared-token / separate-folder split for blog prose (§7).

**Phase 2 — Core UI primitives.**
`Button` (+ DS variants & `shadow/brand`), `Badge` (absorb `Tag`/`Eyebrow`), `Breadcrumb`, `Search`→TextInput, `VideoModal`→Modal, `ComparisonTable`/Mdx `table`→Table.

**Phase 3 — Navigation & chrome.**
`Navbar*`, `Header`, `Navigation`, `MobileNavigation`, `Footer` aligned to DS Header/Navigation + tokens (responsive logic unchanged).

**Phase 4 — Composite marketing components.**
Sweep §4.2 components to consume tokens (color/shadow/radius/type). No Figma "match" — just token adoption + the `Section` merge (§5).

**Phase 5 — Cleanup.**
Delete unused components (§4.4); remove dead dark-mode classes; verify no raw Tailwind colors remain (lint rule optional); final `npm run build`.

---

## 9. Open questions for you

1. **Font:** confirm we switch the site to **Manrope** (replacing Switzer) to match the DS. This is the most visible change.
2. **Neutrals:** OK to move from warm zinc to the DS cool-slate neutrals site-wide? (Affects every page's text/borders/backgrounds.)
3. **Unused components (§4.4):** delete, or keep and restyle?
4. **Merges (§5):** approve folding `Tag`/`Eyebrow` into `Badge` and the `Section` consolidation?
5. **Scope of first PR:** start with **Phase 0 only** (tokens) so you can see the global shift before we touch components?
