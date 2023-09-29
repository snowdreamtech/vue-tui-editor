import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslint({
      cache: true,
      fix: true,
      eslintPath: 'eslint',
      include:['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx', '**/*.vue', '**/*.svelte'],
      exclude:['**/node_modules/**'],
      lintOnStart: true,
      emitWarning: true,
      emitError: true,
      failOnWarning: true,
      failOnError: true,
      formatter: 'stylish'
    })
  ],
})