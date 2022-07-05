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
  },
  build: { // 打包配置
    target: "modules", // 浏览器兼容性  "esnext"|"modules"
    outDir: "dist", // 指定输出路径
    assetsDir: "assets", // 生成静态资源的存放路径
    assetsInlineLimit: 4096, // 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项
    cssCodeSplit: true, // 启用/禁用 CSS 代码拆分
    sourcemap: false,
    rollupOptions: {},
    commonjsOptions: {},
    manifest: false,
    minify: "terser", // terser 构建后文件体积更小    
    write: true, // 设置为 false 来禁用将构建后的文件写入磁盘    
    emptyOutDir: true, // 默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。    
    brotliSize: true, // 启用/禁用 brotli 压缩大小报告    
    chunkSizeWarningLimit: 500, // chunk 大小警告的限制
  },    
})
