import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Brauzer fayllarni to'g'ri ildiz mantiqida qidirishi uchun
  server: {
    port: 3000 // Loyihani 3000-portda yurgizish buyrug'i uchun
  }
})