/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '176.96.241.203',
        port: '9000'
      }
    ]
  }
}

module.exports = nextTranslate({
  ...nextConfig
})
