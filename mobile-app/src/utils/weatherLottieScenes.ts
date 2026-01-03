/**
 * Weather Lottie Scenes Mapping
 * Maps WeatherAPI condition codes to the 12 Master Lottie Scenes
 * 100% Coverage with Self-Contained Animations
 */

// Import all 12 Master Scene Lottie files
const LOTTIE_SCENES = {
    clearDay: require('@/assets/lottie/clear-day.json'),
    clearNight: require('@/assets/lottie/clear-night.json'),
    partlyCloudyDay: require('@/assets/lottie/partly-cloudy-day.json'),
    partlyCloudyNight: require('@/assets/lottie/partly-cloudy-night.json'),
    overcast: require('@/assets/lottie/overcast.json'),
    fog: require('@/assets/lottie/fog.json'),
    lightRain: require('@/assets/lottie/light-rain.json'),
    heavyRain: require('@/assets/lottie/heavy-rain.json'),
    lightSnow: require('@/assets/lottie/light-snow.json'),
    heavySnow: require('@/assets/lottie/heavy-snow.json'),
    sleet: require('@/assets/lottie/sleet.json'),
    thunderstorm: require('@/assets/lottie/thunderstorm.json'),
};

/**
 * Get Lottie scene for weather condition
 * @param code - WeatherAPI condition code
 * @param isDay - 1 for day, 0 for night
 * @returns Lottie animation source
 */
export const getWeatherLottieScene = (code: number, isDay: number) => {
    // Scene 1 & 2: Clear
    if (code === 1000) {
        return isDay ? LOTTIE_SCENES.clearDay : LOTTIE_SCENES.clearNight;
    }

    // Scene 3 & 4: Partly Cloudy
    if (code === 1003) {
        return isDay ? LOTTIE_SCENES.partlyCloudyDay : LOTTIE_SCENES.partlyCloudyNight;
    }

    // Scene 5: Overcast (no day/night distinction)
    if ([1006, 1009].includes(code)) {
        return LOTTIE_SCENES.overcast;
    }

    // Scene 6: Fog/Mist (no day/night distinction)
    if ([1030, 1135, 1147].includes(code)) {
        return LOTTIE_SCENES.fog;
    }

    // Scene 7: Light Rain (covers 11 codes - 23% of all conditions!)
    if ([
        1063, 1150, 1153, 1168, 1171,
        1180, 1183, 1186, 1189, 1198, 1240
    ].includes(code)) {
        return LOTTIE_SCENES.lightRain;
    }

    // Scene 8: Heavy Rain/Storm
    if ([1192, 1195, 1201, 1243, 1246].includes(code)) {
        return LOTTIE_SCENES.heavyRain;
    }

    // Scene 9: Light Snow
    if ([1066, 1210, 1213, 1216, 1255].includes(code)) {
        return LOTTIE_SCENES.lightSnow;
    }

    // Scene 10: Heavy Snow/Blizzard
    if ([
        1114, 1117, 1219, 1222, 1225,
        1237, 1258, 1261, 1264
    ].includes(code)) {
        return LOTTIE_SCENES.heavySnow;
    }

    // Scene 11: Sleet/Ice
    if ([1069, 1072, 1204, 1207, 1249, 1252].includes(code)) {
        return LOTTIE_SCENES.sleet;
    }

    // Scene 12: Thunderstorm
    if ([1087, 1273, 1276, 1279, 1282].includes(code)) {
        return LOTTIE_SCENES.thunderstorm;
    }

    // Fallback to clear
    return isDay ? LOTTIE_SCENES.clearDay : LOTTIE_SCENES.clearNight;
};
