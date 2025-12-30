import React from 'react';
import { View, StyleSheet } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useWeatherStore } from '@/store/useWeatherStore';
import { CityWeatherTemplate } from '@/components/templates/CityWeatherTemplate';
import { WelcomeScreen } from '@/components/organisms/WelcomeScreen';

export default function HomeScreen() {
  const savedCities = useWeatherStore((state) => state.savedCities);

  // Empty state: no cities saved yet
  if (savedCities.length === 0) {
    return <WelcomeScreen />;
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
});
