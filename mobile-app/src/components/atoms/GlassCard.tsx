import React, { ReactNode } from 'react';
import { StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { BlurView } from 'expo-blur';
import { useAppTheme } from '@/hooks/useAppTheme';

interface GlassCardProps {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    borderRadius?: number;
}

/**
 * GlassCard Component (v11)
 * Unified glassmorphism card with theme-aware styling
 * Uses BlurView with dynamic opacity based on theme
 */
export const GlassCard: React.FC<GlassCardProps> = ({
    children,
    style,
    borderRadius
}) => {
    const { colors, spacing, isDark } = useAppTheme();

    const radius = borderRadius ?? spacing.borderRadiusCard;

    return (
        <BlurView
            intensity={spacing.blurIntensity}
            tint={isDark ? 'dark' : 'light'}
            style={[
                styles.container,
                {
                    backgroundColor: colors.glass,
                    borderColor: colors.glassBorder,
                    borderRadius: radius,
                },
                style,
            ]}
        >
            {children}
        </BlurView>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        overflow: 'hidden',
    },
});
