import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import LottieView from 'lottie-react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { Search } from 'lucide-react-native';

export const WelcomeScreen: React.FC = () => {
    const router = useRouter();
    const opacity = useSharedValue(0);

    useEffect(() => {
        opacity.value = withTiming(1, { duration: 800 });
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
    }));

    return (
        <Animated.View style={[styles.container, animatedStyle]}>
            <View style={styles.content}>
                {/* Lottie Animation */}
                <LottieView
                    source={require('@/assets/animations/weather-welcome.json')}
                    autoPlay
                    loop
                    style={styles.animation}
                />

                {/* Title */}
                <Text style={styles.title}>Welcome to SkyCast</Text>

                {/* Subtitle */}
                <Text style={styles.subtitle}>
                    Start by adding a city to track its weather in real-time
                </Text>

                {/* Action Button */}
                <Pressable
                    style={({ pressed }) => [
                        styles.actionButton,
                        pressed && styles.actionButtonPressed,
                    ]}
                    onPress={() => router.push('/(tabs)/search')}>
                    <Search color="#FFFFFF" size={22} />
                    <Text style={styles.actionButtonText}>Add Your First City</Text>
                </Pressable>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F4F6',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 32,
    },
    animation: {
        width: 280,
        height: 280,
        marginBottom: 24,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#1F2937',
        marginBottom: 16,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: 'rgba(107, 114, 128, 0.9)',
        marginBottom: 40,
        textAlign: 'center',
        lineHeight: 24,
        maxWidth: 320,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        backgroundColor: '#FF6B6B',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 16,
        shadowColor: '#FF6B6B',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
    },
    actionButtonPressed: {
        opacity: 0.85,
        transform: [{ scale: 0.98 }],
    },
    actionButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
    },
});
