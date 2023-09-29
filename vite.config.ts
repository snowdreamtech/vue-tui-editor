import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
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
    // Library Mode
    // https://vitejs.dev/guide/build.html#library-mode
    esbuild: {
      drop: ['console', 'debugger'],
    },
    build: {
      emptyOutDir: false,
      copyPublicDir: false,
      lib: {
        // Could also be a dictionary or array of multiple entry points
        entry: resolve(__dirname, 'src/main.ts'),
        formats: ['es', 'umd', 'cjs', 'iife'],
        name: 'VueTS',
        // the proper extensions will be added
        fileName: ((format: string, entryName: string) => {
          let ext: string
          const mid = mode === 'minify' ? '.min' : ''
          const name = 'index'

          switch (format) {
            case 'es':
              ext = 'js'
              break;
            case 'umd':
              ext = 'umd.cjs'
              break;
            case 'cjs':
              ext = 'cjs'
              break;
            case 'iife':
              ext = 'iife.js'
              break;
          }
          return `${name}${mid}.${ext}`
        })
      },
      rollupOptions: {
        // make sure to externalize deps that shouldn't be bundled
        // into your library
        external: ['vue'],
        output: {
          // Provide global variables to use in the UMD build
          // for externalized deps
          globals: {
            vue: 'Vue',
          },
          // https://github.com/vitejs/vite/issues/4863#issuecomment-1274307771
          // entryFileNames: (entryInfo) => {
          //   const minify = mode === 'minify'
          //   if(minify){
          //     return `[name].min.js`
          //   }else{
          //     return `[name].js`
          //   }
          // },
          // chunkFileNames: (chunkInfo) => {
          //   const minify = mode === 'minify'
          //   if(minify){
          //     return `[name].min.js`
          //   }else{
          //     return `[name].js`
          //   }
          // },
          assetFileNames: (assetInfo) => {
            if (/\.css$/.test(assetInfo.name)) {
              const minify = mode === 'minify'
              if (minify) {
                return `[name].min[extname]`
              } else {
                return `[name][extname]`
              }
            }
          },
        },
      },
    },
    resolve: { alias: { src: resolve('src/') } },
  }
})