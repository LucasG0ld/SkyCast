import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LucideIcon } from 'lucide-react-native';
import { WeatherDetailIcon } from '@/components/atoms/WeatherDetailIcon';
import { useAppTheme } from '@/hooks/useAppTheme';
import { GlassCard } from '@/components/atoms/GlassCard';

interface WeatherDetailCardProps {
    Icon: LucideIcon;
    label: string;
    value: string;
}

/**
 * Glassmorphism card for displaying weather details (v11)
 * Features: GlassCard wrapper, icon + label + value
 */
export const WeatherDetailCard: React.FC<WeatherDetailCardProps> = ({
    Icon,
    label,
    value,
}) => {
    const { colors, typography } = useAppTheme();

    return (
        <GlassCard style={styles.container}>
            <View style={styles.content}>
                <WeatherDetailIcon Icon={Icon} size={18} />
                <View style={styles.textContainer}>
                    <Text style={[styles.label, { color: colors.textSecondary }]}>
                        {label}
                    </Text>
                    <Text
                        style={[
                            styles.value,
                            {
                                color: colors.text,
                                fontSize: typography.sizes.bodyMedium,
                                fontWeight: typography.weights.bold,
                            }
                        ]}
                    >
                        {value}
                    </Text>
                </View>
            </View>
        </GlassCard>
    );
};

const styles = StyleSheet.create({
    container: {
        // GlassCard handles border radius and glassmorphism
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        gap: 12,
    },
    textContainer: {
        flex: 1,
    },
    label: {
        fontSize: 8,
        marginBottom: 4,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        fontWeight: '800',
    },
    value: {
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
    },
});
