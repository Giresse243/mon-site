const { neon } = require('@neondatabase/serverless');

// Database connection
const sql = neon(process.env.DATABASE_URL);

async function seedData() {
  try {
    console.log('🌱 Seeding database with sample data...');

    // Insert sample projects
    const projects = [
      {
        title: 'JobFinder Congo',
        description: 'Plateforme de recherche d\'emploi au Congo avec matching intelligent et notifications en temps réel.',
        image_url: 'https://via.placeholder.com/400x300/2563eb/ffffff?text=JobFinder',
        tech_stack: ['Flutter', 'Python', 'AI'],
        live_url: 'https://jobfinder-congo.com',
        github_url: 'https://github.com/giresse/jobfinder-congo'
      },
      {
        title: 'Congo Delivery',
        description: 'Application de livraison rapide avec géolocalisation et suivi en temps réel des commandes.',
        image_url: 'https://via.placeholder.com/400x300/1e40af/ffffff?text=Delivery',
        tech_stack: ['Flutter', 'Firebase', 'Maps API'],
        live_url: 'https://congo-delivery.com',
        github_url: 'https://github.com/giresse/congo-delivery'
      },
      {
        title: 'Congo Food',
        description: 'Plateforme de commande de nourriture locale avec recommandations personnalisées par IA.',
        image_url: 'https://via.placeholder.com/400x300/3b82f6/ffffff?text=Food',
        tech_stack: ['React', 'Node.js', 'ML'],
        live_url: 'https://congo-food.com',
        github_url: 'https://github.com/giresse/congo-food'
      },
      {
        title: 'Mboka Wallet',
        description: 'Portefeuille électronique sécurisé pour les transactions financières mobiles en Afrique.',
        image_url: 'https://via.placeholder.com/400x300/059669/ffffff?text=Wallet',
        tech_stack: ['Flutter', 'Blockchain', 'Security'],
        live_url: 'https://mboka-wallet.com',
        github_url: 'https://github.com/giresse/mboka-wallet'
      },
      {
        title: 'Secure Pay Trust',
        description: 'Solution de paiement sécurisé avec authentification biométrique et chiffrement avancé.',
        image_url: 'https://via.placeholder.com/400x300/dc2626/ffffff?text=Secure',
        tech_stack: ['Python', 'Cryptography', 'Biometrics'],
        live_url: 'https://secure-pay-trust.com',
        github_url: 'https://github.com/giresse/secure-pay-trust'
      },
      {
        title: 'E-book IA Avancée',
        description: 'Guide complet "Maîtrise des Prompts IA Avancés 2025" pour professionnels et développeurs.',
        image_url: 'https://via.placeholder.com/400x300/7c3aed/ffffff?text=AI+Book',
        tech_stack: ['AI', 'Education', 'Digital'],
        live_url: 'https://ai-ebook.com',
        github_url: null
      }
    ];

    for (const project of projects) {
      await sql`
        INSERT INTO projects (title, description, image_url, tech_stack, live_url, github_url)
        VALUES (${project.title}, ${project.description}, ${project.image_url}, ${project.tech_stack}, ${project.live_url}, ${project.github_url})
      `;
    }

    // Insert sample skills
    const skills = [
      // Web Development
      { name: 'HTML5', category: 'Web Development', proficiency: 5, icon: 'fab fa-html5' },
      { name: 'CSS3', category: 'Web Development', proficiency: 5, icon: 'fab fa-css3-alt' },
      { name: 'JavaScript', category: 'Web Development', proficiency: 5, icon: 'fab fa-js-square' },
      { name: 'React', category: 'Web Development', proficiency: 4, icon: 'fab fa-react' },
      { name: 'Node.js', category: 'Web Development', proficiency: 4, icon: 'fab fa-node-js' },
      { name: 'Python', category: 'Web Development', proficiency: 4, icon: 'fab fa-python' },
      
      // Mobile Development
      { name: 'Flutter', category: 'Mobile Development', proficiency: 5, icon: 'fas fa-mobile-alt' },
      { name: 'Dart', category: 'Mobile Development', proficiency: 4, icon: 'fas fa-code' },
      { name: 'Android', category: 'Mobile Development', proficiency: 4, icon: 'fab fa-android' },
      { name: 'iOS', category: 'Mobile Development', proficiency: 3, icon: 'fab fa-apple' },
      
      // AI & Machine Learning
      { name: 'Machine Learning', category: 'AI & ML', proficiency: 4, icon: 'fas fa-brain' },
      { name: 'TensorFlow', category: 'AI & ML', proficiency: 3, icon: 'fas fa-robot' },
      { name: 'OpenAI API', category: 'AI & ML', proficiency: 5, icon: 'fas fa-ai' },
      { name: 'Prompt Engineering', category: 'AI & ML', proficiency: 5, icon: 'fas fa-magic' },
      
      // Design & UX
      { name: 'UI/UX Design', category: 'Design', proficiency: 4, icon: 'fas fa-palette' },
      { name: 'Figma', category: 'Design', proficiency: 4, icon: 'fas fa-paint-brush' },
      { name: 'Adobe XD', category: 'Design', proficiency: 3, icon: 'fas fa-vector-square' },
      
      // Database & Backend
      { name: 'PostgreSQL', category: 'Database', proficiency: 4, icon: 'fas fa-database' },
      { name: 'MongoDB', category: 'Database', proficiency: 3, icon: 'fas fa-leaf' },
      { name: 'Firebase', category: 'Database', proficiency: 4, icon: 'fas fa-fire' },
      
      // DevOps & Tools
      { name: 'Git', category: 'DevOps', proficiency: 4, icon: 'fab fa-git-alt' },
      { name: 'Docker', category: 'DevOps', proficiency: 3, icon: 'fab fa-docker' },
      { name: 'AWS', category: 'DevOps', proficiency: 3, icon: 'fab fa-aws' },
      { name: 'Netlify', category: 'DevOps', proficiency: 4, icon: 'fas fa-cloud' }
    ];

    for (const skill of skills) {
      await sql`
        INSERT INTO skills (name, category, proficiency, icon)
        VALUES (${skill.name}, ${skill.category}, ${skill.proficiency}, ${skill.icon})
      `;
    }

    console.log('✅ Database seeded successfully!');
    console.log(`📊 Added ${projects.length} projects and ${skills.length} skills`);

  } catch (error) {
    console.error('❌ Error seeding database:', error);
  }
}

// Run the seed function
seedData(); 