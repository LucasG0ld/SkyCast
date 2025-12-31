import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { MapPin, Search } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import { useAppTheme } from '@/hooks/useAppTheme';
import { GlassCard } from '@/components/atoms/GlassCard';

export const WelcomeScreen: React.FC = () => {
    const router = useRouter();
    const { t } = useTranslation();
    const { colors, typography, spacing } = useAppTheme();
    const opacity = useSharedValue(0);

    useEffect(() => {
        opacity.value = withTiming(1, { duration: 800 });
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
    }));

    return (
        <Animated.View style={[styles.container, { backgroundColor: colors.background }, animatedStyle]}>
            <View style={styles.content}>
                {/* Large MapPin Icon */}
                <View style={styles.iconContainer}>
                    <GlassCard borderRadius={spacing.borderRadiusCard}>
                        <View style={styles.iconWrapper}>
                            <MapPin
                                color={colors.text}
                                size={spacing.iconXLarge}
                                strokeWidth={1.1}
                            />
                        </View>
                    </GlassCard>
                </View>

                {/* Title */}
                <Text style={[styles.title, {
                    color: colors.text,
                    fontSize: typography.sizes.titleLarge,
                    fontWeight: typography.weights.bold,
                }]}>
                    {t('welcome.title')}
                </Text>

                {/* Subtitle */}
                <Text style={[styles.subtitle, {
                    color: colors.textSecondary,
                    fontSize: typography.sizes.bodyLarge,
                }]}>
                    {t('welcome.subtitle')}
                </Text>

                {/* Coral Button */}
                <Pressable
                    style={({ pressed }) => [
                        styles.actionButton,
                        spacing.shadowCoralButton,
                        pressed && styles.actionButtonPressed,
                    ]}
                    onPress={() => router.push('/(tabs)/search')}
                >
                    <Search color="#FFFFFF" size={20} />
                    <Text style={[styles.actionButtonText, {
                        fontSize: typography.sizes.bodyLarge,
                        fontWeight: typography.weights.bold,
                    }]}>
                        {t('welcome.button')}
                    </Text>
                </Pressable>

                {/* Geolocation Secondary Action */}
                <Pressable
                    style={styles.secondaryButton}
                    onPress={() => {/* TODO: Implement geolocation */ }}
                >
                    <Text style={[styles.secondaryButtonText, {
                        color: colors.text,
                        fontSize: typography.sizes.bodySmall,
                        fontWeight: typography.weights.bold,
                        letterSpacing: typography.tracking.widest,
                    }]}>
                        ME GÉOLOCALISER
                    </Text>
                </Pressable>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 32,
        gap: 24,
    },
    iconContainer: {
        marginBottom: 16,
    },
    iconWrapper: {
        padding: 40,
    },
    title: {
        textAlign: 'center',
    },
    subtitle: {
        textAlign: 'center',
        lineHeight: 24,
        maxWidth: 320,
        marginBottom: 16,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        backgroundColor: '#FF6B6B',
        paddingVertical: 18,
        paddingHorizontal: 32,
        borderRadius: 16,
    },
    actionButtonPressed: {
        opacity: 0.85,
        transform: [{ scale: 0.98 }],
    },
    actionButtonText: {
        color: '#FFFFFF',
    },
    secondaryButton: {
        paddingVertical: 12,
    },
    secondaryButtonText: {
        textAlign: 'center',
        textTransform: 'uppercase',
    },
});
