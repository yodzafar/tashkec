/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')
const { withEffectorReactAliases } = require('effector-next/tools')

const enhance = withEffectorReactAliases()

module.exports = nextTranslate(enhance({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // domains: ['http://176.96.241.203:9000']
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '176.96.241.203',
        port: '9000'
      }
    ]
  }
}))
