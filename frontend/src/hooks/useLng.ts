import { useTranslation } from 'react-i18next';
import { useLayoutEffect, useState } from 'react';

import { LANGUAGES } from '../initI18next';

const useLanguage = () => {
  const { i18n } = useTranslation();
  const { resolvedLanguage, changeLanguage } = i18n;
  const [language, setLanguage] = useState(resolvedLanguage);

  useLayoutEffect(() => {
    changeLanguage(language);
  }, [language, changeLanguage]);

  return {
    language,
    availableLanguages: LANGUAGES,
    setLanguage,
  };
};

export default useLanguage;
