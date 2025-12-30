import React from 'react';
import { Tabs } from 'expo-router';
import { Platform, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { Home, Search, Settings } from 'lucide-react-native';
import { useAppTheme } from '@/hooks/useAppTheme';

export default function TabLayout() {
  const { colors, isDark } = useAppTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.tabIconSelected,
        tabBarInactiveTintColor: colors.tabIconDefault,
        headerShown: true,
        headerTransparent: true,
        headerTitleStyle: {
          color: colors.text,
        },
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            backgroundColor: 'transparent',
            borderTopWidth: 0,
          },
          default: {
            backgroundColor: colors.tabBar,
            borderTopWidth: 0.5,
            borderTopColor: colors.border,
            elevation: 0,
            height: 60,
            paddingBottom: 8,
          },
        }),
        tabBarBackground: () =>
          Platform.OS === 'ios' ? (
            <BlurView
              intensity={80}
              tint={isDark ? 'dark' : 'light'}
              style={StyleSheet.absoluteFill}
            />
          ) : null,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Weather',
          headerTitle: 'SkyCast',
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          headerTitle: 'Find Cities',
          tabBarIcon: ({ color, size }) => <Search color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerTitle: 'Preferences',
          tabBarIcon: ({ color, size }) => <Settings color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
