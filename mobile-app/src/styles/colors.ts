/**
 * Color Design System
 * Defines constants for Light and Dark modes
 */

export const Colors = {
    light: {
        background: '#F3F4F6',
        surface: '#FFFFFF',
        text: '#1F2937',
        textSecondary: '#6B7280',
        accent: '#FF6B6B', // Coral
        cardBackground: 'rgba(255, 255, 255, 0.8)',
        border: 'rgba(0, 0, 0, 0.1)',
        tabBar: '#FFFFFF',
        tabIconDefault: '#9CA3AF',
        tabIconSelected: '#FF6B6B',
        tint: '#FF6B6B',
        shadow: '#000000',
    },
    dark: {
        background: '#111827',
        surface: '#1F2937',
        text: '#F9FAFB',
        textSecondary: '#9CA3AF',
        accent: '#FF6B6B', // Coral
        cardBackground: 'rgba(31, 41, 55, 0.8)',
        border: 'rgba(255, 255, 255, 0.1)',
        tabBar: '#1F2937',
        tabIconDefault: '#4B5563',
        tabIconSelected: '#FF6B6B',
        tint: '#FF6B6B',
        shadow: '#000000',
    }
} as const;

export type ThemeColors = typeof Colors.light;
