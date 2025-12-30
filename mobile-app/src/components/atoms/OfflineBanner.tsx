import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CloudOff } from 'lucide-react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';
import { useAppTheme } from '@/hooks/useAppTheme';

interface OfflineBannerProps {
    isOffline: boolean;
}

/**
 * Animated offline mode banner
 * Appears at the top when network connection is lost
 */
export const OfflineBanner: React.FC<OfflineBannerProps> = ({ isOffline }) => {
    const { t } = useTranslation();
    const { colors } = useAppTheme();
    const translateY = useSharedValue(-100);

    useEffect(() => {
        translateY.value = withSpring(isOffline ? 0 : -100, {
            damping: 15,
            stiffness: 100,
        });
    }, [isOffline]);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }],
    }));

    return (
        <Animated.View
            style={[
                styles.container,
                { backgroundColor: colors.accent },
                animatedStyle,
            ]}
        >
            <CloudOff size={16} color="#FFFFFF" />
            <Text style={styles.text}>{t('common.offline')}</Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingTop: 50, // Account for status bar
        gap: 8,
    },
    text: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
    },
});
