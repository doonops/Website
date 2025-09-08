// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // IMPORTANT: base ko '/' rakho (ya hata do). '/Website/' bilkul mat use karo.
  base: '/',
  server: { port: 5174, strictPort: true, host: true, open: false },
  preview: { port: 5174, strictPort: true },
})
