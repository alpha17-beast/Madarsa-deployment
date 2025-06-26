import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// This configuration assumes the command is run from the project root.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Paths are defined from the actual project root.
      "@": path.resolve(__dirname, "./client/src"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
})
