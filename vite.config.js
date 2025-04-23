import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [tailwindcss()],
  
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'src/pages/services.html'),
        projects: resolve(__dirname, 'src/pages/projects.html'),
        contact: resolve(__dirname, 'src/pages/contact.html')
      },
    },
    outDir: 'dist'
  }
})