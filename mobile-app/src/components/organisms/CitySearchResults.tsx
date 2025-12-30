import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { CityCard } from '@/components/atoms/CityCard';

interface City {
    id: number;
    name: string;
    region: string;
    country: string;
}

interface CitySearchResultsProps {
    cities: City[];
    onCityPress: (city: City) => void;
}

export const CitySearchResults: React.FC<CitySearchResultsProps> = ({
    cities,
    onCityPress,
}) => {
    if (cities.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>No cities found</Text>
                <Text style={styles.emptySubtext}>
                    Try searching for a different location
                </Text>
            </View>
        );
    }

    return (
        <FlashList
            data={cities}
            renderItem={({ item }) => (
                <CityCard
                    name={item.name}
                    region={item.region}
                    country={item.country}
                    onPress={() => onCityPress(item)}
                />
            )}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.listContent}
        />
    );
};

const styles = StyleSheet.create({
    listContent: {
        paddingVertical: 8,
    },
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 32,
    },
    emptyText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#6B7280',
        marginBottom: 8,
    },
    emptySubtext: {
        fontSize: 14,
        color: '#9CA3AF',
        textAlign: 'center',
    },
});
