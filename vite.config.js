import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: 'D:/SchoolManagementApp/Frontend/vite-project/postcss.config.js', // Specify your PostCSS config path
  },
})
