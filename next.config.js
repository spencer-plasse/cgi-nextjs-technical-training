/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.scdn.co"] // Must allow the domain that Spotify artist images come from
  }
}

module.exports = nextConfig
