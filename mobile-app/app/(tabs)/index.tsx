import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import PagerView from 'react-native-pager-view';
import { Search } from 'lucide-react-native';
import { useWeatherStore } from '@/store/useWeatherStore';
import { CityWeatherTemplate } from '@/components/templates/CityWeatherTemplate';

export default function HomeScreen() {
  const router = useRouter();
  const savedCities = useWeatherStore((state) => state.savedCities);

  // Empty state: no cities saved yet
  if (savedCities.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>Welcome to SkyCast</Text>
        <Text style={styles.emptySubtitle}>
          Add your first city to get started
        </Text>
        <Pressable
          style={({ pressed }) => [
            styles.searchButton,
            pressed && styles.searchButtonPressed,
          ]}
          onPress={() => router.push('/(tabs)/search')}>
          <Search color="#FFFFFF" size={20} />
          <Text style={styles.searchButtonText}>Search Cities</Text>
        </Pressable>
      </View>
    );
  }

  // Multi-city view with swipeable pages
  return (
    <PagerView style={styles.pagerView} initialPage={0}>
      {savedCities.map((city, index) => (
        <View key={`${city}-${index}`} style={styles.page}>
          <CityWeatherTemplate cityName={city} />
        </View>
      ))}
    </PagerView>
  );
}

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  page: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
    backgroundColor: '#F3F4F6',
  },
  emptyTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 12,
    textAlign: 'center',
  },
  emptySubtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 32,
    textAlign: 'center',
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#3B82F6',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchButtonPressed: {
    opacity: 0.8,
  },
  searchButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
