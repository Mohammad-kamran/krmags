import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Add support for JS and JSX files
  },
})
