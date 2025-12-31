/**
 * Color Design System (v11)
 * Defines constants for Light and Dark modes
 * Based on v11 design reference files
 */

export const Colors = {
    light: {
        // Backgrounds
        background: '#f8fafc',           // Slate 50
        backgroundGradient: ['#BAE6FD', '#E0F2FE'] as const,  // Sky gradient
        surface: '#FFFFFF',

        // Text
        text: '#0f172a',                 // Slate 900
        textSecondary: '#475569',        // Slate 600

        // Accent
        accent: '#FF6B6B',               // Coral
        accentDark: '#1e40af',           // Blue 800 (icons)

        // Glassmorphism
        glass: 'rgba(255, 255, 255, 0.65)',
        glassBorder: 'rgba(255, 255, 255, 0.8)',

        // UI Elements
        border: 'rgba(0, 0, 0, 0.1)',
        shadow: '#000000',

        // Legacy (for backwards compat)
        tabBar: '#FFFFFF',
        tabIconDefault: '#9CA3AF',
        tabIconSelected: '#FF6B6B',
        tint: '#FF6B6B',
        cardBackground: 'rgba(255, 255, 255, 0.65)',
    },
    dark: {
        // Backgrounds
        background: '#0f172a',           // Slate 900
        backgroundGradient: ['#4facfe', '#00f2fe'] as const,  // Cyan gradient
        surface: '#1e293b',              // Slate 800

        // Text
        text: '#FFFFFF',
        textSecondary: 'rgba(255, 255, 255, 0.5)',

        // Accent
        accent: '#FF6B6B',               // Coral
        accentDark: '#FF6B6B',           // Same in dark mode

        // Glassmorphism
        glass: 'rgba(255, 255, 255, 0.12)',
        glassBorder: 'rgba(255, 255, 255, 0.18)',

        // UI Elements
        border: 'rgba(255, 255, 255, 0.1)',
        shadow: '#000000',

        // Legacy (for backwards compat)
        tabBar: '#1e293b',
        tabIconDefault: '#4B5563',
        tabIconSelected: '#FF6B6B',
        tint: '#FF6B6B',
        cardBackground: 'rgba(255, 255, 255, 0.12)',
    }
} as const;

export type ThemeColors = typeof Colors.light;

