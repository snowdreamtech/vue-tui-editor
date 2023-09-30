<template>
    <div ref="toastuiEditor"></div>
</template>

<script setup lang="ts">
import Editor from '@toast-ui/editor';
import { onMounted, onDeactivated, defineEmits, defineProps, watch, ref } from 'vue'
import { editorEvents, defaultValueMap } from './options'
import { SAObject } from './interface'

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