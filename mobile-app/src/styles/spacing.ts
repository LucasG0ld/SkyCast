/**
 * Spacing Design System (v11)
 * Defines layout constants for consistent UI
 */

export const Spacing = {
    // Safe Areas
    safeAreaTop: 48,            // mt-12 (status bar clearance)
    safeAreaBottom: 34,         // Home indicator clearance

    // Padding
    screenPadding: 24,          // p-6
    cardPadding: 16,            // p-4
    cardPaddingLarge: 20,       // p-5

    // Gaps
    gapSmall: 8,                // gap-2
    gapMedium: 12,              // gap-3
    gapLarge: 16,               // gap-4
    gapXLarge: 24,              // gap-6

    // Margins
    marginSection: 40,          // mb-10
    marginCard: 16,             // mb-4

    // Border Radius
    borderRadiusCard: 24,       // rounded-3xl
    borderRadiusButton: 16,     // rounded-2xl
    borderRadiusIcon: 14,       // icon-btn
    borderRadiusFull: 9999,     // rounded-full

    // Icon Sizes
    iconButtonSize: 44,         // 44x44px minimum touch target
    iconSmall: 16,
    iconMedium: 20,
    iconLarge: 24,
    iconXLarge: 110,            // Welcome screen icon

    // Blur
    blurIntensity: 25,          // backdrop-filter blur

    // Shadows
    shadowCoralButton: {
        shadowColor: '#FF6B6B',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.4,
        shadowRadius: 20,
        elevation: 8,
    },
} as const;

export type SpacingScale = typeof Spacing;
