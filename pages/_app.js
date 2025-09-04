import { AnimatePresence } from 'framer-motion';
import '../style.css';
import { LanguageProvider } from '../src/lib/i18n/LanguageContext';

export default function App({ Component, pageProps, router }) {
  return (
    <LanguageProvider>
      <AnimatePresence mode="wait" initial={false}>
        <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
    </LanguageProvider>
  );
}
