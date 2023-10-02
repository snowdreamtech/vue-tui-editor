
import { Prism } from './prismjs'
// import 'prismjs/themes/prism.css'
// import 'prismjs/themes/prism-dark.css'
// import 'prismjs/themes/prism-okaidia.css'
// import 'prismjs/themes/prism-tomorrow.css'
// import 'prismjs/themes/prism-coy.css'
// import 'prismjs/themes/prism-funky.css'
// import 'prismjs/themes/prism-solarizedlight.css'
// import 'prismjs/themes/prism-twilight.css'

import '@toast-ui/chart/dist/toastui-chart.css'
import chart from '@toast-ui/editor-plugin-chart'

import uml from '@toast-ui/editor-plugin-uml'

import '@toast-ui/editor-plugin-table-merged-cell/dist/toastui-editor-plugin-table-merged-cell.css'
import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell'

import 'tui-color-picker/dist/tui-color-picker.css'
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css'
import colorSyntax from '@toast-ui/editor-plugin-color-syntax'

// import * as Prism from 'prismjs'
// // import 'prismjs/themes/prism.css'
// // import 'prismjs/themes/prism-dark.css'
// // import 'prismjs/themes/prism-okaidia.css'
// import 'prismjs/themes/prism-tomorrow.css'
// // import 'prismjs/themes/prism-coy.css'
// // import 'prismjs/themes/prism-funky.css'
// // import 'prismjs/themes/prism-solarizedlight.css'
// // import 'prismjs/themes/prism-twilight.css'



import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css'
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
// import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js';
// import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.js';


const chartOptions = {
  minWidth: 100,
  maxWidth: 600,
  minHeight: 100,
  maxHeight: 300
}

export const plugins: any = [[chart, chartOptions], uml, tableMergedCell, colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]
