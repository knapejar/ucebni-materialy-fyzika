import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' => relativní cesty, funguje na GitHub Pages i v podsložce.
export default defineConfig({
  base: './',
  plugins: [react()],
  server: { open: true },
})
