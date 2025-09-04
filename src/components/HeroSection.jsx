import AnimationWrapper from './AnimationWrapper';
import { useTranslation } from 'react-i18next';

export default function HeroSection() {
  const { t } = useTranslation();
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-white to-slate-50">
      <div className="container mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
        <AnimationWrapper>
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">{t('hero.title')}</h1>
            <p className="mt-3 text-xl text-slate-600">{t('hero.subtitle')}</p>
            <p className="mt-6 text-slate-600 leading-relaxed max-w-xl">{t('hero.description')}</p>
            <div className="mt-8 flex gap-4 flex-wrap">
              <a href="#contact" className="btn-primary">{t('hero.ctaPrimary')}</a>
              <a href="#projects" className="btn-outline">{t('hero.ctaSecondary')}</a>
            </div>
          </div>
        </AnimationWrapper>
        <AnimationWrapper delay={0.1}>
          <div className="mx-auto max-w-sm bg-white border rounded-2xl shadow-xl p-6 text-center">
            <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-primary to-secondary mx-auto mb-4 grid place-items-center overflow-hidden">
              <img src="/images/profile.jpg" alt="Portrait" className="w-32 h-32 rounded-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold">Giresse Kimona</h3>
            <p className="text-slate-500">AutoMarket Pro</p>
            <div className="flex justify-center gap-3 mt-4 text-primary">
              <a href="https://www.facebook.com/share/1T2zuFtpN8/" target="_blank"><i className="fab fa-facebook" /></a>
              <a href="https://www.instagram.com/giresse_kimona?igsh=MTN4N242cm03ZGo4aw==" target="_blank"><i className="fab fa-instagram" /></a>
              <a href="tel:+27697935559"><i className="fas fa-phone" /></a>
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
}
