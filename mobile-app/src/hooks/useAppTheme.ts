import { useColorScheme } from 'react-native';
import { useSettingsStore } from '@/store/useSettingsStore';
import { Colors, ThemeColors } from '@/styles/colors';

/**
 * Custom hook for accessing the active theme colors
 * Handles 'auto', 'light', and 'dark' preferences
 */
export const useAppTheme = () => {
    const settingsTheme = useSettingsStore((state) => state.theme);
    const systemColorScheme = useColorScheme();

    // Resolve active theme: if auto, use system pref, else use manual setting
    const activeTheme = settingsTheme === 'auto'
        ? (systemColorScheme === 'dark' ? 'dark' : 'light')
        : settingsTheme;

    const colors = Colors[activeTheme as keyof typeof Colors];

    return {
        colors,
        theme: activeTheme,
        isDark: activeTheme === 'dark',
        settingsTheme,
    };
};
