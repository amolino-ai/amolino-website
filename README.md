# Naming Conventions

1. Components should be in PascalCase
2. Components are located in `/src/components`
3. Component exports should be named exports (not default exports) so don't do `export default function Button()` but rather `export function Button()`. The one exception is `page.tsx` which uses default exports per NextJS convention
4. Icon components are suffixed with `Icon` suffix (e.g. ChatBubbleIcon.tsx) and they are all stored in `/src/components/icons/`
5. For pages use lowername (NextJS convnetion) e.g. layout.tsx
6. For route directories, ebab-case for multi-word routes, lowercase for single words, e.g. /app/use-cases/
7. Use PascalCase for page-specific components, e.g. /app/page/components/Hero.tsx.
8. use camelCase for utilities and libraries e.g. utils.tsx and store them in `src/lib`
9. kebab-case (JavaScript ecosystem convention) for config files (e.g.remark-remove-frontmatter.js )
10. PascalCase for type definitions `interface ButtonProps`
11. Type definition files use camelCase or kebab-case and are stored in `/src/types/`
12. MDX files use kebab-case (e.g. building-a-sustainable-revenue-engine.mdx) and are stored in `/content`
13. Always use the `@/` path alias instead of relative paths for imports from the `src` directory.
14. Group and alphabetize imports
  1. External dependencies
  2. Internal components (alphabetized)
  3. Relative imports
  4. Types (if using `import type`)
15. Variables and functions should use camelCase
16. use UPPER_SNAKE_CASE (for true constants) or camelCase (for configuration) (e.g. const MAX_RETRIES = 3 and const apiConfig = { ... })
17. For tailwind CSS classes, Use Tailwind's kebab-case utility classes as-is.
