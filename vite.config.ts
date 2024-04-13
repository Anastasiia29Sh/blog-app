import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: { 
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/style/_variables.scss";'
      }
    }
  },

  // server: { 
  //   port: 8080,
  //   hmr: {
  //     host: '127.0.0.1',
  //     port: 8080,
  //   },
    // Set HTTPS proxy
    // proxy: {
    //   '/api': {
    //     target: 'http://91.220.155.235:8080/FrontTestingService-0.0.1/', // Back -end API address
    //     changeOrigin: true,
    //     rewrite: (path: string) => path.replace(/^\/api/, ''),
    //   },
    // },
  // },
})
