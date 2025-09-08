// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repo = 'Website' 

export default defineConfig({
  plugins: [react()],
  base: `/${repo}/`,          // ← IMPORTANT for GitHub Pages
  server: { port: 5174, strictPort: true, host: true, open: false },
  preview: { port: 5174, strictPort: true },
})
