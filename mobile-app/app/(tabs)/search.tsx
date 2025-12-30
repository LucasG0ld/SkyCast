import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { SearchBar } from '@/components/molecules/SearchBar';
import { CitySearchResults } from '@/components/organisms/CitySearchResults';

// Placeholder data for demonstration
const PLACEHOLDER_CITIES = [
    { id: 1, name: 'Paris', region: 'Île-de-France', country: 'France' },
    { id: 2, name: 'London', region: 'England', country: 'United Kingdom' },
    { id: 3, name: 'New York', region: 'New York', country: 'United States' },
    { id: 4, name: 'Tokyo', region: 'Tokyo', country: 'Japan' },
    { id: 5, name: 'Sydney', region: 'New South Wales', country: 'Australia' },
];

export default function SearchScreen() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleCityPress = (city: { id: number; name: string; region: string; country: string }) => {
        console.log('Selected city:', city.name);
        // Logic will be added in SKY-010
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchContainer}>
                <SearchBar
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    placeholder="Search for a city..."
                />
            </View>
            <CitySearchResults
                cities={PLACEHOLDER_CITIES}
                onCityPress={handleCityPress}
            />
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
});
