# CLAUDE.md

This is a TypeScript project for our corporate website, <https://amolino.ai>. It is built in React with Next.js, deployed on Vercel. Our primary CSS is Tailwind.

## Project structure

- `src/app/` — Next.js App Router pages and layouts
- `src/components/` — Reusable component library
- `src/lib/content/` — Content loading (YAML + MDX parsing, typed interfaces)
- `src/lib/posthog/` — All PostHog analytics code (client, server, constants, UA parser)
- `src/middleware.ts` — Edge middleware for server-side visitor tracking
- `content/` — All user-facing content (blog posts as MDX, page content as YAML)
- `src/styles/tailwind.css` — Tailwind config with design tokens

## Key rules

### Content
- All user-facing content must be in markdown files or YAML files in `content/`. Do not hardcode content in components.

### Components
- Do not create new components without first checking existing components in `src/components/`. We have a component library and want to avoid duplicates. If you must create a new component, ask me.

### TypeScript
- All code must be strictly typed. Do not use `any`. Do not disable eslint or TypeScript rules without discussing first.

### Design tokens

- See `DESIGN_SYSTEM.md` for the frontend/design-system developer guide (components, colors, conventions, recipes).
- See `DESIGN_TOKENS.md` and `src/styles/tailwind.css` for the exact design token values.
- Never use raw Tailwind colors (`gray-*`, `blue-*`, `indigo-*`, etc.). Use our semantic tokens (`neutral-*`, `primary-*`, `secondary-*`, etc.).
- Use typography components from `src/components/typography/` instead of raw text size classes.

### Dark mode

- We are not using dark mode anywhere.

### Building

- Always run `npm run build` to check eslint, prettier, and SEO checks before considering work done.

### Git

- Do not check in code unless asked. I want to review code before it is checked in.

## Analytics (PostHog)

All PostHog code lives in `src/lib/posthog/`. Do not add PostHog imports or tracking code elsewhere.

- `constants.ts` — Cookie config, API hosts, `EVENTS` enum (all event names defined here)
- `server.ts` — Edge-compatible `captureEvent()` using PostHog HTTP API
- `client.tsx` — `PostHogProvider`, `trackEvent()` helper for components
- `parse-user-agent.ts` — Lightweight UA parser for Edge Runtime

### How tracking works

- **Middleware** (`src/middleware.ts`) fires `$pageview` server-side on every page load with IP, parsed UA, referrer. This is blocker-proof.
- **Client SDK** enriches person with screen/timezone details and tracks SPA navigations as a safety net.
- Both use the same `amolino_visitor_id` cookie for identity stitching.
- Event names must use `EVENTS.*` constants — never raw strings.

### Adding new events

1. Add the event name to `EVENTS` in `src/lib/posthog/constants.ts`
2. Use `trackEvent(EVENTS.YOUR_EVENT, { ...props })` in components

## Blog templates

Blog posts support two templates via the `template` frontmatter field:
- `default` — Standard blog layout (most posts)
- `editorial` — Newspaper-style layout with Playfair Display font, warm beige background, and editorial-specific components (on `component-sanitization` branch, not yet merged to main)

## Vercel

We use Vercel for hosting. Most of the times I am logged in via vercel login and you are allowed to check vercel logs and deployments. If you need to do something in Vercel that requires admin access, ask me. If we are logged out of vercel, prompt me to log in before doing any work that requires Vercel access.

Don't checkin to main without my permission and don't push anything to vercel without asking me. I want to review all code and deployments before they go live.