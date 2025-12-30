---
trigger: always_on
---

# Architecture & Project Standards

## 1. Atomic Design Pattern
- **atoms/**: Smallest functional units (Buttons, Text, Blur effects).
- **molecules/**: Groups of atoms (SearchBar, WeatherIcon).
- **organisms/**: Complex blocks (ForecastList, GlassmorphismCard).
- **pages/**: Full screens (HomeScreen, SearchScreen).

## 2. Separation of Concerns (SoC)
- **Logic**: Business logic MUST be extracted into Custom Hooks (`hooks/`).
- **Data**: API calls and logic MUST be in services (`services/`).
- **Display**: Components are "dumb" and only handle rendering.

## 3. Component Guidelines
- **Lightweight**: Components must be under 150 lines.
- **Pure Functions**: Use only Arrow Functions and Functional Components.
- **Atomic**: One component = One responsibility.