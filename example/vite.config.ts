import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import stylelint from 'vite-plugin-stylelint';

// https://vitejs.dev/config/
// https://vitejs.dev/config/#using-environment-variables-in-config
export default defineConfig(({ command, mode, ssrBuild }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, "env", '')

  return {
    // vite config
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    envDir: "env",
    base: env.VITE_BASE,
    plugins: [
      vue(),
      eslint({
        cache: false,
        fix: false,
        eslintPath: 'eslint',
        include: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx', '**/*.vue', '**/*.svelte'],
        exclude: ['**/node_modules/**'],
        lintOnStart: false,
        emitWarning: false,
        emitError: true,
        failOnWarning: false,
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
  }
})