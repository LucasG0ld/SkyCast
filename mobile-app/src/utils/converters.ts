/**
 * Unit Conversion Utilities
 * Centralized logic for temperature and speed conversions
 */

/**
 * Convert Celsius to Fahrenheit
 * @param celsius - Temperature in Celsius
 * @returns Temperature in Fahrenheit
 */
export const celsiusToFahrenheit = (celsius: number): number => {
    return (celsius * 9) / 5 + 32;
};

/**
 * Convert Fahrenheit to Celsius
 * @param fahrenheit - Temperature in Fahrenheit
 * @returns Temperature in Celsius
 */
export const fahrenheitToCelsius = (fahrenheit: number): number => {
    return ((fahrenheit - 32) * 5) / 9;
};

/**
 * Convert km/h to mph
 * @param kmh - Speed in kilometers per hour
 * @returns Speed in miles per hour
 */
export const kmhToMph = (kmh: number): number => {
    return kmh * 0.621371;
};

/**
 * Convert mph to km/h
 * @param mph - Speed in miles per hour
 * @returns Speed in kilometers per hour
 */
export const mphToKmh = (mph: number): number => {
    return mph / 0.621371;
};

/**
 * Convert kilometers to miles
 * @param km - Distance in kilometers
 * @returns Distance in miles
 */
export const kmToMiles = (km: number): number => {
    return km * 0.621371;
};

/**
 * Convert miles to kilometers
 * @param miles - Distance in miles
 * @returns Distance in kilometers
 */
export const milesToKm = (miles: number): number => {
    return miles / 0.621371;
};
