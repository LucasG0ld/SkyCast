import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Switch } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { useSettingsStore } from '@/store/useSettingsStore';
import { useAppTheme } from '@/hooks/useAppTheme';
import { GlassCard } from '@/components/atoms/GlassCard';

export default function SettingsScreen() {
    const router = useRouter();
    const insets = useSafeAreaInsets();
    const { t } = useTranslation();
    const { colors, typography, spacing, isDark } = useAppTheme();
    const { unit, setUnit, language, setLanguage, theme, setTheme } = useSettingsStore();

    const coralColor = '#FF6B6B';

    return (
        <View style={[styles.container, { backgroundColor: colors.background, paddingTop: Math.max(insets.top, spacing.safeAreaTop) }]}>
            {/* Header: Back Button + Title */}
            <View style={styles.header}>
                <Pressable
                    onPress={() => router.back()}
                    style={({ pressed }) => [
                        styles.backButton,
                        { borderRadius: spacing.borderRadiusIcon, backgroundColor: colors.glass },
                        pressed && { opacity: 0.7 }
                    ]}
                >
                    <ArrowLeft size={20} color={colors.text} />
                </Pressable>

                <Text style={[styles.title, {
                    color: colors.text,
                    fontSize: typography.sizes.titleSmall,
                    fontWeight: typography.weights.bold,
                }]}>
                    {t('settings.title')}
                </Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Units & Language Group */}
                <GlassCard style={styles.groupCard}>
                    {/* Unit Setting */}
                    <Pressable
                        style={[styles.settingRow, styles.borderBottom, { borderBottomColor: colors.glassBorder }]}
                        onPress={() => setUnit(unit === 'Celsius' ? 'Fahrenheit' : 'Celsius')}
                    >
                        <Text style={[styles.settingLabel, { color: colors.textSecondary, fontSize: typography.sizes.bodySmall, fontWeight: typography.weights.bold }]}>
                            {t('settings.units')}
                        </Text>
                        <Text style={[styles.settingValue, { color: coralColor, fontSize: typography.sizes.bodySmall, fontWeight: typography.weights.extrabold }]}>
                            {unit === 'Celsius' ? 'Celsius' : 'Fahrenheit'}
                        </Text>
                    </Pressable>

                    {/* Language Setting */}
                    <Pressable
                        style={styles.settingRow}
                        onPress={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                    >
                        <Text style={[styles.settingLabel, { color: colors.textSecondary, fontSize: typography.sizes.bodySmall, fontWeight: typography.weights.bold }]}>
                            {t('settings.language')}
                        </Text>
                        <Text style={[styles.settingValue, { color: coralColor, fontSize: typography.sizes.bodySmall, fontWeight: typography.weights.extrabold }]}>
                            {language === 'fr' ? 'Français' : 'English'}
                        </Text>
                    </Pressable>
                </GlassCard>

                {/* Dark Mode Group */}
                <GlassCard style={styles.groupCard}>
                    <View style={styles.settingRow}>
                        <Text style={[styles.settingLabel, { color: colors.textSecondary, fontSize: typography.sizes.bodySmall, fontWeight: typography.weights.bold }]}>
                            {t('settings.darkMode')}
                        </Text>
                        <Switch
                            value={theme === 'dark'}
                            onValueChange={(value) => setTheme(value ? 'dark' : 'light')}
                            trackColor={{ false: '#cbd5e1', true: coralColor }}
                            thumbColor="#FFFFFF"
                            ios_backgroundColor="#cbd5e1"
                        />
                    </View>
                </GlassCard>

                {/* Footer */}
                <View style={styles.footer}>
                    <Text style={[styles.footerText, { color: colors.textSecondary, fontSize: typography.sizes.bodySmall }]}>
                        SkyCast v1.0.0
                    </Text>
                    <Text style={[styles.footerCredit, { color: colors.textSecondary, fontSize: typography.sizes.bodySmall }]}>
                        Made with ❤️ by Lucas Gold
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        gap: 16,
        marginBottom: 24,
    },
    backButton: {
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    groupCard: {
        marginBottom: 24,
        overflow: 'hidden',
    },
    settingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    borderBottom: {
        borderBottomWidth: 1,
    },
    settingLabel: {
        textTransform: 'capitalize',
    },
    settingValue: {
        textAlign: 'right',
    },
    footer: {
        marginTop: 40,
        alignItems: 'center',
        gap: 8,
    },
    footerText: {
        opacity: 0.6,
    },
    footerCredit: {
        opacity: 0.6,
    },
});
