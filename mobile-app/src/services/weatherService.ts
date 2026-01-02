import axios, { AxiosInstance, AxiosError } from 'axios';
import Constants from 'expo-constants';
import { WeatherResponse, SearchResult } from '@/types/weather';

const BASE_URL = 'https://api.weatherapi.com/v1';
const API_KEY = Constants.expoConfig?.extra?.EXPO_PUBLIC_WEATHER_API_KEY;

// Debug: Verify API key is loaded (DO NOT log actual key value)
console.log('API Key check:', !!API_KEY, 'Length:', API_KEY?.length || 0);

// Custom error class for Weather API errors
export class WeatherAPIError extends Error {
    constructor(
        message: string,
        public code: number,
        public isNetworkError: boolean = false
    ) {
        super(message);
        this.name = 'WeatherAPIError';
    }
}

// Create Axios instance with base configuration
const apiClient: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    params: {
        key: API_KEY,
    },
});

// Response interceptor for error handling
apiClient.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        if (error.response) {
            // Server responded with error status
            const status = error.response.status;

            if (status === 401) {
                throw new WeatherAPIError(
                    'Invalid API key. Please check your EXPO_PUBLIC_WEATHER_API_KEY.',
                    401
                );
            } else if (status === 400) {
                throw new WeatherAPIError(
                    'City not found. Please check the location name.',
                    400
                );
            } else {
                throw new WeatherAPIError(
                    `API error: ${error.message}`,
                    status
                );
            }
        } else if (error.request) {
            // Network error - no response received
            throw new WeatherAPIError(
                'Network error. Please check your internet connection.',
                0,
                true
            );
        } else {
            // Something else happened
            throw new WeatherAPIError(
                `Request failed: ${error.message}`,
                0
            );
        }
    }
);

/**
 * Fetches weather forecast for a given city
 * @param city - City name, coordinates, or location query
 * @param days - Number of days to forecast (1-7)
 * @returns Promise with weather response including current and forecast data
 */
export const getWeatherForecast = async (
    city: string,
    days: number = 7
): Promise<WeatherResponse> => {
    try {
        const response = await apiClient.get<WeatherResponse>('/forecast.json', {
            params: {
                q: city,
                days,
                aqi: 'yes',
                alerts: 'no',
            },
        });

        return response.data;
    } catch (error) {
        if (error instanceof WeatherAPIError) {
            throw error;
        }
        throw new WeatherAPIError('Failed to fetch weather forecast', 0);
    }
};

/**
 * Searches for cities matching the query (autocomplete)
 * @param query - Search query (city name)
 * @returns Promise with array of matching locations
 */
export const searchCities = async (query: string): Promise<SearchResult[]> => {
    try {
        if (!query || query.trim().length < 2) {
            return [];
        }

        const response = await apiClient.get<SearchResult[]>('/search.json', {
            params: {
                q: query.trim(),
            },
        });

        return response.data;
    } catch (error) {
        if (error instanceof WeatherAPIError) {
            throw error;
        }
        throw new WeatherAPIError('Failed to search cities', 0);
    }
};

export default {
    getWeatherForecast,
    searchCities,
};
