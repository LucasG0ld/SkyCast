import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MapPin } from 'lucide-react-native';
import { getWeatherForecast } from '@/services/weatherService';
import { WeatherResponse } from '@/types/weather';
import { getWeatherBackground } from '@/utils/weatherBackgrounds';
import { WeatherDetailsGrid } from '@/components/organisms/WeatherDetailsGrid';
import { WeatherLottieIcon } from '@/components/atoms/WeatherLottieIcon';

interface CityWeatherTemplateProps {
    cityName: string;
}

/**
 * Template component for displaying city weather with dynamic backgrounds
 * Fetches weather data and applies immersive backgrounds based on conditions
 */
export const CityWeatherTemplate: React.FC<CityWeatherTemplateProps> = ({
    cityName,
}) => {
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
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#FFFFFF" />
                    <Text style={styles.loadingText}>Loading weather...</Text>
                </View>
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
                    <Text style={styles.errorText}>Unable to load weather</Text>
                    <Text style={styles.errorSubtext}>{error || 'Please try again'}</Text>
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

            {/* Content */}
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.header}>
                    <MapPin color="#FFFFFF" size={24} />
                    <Text style={styles.cityName}>{weatherData.location.name}</Text>
                </View>

                {/* Animated Weather Icon */}
                <View style={styles.animationContainer}>
                    <WeatherLottieIcon
                        weatherCode={weatherData.current.condition.code}
                        isDay={weatherData.current.is_day}
                        size={180}
                    />
                </View>

                <View style={styles.mainWeather}>
                    <Text style={styles.temperature}>
                        {Math.round(weatherData.current.temp_c)}°
                    </Text>
                    <Text style={styles.condition}>
                        {weatherData.current.condition.text}
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

                <Text style={styles.placeholder}>
                    Forecast cards will be implemented in SKY-017
                </Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    content: {
        padding: 20,
        paddingTop: 60,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginBottom: 40,
    },
    cityName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4,
    },
    animationContainer: {
        alignItems: 'center',
        marginBottom: 16,
    },
    mainWeather: {
        alignItems: 'center',
        marginBottom: 24,
    },
    temperature: {
        fontSize: 96,
        fontWeight: '200',
        color: '#FFFFFF',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 8,
    },
    condition: {
        fontSize: 24,
        color: '#FFFFFF',
        marginBottom: 32,
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 4,
    },
    placeholder: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.7)',
        textAlign: 'center',
        fontStyle: 'italic',
    },
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
    },
    loadingText: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: '500',
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
