import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Inju_Blog/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
