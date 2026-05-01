import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      axios: 'axios/dist/browser/axios.cjs'
    }
  },
  plugins: [react()],
})
