import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      axios: 'axios/dist/browser/axios.cjs'
    }
  },
  plugins: [
    react(),
    tailwindcss()
  ],
  server: { port: 5174 }
})
