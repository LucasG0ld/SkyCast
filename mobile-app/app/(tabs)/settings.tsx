import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useSettingsStore } from '@/store/useSettingsStore';
import { useAppTheme } from '@/hooks/useAppTheme';
import { Globe, Thermometer, Palette, Check } from 'lucide-react-native';

export default function SettingsScreen() {
    const { t, i18n } = useTranslation();
    const { colors, isDark } = useAppTheme();
    const { unit, setUnit, language, setLanguage, theme, setTheme } = useSettingsStore();

    const sections = [
        {
            title: t('settings.language'),
            icon: Globe,
            options: [
                { label: 'English', value: 'en' },
                { label: 'Français', value: 'fr' },
            ],
            currentValue: language,
            onSelect: (val: any) => setLanguage(val),
        },
        {
            title: t('settings.units'),
            icon: Thermometer,
            options: [
                { label: t('units.celsius'), value: 'Celsius' },
                { label: t('units.fahrenheit'), value: 'Fahrenheit' },
            ],
            currentValue: unit,
            onSelect: (val: any) => setUnit(val),
        },
        {
            title: t('settings.theme'),
            icon: Palette,
            options: [
                { label: t('theme.auto'), value: 'auto' },
                { label: t('theme.light'), value: 'light' },
                { label: t('theme.dark'), value: 'dark' },
            ],
            currentValue: theme,
            onSelect: (val: any) => setTheme(val),
        },
    ];

    return (
        <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={styles.content}>
                {sections.map((section, sIndex) => (
                    <View key={sIndex} style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <section.icon size={20} color={colors.accent} />
                            <Text style={[styles.sectionTitle, { color: colors.text }]}>
                                {section.title}
                            </Text>
                        </View>
                        <View style={[styles.optionsCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                            {section.options.map((option, oIndex) => (
                                <Pressable
                                    key={oIndex}
                                    style={[
                                        styles.optionRow,
                                        oIndex < section.options.length - 1 && { borderBottomWidth: 0.5, borderBottomColor: colors.border }
                                    ]}
                                    onPress={() => section.onSelect(option.value)}
                                >
                                    <Text style={[styles.optionLabel, { color: colors.text }]}>
                                        {option.label}
                                    </Text>
                                    {section.currentValue === option.value && (
                                        <Check size={20} color={colors.accent} />
                                    )}
                                </Pressable>
                            ))}
                        </View>
                    </View>
                ))}

                <View style={styles.footer}>
                    <Text style={[styles.footerText, { color: colors.textSecondary }]}>
                        SkyCast v1.0.0
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        padding: 20,
        paddingTop: 100, // Account for transparent header
    },
    section: {
        marginBottom: 24,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 12,
        paddingHorizontal: 4,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    optionsCard: {
        borderRadius: 16,
        borderWidth: 0.5,
        overflow: 'hidden',
    },
    optionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 14,
        paddingHorizontal: 16,
    },
    optionLabel: {
        fontSize: 16,
    },
    footer: {
        marginTop: 40,
        alignItems: 'center',
    },
    footerText: {
        fontSize: 14,
    },
});
