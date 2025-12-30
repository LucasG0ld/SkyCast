import { useSettingsStore } from '@/store/useSettingsStore';
import { celsiusToFahrenheit, kmhToMph, kmToMiles } from '@/utils/converters';

/**
 * Custom hook for weather unit formatting and conversion
 * Automatically converts values based on user's unit preference
 */
export const useWeatherUnit = () => {
    const unit = useSettingsStore((state) => state.unit);

    /**
     * Format temperature value with appropriate unit
     * @param valueInCelsius - Temperature in Celsius from API
     * @returns Formatted temperature string (e.g., "25°C" or "77°F")
     */
    const formatTemp = (valueInCelsius: number): string => {
        if (unit === 'Fahrenheit') {
            const fahrenheit = celsiusToFahrenheit(valueInCelsius);
            return `${Math.round(fahrenheit)}°F`;
        }
        return `${Math.round(valueInCelsius)}°C`;
    };

    /**
     * Get temperature value as number (converted to user's unit)
     * @param valueInCelsius - Temperature in Celsius from API
     * @returns Temperature as number in user's preferred unit
     */
    const getTemp = (valueInCelsius: number): number => {
        if (unit === 'Fahrenheit') {
            return Math.round(celsiusToFahrenheit(valueInCelsius));
        }
        return Math.round(valueInCelsius);
    };

    /**
     * Format wind speed with appropriate unit
     * @param valueInKmh - Wind speed in km/h from API
     * @returns Formatted wind speed string (e.g., "15 km/h" or "9 mph")
     */
    const formatWind = (valueInKmh: number): string => {
        if (unit === 'Fahrenheit') {
            const mph = kmhToMph(valueInKmh);
            return `${Math.round(mph)} mph`;
        }
        return `${Math.round(valueInKmh)} km/h`;
    };

    /**
     * Format visibility with appropriate unit
     * @param valueInKm - Visibility in kilometers from API
     * @returns Formatted visibility string (e.g., "10 km" or "6 mi")
     */
    const formatVisibility = (valueInKm: number): string => {
        if (unit === 'Fahrenheit') {
            const miles = kmToMiles(valueInKm);
            return `${Math.round(miles)} mi`;
        }
        return `${Math.round(valueInKm)} km`;
    };

    /**
     * Get temperature unit symbol
     * @returns "°C" or "°F"
     */
    const getTempUnit = (): string => {
        return unit === 'Fahrenheit' ? '°F' : '°C';
    };

    return {
        formatTemp,
        getTemp,
        formatWind,
        formatVisibility,
        getTempUnit,
        unit,
    };
};
