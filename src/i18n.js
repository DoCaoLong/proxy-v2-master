import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationVI from './locales/vi/translation.json';
const resources = {
    en: {
        translation: translationEN
    },
    vi: {
        translation: translationVI
    }
};
// Function to detect the user's language
const detectUserLanguage = () => {
    const lang = navigator.language || (navigator.languages && navigator.languages[0]);
    if (lang.startsWith('vi')) {
        return 'vi';
    }
    return 'en';
};
const storedLanguage = localStorage.getItem('language') || detectUserLanguage();
i18n.use(initReactI18next).init({
    resources,
    lng: storedLanguage, // Default language from Local Storage or language machine
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
});
export default i18n;
