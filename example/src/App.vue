<template>
  <Editor :initialValue="content" style="width:100%;" height="800px" />
</template>

<script setup lang="ts">
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@snowdreamtech/vue-tui-editor';
import { ref } from 'vue';

const content = ref(
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

</script>