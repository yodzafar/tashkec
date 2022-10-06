/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['kr', 'ru', 'uz'],
    defaultLocale: 'kr',
  },
}

module.exports = nextConfig
