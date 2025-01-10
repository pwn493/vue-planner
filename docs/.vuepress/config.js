import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),
  base: '/vue-planner/',
  plugins: [
    [
      registerComponentsPlugin({
        componentsDir: path.resolve(__dirname, './components'),
      }),
    ],
  ],
})