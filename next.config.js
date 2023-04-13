/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

module.exports = {}

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/test-task-scand/' : '',
  images: {
    unoptimized: true,
  },
}
