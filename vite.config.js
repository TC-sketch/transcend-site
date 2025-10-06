import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Host path for GitHub Pages (TC-sketch/transcend-site)
export default defineConfig({
  plugins: [react()],
  base: '/transcend-site/'
})
