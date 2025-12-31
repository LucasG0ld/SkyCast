import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, Plus, History, Search as SearchIcon, X } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchBar } from '@/components/molecules/SearchBar';
import { CityCard } from '@/components/atoms/CityCard';
import { GlassCard } from '@/components/atoms/GlassCard';
import { useSearch } from '@/hooks/useSearch';
import { useWeatherStore } from '@/store/useWeatherStore';
import { useSettingsStore } from '@/store/useSettingsStore';
import { useAppTheme } from '@/hooks/useAppTheme';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

export default function SearchScreen() {
    const router = useRouter();
    const insets = useSafeAreaInsets();
    const { colors, typography, spacing } = useAppTheme();

    const { query, setQuery, results, isLoading, error } = useSearch();
    const { savedCities, addCity, removeCity } = useWeatherStore();
    const { searchHistory, addToSearchHistory, clearSearchHistory } = useSettingsStore();

    const [isSearchFocused, setIsSearchFocused] = useState(false);

    const handleCityPress = (cityName: string) => {
        addToSearchHistory(cityName);
        addCity(cityName);
        router.push('/(tabs)');
    };

    const renderContent = () => {
        // State 1: API Results
        if (query.length > 0) {
            if (isLoading) return <Text style={[styles.statusText, { color: colors.textSecondary }]}>Searching...</Text>;
            if (error) return <Text style={[styles.statusText, { color: '#EF4444' }]}>{error}</Text>;

            return (
                <View style={styles.listContainer}>
                    <Text style={[styles.sectionTitle, { color: colors.text, fontSize: typography.sizes.bodySmall, fontWeight: typography.weights.bold, letterSpacing: typography.tracking.widest }]}>
                        RESULTS
                    </Text>
                    {results.map((city) => (
                        <CityCard
                            key={city.id}
                            name={city.name}
                            condition={city.region}
                            onPress={() => handleCityPress(city.name)}
                        />
                    ))}
                </View>
            );
        }

        // State 2: Search History (when focused and empty)
        if (isSearchFocused && searchHistory.length > 0) {
            return (
                <View style={styles.listContainer}>
                    <View style={styles.sectionHeader}>
                        <Text style={[styles.sectionTitle, { color: colors.text, fontSize: typography.sizes.bodySmall, fontWeight: typography.weights.bold, letterSpacing: typography.tracking.widest }]}>
                            RECENT SEARCHES
                        </Text>
                        <Pressable onPress={clearSearchHistory}>
                            <Text style={{ color: colors.accent, fontSize: 12 }}>Clear</Text>
                        </Pressable>
                    </View>
                    {searchHistory.map((city, index) => (
                        <Pressable
                            key={`hist-${index}`}
                            style={styles.historyItem}
                            onPress={() => handleCityPress(city)}
                        >
                            <History size={16} color={colors.textSecondary} />
                            <Text style={[styles.historyText, { color: colors.text, fontSize: typography.sizes.bodyMedium }]}>
                                {city}
                            </Text>
                        </Pressable>
                    ))}
                </View>
            );
        }

        // State 3: My Cities List (Default)
        return (
            <View style={styles.listContainer}>
                <Text style={[styles.sectionTitle, { color: colors.text, fontSize: typography.sizes.bodySmall, fontWeight: typography.weights.bold, letterSpacing: typography.tracking.widest }]}>
                    MY CITIES
                </Text>
                {savedCities.length > 0 ? (
                    savedCities.map((city, index) => (
                        <CityCard
                            key={`saved-${index}`}
                            name={city}
                            onPress={() => {
                                // In a real app, we'd fetch current weather for this city to show condition/temp
                                router.push('/(tabs)');
                            }}
                        />
                    ))
                ) : (
                    <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
                        No cities saved yet. Start searching!
                    </Text>
                )}
            </View>
        );
    };

    return (
        <View style={[styles.container, { backgroundColor: colors.background, paddingTop: Math.max(insets.top, spacing.safeAreaTop) }]}>
            {/* Header: Back Button + Search Bar */}
            <View style={styles.header}>
                <Pressable
                    onPress={() => router.back()}
                    style={({ pressed }) => [
                        styles.backButton,
                        { borderRadius: spacing.borderRadiusIcon, backgroundColor: colors.glass },
                        pressed && { opacity: 0.7 }
                    ]}
                >
                    <ArrowLeft size={20} color={colors.text} />
                </Pressable>

                <View style={styles.searchWrapper}>
                    <SearchBar
                        value={query}
                        onChangeText={setQuery}
                        placeholder="Search for a city..."
                        onFocus={() => setIsSearchFocused(true)}
                        onBlur={() => setIsSearchFocused(false)}
                    />
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Animated.View entering={FadeIn} exiting={FadeOut}>
                    {renderContent()}
                </Animated.View>
            </ScrollView>

            {/* Floating Coral Plus Button */}
            {!isSearchFocused && query.length === 0 && (
                <Pressable
                    style={({ pressed }) => [
                        styles.fab,
                        spacing.shadowCoralButton,
                        pressed && { transform: [{ scale: 0.95 }] }
                    ]}
                    onPress={() => setIsSearchFocused(true)}
                >
                    <Plus size={24} color="#FFF" />
                </Pressable>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        gap: 12,
        marginBottom: 20,
    },
    backButton: {
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchWrapper: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 100,
    },
    listContainer: {
        paddingHorizontal: 4,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 16,
        marginBottom: 12,
        marginTop: 8,
    },
    sectionTitle: {
        textTransform: 'uppercase',
        opacity: 0.6,
        marginHorizontal: 16,
        marginBottom: 12,
        marginTop: 8,
    },
    historyItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 16,
        gap: 12,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.05)',
    },
    historyText: {
        flex: 1,
    },
    statusText: {
        textAlign: 'center',
        marginTop: 40,
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 40,
        paddingHorizontal: 40,
    },
    fab: {
        position: 'absolute',
        bottom: 40,
        right: 24,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#FF6B6B',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
    },
});

