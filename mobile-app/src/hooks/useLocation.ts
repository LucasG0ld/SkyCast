import { useState } from 'react';
import * as Location from 'expo-location';

interface LocationCoordinates {
    latitude: number;
    longitude: number;
}

interface UseLocationReturn {
    location: LocationCoordinates | null;
    error: string | null;
    isLoading: boolean;
    requestLocation: () => Promise<void>;
}

/**
 * Custom hook for managing GPS location with expo-location
 * Handles permission requests and provides fallback on denial
 */
export const useLocation = (): UseLocationReturn => {
    const [location, setLocation] = useState<LocationCoordinates | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    /**
     * Requests location permission and fetches current coordinates
     * Handles: Permission granted, Permission denied, GPS disabled
     */
    const requestLocation = async (): Promise<void> => {
        try {
            setIsLoading(true);
            setError(null);

            // Request foreground location permissions
            const { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                setError(
                    'Permission to access location was denied. Please use the search to add a city.'
                );
                setIsLoading(false);
                return;
            }

            // Check if location services are enabled
            const isEnabled = await Location.hasServicesEnabledAsync();
            if (!isEnabled) {
                setError(
                    'Location services are disabled. Please enable GPS and try again.'
                );
                setIsLoading(false);
                return;
            }

            // Get current position
            const position = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.Balanced,
            });

            setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            });
            setIsLoading(false);
        } catch (err) {
            setError(
                'Failed to get your location. Please try again or search for a city manually.'
            );
            setIsLoading(false);
            console.error('Location error:', err);
        }
    };

    return {
        location,
        error,
        isLoading,
        requestLocation,
    };
};
