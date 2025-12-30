import { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';

/**
 * Custom hook to monitor network connectivity
 * Returns true when device is offline
 */
export const useNetworkStatus = () => {
    const [isOffline, setIsOffline] = useState(false);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
            setIsOffline(!state.isConnected);
        });

        return () => unsubscribe();
    }, []);

    return { isOffline };
};
