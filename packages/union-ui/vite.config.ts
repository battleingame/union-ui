import { defineConfig } from 'vite'
import pak from './package.json';
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({

  build: {
    lib: {
      entry: resolve(__dirname, './src/main.ts'),
      name: pak.name,
      fileName: 'ui'
    },

    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],

      output: {
        exports: 'named', // https://rollupjs.org/configuration-options/#output-exports
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },

    terserOptions: { // 在打包代码时移除 console、debugger 和 注释
      compress: {
        /* (default: false) -- Pass true to discard calls to console.* functions.
          If you wish to drop a specific function call such as console.info and/or
          retain side effects from function arguments after dropping the function
          call then use pure_funcs instead
        */
        drop_console: true, // 生产环境时移除console
        drop_debugger: true
      },
      format: {
        comments: false // 删除注释comments
      }
    }
  },
  resolve: {
    dedupe: ['vue']
  },
  plugins: [vue(), dts({
    insertTypesEntry: true, copyDtsFiles: false
  })]
});