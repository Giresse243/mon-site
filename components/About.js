import Section from './Section';
import { useI18n } from '../src/lib/i18n/LanguageContext';

export default function About() {
  const { t } = useI18n();
  return (
    <Section id="about" className="about">
      <h2 className="section-title">{t('about.title')}</h2>
      <div className="about-content">
        <div className="about-text">
          <h3>{t('about.who')}</h3>
          <p>Je suis Giresse Kimona, fondateur d'AutoMarket Pro, une agence spécialisée dans le marketing digital automation...</p>
          <p>Mon expertise s'étend du développement d'applications mobiles avec Flutter à la création de solutions web avancées...</p>
        </div>
        <div className="skills-grid">
          <div className="skill-card"><div className="skill-icon"><i className="fas fa-code" /></div><h4>Développement Web</h4><p>HTML, CSS, JavaScript, Python</p></div>
          <div className="skill-card"><div className="skill-icon"><i className="fas fa-mobile-alt" /></div><h4>Développement Mobile</h4><p>Flutter, Applications natives</p></div>
          <div className="skill-card"><div className="skill-icon"><i className="fas fa-brain" /></div><h4>Intelligence Artificielle</h4><p>Machine Learning, Automation</p></div>
          <div className="skill-card"><div className="skill-icon"><i className="fas fa-palette" /></div><h4>Design UX/UI</h4><p>Interfaces modernes et intuitives</p></div>
        </div>
      </div>
    </Section>
  );
}
