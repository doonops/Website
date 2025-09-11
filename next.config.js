/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Generate a fully static export suitable for GitHub Pages
  output: 'export',
  // If you deploy to https://<user>.github.io/<repo>/ then uncomment below and set to '/<repo>'
  // basePath: '/REPO_NAME',
  // assetPrefix: '/REPO_NAME/',
  images: { unoptimized: true },
  // Optional: add trailing slash for simpler static hosting
  trailingSlash: true,
}

module.exports = nextConfig
