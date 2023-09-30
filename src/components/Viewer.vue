<template>
    <div ref="toastuiEditorViewer"></div>
</template>

<script setup lang="ts">
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';
import { onMounted, onDeactivated, defineEmits, defineProps, ref } from 'vue'
import { editorEvents, defaultValueMap } from './options'
import { SAObject } from './interface'

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
const toastuiEditorViewer = ref()

const getRootElement = (() => {
    return toastuiEditorViewer
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
    const options = { ...computedOptions, el: toastuiEditorViewer.value };

    editorRef.value = new Viewer(options);
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