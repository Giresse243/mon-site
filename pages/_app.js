import { AnimatePresence } from 'framer-motion';
import '../src/styles/globals.css';
import '../style.css';
import { I18nextProvider } from 'react-i18next';
import i18n from '../src/utils/i18n';
import { useEffect } from 'react';
import { loadLanguage } from '../src/utils/i18n';

export default function App({ Component, pageProps, router }) {
  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('language') : null;
    const initial = stored || 'en';
    loadLanguage(initial);
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <AnimatePresence mode="wait" initial={false}>
        <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
    </I18nextProvider>
  );
}
