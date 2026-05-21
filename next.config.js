/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,

  // Stop dev reload loop: ignore built folders (docs/, out/) from file watcher
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: [
          '**/node_modules/**',
          '**/.git/**',
          '**/.next/**',
          '**/out/**',
          '**/docs/**',
          '**/dist/**',
        ],
        aggregateTimeout: 300,
      }
    }
    return config
  },
}

module.exports = nextConfig
