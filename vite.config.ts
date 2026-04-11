import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: [

    ]
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/vanta') || id.includes('node_modules/three')) {
            return 'vanta'
          }
        },
      },
    },
  },
})
