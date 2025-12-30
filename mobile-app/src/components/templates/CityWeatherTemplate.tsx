import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MapPin } from 'lucide-react-native';

interface CityWeatherTemplateProps {
    cityName: string;
}

/**
 * Template component for displaying city weather
 * This is a placeholder that will be expanded with full weather data display
 */
export const CityWeatherTemplate: React.FC<CityWeatherTemplateProps> = ({
    cityName,
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MapPin color="#3B82F6" size={24} />
                <Text style={styles.cityName}>{cityName}</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.placeholderText}>Weather data for {cityName}</Text>
                <Text style={styles.subText}>
                    Full weather dashboard will be implemented in Sprint 3
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F4F6',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginBottom: 24,
    },
    cityName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1F2937',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
    },
    placeholderText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#6B7280',
        textAlign: 'center',
    },
    subText: {
        fontSize: 14,
        color: '#9CA3AF',
        textAlign: 'center',
    },
});
