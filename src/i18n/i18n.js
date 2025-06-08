import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationUz from './locales/uz/translation.json';
import translationRu from './locales/ru/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      uz: { translation: translationUz },
      ru: { translation: translationRu },
    },
    lng: 'uz',
    fallbackLng: 'uz',
    interpolation: { escapeValue: false },
  });

export default i18n;