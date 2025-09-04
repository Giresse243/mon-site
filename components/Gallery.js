import { useEffect, useState } from 'react';
import Section from './Section';
import { useI18n } from '../src/lib/i18n/LanguageContext';
import Image from 'next/image';

export default function Gallery() {
  const { t } = useI18n();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/assets/data/gallery.json')
      .then(r => r.json())
      .then(setItems)
      .catch(() => setItems([]));
  }, []);

  return (
    <Section id="gallery" className="gallery">
      <h2 className="section-title">{t('gallery.title')}</h2>
      <div className="gallery-grid">
        {items.length === 0 && (
          <div className="gallery-empty">Ajoutez vos images dans public/assets/gallery et mettez à jour public/assets/data/gallery.json</div>
        )}
        {items.map((item, idx) => (
          <figure className="gallery-item" style={{ aspectRatio: item.width && item.height ? `${item.width} / ${item.height}` : '4 / 3' }} key={idx}>
            <Image className="gallery-img" src={item.src} alt={item.alt || item.title || 'Gallery'} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw" />
            <figcaption className="gallery-overlay">
              <div className="gallery-meta">
                <h4>{item.title}</h4>
                {Array.isArray(item.tags) && item.tags.length > 0 && (
                  <div className="gallery-tags">{item.tags.slice(0,3).map((t, i) => (<span className="tag" key={i}>{t}</span>))}</div>
                )}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
