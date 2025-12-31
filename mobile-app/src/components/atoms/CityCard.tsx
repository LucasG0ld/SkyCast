import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { LucideIcon, MapPin } from 'lucide-react-native';
import { GlassCard } from './GlassCard';
import { useAppTheme } from '@/hooks/useAppTheme';

interface CityCardProps {
    name: string;
    condition?: string;
    temp?: string;
    isSelected?: boolean;
    onPress?: () => void;
}

/**
 * CityCard Component (v11)
 * Displays city name, condition, and temperature in a GlassCard
 * Features: Left side info, Right side extralight temperature
 */
export const CityCard: React.FC<CityCardProps> = ({
    name,
    condition,
    temp,
    isSelected,
    onPress,
}) => {
    const { colors, typography, spacing } = useAppTheme();

    return (
        <Pressable onPress={onPress} style={({ pressed }) => [
            styles.pressable,
            pressed && styles.pressed,
        ]}>
            <GlassCard
                style={[
                    styles.container,
                    isSelected && { borderColor: colors.accent, borderWidth: 1.5 }
                ]}
            >
                <View style={styles.content}>
                    {/* Left Side: Icon + City + Condition */}
                    <View style={styles.leftContent}>
                        <MapPin color={colors.accent} size={20} />
                        <View style={styles.textContainer}>
                            <Text style={[styles.cityName, { color: colors.text, fontSize: typography.sizes.bodyLarge, fontWeight: typography.weights.bold }]}>
                                {name}
                            </Text>
                            {condition && (
                                <Text style={[styles.condition, { color: colors.textSecondary, fontSize: typography.sizes.bodySmall }]}>
                                    {condition}
                                </Text>
                            )}
                        </View>
                    </View>

                    {/* Right Side: Temperature */}
                    {temp && (
                        <Text style={[styles.temperature, { color: colors.text, fontSize: typography.sizes.tempCard, fontWeight: typography.weights.extralight }]}>
                            {temp}
                        </Text>
                    )}
                </View>
            </GlassCard>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    pressable: {
        width: '100%',
    },
    container: {
        marginBottom: 12,
        marginHorizontal: 16,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
    },
    leftContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        flex: 1,
    },
    textContainer: {
        flex: 1,
    },
    cityName: {
        marginBottom: 2,
    },
    condition: {
        opacity: 0.8,
    },
    temperature: {
        marginLeft: 12,
    },
    pressed: {
        opacity: 0.85,
        transform: [{ scale: 0.98 }],
    },
});

