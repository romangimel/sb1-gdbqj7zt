import { useState } from 'react';
import { translations } from '../utils/translations';

export type Language = 'en' | 'ru';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];

  const toggleLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return {
    language,
    toggleLanguage,
    t,
  };
}