
# JSDoc Conventions for the Component Library

This document defines how JSDoc is written for all **exported components, props, and public APIs** in this library.

The goal is to:

* Make components self-documenting in editors
* Keep docs useful without becoming noisy
* Standardize structure across the codebase

---

## 1. General Principles

* Explain **when to use something**, not how it’s implemented. Override this principle when the implementation is complicated or interesting.
* Prefer **examples over explanations**
* Be concise and factual

---

## 2. Component Documentation Standard

Every exported component must follow this structure:

````ts
/**
 * ComponentName – short, one-line summary.
 *
 * @remarks
 * Describe when to use this component, its purpose in the system,
 * and any non-obvious behavior or constraints.
 *
 * Keep this to 1–3 short paragraphs.
 *
 * @example Basic usage
 * ```tsx
 * <ComponentName />
 * ```
 *
 * @example Variant usage
 * ```tsx
 * <ComponentName variant="secondary" />
 * ```
 *
 * @see {@link RelatedComponent}
 * @see {@link AnotherComponent}
 */
export function ComponentName(...) {
  ...
}
````

### Rules

* First line:

  * Short, present-tense summary
  * No markdown, no punctuation-heavy phrasing
* `@remarks`:

  * Required for anything non-trivial
  * Focus on *when* and *why*
* `@example`:

  * 1–2 realistic examples
  * Always use ` ```tsx `
* `@see`:

  * Link related primitives, subcomponents, or layout wrappers
  * Use `{@link SymbolName}`

---

## 3. Props Interface Documentation

Props interfaces must be documented if the component is exported.

```ts
/**
 * Props for the {@link ComponentName} component.
 *
 * @remarks
 * Explain what these props control at a high level.
 */
interface ComponentNameProps {
  /** Short, clear explanation of the prop. */
  propName?: string

  /** Defaults should be mentioned if not obvious. */
  size?: 'sm' | 'md' | 'lg'
}
```

### Rules

* Always link back to the component using `{@link ComponentName}`
* Use single-line `/** ... */` comments for:

  * Non-obvious props
  * Props with defaults
  * Props with side effects or constraints
  
---

## 4. Examples Convention

Examples should be:

* Short
* Realistic
* Copy-pasteable

Preferred structure:

````ts
 * @example Basic usage
 * ```tsx
 * <Card>
 *   <CardHeader title="Example" />
 * </Card>
 * ```
````

Avoid:

* Pseudo-code
* Overly abstract examples
* Excessive examples that restate the same thing

---

## 5. `@remarks` Guidelines

Use `@remarks` to answer:

* When should I use this?
* What problem does it solve?
* How does it fit with nearby components?

Do **not** include:

* Implementation details
* CSS class explanations
* Internal state logic

Bad:

> This component uses `useEffect` to…

Good:

> Use this when you need a consistent surface for grouped content.

---

## 6. `@see` Usage

Use `@see` to link:

* Parent containers
* Subcomponents
* Conceptually related primitives

Example:

```ts
 * @see {@link Card}
 * @see {@link CardHeader}
 * @see {@link CardStats}
```

Avoid linking:

* Utilities unless they’re part of the public API
* Internal-only helpers

---

## 7. What Requires JSDoc

### Always document

* Exported UI primitives (Button, Card, Modal, Input)
* Components with variants or configuration
* Reusable hooks (`useSomething`)
* Public types and interfaces
* Design-system components

### Document lightly

* Layout or page-level components
* Simple wrappers with one or two props
* Internal helpers with non-obvious constraints

## 8. Tone and Style

* Neutral, professional, and precise
* No marketing language
* No emojis
* No fluff
* Short sentences
* Active voice

---

## 9. Allowed JSDoc Tags

Only use the following unless there’s a strong reason:

* `@remarks`
* `@example`
* `@see`
* `@deprecated` (when applicable)

Avoid:

* `@param` (TypeScript already covers this)
* `@returns` (rarely useful for components)
* Custom tags

