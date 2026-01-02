import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MapPin } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { getWeatherForecast } from '@/services/weatherService';
import { WeatherResponse } from '@/types/weather';
import { getWeatherBackground } from '@/utils/weatherBackgrounds';
import { WeatherDetailsGrid } from '@/components/organisms/WeatherDetailsGrid';
import { RadiantSun } from '@/components/molecules/RadiantSun';
import { WeatherSkeleton } from '@/components/organisms/WeatherSkeleton';
import { useWeatherUnit } from '@/hooks/useWeatherUnit';
import { useNetworkStatus } from '@/hooks/useNetworkStatus';
import { OfflineBanner } from '@/components/atoms/OfflineBanner';
import { useWeatherStore } from '@/store/useWeatherStore';
import { useTranslation } from 'react-i18next';
import { useAppTheme } from '@/hooks/useAppTheme';
import { getWeatherConditionKey } from '@/utils/weatherConditions';

interface CityWeatherTemplateProps {
    cityName: string;
}

/**
 * Template component for displaying city weather with dynamic backgrounds (v11)
 * Features: RadiantSun component, extralight temperature typography, balanced spacing
 */
export const CityWeatherTemplate: React.FC<CityWeatherTemplateProps> = ({
    cityName,
}) => {
    const { t } = useTranslation();
    const { getTemp, getTempUnit } = useWeatherUnit();
    const { isOffline } = useNetworkStatus();
    const { typography, spacing } = useAppTheme();
    const lastUpdated = useWeatherStore((state) => state.lastUpdated);
    const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const data = await getWeatherForecast(cityName, 7);
                setWeatherData(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch weather');
            } finally {
                setIsLoading(false);
            }
        };

        fetchWeather();
    }, [cityName]);

    // Get dynamic background based on current weather
    const background = weatherData
        ? getWeatherBackground(
            weatherData.current.condition.code,
            weatherData.current.is_day
        )
        : { gradient: ['#F3F4F6', '#E5E7EB', '#D1D5DB'] as [string, string, string], opacity: 1 };

    if (isLoading) {
        return (
            <View style={styles.container}>
                <LinearGradient
                    colors={background.gradient}
                    style={StyleSheet.absoluteFillObject}
                />
                <WeatherSkeleton />
            </View>
        );
    }

    if (error || !weatherData) {
        return (
            <View style={styles.container}>
                <LinearGradient
                    colors={background.gradient}
                    style={StyleSheet.absoluteFillObject}
                />
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{t('weather.error')}</Text>
                    <Text style={styles.errorSubtext}>{error || t('weather.tryAgain')}</Text>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {/* Dynamic background */}
            <LinearGradient
                colors={background.gradient}
                style={StyleSheet.absoluteFillObject}
            />

            {/* Offline Banner */}
            <OfflineBanner isOffline={isOffline} />

            {/* Content with fade-in animation */}
            <Animated.View entering={FadeIn.duration(600)} style={styles.animatedContent}>
                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={styles.content}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Header with City Name */}
                    <View style={[styles.header, { marginBottom: spacing.marginSection }]}>
                        <MapPin color="#FFFFFF" size={20} strokeWidth={2} />
                        <Text style={[styles.cityName, {
                            fontSize: typography.sizes.titleSmall,
                            fontWeight: typography.weights.extrabold,
                        }]}>
                            {weatherData.location.name}
                        </Text>
                    </View>

                    {/* Radiant Sun Component */}
                    <View style={[styles.sunContainer, { marginBottom: spacing.marginSection }]}>
                        <RadiantSun
                            isDay={weatherData.current.is_day}
                            size={200}
                        />
                    </View>

                    {/* Temperature and Condition */}
                    <View style={[styles.mainWeather, { marginBottom: spacing.marginSection }]}>
                        <Text style={[styles.temperature, {
                            fontSize: typography.sizes.tempLarge,
                            fontWeight: typography.weights.extralight,
                        }]}>
                            {getTemp(weatherData.current.temp_c)}{getTempUnit()}
                        </Text>
                        <Text style={[styles.condition, {
                            fontSize: typography.sizes.bodySmall,
                            fontWeight: typography.weights.bold,
                            letterSpacing: typography.tracking.widest,
                        }]}>
                            {t(getWeatherConditionKey(weatherData.current.condition.code)).toUpperCase()}
                        </Text>
                    </View>

                    {/* Glassmorphism Weather Details Grid */}
                    <WeatherDetailsGrid
                        windKph={weatherData.current.wind_kph}
                        humidity={weatherData.current.humidity}
                        visibilityKm={weatherData.current.vis_km}
                        pressureMb={weatherData.current.pressure_mb}
                        feelsLikeC={weatherData.current.feelslike_c}
                        uv={weatherData.current.uv}
                    />

                </ScrollView>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    animatedContent: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    content: {
        padding: 20,
        paddingTop: 100,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        justifyContent: 'center',
    },
    cityName: {
        color: '#FFFFFF',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4,
    },
    sunContainer: {
        alignItems: 'center',
    },
    mainWeather: {
        alignItems: 'center',
        gap: 8,
    },
    temperature: {
        color: '#FFFFFF',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 8,
    },
    condition: {
        color: '#FFFFFF',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 4,
        textTransform: 'uppercase',
    },
    errorContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 32,
    },
    errorText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#FFFFFF',
        marginBottom: 8,
        textAlign: 'center',
    },
    errorSubtext: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.8)',
        textAlign: 'center',
    },
});
