import { defineConfig, splitVendorChunkPlugin } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../assets',
    emptyOutDir: true,
    assetsDir: '.',
    rollupOptions: {
      input: {
        main: 'src/scripts/main.js',
        // 'entry_cart': 'src/scripts/entries/cart.js',
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
  plugins: [splitVendorChunkPlugin()],
});
