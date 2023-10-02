// core

import * as Prism from 'prismjs'

// theme
// import 'prismjs/themes/prism.min.css'
// import 'prismjs/themes/prism-dark.min.css'
// import 'prismjs/themes/prism-okaidia.min.css'
import 'prismjs/themes/prism-tomorrow.min.css'
// import 'prismjs/themes/prism-coy.min.css'
// import 'prismjs/themes/prism-funky.min.css'
// import 'prismjs/themes/prism-solarizedlight.min.css'
// import 'prismjs/themes/prism-twilight.min.css'

// theme from https://github.com/PrismJS/prism-themes/
// import '@/public/prismjs/themes/prism-a11y-dark.min.css'
// import '@/public/prismjs/themes/prism-dracula.min.css'
// import '@/public/prismjs/themes/prism-gruvbox-dark.min.css'
// import '@/public/prismjs/themes/prism-material-oceanic.min.css'
// import '@/public/prismjs/themes/prism-synthwave84.min.css'
// import '@/public/prismjs/themes/prism-atom-dark.min.css'
// import '@/public/prismjs/themes/prism-duotone-dark.min.css'
// import '@/public/prismjs/themes/prism-gruvbox-light.min.css'
// import '@/public/prismjs/themes/prism-night-owl.min.css'
// import '@/public/prismjs/themes/prism-vs.min.css'
// import '@/public/prismjs/themes/prism-base16-ateliersulphurpool.light.min.css'
// import '@/public/prismjs/themes/prism-duotone-earth.min.css'
// import '@/public/prismjs/themes/prism-holi-theme.min.css'
// import '@/public/prismjs/themes/prism-nord.min.css'
// import '@/public/prismjs/themes/prism-vsc-dark-plus.min.css'
// import '@/public/prismjs/themes/prism-cb.min.css'
// import '@/public/prismjs/themes/prism-duotone-forest.min.css'
// import '@/public/prismjs/themes/prism-hopscotch.min.css'
// import '@/public/prismjs/themes/prism-one-dark.min.css'
// import '@/public/prismjs/themes/prism-xonokai.min.css'
// import '@/public/prismjs/themes/prism-coldark-cold.min.css'
// import '@/public/prismjs/themes/prism-duotone-light.min.css'
// import '@/public/prismjs/themes/prism-laserwave.min.css'
// import '@/public/prismjs/themes/prism-one-light.min.css'
// import '@/public/prismjs/themes/prism-z-touch.min.css'
// import '@/public/prismjs/themes/prism-coldark-dark.min.css'
// import '@/public/prismjs/themes/prism-duotone-sea.min.css'
// import '@/public/prismjs/themes/prism-lucario.min.css'
// import '@/public/prismjs/themes/prism-pojoaque.min.css'
// import '@/public/prismjs/themes/prism-coy-without-shadows.min.css'
// import '@/public/prismjs/themes/prism-duotone-space.min.css'
// import '@/public/prismjs/themes/prism-material-dark.min.css'
// import '@/public/prismjs/themes/prism-shades-of-purple.min.css'
// import '@/public/prismjs/themes/prism-darcula.min.css'
// import '@/public/prismjs/themes/prism-ghcolors.min.css'
// import '@/public/prismjs/themes/prism-material-light.min.css'
// import '@/public/prismjs/themes/prism-solarized-dark-atom.min.css'

// // components  (autoloader)
// import 'prismjs/components/prism-markup-templating.min.js'
// import 'prismjs/components/prism-javascript.min.js'
// import 'prismjs/components/prism-typescript.min.js'
// import 'prismjs/components/prism-css.min.js'
// import 'prismjs/components/prism-json.min.js'
// import 'prismjs/components/prism-bash.min.js'
// import 'prismjs/components/prism-go.min.js'
// import 'prismjs/components/prism-rust.min.js'
// import 'prismjs/components/prism-java.min.js'
// import 'prismjs/components/prism-kotlin.min.js'
// import 'prismjs/components/prism-php.min.js'
// import 'prismjs/components/prism-ruby.min.js'
// import 'prismjs/components/prism-python.min.js'
// import 'prismjs/components/prism-c.min.js'
// import 'prismjs/components/prism-csharp.min.js'
// import 'prismjs/components/prism-cpp.min.js'
// import 'prismjs/components/prism-objectivec.min.js'
// import 'prismjs/components/prism-dart.min.js'
// import 'prismjs/components/prism-docker.min.js'
// import 'prismjs/components/prism-markdown.min.js'
// import 'prismjs/components/prism-swift.min.js'
// import 'prismjs/components/prism-sql.min.js'

// plugins
import 'prismjs/plugins/toolbar/prism-toolbar.min.js'
import 'prismjs/plugins/toolbar/prism-toolbar.min.css'

import 'prismjs/plugins/line-highlight/prism-line-highlight.min.js'
import 'prismjs/plugins/line-highlight/prism-line-highlight.min.css'

import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.css'

import 'prismjs/plugins/command-line/prism-command-line.min'
import 'prismjs/plugins/command-line/prism-command-line.min.css'

import 'prismjs/plugins/show-language/prism-show-language.min.js'
import 'prismjs/plugins/keep-markup/prism-keep-markup.min.js'
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.min.js'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js'
import 'prismjs/plugins/file-highlight/prism-file-highlight.min.js'

import 'prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.js'
import 'prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.css'

import 'prismjs/plugins/autoloader/prism-autoloader.min.js'

// By default, the plugin will look for the missing grammars in the components folder.
// If your files are in a different location, you can specify it using the languages_path option:
// Prism.plugins.autoloader.languages_path = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/'
Prism.plugins.autoloader.languages_path = '/prismjs/components/'

// By default, the plugin uses the minified versions of the grammars.
// If you wish to use the development versions instead, you can set the use_minified option to false:
Prism.plugins.autoloader.use_minified = true

export { Prism }
