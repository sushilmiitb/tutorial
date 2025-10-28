import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Vite configuration for React application
 * Enables React plugin for Fast Refresh and JSX transformation
 * Includes Tailwind CSS v4 Vite plugin for optimized CSS processing
 */
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})

