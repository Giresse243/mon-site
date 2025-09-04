import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

async function fetchLocale(lang) {
  const res = await fetch(`/locales/${lang}.json`);
  return res.json();
}

const resources = {
  fr: { translation: {} },
  en: { translation: {} }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: { escapeValue: false }
  });

// Load locales at runtime
export async function loadLanguage(lang) {
  const data = await fetchLocale(lang);
  i18n.addResources(lang, 'translation', data);
  i18n.changeLanguage(lang);
}

export default i18n;
