import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { getWeatherAnimation, getAnimationName } from '@/utils/weatherAnimations';

interface WeatherLottieIconProps {
    weatherCode: number;
    isDay: number;
    size?: number;
}

/**
 * Atom component for animated weather icons using Lottie
 * Automatically selects the correct animation based on weather code and time of day
 */
export const WeatherLottieIcon: React.FC<WeatherLottieIconProps> = ({
    weatherCode,
    isDay,
    size = 200,
}) => {
    const animationSource = getWeatherAnimation(weatherCode, isDay);
    const animationName = getAnimationName(weatherCode, isDay);

    return (
        <View style={[styles.container, { width: size, height: size }]}>
            <LottieView
                source={animationSource}
                autoPlay
                loop
                style={styles.animation}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    animation: {
        width: '100%',
        height: '100%',
    },
});
