import React from 'react';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { BlurView } from 'expo-blur';
import { Home, Search, Settings } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#3B82F6', // Sky blue for active state
        tabBarInactiveTintColor: '#9CA3AF', // Gray for inactive state
        headerShown: true,
        headerTransparent: true,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            backgroundColor: 'transparent',
          },
          default: {
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderTopWidth: 0,
            elevation: 0,
          },
        }),
        tabBarBackground: () =>
          Platform.OS === 'ios' ? (
            <BlurView
              intensity={80}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
              }}
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
