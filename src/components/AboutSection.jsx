import AnimationWrapper from './AnimationWrapper';
import { useTranslation } from 'react-i18next';

export default function AboutSection() {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-10">{t('about.title')}</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <AnimationWrapper>
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('about.who')}</h3>
              <p className="text-slate-600 leading-relaxed">Je suis Giresse Kimona, fondateur d'AutoMarket Pro, une agence spécialisée dans le marketing digital automation...</p>
              <p className="text-slate-600 leading-relaxed mt-4">Mon expertise s'étend du développement mobile avec Flutter à la création de solutions web avancées...</p>
            </div>
          </AnimationWrapper>
          <AnimationWrapper delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {['fa-code','fa-mobile-alt','fa-brain','fa-palette'].map((icon, i) => (
                <div className="p-6 border rounded-xl shadow bg-white text-center" key={i}>
                  <i className={`fas ${icon} text-primary text-3xl`} />
                  <div className="mt-2 font-semibold">Skill {i+1}</div>
                  <div className="text-slate-500 text-sm">Description</div>
                </div>
              ))}
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
}
