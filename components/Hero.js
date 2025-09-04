import { motion } from 'framer-motion';
import { useI18n } from '../src/lib/i18n/LanguageContext';
import Image from 'next/image';

export default function Hero() {
  const { t } = useI18n();
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div className="hero-text" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1>{t('hero.title')}</h1>
            <p className="subtitle">{t('hero.subtitle')}</p>
            <p className="description">{t('hero.description')}</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">{t('hero.ctaPrimary')}</a>
              <a href="#projects" className="btn btn-outline">{t('hero.ctaSecondary')}</a>
            </div>
          </motion.div>
          <motion.div className="hero-image" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="profile-card">
              <div className="profile-avatar">
                <Image src="/assets/giressekimona_image.jpg" alt="Portrait de Giresse Kimona" className="avatar-image" width={180} height={180} priority />
              </div>
              <h3 className="profile-name">Giresse Kimona</h3>
              <p className="profile-title">AutoMarket Pro</p>
              <div className="social-links">
                <a href="https://www.facebook.com/share/1T2zuFtpN8/" target="_blank"><i className="fab fa-facebook" /></a>
                <a href="https://www.instagram.com/giresse_kimona?igsh=MTN4N242cm03ZGo4aw==" target="_blank"><i className="fab fa-instagram" /></a>
                <a href="tel:+27697935559"><i className="fas fa-phone" /></a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
