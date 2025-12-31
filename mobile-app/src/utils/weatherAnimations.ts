/**
 * Weather Animation Mapping
 * Maps WeatherAPI condition codes to Lottie animation files
 * Handles Day/Night variations for immersive experience
 * 
 * NOTE: Currently using limited animation set with intelligent fallbacks
 * Future: Add more specific animations for each weather type
 */

// Available Lottie animation files
const ANIMATIONS = {
    clearDay: require('@/assets/lottie/clear-day.json'),
    clearNight: require('@/assets/lottie/clear-night.json'),
    cloudyDay: require('@/assets/lottie/cloudy-day.json'),
};

/**
 * Get Lottie animation source based on weather condition and time of day
 * @param weatherCode - WeatherAPI condition code
 * @param isDay - 1 for day, 0 for night
 * @returns Lottie animation source
 */
export const getWeatherAnimation = (weatherCode: number, isDay: number) => {
    // Night animations (isDay === 0)
    if (isDay === 0) {
        // Clear night - animated moon and stars
        if (weatherCode === 1000) {
            return ANIMATIONS.clearNight;
        }

        // All other night conditions use clear-night as fallback
        // (cloudy-night, rainy-night, etc. to be added later)
        return ANIMATIONS.clearNight;
    }

    // Day animations (isDay === 1)

    // Clear day - animated sun
    if (weatherCode === 1000) {
        return ANIMATIONS.clearDay;
    }

    // All cloudy/rainy/snowy/stormy conditions use cloudy-day as fallback
    // (partly-cloudy, rainy-day, snowy-day, thunderstorm, foggy to be added later)
    return ANIMATIONS.cloudyDay;
};

/**
 * Get descriptive name for the animation
 * Useful for accessibility and debugging
 */
export const getAnimationName = (weatherCode: number, isDay: number): string => {
    if (isDay === 0) {
        if (weatherCode === 1000) return 'Clear Night with Moon';
        if ([1063, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243, 1246].includes(weatherCode)) return 'Rainy Night';
        if ([1066, 1114, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258].includes(weatherCode)) return 'Snowy Night';
        if ([1087, 1273, 1276, 1279, 1282].includes(weatherCode)) return 'Thunderstorm at Night';
        return 'Cloudy Night';
    }

    if (weatherCode === 1000) return 'Clear Day with Sun';
    if ([1003, 1006, 1009].includes(weatherCode)) return 'Partly Cloudy';
    if ([1063, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243, 1246].includes(weatherCode)) return 'Rainy Day';
    if ([1066, 1114, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258].includes(weatherCode)) return 'Snowy Day';
    if ([1087, 1273, 1276, 1279, 1282].includes(weatherCode)) return 'Thunderstorm';
    if ([1030, 1135, 1147].includes(weatherCode)) return 'Foggy';
    return 'Cloudy Day';
};
