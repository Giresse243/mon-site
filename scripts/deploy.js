const { neon } = require('@neondatabase/serverless');
const fs = require('fs');
const path = require('path');

// Check if DATABASE_URL is set
if (!process.env.DATABASE_URL) {
  console.error('❌ DATABASE_URL environment variable is required');
  console.log('💡 Please set your Neon database connection string as DATABASE_URL');
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);

async function setupDatabase() {
  try {
    console.log('🔧 Setting up database...');

    // Create tables
    await sql`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        subject VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        image_url VARCHAR(500),
        tech_stack TEXT[],
        live_url VARCHAR(500),
        github_url VARCHAR(500),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS skills (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        category VARCHAR(100) NOT NULL,
        proficiency INTEGER DEFAULT 1,
        icon VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    console.log('✅ Database tables created successfully!');

    // Check if data exists
    const projectCount = await sql`SELECT COUNT(*) FROM projects`;
    const skillCount = await sql`SELECT COUNT(*) FROM skills`;

    if (projectCount[0].count === '0' && skillCount[0].count === '0') {
      console.log('📝 No data found. Run the seed script to add sample data:');
      console.log('   npm run seed');
    } else {
      console.log(`📊 Found ${projectCount[0].count} projects and ${skillCount[0].count} skills`);
    }

  } catch (error) {
    console.error('❌ Database setup failed:', error);
    process.exit(1);
  }
}

async function checkNetlifyConfig() {
  console.log('🔍 Checking Netlify configuration...');

  const netlifyToml = path.join(process.cwd(), 'netlify.toml');
  const packageJson = path.join(process.cwd(), 'package.json');

  if (!fs.existsSync(netlifyToml)) {
    console.error('❌ netlify.toml not found');
    process.exit(1);
  }

  if (!fs.existsSync(packageJson)) {
    console.error('❌ package.json not found');
    process.exit(1);
  }

  console.log('✅ Netlify configuration files found');
}

async function main() {
  console.log('🚀 Giresse Kimona Portfolio Deployment Setup');
  console.log('===========================================\n');

  await checkNetlifyConfig();
  await setupDatabase();

  console.log('\n📋 Next Steps:');
  console.log('1. Push your code to GitHub');
  console.log('2. Connect your repository to Netlify');
  console.log('3. Set DATABASE_URL environment variable in Netlify');
  console.log('4. Deploy your site');
  console.log('\n💡 Run "npm run seed" to add sample data to your database');
}

main().catch(console.error); 