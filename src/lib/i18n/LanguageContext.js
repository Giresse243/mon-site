import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import fr from '../../../locales/fr.json';
import en from '../../../locales/en.json';

const dictionaries = { fr, en };

const LanguageContext = createContext({
  lang: 'fr',
  t: (key, fallback) => fallback ?? key,
  setLang: () => {}
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('fr');

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('language') : null;
    if (stored && (stored === 'fr' || stored === 'en')) setLang(stored);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') localStorage.setItem('language', lang);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const t = useMemo(() => {
    const dict = dictionaries[lang] || {};
    return (key, fallback) => {
      const value = key.split('.').reduce((acc, k) => (acc && acc[k] != null ? acc[k] : undefined), dict);
      return value ?? fallback ?? key;
    };
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  return useContext(LanguageContext);
}
