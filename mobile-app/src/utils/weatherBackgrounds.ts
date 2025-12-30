/**
 * Dynamic Background Engine
 * Maps WeatherAPI condition codes to background styles
 * Handles Day/Night variations and specific weather conditions
 */

export interface BackgroundStyle {
    gradient: [string, string, string];
    opacity: number;
}

/**
 * Get background gradient based on weather condition and time of day
 * @param weatherCode - WeatherAPI condition code
 * @param isDay - 1 for day, 0 for night
 * @returns Background style with gradient colors
 */
export const getWeatherBackground = (
    weatherCode: number,
    isDay: number
): BackgroundStyle => {
    // Night backgrounds (isDay === 0)
    if (isDay === 0) {
        // Clear night
        if (weatherCode === 1000) {
            return {
                gradient: ['#0F2027', '#203A43', '#2C5364'],
                opacity: 1,
            };
        }

        // Rainy night
        if ([1063, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243, 1246].includes(weatherCode)) {
            return {
                gradient: ['#1a1a2e', '#16213e', '#0f3460'],
                opacity: 1,
            };
        }

        // Snowy night
        if ([1066, 1114, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258].includes(weatherCode)) {
            return {
                gradient: ['#243B55', '#141E30', '#1e3c72'],
                opacity: 1,
            };
        }

        // Stormy night
        if ([1087, 1273, 1276, 1279, 1282].includes(weatherCode)) {
            return {
                gradient: ['#0a0a0a', '#1a1a1a', '#2d2d2d'],
                opacity: 1,
            };
        }

        // Cloudy night (default)
        return {
            gradient: ['#2c3e50', '#34495e', '#4a5f7f'],
            opacity: 1,
        };
    }

    // Day backgrounds (isDay === 1)

    // Clear day
    if (weatherCode === 1000) {
        return {
            gradient: ['#56CCF2', '#2F80ED', '#1E88E5'],
            opacity: 1,
        };
    }

    // Partly cloudy
    if ([1003, 1006, 1009].includes(weatherCode)) {
        return {
            gradient: ['#89B5D6', '#5A9FD4', '#3B82C4'],
            opacity: 1,
        };
    }

    // Rainy day
    if ([1063, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243, 1246].includes(weatherCode)) {
        return {
            gradient: ['#536976', '#657786', '#778899'],
            opacity: 1,
        };
    }

    // Snowy day
    if ([1066, 1114, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258].includes(weatherCode)) {
        return {
            gradient: ['#E0EAFC', '#CFDEF3', '#B4C6E7'],
            opacity: 1,
        };
    }

    // Thunderstorm
    if ([1087, 1273, 1276, 1279, 1282].includes(weatherCode)) {
        return {
            gradient: ['#434343', '#2b2b2b', '#1a1a1a'],
            opacity: 1,
        };
    }

    // Foggy/Mist
    if ([1030, 1135, 1147].includes(weatherCode)) {
        return {
            gradient: ['#a8b8c2', '#8d9db6', '#7a8ba0'],
            opacity: 1,
        };
    }

    // Default cloudy day
    return {
        gradient: ['#74b9ff', '#5a9fd4', '#3b82c4'],
        opacity: 1,
    };
};

/**
 * Get a descriptive name for the background type
 * Useful for debugging and UI labels
 */
export const getBackgroundName = (weatherCode: number, isDay: number): string => {
    if (isDay === 0) {
        if (weatherCode === 1000) return 'Clear Night';
        if ([1063, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243, 1246].includes(weatherCode)) return 'Rainy Night';
        if ([1066, 1114, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258].includes(weatherCode)) return 'Snowy Night';
        if ([1087, 1273, 1276, 1279, 1282].includes(weatherCode)) return 'Stormy Night';
        return 'Cloudy Night';
    }

    if (weatherCode === 1000) return 'Clear Day';
    if ([1003, 1006, 1009].includes(weatherCode)) return 'Partly Cloudy';
    if ([1063, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243, 1246].includes(weatherCode)) return 'Rainy Day';
    if ([1066, 1114, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258].includes(weatherCode)) return 'Snowy Day';
    if ([1087, 1273, 1276, 1279, 1282].includes(weatherCode)) return 'Thunderstorm';
    if ([1030, 1135, 1147].includes(weatherCode)) return 'Foggy';
    return 'Cloudy Day';
};
