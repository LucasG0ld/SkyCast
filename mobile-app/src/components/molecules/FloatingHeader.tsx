import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Search, Settings } from 'lucide-react-native';
import { BlurView } from 'expo-blur';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppTheme } from '@/hooks/useAppTheme';

/**
 * Floating Header Component (v11)
 * Displays Search and Settings icon buttons at top corners
 * Uses glassmorphism and respects safe area
 */
export const FloatingHeader: React.FC = () => {
    const router = useRouter();
    const insets = useSafeAreaInsets();
    const { colors, spacing, isDark } = useAppTheme();

    const topOffset = Math.max(insets.top, spacing.safeAreaTop);

    return (
        <View style={[styles.container, { top: topOffset }]}>
            {/* Search Button (Top-Left) */}
            <TouchableOpacity
                onPress={() => router.push('/(tabs)/search')}
                activeOpacity={0.7}
            >
                <BlurView
                    intensity={spacing.blurIntensity}
                    tint={isDark ? 'dark' : 'light'}
                    style={[
                        styles.iconButton,
                        {
                            backgroundColor: colors.glass,
                            borderColor: colors.glassBorder,
                            borderRadius: spacing.borderRadiusIcon,
                        },
                    ]}
                >
                    <Search size={20} color={colors.text} />
                </BlurView>
            </TouchableOpacity>

            {/* Settings Button (Top-Right) */}
            <TouchableOpacity
                onPress={() => router.push('/(tabs)/settings')}
                activeOpacity={0.7}
            >
                <BlurView
                    intensity={spacing.blurIntensity}
                    tint={isDark ? 'dark' : 'light'}
                    style={[
                        styles.iconButton,
                        {
                            backgroundColor: colors.glass,
                            borderColor: colors.glassBorder,
                            borderRadius: spacing.borderRadiusIcon,
                        },
                    ]}
                >
                    <Settings size={20} color={colors.text} />
                </BlurView>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 24,
        right: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 20,
    },
    iconButton: {
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        overflow: 'hidden',
    },
});
