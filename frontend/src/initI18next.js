import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import resources from './locales/index.js';

export const initI18next = async () => {
  const defaultLanguage = 'en';
  const i18n = i18next.createInstance();

  await i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: defaultLanguage,
    });
};

export const LANGUAGES = ['en', 'ru'];
