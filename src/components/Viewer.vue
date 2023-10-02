<template>
    <div ref="toastuiViewer"></div>
</template>

<script setup lang="ts">
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css'
import { onMounted, onDeactivated, defineEmits, defineProps, ref } from 'vue'
import { editorEvents, defaultValueMap } from './options'
import { SAObject } from './interface'
import { plugins } from './plugins'
import { Prism } from './prismjs'


// language
import '@toast-ui/editor/dist/i18n/ar';
import '@toast-ui/editor/dist/i18n/en-us';
import '@toast-ui/editor/dist/i18n/fr-fr';
import '@toast-ui/editor/dist/i18n/ko-kr';
import '@toast-ui/editor/dist/i18n/pl-pl';
import '@toast-ui/editor/dist/i18n/sv-se';
import '@toast-ui/editor/dist/i18n/zh-cn';
import '@toast-ui/editor/dist/i18n/cs-cz';
import '@toast-ui/editor/dist/i18n/es-es';
import '@toast-ui/editor/dist/i18n/gl-es';
import '@toast-ui/editor/dist/i18n/it-it';
import '@toast-ui/editor/dist/i18n/nb-no';
import '@toast-ui/editor/dist/i18n/pt-br';
import '@toast-ui/editor/dist/i18n/tr-tr';
import '@toast-ui/editor/dist/i18n/zh-tw';
import '@toast-ui/editor/dist/i18n/de-de';
import '@toast-ui/editor/dist/i18n/fi-fi';
import '@toast-ui/editor/dist/i18n/hr-hr';
import '@toast-ui/editor/dist/i18n/ja-jp';
import '@toast-ui/editor/dist/i18n/nl-nl';
import '@toast-ui/editor/dist/i18n/ru-ru';
import '@toast-ui/editor/dist/i18n/uk-ua';

const props = defineProps({
    height: {
        type: String,
    },
    initialValue: {
        type: String,
    },
    options: {
        type: Object,
    },
})


const editorRef = ref()
const toastuiViewer = ref()

const getRootElement = (() => {
    return toastuiViewer
})


//mixin
const emit = defineEmits(editorEvents)

const eventOptions: SAObject = {};
editorEvents.forEach((event) => {
    eventOptions[event] = (...args: any) => {
        emit(event, ...args);
    };
});

const computedOptions: SAObject = {
    ...props.options,
    initialValue: props.initialValue,
    height: props.height,
    events: eventOptions,
};

Object.keys(defaultValueMap).forEach((key) => {
    if (!computedOptions[key]) {
        computedOptions[key] = defaultValueMap[key];
    }
});


onMounted(() => {
    const options = {
        ...computedOptions,
        viewer: true,
        plugins: plugins,
        el: toastuiViewer.value
    };

    editorRef.value = Editor.factory(options);

    Prism.highlightAll()
})


onDeactivated(() => {
    editorEvents.forEach((event) => {
        editorRef.value.off(event);
    });
    editorRef.value.destroy();
})


const invoke = ((methodName: string | number, ...args: any) => {
    let result = null;

    if (editorRef.value[methodName]) {
        result = editorRef.value[methodName](...args);
    }

    return result;
})

</script>