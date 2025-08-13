# Portfolio Customization Guide

This guide will help you customize the portfolio template to reflect your personal information, skills, and projects.

## 🎯 Quick Start Checklist

### 1. Personal Information
Replace all instances of `[Your Name]` in the following files:
- `index.html` (multiple locations)
- `assets/data/testimonials.json`

### 2. Contact Information
Update the following in `index.html`:
- Phone: `+1 (555) 123-4567`
- Email: `your.email@example.com`
- Location: `Your City`
- LinkedIn: `https://www.linkedin.com/in/yourprofile/`
- GitHub: `https://github.com/yourusername`
- Twitter: `https://twitter.com/yourusername`

### 3. Profile Image
Replace `assets/your_profile_image.jpg` with your professional headshot (recommended size: 400x400px)

### 4. Logo/Branding
Replace `assets/new-logo.png` with your personal logo or brand image

### 5. Contact Form
Update the Formspree action URL in `index.html`:
```html
<form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
Get your form ID from [Formspree.io](https://formspree.io)

## 📝 Detailed Customization

### Website Metadata (SEO)
In `index.html`, update:
- `<title>` tags
- Meta descriptions
- Open Graph tags
- Schema.org structured data
- Domain URLs from `yourwebsite.com` to your actual domain

### Skills & Expertise
Edit `assets/data/skills.json` to reflect your actual skills:
- Add/remove skill categories
- Update proficiency levels (1-100)
- Modify years of experience
- Add certifications if applicable

### Projects Showcase
Update the projects in `index.html`:
- Replace project names and descriptions
- Update technology tags
- Add live demo links
- Include GitHub repository links

### Services Offered
Modify the services section in `index.html` to match your offerings:
- Update service titles and descriptions
- Change icons (Font Awesome classes)
- Adjust pricing or call-to-action buttons

### Testimonials
Edit `assets/data/testimonials.json`:
- Replace with real client testimonials
- Update project names to match your actual work
- Ensure avatars and company information are accurate

### About Section
Personalize your story in `index.html`:
- Write your professional background
- Highlight your unique value proposition
- Update the skills cards to match your expertise

## 🎨 Styling & Branding

### Color Scheme
Modify colors in `style.css` by updating CSS variables:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --accent-color: #3b82f6;
}
```

### Fonts
Change fonts by updating the Google Fonts import in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Background & Animations
Customize animations and effects in the JavaScript sections of `index.html`

## 🌐 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `.`
4. Configure environment variables if needed

### Vercel
1. Import your GitHub repository
2. No build configuration needed for static site
3. Deploy automatically

### GitHub Pages
1. Enable GitHub Pages in repository settings
2. Select source branch (usually `main`)
3. Your site will be available at `username.github.io/repository-name`

## 📱 Mobile Optimization

The portfolio is fully responsive, but you may want to:
- Test on various devices
- Optimize images for mobile (use WebP format)
- Ensure touch targets are minimum 44px
- Check loading performance on slow connections

## 🔧 Technical Customizations

### Adding New Sections
1. Add section HTML in `index.html`
2. Update navigation menu
3. Add corresponding CSS styles
4. Include in JavaScript initialization if needed

### Integrating Analytics
Add Google Analytics, Hotjar, or other tracking services:
```html
<!-- Add before closing </head> tag -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### Adding Blog/CMS
Consider integrating:
- Contentful
- Strapi
- Sanity.io
- Or static site generators like Gatsby/Next.js

## 🚀 Performance Optimization

### Image Optimization
- Use WebP format for images
- Implement lazy loading (already included)
- Compress images before uploading

### Code Optimization
- Minify CSS and JavaScript for production
- Use CDN for external libraries
- Enable gzip compression on server

### SEO Best Practices
- Update sitemap.xml with your actual URLs
- Submit to Google Search Console
- Optimize meta descriptions and titles
- Use semantic HTML structure

## 🛠️ Maintenance

### Regular Updates
- Keep dependencies updated: `npm update`
- Review and update project information
- Add new testimonials and projects
- Monitor site performance and fix issues

### Backup Strategy
- Regular Git commits
- Cloud storage for assets
- Database backups if using dynamic content

## 📧 Support

For technical issues or questions:
1. Check the browser console for JavaScript errors
2. Validate HTML/CSS syntax
3. Test across different browsers
4. Review responsive design on mobile devices

---

**Remember**: This portfolio template is designed to be easily customizable. Take your time to personalize each section to truly reflect your unique skills and professional brand!