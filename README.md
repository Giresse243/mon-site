# Giresse Kimona - Portfolio Professionnel

Un portfolio moderne et responsive inspiré des meilleures pratiques de bolt.new, spécialement conçu pour les développeurs et experts en IA.

## 🌟 Fonctionnalités

### Design & UX
- **Design moderne** avec thème sombre/clair
- **Responsive design** optimisé pour mobile et desktop
- **Animations fluides** et micro-interactions
- **Accessibilité** complète (WCAG 2.1)
- **Performance optimisée** avec lazy loading

### Fonctionnalités Techniques
- **Thème dynamique** avec persistance locale
- **Support multilingue** (Français/Anglais)
- **Menu mobile** avec navigation tactile
- **Formulaires intelligents** avec validation
- **Notifications toast** pour feedback utilisateur
- **Scroll progress indicator**
- **Parallax effects** (desktop uniquement)

### Sections
- **Hero Section** avec effet de frappe
- **À propos** avec compétences
- **Services** détaillés
- **Projets** avec technologies
- **Contact** avec formulaire fonctionnel

## 🚀 Installation

### Prérequis
- Node.js (version 14 ou supérieure)
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone [votre-repo]
cd mon-site

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

### Déploiement
```bash
# Build pour production
npm run build

# Déployer sur Netlify
netlify deploy
```

## 📁 Structure du Projet

```
mon-site/
├── index.html          # Page principale
├── style.css           # Styles CSS avec variables CSS
├── assets/             # Images et ressources
│   ├── logo-gk-blue.png
│   └── giressekimona_image.jpg
├── api/                # API endpoints
│   └── index.js        # Contact form handler
├── scripts/            # Scripts utilitaires
│   ├── deploy.js       # Script de déploiement
│   └── seed-data.js    # Données de test
├── netlify.toml        # Configuration Netlify
└── package.json        # Dépendances et scripts
```

## 🎨 Personnalisation

### Couleurs
Modifiez les variables CSS dans `style.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --accent-color: #3b82f6;
    /* ... autres variables */
}
```

### Contenu
- Modifiez le contenu dans `index.html`
- Ajoutez vos projets dans la section projets
- Mettez à jour les informations de contact

### Images
- Remplacez `assets/giressekimona_image.jpg` par votre photo
- Remplacez `assets/logo-gk-blue.png` par votre logo

## 🔧 Configuration API

### Contact Form
L'API de contact est configurée dans `api/index.js`. Pour une utilisation en production:

1. **Ajoutez une base de données** (PostgreSQL, MongoDB, etc.)
2. **Configurez l'envoi d'emails** (SendGrid, Mailgun, etc.)
3. **Ajoutez la validation** côté serveur
4. **Implémentez la protection anti-spam**

### Variables d'environnement
Créez un fichier `.env`:

```env
DATABASE_URL=your_database_url
EMAIL_SERVICE=sendgrid
SENDGRID_API_KEY=your_api_key
```

## 📱 Responsive Design
## ✏️ Modifier le contenu rapidement

### Textes (FR/EN)
- Les textes se trouvent dans `index.html` et utilisent des attributs `data-fr` et `data-en`.
- Pour changer un libellé, modifiez les valeurs des attributs, par ex.:
```html
<h2 class="section-title" data-fr="Mes Projets" data-en="My Projects">Mes Projets</h2>
```

### Couleurs et styles
- Ouvrez `style.css` et ajustez les variables dans `:root`:
```css
:root {
    --primary-color: #8b5cf6; /* violet */
    --secondary-color: #ec4899; /* rose */
    --gradient-primary: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
}
```

### Images (Galerie/Portfolio)
- Placez vos images dans `assets/gallery/` (gardez des fichiers JPG/PNG optimisés).
- Mettez à jour `assets/data/gallery.json` en ajoutant des objets:
```json
{
  "src": "assets/gallery/mon-projet.jpg",
  "title": "Mon Projet",
  "alt": "Capture écran du projet",
  "tags": ["Web", "UI"],
  "width": 1600,
  "height": 1000
}
```
- Les images sont chargées en lazy loading, avec grille responsive et overlay au survol.

### Astuces de performance
- Préservez les dimensions `width`/`height` dans le JSON pour éviter les CLS.
- Gardez les images sous ~250KB quand c'est possible.
- Évitez des tags trop longs pour garder l'overlay lisible.


### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Optimisations Mobile
- **Touch targets** de 44px minimum
- **Font size** de 16px pour éviter le zoom
- **Swipe gestures** pour navigation
- **Performance** optimisée pour connexions lentes

## ⚡ Performance

### Optimisations
- **CSS variables** pour thèmes dynamiques
- **Intersection Observer** pour animations
- **Debounced scroll events**
- **Lazy loading** des images
- **Minified assets** en production

### Métriques
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🔒 Sécurité

### Bonnes Pratiques
- **Validation** côté client et serveur
- **Sanitization** des inputs
- **HTTPS** obligatoire
- **CORS** configuré
- **Rate limiting** sur API

## 🌐 Accessibilité

### Conformité WCAG 2.1
- **Contraste** suffisant (4.5:1 minimum)
- **Navigation** au clavier
- **Screen readers** support
- **Focus indicators** visibles
- **Alt text** pour images

### Fonctionnalités
- **Skip to content** link
- **ARIA labels** appropriés
- **Semantic HTML** structure
- **Keyboard navigation**

## 🎯 SEO

### Optimisations
- **Meta tags** complets
- **Structured data** (JSON-LD)
- **Sitemap** automatique
- **Open Graph** tags
- **Twitter Cards**

## 🚀 Déploiement

### Netlify (Recommandé)
1. Connectez votre repository GitHub
2. Configurez les variables d'environnement
3. Déployez automatiquement

### Vercel
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm run build
# Déployez le dossier dist/
```

## 📊 Analytics

### Google Analytics
Ajoutez votre ID GA dans `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🤝 Contribution

1. Fork le projet
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🙏 Remerciements

- **bolt.new** pour l'inspiration design
- **Font Awesome** pour les icônes
- **Google Fonts** pour la typographie
- **Netlify** pour l'hébergement

## 📞 Contact

- **Email**: contact@giressekimona.com
- **Téléphone**: +27 69 793 5559
- **Facebook**: [Giresse Kimona](https://www.facebook.com/share/1T2zuFtpN8/)
- **Instagram**: [@giresse_kimona](https://www.instagram.com/giresse_kimona)

---

**Développé avec ❤️ par Giresse Kimona - AutoMarket Pro** 