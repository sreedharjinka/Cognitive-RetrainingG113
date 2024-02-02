import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/cognitive-disabilities/",
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["@fortawesome/react-fontawesome"],
    },
  },
});


