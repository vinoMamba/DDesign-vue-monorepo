import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import sourceCode from './build/vite/sourceCode.ts'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      transformOn: true,
      mergeProps: true,
    }),
    sourceCode(),
  ],
  resolve: {
    alias: [
      {
        find: /\/@\//,
        replacement: `${pathResolve('src')}/`,
      },
    ],
  },
})
