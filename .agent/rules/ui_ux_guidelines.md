---
trigger: always_on
---

# UI/UX & Design Guidelines

## 1. Visual Style (Immersive Weather)
- **Glassmorphism**: Use `ExpoBlur` with consistent intensity. All cards must have thin, semi-transparent borders.
- **Backgrounds**: Must be full-screen illustrations that react to the `weatherCode` and `localTime`.
- **Typography**: High contrast text on dark/illustrated backgrounds. Use `Inter` or system fonts.

## 2. Animations
- **Lottie**: Use Lottie files for weather status icons. They should be looped and smooth.
- **Reanimated**: Use `react-native-reanimated` for layout transitions (e.g., when a card expands or appears).
- **Navigation**: Horizontal swipe transitions between cities must feel fluid and native.

## 3. Responsive Layout
- Use relative units and `Flexbox`. Ensure the UI works on small (iPhone SE) and large (Pro Max) screens.
- **Safe Areas**: Always respect `SafeAreaView` boundaries for notches and home indicators.