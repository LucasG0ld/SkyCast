import { useColorScheme } from 'react-native';
import { useSettingsStore } from '@/store/useSettingsStore';
import { Colors, ThemeColors } from '@/styles/colors';
import { Typography } from '@/styles/typography';
import { Spacing } from '@/styles/spacing';

/**
 * Custom hook for accessing the complete design token system
 * Returns colors, typography, and spacing based on active theme
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
        // Colors (theme-aware)
        colors,

        // Typography (static)
        typography: Typography,

        // Spacing (static)
        spacing: Spacing,

        // Theme state
        theme: activeTheme,
        isDark: activeTheme === 'dark',
        settingsTheme,
    };
};

// Re-export types for convenience
export type { ThemeColors };
