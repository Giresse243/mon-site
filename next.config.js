/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr'
  },
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
