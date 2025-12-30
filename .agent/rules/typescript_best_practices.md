---
trigger: always_on
---

# TypeScript Best Practices

## 1. Type Safety
- **No 'any'**: The use of `any` is strictly forbidden. Use `unknown` if the type is truly dynamic.
- **Strict Mode**: Assume TypeScript strict mode is enabled.
- **Explicit Returns**: Always define return types for functions and hooks.

## 2. Definitions
- **Interfaces**: Use `interface` for object shapes and data models (e.g., `City`, `WeatherData`).
- **Types**: Use `type` for unions, intersections, and specific logic aliases (e.g., `Theme = 'light' | 'dark' | 'auto'`).
- **Props**: Every component must have an interface named `[ComponentName]Props`.

## 3. API Modeling
- Models MUST match the definitions in `docs/api_definitions.md`.
- Use optional chaining and nullish coalescing when dealing with API responses.