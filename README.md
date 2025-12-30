# SkyCast 🌦️

SkyCast is a premium, immersive weather application built with React Native and Expo. It provides a visually stunning experience where the interface adapts dynamically to the weather conditions and local time of the selected city using glassmorphism and animated landscapes.

## 🚀 Vision
The goal of SkyCast is to move beyond static data points and transform weather checking into an atmospheric experience. Every detail, from the background to the icons, is designed to reflect the real-world conditions of the city you are viewing.

## 🏗️ Architecture: Atomic Design
We follow a strict **Atomic Design** pattern to ensure modularity and scalability:

-   **Atoms**: Primitive UI elements (Buttons, Text, Blur effects).
-   **Molecules**: Simple groups of atoms (SearchBar, WeatherIcon).
-   **Organisms**: Complex blocks (ForecastList, GlassmorphismCard).
-   **Pages**: Full-screen layouts (HomeScreen, SearchScreen).

## 🛠️ Tech Stack

### Core
-   **Framework**: React Native (Expo SDK)
-   **Language**: TypeScript (Strict)
-   **State Management**: Zustand (+ Persistence)
-   **Navigation**: React Navigation

### UI & UX
-   **Styling**: StyleSheet + Expo Blur (Glassmorphism)
-   **Animations**: Lottie + React Native Reanimated
-   **Visuals**: Dynamic backgrounds based on local city time and weather codes.

### Data & Services
-   **API**: WeatherAPI.com
-   **Geolocation**: Expo Location
-   **HTTP Client**: Axios
-   **Storage**: AsyncStorage

## 📂 Project Structure
```text
/
├── .agent/         # AI Configuration & workflows
├── docs/           # Documentation & Backlog
│   ├── reports/    # Task completion reports
│   └── ...
├── src/            # Application source (to be initialized)
│   ├── components/ # Atomic components
│   ├── hooks/      # Custom React hooks
│   ├── services/   # Data services (API)
│   ├── store/      # Zustand stores
│   └── utils/      # Helpers & Converters
├── README.md       # Project overview
└── .gitignore      # Git exclusions
```

## 📈 Roadmap
SkyCast is being developed in 5 main Sprints:
1.  **Foundation & Data**: API, State, and Core logic.
2.  **Navigation & Search**: Multi-city management and search.
3.  **Immersive UI**: Glassmorphism and animations.
4.  **Settings & Offline**: Localization and caching.
5.  **Deployment**: Landing page and Android APK.
