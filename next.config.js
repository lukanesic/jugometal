/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'www.solis-srbija.rs',
      'www.agrovojvodina-mehanizacija.co.rs',
      'www.ursus.com',
      'poljomarket.rs',
      'www.celmak.com',
      'tafe.com',
      'mahindratractor.com',
      'deere.rs',
    ],
  },
}

module.exports = nextConfig
