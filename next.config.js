/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: process.env.NODE_ENV === "production",
  images: {
    domains: [
      'picsum.photos',
      'raw.githubusercontent.com',
      'images.weserv.nl',
      'images.zzenz.com',
    ]
  }
}

module.exports = nextConfig
