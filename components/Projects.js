import Section from './Section';
import { useI18n } from '../src/lib/i18n/LanguageContext';

export default function Projects() {
  const { t } = useI18n();
  return (
    <Section id="projects" className="projects">
      <h2 className="section-title">{t('projects.title')}</h2>
      <div className="projects-grid">
        <div className="project-card"><div className="project-image"><i className="fas fa-search" /></div><div className="project-content"><h3>JobFinder Congo</h3><p>Plateforme de recherche d'emploi avec matching IA.</p></div></div>
        <div className="project-card"><div className="project-image"><i className="fas fa-truck" /></div><div className="project-content"><h3>Congo Delivery</h3><p>Livraison avec géolocalisation et suivi temps réel.</p></div></div>
        <div className="project-card"><div className="project-image"><i className="fas fa-utensils" /></div><div className="project-content"><h3>Congo Food</h3><p>Recommandations personnalisées par IA.</p></div></div>
      </div>
    </Section>
  );
}
