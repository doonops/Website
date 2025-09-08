// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Custom domain (https://doonops.com):
  base: '/',
  // Agar GitHub Pages project path hota to: base: '/<repo-name>/'
})
