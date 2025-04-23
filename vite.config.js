import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [tailwindcss()],
  
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'public/pages/services.html'),
        projects: resolve(__dirname, 'public/pages/projects.html'),
        contact: resolve(__dirname, 'public/pages/contact.html')
      },
    },
    outDir: 'dist'
  }
})