import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), ],
  build: {
    manifest: true,
  },
  server: {
    proxy: {
      "/api": "http://localhost:3001", // proxy API requests to backend in development
    },
  },
})
