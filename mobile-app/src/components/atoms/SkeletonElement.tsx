import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withTiming,
    interpolate,
} from 'react-native-reanimated';

interface SkeletonElementProps {
    width: number | string;
    height: number;
    borderRadius?: number;
    style?: object;
}

/**
 * Atom component for skeleton loading elements with shimmer animation
 * Uses react-native-reanimated for smooth performance
 */
export const SkeletonElement: React.FC<SkeletonElementProps> = ({
    width,
    height,
    borderRadius = 12,
    style,
}) => {
    const shimmer = useSharedValue(0);

    useEffect(() => {
        shimmer.value = withRepeat(
            withTiming(1, { duration: 1500 }),
            -1,
            false
        );
    }, []);

    const animatedStyle = useAnimatedStyle(() => {
        const opacity = interpolate(
            shimmer.value,
            [0, 0.5, 1],
            [0.3, 0.5, 0.3]
        );

        return {
            opacity,
        };
    });

    return (
        <View
            style={[
                styles.container,
                {
                    width,
                    height,
                    borderRadius,
                },
                style,
            ]}
        >
            <Animated.View style={[styles.shimmer, animatedStyle]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 0.5,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        overflow: 'hidden',
    },
    shimmer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
});
