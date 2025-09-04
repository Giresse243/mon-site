import Section from './Section';
import { useI18n } from '../src/lib/i18n/LanguageContext';

export default function Services() {
  const { t } = useI18n();
  return (
    <Section id="services">
      <h2 className="section-title">{t('services.title')}</h2>
      <div className="services-grid">
        <div className="service-card"><div className="service-icon"><i className="fas fa-chart-line" /></div><h3>Marketing Digital</h3><p>Stratégies d'automation et optimisation de campagnes digitales.</p></div>
        <div className="service-card"><div className="service-icon"><i className="fas fa-mobile-alt" /></div><h3>Applications Mobile</h3><p>Développement iOS/Android avec Flutter.</p></div>
        <div className="service-card"><div className="service-icon"><i className="fas fa-graduation-cap" /></div><h3>Formation IA</h3><p>Formations spécialisées en IA et prompts avancés.</p></div>
        <div className="service-card"><div className="service-icon"><i className="fas fa-cogs" /></div><h3>Consultation Tech</h3><p>Conseils pour adopter de nouvelles technologies.</p></div>
      </div>
    </Section>
  );
}
