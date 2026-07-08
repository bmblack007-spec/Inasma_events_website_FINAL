import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate React runtime so it can be cached independently of app code
          'vendor-react': ['react', 'react-dom'],
          // Separate Lucide icon tree-shaking chunk
          'vendor-icons': ['lucide-react'],
        },
      },
    },
    // Increase inline limit so tiny assets don't create extra requests
    assetsInlineLimit: 4096,
  },
});
