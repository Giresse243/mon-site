import { useEffect, useState } from 'react';
import { useI18n } from '../src/lib/i18n/LanguageContext';
import Link from 'next/link';

export default function Header() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 100);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header${compact ? ' compact' : ''}`}>
      <nav className="nav container">
        <Link href="#home" className="logo" onClick={() => setOpen(false)}>
          <img src="/assets/new-logo.png" alt="Logo" className="logo-image" width={48} height={48} />
        </Link>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          <li><a href="#home">{t('nav.home')}</a></li>
          <li><a href="#about">{t('nav.about')}</a></li>
          <li><a href="#services">{t('nav.services')}</a></li>
          <li><a href="#projects">{t('nav.projects')}</a></li>
          <li><a href="#gallery">{t('nav.gallery')}</a></li>
          <li><a href="#contact">{t('nav.contact')}</a></li>
          <li>
            <button className="lang-toggle" onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')} aria-label="Change language">
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>
          </li>
        </ul>
        <button className="mobile-menu" onClick={() => setOpen(v => !v)} aria-expanded={open}>
          <i className="fas fa-bars" />
        </button>
      </nav>
    </header>
  );
}
