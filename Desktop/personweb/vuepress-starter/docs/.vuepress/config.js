import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  lang: 'en-US',
  base: 'Specialmogic.github.io',
  title: 'Welcome to Specialmogic's Palace!',
  description: 'Specialmogic's docs and notes about anything',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: ['/', '/get-started'],
  }),

  bundler: webpackBundler(),
})
