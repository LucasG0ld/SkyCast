import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { LucideIcon } from 'lucide-react-native';
import { WeatherDetailIcon } from '@/components/atoms/WeatherDetailIcon';
import { useAppTheme } from '@/hooks/useAppTheme';

interface WeatherDetailCardProps {
    Icon: LucideIcon;
    label: string;
    value: string;
}

/**
 * Glassmorphism card for displaying weather details
 * Features: BlurView, semi-transparent border, icon + label + value
 */
export const WeatherDetailCard: React.FC<WeatherDetailCardProps> = ({
    Icon,
    label,
    value,
}) => {
    const { isDark } = useAppTheme();

    return (
        <View style={styles.container}>
            <BlurView intensity={25} tint={isDark ? 'dark' : 'light'} style={styles.blur}>
                <View style={[styles.content]}>
                    <WeatherDetailIcon Icon={Icon} size={24} />
                    <View style={styles.textContainer}>
                        <Text style={styles.label}>{label}</Text>
                        <Text style={styles.value}>{value}</Text>
                    </View>
                </View>
            </BlurView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 16,
        overflow: 'hidden',
        borderWidth: 0.5,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    blur: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
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
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.8)',
        marginBottom: 4,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    value: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FFFFFF',
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
    },
});
