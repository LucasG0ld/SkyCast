import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withTiming,
    Easing,
} from 'react-native-reanimated';

interface RadiantSunProps {
    isDay: number;
    size?: number;
}

/**
 * RadiantSun Component (v11)
 * Layered sun with core circle and animated glow/pulse effects
 * Adapts colors based on day/night
 */
export const RadiantSun: React.FC<RadiantSunProps> = ({ isDay, size = 200 }) => {
    const scale = useSharedValue(1);

    useEffect(() => {
        // Pulse animation for glow layers
        scale.value = withRepeat(
            withTiming(1.15, {
                duration: 5000,
                easing: Easing.inOut(Easing.ease),
            }),
            -1,
            true
        );
    }, []);

    const animatedGlowStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));

    // Color scheme based on day/night
    const colors = isDay
        ? {
            core: ['#FFFFFF', '#FFDF5D'], // Day: white to yellow
            glow: 'rgba(255, 255, 255, 0.7)',
            shadow: '#FFFFFF',
        }
        : {
            core: ['#E0E7FF', '#818CF8'], // Night: light indigo to indigo
            glow: 'rgba(129, 140, 248, 0.5)',
            shadow: '#818CF8',
        };

    const coreSize = size * 0.4; // 40% of container
    const glowSize = size * 1.15; // 115% of container

    return (
        <View style={[styles.container, { width: size, height: size }]}>
            {/* Animated Glow Layer */}
            <Animated.View
                style={[
                    styles.glowLayer,
                    {
                        width: glowSize,
                        height: glowSize,
                        backgroundColor: colors.glow,
                    },
                    animatedGlowStyle,
                ]}
            />

            {/* Core Circle with Gradient Effect */}
            <View
                style={[
                    styles.core,
                    {
                        width: coreSize,
                        height: coreSize,
                        backgroundColor: colors.core[1],
                        shadowColor: colors.shadow,
                    },
                ]}
            >
                <View
                    style={[
                        StyleSheet.absoluteFill,
                        {
                            backgroundColor: colors.core[0],
                            opacity: 0.6,
                        },
                    ]}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    glowLayer: {
        position: 'absolute',
        borderRadius: 9999,
        opacity: 0.8,
    },
    core: {
        borderRadius: 9999,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 40,
        elevation: 10,
        zIndex: 10,
        overflow: 'hidden',
    },
});
