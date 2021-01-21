import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue()],
  server: {
    port: 4000
  },
  alias: {
    '/@/': `${ resolve(__dirname, '.','src')}/`
  }
}
