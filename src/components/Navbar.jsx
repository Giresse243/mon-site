import LanguageSwitcher from './LanguageSwitcher';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 100);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-[padding,background] ${compact ? 'backdrop-blur bg-white/90 py-2 shadow' : 'bg-white/70 backdrop-blur py-3'}`}>
      <nav className="container mx-auto flex items-center justify-between px-5">
        <a href="#home" className="flex items-center gap-2">
          <img src="/assets/new-logo.png" alt="Logo" className="h-10" />
        </a>
        <ul className={`hidden md:flex items-center gap-6 text-slate-700`}>
          <li><a href="#home" className="hover:text-primary">{t('nav.home')}</a></li>
          <li><a href="#about" className="hover:text-primary">{t('nav.about')}</a></li>
          <li><a href="#services" className="hover:text-primary">{t('nav.services')}</a></li>
          <li><a href="#projects" className="hover:text-primary">{t('nav.projects')}</a></li>
          <li><a href="#gallery" className="hover:text-primary">{t('nav.gallery')}</a></li>
          <li><a href="#contact" className="hover:text-primary">{t('nav.contact')}</a></li>
          <li><LanguageSwitcher /></li>
        </ul>
        <button className="md:hidden" onClick={() => setOpen(v => !v)} aria-expanded={open}><i className="fas fa-bars" /></button>
      </nav>
      {open && (
        <div className="md:hidden px-5 pb-4">
          <ul className="flex flex-col gap-3 text-slate-700">
            <li><a href="#home" onClick={() => setOpen(false)}>{t('nav.home')}</a></li>
            <li><a href="#about" onClick={() => setOpen(false)}>{t('nav.about')}</a></li>
            <li><a href="#services" onClick={() => setOpen(false)}>{t('nav.services')}</a></li>
            <li><a href="#projects" onClick={() => setOpen(false)}>{t('nav.projects')}</a></li>
            <li><a href="#gallery" onClick={() => setOpen(false)}>{t('nav.gallery')}</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)}>{t('nav.contact')}</a></li>
            <li><LanguageSwitcher /></li>
          </ul>
        </div>
      )}
    </header>
  );
}
