import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WeatherResponse } from '@/types/weather';

interface WeatherState {
    // State
    weatherData: WeatherResponse | null;
    savedCities: string[];
    isLoading: boolean;
    error: string | null;
    lastUpdated: number | null;
    isHydrated: boolean;

    // Actions
    setWeatherData: (data: WeatherResponse | null) => void;
    addCity: (city: string) => void;
    removeCity: (city: string) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    clearError: () => void;
    setHydrated: () => void;
}

export const useWeatherStore = create<WeatherState>()(
    persist(
        (set) => ({
            // Initial state
            weatherData: null,
            savedCities: [],
            isLoading: false,
            error: null,
            lastUpdated: null,
            isHydrated: false,

            // Actions
            setWeatherData: (data) =>
                set({
                    weatherData: data,
                    lastUpdated: data ? Date.now() : null,
                    error: null,
                }),

            addCity: (city) =>
                set((state) => ({
                    savedCities: state.savedCities.includes(city)
                        ? state.savedCities
                        : [...state.savedCities, city],
                })),

            removeCity: (city) =>
                set((state) => ({
                    savedCities: state.savedCities.filter((c) => c !== city),
                })),

            setLoading: (loading) => set({ isLoading: loading }),

            setError: (error) => set({ error, isLoading: false }),

            clearError: () => set({ error: null }),

            setHydrated: () => set({ isHydrated: true }),
        }),
        {
            name: 'skycast-weather-cache',
            storage: createJSONStorage(() => AsyncStorage),
            onRehydrateStorage: () => (state) => {
                state?.setHydrated();
            },
        }
    )
);
