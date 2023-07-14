import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import StylelintPlugin from 'vite-plugin-stylelint'
import AutoImport from 'unplugin-auto-import/vite'
import { visualizer } from "rollup-plugin-visualizer";

import Components from 'unplugin-vue-components/vite' // 按需加载自定义组件
import { ElementPlusResolver} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    rollupOptions: {
        output: {
          // eslint-disable-next-line consistent-return
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          }
        },
    }
  },
 
  plugins: [
    vue(), 
    Components({
      dts: true,
      dirs: ['src/components'], // 按需加载的文件夹
      resolvers: [
          ElementPlusResolver(),  // Antd   按需加载
     ] 
    }),
    visualizer({
      gzipSize: true,
      brotliSize: true,
      emitFile: false,
      filename: "test.html", // 分析图生成的文件名
      open:true // 如果存在本地服务端口，将在打包后自动展示
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, 
        /\.vue$/, 
        /\.vue\?vue/, 
        /\.md$/,
      ],
      imports:['vue','vue-router','pinia'],
      dts: './auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),
    eslintPlugin(), 
    StylelintPlugin({fix: true}),
  ],
  server: {
    host: 'localhost',
    port: 8080,
    open: true,
  },
})
