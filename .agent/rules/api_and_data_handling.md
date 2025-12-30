---
trigger: always_on
---

# API & Data Handling

## 1. Service Layer
- **Axios Instance**: Centralize all calls in `services/weatherService.ts`.
- **Environment Variables**: Use `EXPO_PUBLIC_WEATHER_API_KEY`. Never hardcode keys.
- **Error Handling**: Implement global interceptors and local try/catch blocks for every call.

## 2. Geolocation (GPS)
- Manage permissions gracefully via `expo-location`. 
- Always provide a fallback (Search or default city) if GPS is denied.

## 3. Persistence & Cache
- **AsyncStorage**: Use it to store the city list and the last fetched data.
- **Offline Mode**: If `navigator.onLine` is false or API fails, display the "Offline" banner and show cached data.
- **Unit Conversion**: Centralize Celsius to Fahrenheit logic in `utils/converters.ts`.