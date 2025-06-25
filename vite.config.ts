import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // THIS IS THE NEW, CRITICAL LINE:
  root: './client',

  // This tells Vite to run the build from the 'dist/public' folder
  build: {
    outDir: '../dist/public',
  },

  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Vite's root is now 'client', so this path is simpler
      "@shared": path.resolve(__dirname, "../shared"), // We need to go up one directory
    },
  },
})
