import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Local dev => '/';  Build (deploy) => '/Website/'
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/Website/' : '/',
  plugins: [react()],
  server: {
    port: 5174,
    strictPort: true,
    host: true,
    open: false,
  },
  preview: {
    port: 5174,
    strictPort: true,
  },
}))
