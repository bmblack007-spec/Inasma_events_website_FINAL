import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 1574,
    watch: {
      // Ignore the raw assets folder to prevent EBUSY crashes on Windows
      // when files are being copied/uploaded (creates locked .tmp files)
      ignored: ['**/src/Assests/**', '**/src/assets/**'],
    },
  },
});
