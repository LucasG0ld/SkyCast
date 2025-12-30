# API Definitions - WeatherAPI.com

## Config
- **Base URL:** `https://api.weatherapi.com/v1`
- **Key Location:** `.env` file (`EXPO_PUBLIC_WEATHER_API_KEY`)

## Endpoints to use

### 1. Forecast / Current
- **Endpoint:** `/forecast.json`
- **Params:** `q` (city/coords), `days=7`, `aqi=yes`, `alerts=no`.
- **Data to extract:**
  - `current.temp_c`, `current.temp_f`
  - `current.condition.code` (used for background & icons)
  - `current.air_quality`
  - `forecast.forecastday[].day` (Max/Min temp)
  - `forecast.forecastday[0].astro` (Sunrise/Sunset)

### 2. Search / Autocomplete
- **Endpoint:** `/search.json`
- **Params:** `q` (user input).
- **Data to extract:** List of `{name, region, country, lat, lon}`.

## Error Handling
- **401:** Invalid API Key.
- **400:** City not found.
- **Network Error:** Trigger "Offline Mode" logic.