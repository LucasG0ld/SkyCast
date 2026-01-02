/**
 * Weather Condition Translation Mapping
 * Maps WeatherAPI condition codes to translation keys
 * Reference: https://www.weatherapi.com/docs/weather_conditions.json
 */

export const weatherConditionMap: Record<number, string> = {
    // Clear/Sunny
    1000: 'conditions.clear',

    // Cloudy
    1003: 'conditions.partlyCloudy',
    1006: 'conditions.cloudy',
    1009: 'conditions.overcast',

    // Mist/Fog
    1030: 'conditions.mist',
    1135: 'conditions.fog',
    1147: 'conditions.freezingFog',

    // Rain
    1063: 'conditions.patchyRainPossible',
    1150: 'conditions.patchyLightDrizzle',
    1153: 'conditions.lightDrizzle',
    1168: 'conditions.freezingDrizzle',
    1171: 'conditions.heavyFreezingDrizzle',
    1180: 'conditions.patchyLightRain',
    1183: 'conditions.lightRain',
    1186: 'conditions.moderateRainAtTimes',
    1189: 'conditions.moderateRain',
    1192: 'conditions.heavyRainAtTimes',
    1195: 'conditions.heavyRain',
    1198: 'conditions.lightFreezingRain',
    1201: 'conditions.moderateOrHeavyFreezingRain',
    1240: 'conditions.lightRainShower',
    1243: 'conditions.moderateOrHeavyRainShower',
    1246: 'conditions.torrentialRainShower',

    // Snow
    1066: 'conditions.patchySnowPossible',
    1114: 'conditions.blowingSnow',
    1117: 'conditions.blizzard',
    1210: 'conditions.patchyLightSnow',
    1213: 'conditions.lightSnow',
    1216: 'conditions.patchyModerateSnow',
    1219: 'conditions.moderateSnow',
    1222: 'conditions.patchyHeavySnow',
    1225: 'conditions.heavySnow',
    1237: 'conditions.icePellets',
    1255: 'conditions.lightSnowShowers',
    1258: 'conditions.moderateOrHeavySnowShowers',
    1261: 'conditions.lightShowerOfIcePellets',
    1264: 'conditions.moderateOrHeavyShowerOfIcePellets',

    // Sleet
    1069: 'conditions.patchySleetPossible',
    1072: 'conditions.patchyFreezingDrizzlePossible',
    1204: 'conditions.lightSleet',
    1207: 'conditions.moderateOrHeavySleet',
    1249: 'conditions.lightSleetShowers',
    1252: 'conditions.moderateOrHeavySleetShowers',

    // Thunder
    1087: 'conditions.thunderyOutbreaksPossible',
    1273: 'conditions.patchyLightRainWithThunder',
    1276: 'conditions.moderateOrHeavyRainWithThunder',
    1279: 'conditions.patchyLightSnowWithThunder',
    1282: 'conditions.moderateOrHeavySnowWithThunder',
};

/**
 * Get translation key for weather condition code
 * Falls back to condition text if code not found
 */
export const getWeatherConditionKey = (code: number): string => {
    return weatherConditionMap[code] || 'conditions.unknown';
};
