import { ConfigEnv, loadEnv, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { viteMockServe } from 'vite-plugin-mock'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfigExport => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), 'VITE'))

  return {
    plugins: [
      vue(),
      // viteMockServe({
      //   mockPath: 'mocks',
      //   localEnabled: mode === 'development',
      //   prodEnabled: false,
      //   injectCode: `
      //     import { mountProdMockServer } from './mocks'
      //     mountProdMockServer()
      //   `,
      // }),
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
          target: process.env.VITE_BASE_URL,
          changeOrigin: true,
        },
      },
    },
  }
}
