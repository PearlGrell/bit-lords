import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    FontFamily: {
      display: ['Urbanist', 'sans-serif'],
      body: ['Urbanist', 'sans-serif'],
    },
  },
  plugins: [react(), tailwindcss()],
  server:{ 
    allowedHosts: ['3420b0c7653f7888eb10b67c221848f6.serveo.net']
  }
})
