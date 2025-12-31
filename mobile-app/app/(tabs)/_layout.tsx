import React from 'react';
import { Stack } from 'expo-router';

/**
 * Tab Layout (v11 - Stack Navigation)
 * Removed bottom tabs in favor of floating icon buttons
 */
export default function TabLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="search"
        options={{
          presentation: 'modal',
          animation: 'slide_from_bottom',
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          presentation: 'modal',
          animation: 'slide_from_bottom',
        }}
      />
    </Stack>
  );
}
