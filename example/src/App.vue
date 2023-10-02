<template>
  <h1>Editor Basic</h1>
  <Editor :initialValue="content"/>

  <h1>Editor With All Plugins</h1>
  <Editor :initialValue="fullcontent" :options="editorOptions" /> 

   <h1>Viewer Basic</h1>
  <Viewer :initialValue="content"/>

  <h1>Viewer With All Plugins</h1>
  <Viewer :initialValue="fullcontent" :options="editorOptions" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { Editor, Viewer } from '@snowdreamtech/vue-tui-editor';
// import '@snowdreamtech-ui/vue-tui-editor/dist/style.css'
import '../../dist/style.css'

const content = ref(
`
![image](https://uicdn.toast.com/toastui/img/tui-editor-bi.png)

# Awesome Editor!

It has been _released as opensource in 2018_ and has ~~continually~~ evolved to **receive 10k GitHub ⭐️ Stars**.

## Create Instance

You can create an instance with the following code and use \`getHtml()\` and \`getMarkdown()\` of the [Editor](https://github.com/nhn/tui.editor).

\`\`\`js
const editor = new Editor(options);
\`\`\`

> See the table below for default options
> > More API information can be found in the document

| name | type | description |
| --- | --- | --- |
| el | \`HTMLElement\` | container element |

## Features

* CommonMark + GFM Specifications
   * Live Preview
   * Scroll Sync
   * Auto Indent
   * Syntax Highlight
        1. Markdown
        2. Preview

## Support Wrappers

> * Wrappers
>    1. [x] React
>    2. [x] Vue
>    3. [ ] Ember
`
)

const fullcontent = ref(
  `
  ## Color Syntax Plugin

<span style="color:#86c1b9">Click the color picker button on the toolbar!</span>

## Table Merged Cell Plugin

| @cols=2:merged |
| --- | --- |
| table | table2 |

## Code Syntax Highlighting Plugin

\`\`\`javascript
console.log('foo')
\`\`\`
\`\`\`html
<div id="editor"><span>baz</span></div>
\`\`\`

## Chart Plugin

$$chart
,category1,category2
Jan,21,23
Feb,31,17

type: column
title: Monthly Revenue
x.title: Amount
y.title: Month
y.min: 1
y.max: 40
y.suffix: $
$$


## UML Plugin

$$uml
partition Conductor {
  (*) --> "Climbs on Platform"
  --> === S1 ===
  --> Bows
}

partition Audience #LightSkyBlue {
  === S1 === --> Applauds
}

partition Conductor {
  Bows --> === S2 ===
  --> WavesArmes
  Applauds --> === S2 ===
}

partition Orchestra #CCCCEE {
  WavesArmes --> Introduction
  --> "Play music"
}
$$
  `
)

const editorOptions = ref({
  language:'zh-CN',
}) 
</script>