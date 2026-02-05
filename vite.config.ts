import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/congresso-lp/',
  build: {
    // Não inline imagens como base64, mantém como arquivos
    assetsInlineLimit: 0,
  },
})
