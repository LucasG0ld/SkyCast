import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Wind, Droplets, Eye, Gauge, Thermometer, Sun } from 'lucide-react-native';
import { WeatherDetailCard } from '@/components/molecules/WeatherDetailCard';
import { useWeatherUnit } from '@/hooks/useWeatherUnit';

interface WeatherDetail {
    icon: typeof Wind;
    label: string;
    value: string;
}

interface WeatherDetailsGridProps {
    windKph: number;
    humidity: number;
    visibilityKm: number;
    pressureMb: number;
    feelsLikeC: number;
    uv: number;
}

/**
 * Grid organism displaying weather details in 2-column layout
 * Uses glassmorphism cards for premium aesthetic
 */
export const WeatherDetailsGrid: React.FC<WeatherDetailsGridProps> = ({
    windKph,
    humidity,
    visibilityKm,
    pressureMb,
    feelsLikeC,
    uv,
}) => {
    const { formatWind, formatVisibility, formatTemp } = useWeatherUnit();
    const details: WeatherDetail[] = [
        {
            icon: Wind,
            label: 'Wind',
            value: formatWind(windKph),
        },
        {
            icon: Droplets,
            label: 'Humidity',
            value: `${humidity}%`,
        },
        {
            icon: Eye,
            label: 'Visibility',
            value: formatVisibility(visibilityKm),
        },
        {
            icon: Gauge,
            label: 'Pressure',
            value: `${Math.round(pressureMb)} mb`,
        },
        {
            icon: Thermometer,
            label: 'Feels Like',
            value: formatTemp(feelsLikeC),
        },
        {
            icon: Sun,
            label: 'UV Index',
            value: `${uv}`,
        },
    ];

    return (
        <View style={styles.grid}>
            {details.map((detail, index) => (
                <View key={index} style={styles.gridItem}>
                    <WeatherDetailCard
                        Icon={detail.icon}
                        label={detail.label}
                        value={detail.value}
                    />
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    },
    gridItem: {
        width: '48%',
    },
});
