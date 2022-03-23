import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  server: {
    host: "0.0.0.0", // 指定服务器主机名
    port: 2012, // 指定服务端口号
    open: true, // 运行自动打开浏览器
    proxy: {
      '/api': {
        target: 'http://192.168.10.167:88/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
