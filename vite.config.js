import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração otimizada para deploy na raiz do Vercel
export default defineConfig({
  plugins: [react()],
  base: '/', 
})