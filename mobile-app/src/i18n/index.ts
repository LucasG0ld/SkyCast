import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

import en from './locales/en.json';
import fr from './locales/fr.json';

/**
 * i18n Configuration
 * Supports English and French with automatic language detection
 */

const resources = {
    en: { translation: en },
    fr: { translation: fr },
};

// Get device language
const deviceLanguage = Localization.getLocales()[0]?.languageCode || 'en';

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: deviceLanguage,
        fallbackLng: 'en',
        compatibilityJSON: 'v4',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
