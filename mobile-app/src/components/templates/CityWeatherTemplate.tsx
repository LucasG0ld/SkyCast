import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MapPin } from 'lucide-react-native';
import { getWeatherForecast } from '@/services/weatherService';
import { WeatherResponse } from '@/types/weather';
import { getWeatherBackground } from '@/utils/weatherBackgrounds';

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
        : { gradient: ['#F3F4F6', '#E5E7EB', '#D1D5DB'], opacity: 1 };

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
            <View style={styles.content}>
                <View style={styles.header}>
                    <MapPin color="#FFFFFF" size={24} />
                    <Text style={styles.cityName}>{weatherData.location.name}</Text>
                </View>

                <View style={styles.mainWeather}>
                    <Text style={styles.temperature}>
                        {Math.round(weatherData.current.temp_c)}°
                    </Text>
                    <Text style={styles.condition}>
                        {weatherData.current.condition.text}
                    </Text>
                </View>

                <View style={styles.details}>
                    <Text style={styles.detailText}>
                        Feels like {Math.round(weatherData.current.feelslike_c)}°
                    </Text>
                    <Text style={styles.detailText}>
                        Humidity: {weatherData.current.humidity}%
                    </Text>
                    <Text style={styles.detailText}>
                        Wind: {Math.round(weatherData.current.wind_kph)} km/h
                    </Text>
                </View>

                <Text style={styles.placeholder}>
                    Full weather dashboard will be implemented in SKY-016
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
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
    mainWeather: {
        alignItems: 'center',
        marginBottom: 32,
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
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 4,
    },
    details: {
        gap: 8,
        marginBottom: 32,
    },
    detailText: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.9)',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
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
