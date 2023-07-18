/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'picsum.photos',
      'raw.githubusercontent.com'
    ],
    // remotePatterns: [
    //   {
    //     hostname: 'picsum.photos',
    //     protocol: 'https',
    //   }
    // ]
  }
}

module.exports = nextConfig
