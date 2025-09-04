import { useEffect, useState } from 'react';
import AnimationWrapper from './AnimationWrapper';

export default function PortfolioGrid() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('/assets/data/gallery.json').then(r => r.json()).then(setItems).catch(() => setItems([]));
  }, []);
  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-10">Galerie</h2>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, idx) => (
            <AnimationWrapper delay={(idx % 6) * 0.05} key={idx}>
              <figure className="relative rounded-xl overflow-hidden border shadow bg-white" style={{ aspectRatio: it.width && it.height ? `${it.width} / ${it.height}` : '4 / 3' }}>
                <img src={it.src} alt={it.alt || it.title || 'Work'} className="w-full h-full object-cover transition-transform hover:scale-105" loading="lazy" />
                <figcaption className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex items-end text-white opacity-0 hover:opacity-100 transition-opacity">
                  <div>
                    <h4 className="font-semibold">{it.title}</h4>
                    {Array.isArray(it.tags) && (
                      <div className="flex flex-wrap gap-2 mt-1">
                        {it.tags.slice(0,3).map((t, i) => (<span className="px-2 py-0.5 text-xs rounded-full border border-white/40" key={i}>{t}</span>))}
                      </div>
                    )}
                  </div>
                </figcaption>
              </figure>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
