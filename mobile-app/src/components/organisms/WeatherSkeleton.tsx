import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SkeletonElement } from '@/components/atoms/SkeletonElement';

/**
 * Skeleton loading screen for weather dashboard
 * Replicates the structure of the actual weather display
 */
export const WeatherSkeleton: React.FC = () => {
    return (
        <View style={styles.container}>
            {/* Header skeleton */}
            <View style={styles.header}>
                <SkeletonElement width={24} height={24} borderRadius={12} />
                <SkeletonElement width={150} height={28} borderRadius={8} />
            </View>

            {/* Animation placeholder */}
            <View style={styles.animationContainer}>
                <SkeletonElement width={180} height={180} borderRadius={90} />
            </View>

            {/* Temperature and condition skeleton */}
            <View style={styles.mainWeather}>
                <SkeletonElement width={200} height={96} borderRadius={16} />
                <View style={styles.conditionSpacer} />
                <SkeletonElement width={180} height={24} borderRadius={8} />
            </View>

            {/* Weather details grid skeleton */}
            <View style={styles.grid}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <View key={item} style={styles.gridItem}>
                        <SkeletonElement width="100%" height={80} borderRadius={16} />
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 60,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        marginBottom: 40,
    },
    animationContainer: {
        alignItems: 'center',
        marginBottom: 16,
    },
    mainWeather: {
        alignItems: 'center',
        marginBottom: 24,
    },
    conditionSpacer: {
        height: 32,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    },
    gridItem: {
        width: '48%',
    },
});
