import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import stylelint from 'vite-plugin-stylelint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslint({
      cache: true,
      fix: true,
      eslintPath: 'eslint',
      include: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx', '**/*.vue', '**/*.svelte'],
      exclude: ['**/node_modules/**'],
      lintOnStart: true,
      emitWarning: true,
      emitError: true,
      failOnWarning: true,
      failOnError: true,
      formatter: 'stylish'
    }),
    stylelint({
      test: false,
      dev: true,
      build: false,
      cache: true,
      cacheLocation: '.stylelintcache',
      include: ['src/**/*.{css,scss,sass,less,styl,vue,svelte}'],
      exclude: ['node_modules', 'virtual:'],
      stylelintPath: 'stylelint',
      formatter: 'string',
      lintInWorker: true,
      lintOnStart: true,
      lintDirtyOnly: true,
      chokidar: false,
      emitWarning: true,
      emitWarningAsError: false,
      emitError: true,
      emitErrorAsWarning: false
    })
  ],
})