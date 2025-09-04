import { useEffect, useState } from 'react';
import AnimationWrapper from './AnimationWrapper';
import { useTranslation } from 'react-i18next';

export default function ServicesSection() {
  const { t, i18n } = useTranslation();
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('/services.json').then(r => r.json()).then(setServices).catch(() => setServices([]));
  }, []);
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-10">{t('services.title')}</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (
            <AnimationWrapper delay={(idx % 6) * 0.05} key={idx}>
              <div className="p-6 border rounded-2xl shadow bg-white text-center hover:-translate-y-1 transition-transform">
                <i className={`fas ${s.icon} text-primary text-4xl`} />
                <h3 className="mt-3 font-semibold text-lg">{s.title?.[i18n.language] || s.title?.en}</h3>
                <p className="text-slate-600 mt-2">{s.desc?.[i18n.language] || s.desc?.en}</p>
              </div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
