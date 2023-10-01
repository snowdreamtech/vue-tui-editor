<template>
    <div ref="toastuiEditor"></div>
</template>

<script setup lang="ts">
import Editor from '@toast-ui/editor';
import { onMounted, onDeactivated, defineEmits, defineProps, watch, ref } from 'vue'
import { editorEvents, defaultValueMap } from './options'
import { SAObject } from './interface'

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
    previewStyle: {
        type: String,
    },
    height: {
        type: String,
    },
    initialEditType: {
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
const toastuiEditor = ref()

const getRootElement = (() => {
    return toastuiEditor
})

watch(
    () => props.previewStyle,
    (newValue: any) => {
        editorRef.value.changePreviewStyle(newValue);
    }
)

watch(
    () => props.height,
    (newValue: any) => {
        editorRef.value.height(newValue);
    }
)

//mixin
const emit = defineEmits(editorEvents)

const eventOptions: any = {};
editorEvents.forEach((event) => {
    eventOptions[event] = (...args: any) => {
        emit(event, ...args);
    };
});

const computedOptions: SAObject = {
    ...props.options,
    initialEditType: props.initialEditType,
    initialValue: props.initialValue,
    height: props.height,
    previewStyle: props.previewStyle,
    events: eventOptions,
};

Object.keys(defaultValueMap).forEach((key) => {
    if (!computedOptions[key]) {
        computedOptions[key] = defaultValueMap[key];
    }
});

onMounted(() => {
    const options = { ...computedOptions, el: toastuiEditor.value };

    editorRef.value = new Editor(options);
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