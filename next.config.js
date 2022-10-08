/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { // Allow next to load images from certain domains
    domains: ['raw.githubusercontent.com'],
  }
}

module.exports = nextConfig
