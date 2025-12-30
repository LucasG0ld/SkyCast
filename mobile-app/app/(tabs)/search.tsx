import React from 'react';
import { View, StyleSheet, SafeAreaView, ActivityIndicator, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { SearchBar } from '@/components/molecules/SearchBar';
import { CitySearchResults } from '@/components/organisms/CitySearchResults';
import { useSearch } from '@/hooks/useSearch';
import { useWeatherStore } from '@/store/useWeatherStore';

export default function SearchScreen() {
    const router = useRouter();
    const { query, setQuery, results, isLoading, error } = useSearch();
    const addCity = useWeatherStore((state) => state.addCity);

    const handleCityPress = (city: { id: number; name: string; region: string; country: string }) => {
        // Add city to saved cities in store
        addCity(city.name);

        // Navigate to main weather screen
        router.push('/(tabs)/');
    };

    // Transform SearchResult to the format expected by CitySearchResults
    const transformedResults = results.map((result) => ({
        id: result.id,
        name: result.name,
        region: result.region,
        country: result.country,
    }));

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchContainer}>
                <SearchBar
                    value={query}
                    onChangeText={setQuery}
                    placeholder="Search for a city..."
                />
            </View>

            {error && (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{error}</Text>
                </View>
            )}

            {isLoading && (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#3B82F6" />
                    <Text style={styles.loadingText}>Searching...</Text>
                </View>
            )}

            {!isLoading && !error && (
                <CitySearchResults
                    cities={transformedResults}
                    onCityPress={handleCityPress}
                />
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F4F6',
    },
    searchContainer: {
        padding: 16,
        paddingTop: 8,
    },
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
    },
    loadingText: {
        fontSize: 16,
        color: '#6B7280',
    },
    errorContainer: {
        padding: 16,
        backgroundColor: '#FEE2E2',
        marginHorizontal: 16,
        marginTop: 8,
        borderRadius: 8,
    },
    errorText: {
        color: '#DC2626',
        fontSize: 14,
    },
});
