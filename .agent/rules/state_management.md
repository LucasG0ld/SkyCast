---
trigger: always_on
---

# State Management (Zustand)

## 1. Store Structure
- Split stores by domain: `useWeatherStore.ts`, `useSettingsStore.ts`.
- Use the `persist` middleware for settings (Language, Units, Saved Cities).

## 2. Performance
- **Selectors**: Always use specific selectors (e.g., `const temp = useWeatherStore(s => s.currentTemp)`) to avoid unnecessary re-renders.
- **Action Pattern**: Keep actions inside the store to maintain a clean API for components.

## 3. Initialization
- Implement a `hydrate` check to ensure persisted data is loaded before the UI renders (avoiding layout shifts).