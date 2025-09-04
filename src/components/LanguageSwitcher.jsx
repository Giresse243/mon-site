import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { loadLanguage } from '../utils/i18n';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || 'fr');

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('language') : null;
    if (stored && stored !== lang) {
      handleChange(stored);
    }
  }, []);

  async function handleChange(next) {
    await loadLanguage(next);
    setLang(next);
    if (typeof window !== 'undefined') localStorage.setItem('language', next);
    if (typeof document !== 'undefined') document.documentElement.lang = next;
  }

  return (
    <div className="inline-flex rounded-full border px-2 py-1 text-sm shadow-sm bg-white/70 backdrop-blur">
      <button className={`px-2 ${lang === 'fr' ? 'text-primary font-semibold' : 'text-slate-600'}`} onClick={() => handleChange('fr')}>FR</button>
      <span className="px-1 text-slate-400">|</span>
      <button className={`px-2 ${lang === 'en' ? 'text-primary font-semibold' : 'text-slate-600'}`} onClick={() => handleChange('en')}>EN</button>
    </div>
  );
}
