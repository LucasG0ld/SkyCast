---
trigger: always_on
---

# QA & Testing Standards

## 1. Edge Case Handling
- **No Network**: UI must show a clear "Offline" state.
- **Invalid Search**: Handle "City not found" errors with a user-friendly message.
- **Loading States**: Every data-driven component must have a corresponding "Skeleton" or "Loader" state.

## 2. Logic Validation
- Temperature conversions must be accurate.
- Timezone logic: Dynamic backgrounds must match the city's local time, NOT the user's phone time.

## 3. Accessibility
- All buttons must have a minimum touch target of 44x44px.
- Use `accessibilityLabel` for icons and weather conditions for Screen Readers.