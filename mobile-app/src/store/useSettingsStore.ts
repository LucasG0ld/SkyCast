import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '@/i18n';

type Unit = 'Celsius' | 'Fahrenheit';
type Language = 'fr' | 'en';
type Theme = 'auto' | 'light' | 'dark';

interface SettingsState {
    // State
    unit: Unit;
    language: Language;
    theme: Theme;
    searchHistory: string[];
    isHydrated: boolean;

    // Actions
    setUnit: (unit: Unit) => void;
    setLanguage: (language: Language) => void;
    setTheme: (theme: Theme) => void;
    addToSearchHistory: (city: string) => void;
    clearSearchHistory: () => void;
    setHydrated: () => void;
}

export const useSettingsStore = create<SettingsState>()(
    persist(
        (set) => ({
            // Initial state
            unit: 'Celsius',
            language: 'en',
            theme: 'auto',
            searchHistory: [],
            isHydrated: false,

            // Actions
            setUnit: (unit) => set({ unit }),
            setLanguage: (language) => {
                i18n.changeLanguage(language);
                set({ language });
            },
            setTheme: (theme) => set({ theme }),
            addToSearchHistory: (city) => set((state) => ({
                searchHistory: [city, ...state.searchHistory.filter(c => c !== city)].slice(0, 10)
            })),
            clearSearchHistory: () => set({ searchHistory: [] }),
            setHydrated: () => set({ isHydrated: true }),
        }),
        {
            name: 'skycast-settings',
            storage: createJSONStorage(() => AsyncStorage),
            onRehydrateStorage: () => (state) => {
                state?.setHydrated();
            },
        }
    )
);
