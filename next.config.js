/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')
const withPlugins = require('next-compose-plugins')
const {withPlausibleProxy} = require('next-plausible')
const withBundleAnalyzer = require('@next/bundle-analyzer')

const plausiblePlugin = withPlausibleProxy
const bundleAnalyzer = withBundleAnalyzer({enabled: process.env.ANALYZE === true})

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

module.exports = withPlugins([[plausiblePlugin, bundleAnalyzer], nextTranslate], nextConfig)
