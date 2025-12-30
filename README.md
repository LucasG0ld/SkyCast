# SkyCast ⛅

> **The Weather, Reimagined.**

SkyCast is a modern, immersive weather application built with React Native and Expo. It features dynamic backgrounds, glassmorphism design, and a robust offline-first architecture.

![SkyCast Banner](landing-page/public/banner_placeholder.png)

## ✨ Features

- **Immersive UI**: dynamic backgrounds that adapt to current weather conditions and time of day.
- **Glassmorphism**: Sleek, modern design with frosted glass effects.
- **Offline Mode**: Access cached weather data even without an internet connection.
- **Multi-Language**: Native support for English and French (auto-detected).
- **Customizable**: Choose your preferred units (Metric/Imperial) and Theme (Light/Dark/Auto).
- **Animations**: Smooth transitions and Lottie-powered weather icons.

## 🚀 Tech Stack

- **Framework**: React Native (Expo SDK 52)
- **Language**: TypeScript
- **State Management**: Zustand (with Persistence)
- **Styling**: StyleSheet, Expo Blur, Lucide Icons
- **Animations**: React Native Reanimated, Lottie
- **Navigation**: Expo Router (File-based routing)
- **API**: WeatherAPI.com
- **Build**: EAS (Expo Application Services)

## 📱 Installation (Android)

You can download the latest APK from our [Releases Page](https://github.com/LucasG0ld/SkyCast/releases).

**Manual Build:**
1.  Clone the repository.
2.  Install dependencies: `npm install` inside `mobile-app/`.
3.  Run `npx expo prebuild`.
4.  Build locally or with EAS:
    ```bash
    eas build -p android --profile preview --local
    ```

## 🌐 Web Landing Page

Check out the promotional website in `landing-page/`.
To run it locally:
1.  `cd landing-page`
2.  `npm install`
3.  `npm run dev`

## 🛠️ Development

**Prerequisites**:
- Node.js (v18+)
- Expo Go app on your device or Android Emulator.

**Running the App**:
```bash
cd mobile-app
npm start
```
Scan the QR code with Expo Go.

## 📄 License

MIT © 2025 Lucas Gold.
