import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  // Tells Vite that the frontend code lives in the 'client' folder.
  root: path.resolve(__dirname, 'client'),

  build: {
    // Specifies that the build output should go to 'dist/public'.
    outDir: path.resolve(__dirname, 'dist/public'),
  },

  plugins: [react()],
  resolve: {
    alias: {
      // These aliases now work correctly because the root is defined.
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
})
