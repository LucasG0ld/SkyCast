/**
 * Typography Design System (v11)
 * Defines font weights and sizes for consistent UI
 */

export const Typography = {
    // Font Weights
    weights: {
        extralight: '200' as const,
        light: '300' as const,
        regular: '400' as const,
        medium: '500' as const,
        semibold: '600' as const,
        bold: '700' as const,
        extrabold: '800' as const,
    },

    // Font Sizes (in pixels)
    sizes: {
        // Temperature display
        tempLarge: 96,          // text-8xl
        tempMedium: 72,         // text-7xl
        tempSmall: 48,          // text-5xl
        tempCard: 30,           // text-3xl for city cards

        // Titles
        titleLarge: 28,         // text-2xl+
        titleMedium: 24,        // text-2xl
        titleSmall: 20,         // text-xl

        // Body
        bodyLarge: 16,          // text-base
        bodyMedium: 14,         // text-sm
        bodySmall: 12,          // text-xs

        // Labels & Captions
        label: 10,              // text-[10px]
        caption: 9,             // text-[9px]
        micro: 8,               // text-[8px]
    },

    // Letter Spacing
    tracking: {
        normal: 0,
        wide: 0.5,              // tracking-wide
        wider: 1,               // tracking-wider
        widest: 4,              // tracking-widest (0.5em approx)
    },

    // Line Heights
    lineHeight: {
        tight: 1.1,
        normal: 1.4,
        relaxed: 1.6,
    },
} as const;

export type TypographyScale = typeof Typography;
