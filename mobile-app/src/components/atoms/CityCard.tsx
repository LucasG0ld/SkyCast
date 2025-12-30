import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { BlurView } from 'expo-blur';
import { MapPin } from 'lucide-react-native';

interface CityCardProps {
    name: string;
    region: string;
    country: string;
    onPress?: () => void;
}

export const CityCard: React.FC<CityCardProps> = ({
    name,
    region,
    country,
    onPress,
}) => {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => [
            styles.container,
            pressed && styles.pressed,
        ]}>
            <BlurView intensity={20} style={styles.blur}>
                <View style={styles.content}>
                    <MapPin color="#3B82F6" size={20} style={styles.icon} />
                    <View style={styles.textContainer}>
                        <Text style={styles.cityName}>{name}</Text>
                        <Text style={styles.location}>
                            {region ? `${region}, ${country}` : country}
                        </Text>
                    </View>
                </View>
            </BlurView>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        marginVertical: 6,
        borderRadius: 16,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    blur: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    icon: {
        marginRight: 12,
    },
    textContainer: {
        flex: 1,
    },
    cityName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1F2937',
        marginBottom: 4,
    },
    location: {
        fontSize: 14,
        color: '#6B7280',
    },
    pressed: {
        opacity: 0.7,
    },
});
