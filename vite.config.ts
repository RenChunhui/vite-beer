import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [],
      dts: path.resolve(__dirname, 'types/auto-imports.d.ts'),
      resolvers: [NaiveUiResolver()],
    }),
    Components({
      dirs: [path.resolve(__dirname, 'src/components')],
      resolvers: [NaiveUiResolver()],
      dts: path.resolve(__dirname, 'types/components.d.ts'),
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
      },
    },
  },
})
