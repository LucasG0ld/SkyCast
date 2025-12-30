/**
 * Weather Animation Mapping
 * Maps WeatherAPI condition codes to Lottie animation files
 * Handles Day/Night variations for immersive experience
 */

/**
 * Get Lottie animation source based on weather condition and time of day
 * @param weatherCode - WeatherAPI condition code
 * @param isDay - 1 for day, 0 for night
 * @returns Lottie animation source (require statement or URL)
 */
export const getWeatherAnimation = (weatherCode: number, isDay: number) => {
    // Night animations (isDay === 0)
    if (isDay === 0) {
        // Clear night - animated moon and stars
        if (weatherCode === 1000) {
            return require('@/assets/lottie/clear-night.json');
        }

        // Rainy night
        if ([1063, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243, 1246].includes(weatherCode)) {
            return require('@/assets/lottie/rainy-night.json');
        }

        // Snowy night
        if ([1066, 1114, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258].includes(weatherCode)) {
            return require('@/assets/lottie/snowy-night.json');
        }

        // Thunderstorm night
        if ([1087, 1273, 1276, 1279, 1282].includes(weatherCode)) {
            return require('@/assets/lottie/thunderstorm-night.json');
        }

        // Cloudy night (default)
        return require('@/assets/lottie/cloudy-night.json');
    }

    // Day animations (isDay === 1)

    // Clear day - animated sun
    if (weatherCode === 1000) {
        return require('@/assets/lottie/clear-day.json');
    }

    // Partly cloudy
    if ([1003, 1006, 1009].includes(weatherCode)) {
        return require('@/assets/lottie/partly-cloudy.json');
    }

    // Rainy day
    if ([1063, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243, 1246].includes(weatherCode)) {
        return require('@/assets/lottie/rainy-day.json');
    }

    // Snowy day
    if ([1066, 1114, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258].includes(weatherCode)) {
        return require('@/assets/lottie/snowy-day.json');
    }

    // Thunderstorm
    if ([1087, 1273, 1276, 1279, 1282].includes(weatherCode)) {
        return require('@/assets/lottie/thunderstorm.json');
    }

    // Foggy/Mist
    if ([1030, 1135, 1147].includes(weatherCode)) {
        return require('@/assets/lottie/foggy.json');
    }

    // Default cloudy day
    return require('@/assets/lottie/cloudy-day.json');
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
