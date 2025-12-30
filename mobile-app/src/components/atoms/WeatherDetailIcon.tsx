import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LucideIcon } from 'lucide-react-native';

interface WeatherDetailIconProps {
    Icon: LucideIcon;
    size?: number;
    color?: string;
    opacity?: number;
}

/**
 * Atom component for weather detail icons
 * Provides consistent sizing and subtle opacity
 */
export const WeatherDetailIcon: React.FC<WeatherDetailIconProps> = ({
    Icon,
    size = 20,
    color = '#FFFFFF',
    opacity = 0.9,
}) => {
    return (
        <View style={[styles.container, { opacity }]}>
            <Icon color={color} size={size} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
