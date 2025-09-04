import Section from './Section';
import { useI18n } from '../src/lib/i18n/LanguageContext';

export default function Contact() {
  const { t } = useI18n();
  return (
    <Section id="contact">
      <h2 className="section-title">{t('contact.title')}</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Parlons de votre projet</h3>
          <p>Prêt à transformer vos idées en réalité ? Contactez-moi pour discuter de votre projet.</p>
          <div className="contact-item"><i className="fas fa-phone" /><span>+27 69 793 5559</span></div>
          <div className="contact-item"><i className="fas fa-envelope" /><span>contact@giressekimona.com</span></div>
          <div className="contact-item"><i className="fas fa-map-marker-alt" /><span>Afrique du Sud</span></div>
        </div>
        <div className="contact-form">
          <form action="https://formspree.io/f/meozqkqa" method="POST">
            <div className="form-group"><label>Nom complet</label><input type="text" name="name" required /></div>
            <div className="form-group"><label>Email</label><input type="email" name="email" required /></div>
            <div className="form-group"><label>Message</label><textarea name="message" required /></div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>{t('contact.cta')}</button>
          </form>
        </div>
      </div>
    </Section>
  );
}
