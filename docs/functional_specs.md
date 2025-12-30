# Functional Specifications - SkyCast

## Project Overview
SkyCast is a premium, immersive weather application. Its main goal is to provide a visually stunning experience where the UI adapts dynamically to the weather conditions and local time of the selected city.

## Core Features
1. **Multi-City Management:**
   - Users can save multiple cities.
   - Horizontal "Swipe" navigation between saved cities.
2. **Geolocation:**
   - Automatic detection of the user's current position (with permission).
   - "Primary" city status for the geolocated position.
3. **Advanced Search:**
   - Search bar with real-time suggestions (Auto-complete).
   - Ability to add a city from search results to the permanent list.
4. **Dynamic Dashboard:**
   - **Immersive Backgrounds:** Illustrated landscapes changing based on weather codes and time (Day/Night).
   - **Weather Data:** Current temperature, condition (text + animated icon), Min/Max.
   - **Details (Glassmorphism cards):** UV Index, Air Quality, Humidity, Wind speed, Sunrise/Sunset.
   - **Forecast:** 7-day daily forecast and 24-hour hourly forecast.
5. **Settings:**
   - Toggle: Celsius (°C) / Fahrenheit (°F).
   - Language: French / English.
   - Theme: Auto (based on time) / Manual (Light / Dark).
6. **Persistence & Offline Mode:**
   - Saves preferences and cities locally.
   - Displays last cached data if the network is unavailable with an "Offline" banner.

## UI/UX Requirements
- **Style:** Glassmorphism (blur, transparency, thin borders).
- **Animations:** Lottie for icons, smooth transitions for background changes.
- **Loading:** Progressive loader/skeleton screens on startup.