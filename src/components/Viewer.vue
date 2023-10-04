<template>
    <div ref="toastuiViewer"></div>
</template>

<script setup lang="ts">
import Editor, { EditorType } from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css'
import { onMounted, onDeactivated, defineEmits, defineProps, watch, ref } from 'vue'
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

watch(
    () => props.height,
    (newValue: any) => {
        editorRef.value.height(newValue);
    }
)

//mixin
const emit = defineEmits(editorEvents)

const eventOptions: SAObject = {};
editorEvents.forEach((event) => {
    eventOptions[event] = (...args: any) => {
        emit(event, ...args);
    };
})

const computedOptions: SAObject = {
    ...props.options,
    initialValue: props.initialValue,
    height: props.height,
   // events: eventOptions,
   events: {
        load: (param: Editor) => {
            emit('load', param);
        },
        change: (editorType: EditorType) => {
            if (editorType === 'markdown') {
                emit('change', editorType, editorRef.value.getMarkdown());
            } else if (editorType === 'wysiwyg') {
                emit('change', editorType, editorRef.value.getHTML());
            } else {
                emit('change', editorType, '');
            }
        },
        caretChange: (editorType: EditorType) => {
            emit('caretChange', editorType);
        },
        focus: (editorType: EditorType) => {
            emit('focus', editorType);
        },
        blur: (editorType: EditorType) => {
            emit('blur', editorType);
        },
        keydown: (editorType: EditorType, ev: KeyboardEvent) => {
            emit('keydown', editorType, ev);
        },
        keyup: (editorType: EditorType, ev: KeyboardEvent) => {
            emit('keyup', editorType, ev);
        },
        beforePreviewRender: (html: string) => {
            emit('beforePreviewRender', html);
            return html
        },
        beforeConvertWysiwygToMarkdown: (markdownText: string) => {
            emit('beforeConvertWysiwygToMarkdown', markdownText);
            return markdownText
        }
    },
    customHTMLRenderer: {
        // codeBlock(node: any) {
        //     const { fenceLength, info } = node as any;
        //     const infoWords = info ? info.split(/\s+/) : [];
        //     const preClasses = [];
        //     const codeAttrs: any = {};

        //     if (fenceLength > 3) {
        //         codeAttrs['data-backticks'] = fenceLength;
        //     }

        //     let language = ''
        //     if (infoWords.length > 0 && infoWords[0].length > 0) {
        //         const [lang] = infoWords;

        //         preClasses.push(`language-${lang}`);
        //         codeAttrs['data-language'] = lang;

        //         const registeredLang = Prism.languages[lang];

        //         if (registeredLang) {
        //             language = lang

        //             node.literal! = Prism.highlight(node.literal!, registeredLang, lang);
        //         }
        //     }

        //     return [
        //         { type: 'openTag', tagName: 'div ', classNames: ['code-toolbar'] },
        //         { type: 'openTag', tagName: 'pre', classNames: preClasses },
        //         { type: 'openTag', tagName: 'code', classNames: preClasses, attributes: codeAttrs },
        //         { type: 'html', content: node.literal! },
        //         { type: 'closeTag', tagName: 'code' },
        //         { type: 'closeTag', tagName: 'pre' },
        //         { type: 'html', content: `<div class="toolbar">
        //             <div class="toolbar-item"><span>${language}</span></div>
        //         </div>`
        //         },
        //         { type: 'closeTag', tagName: 'div ' },
        //     ];
        // },
        htmlBlock: {
            iframe(node: any) {
                return [
                    { type: 'openTag', tagName: 'iframe', outerNewLine: true, attributes: node.attrs },
                    { type: 'html', content: node.childrenHTML },
                    { type: 'closeTag', tagName: 'iframe', outerNewLine: true },
                ];
            },
            video(node: any) {
                return [
                    { type: 'openTag', tagName: 'video', outerNewLine: true, attributes: node.attrs },
                    { type: 'html', content: node.childrenHTML },
                    { type: 'closeTag', tagName: 'video', outerNewLine: true },
                ];
            }
        },
    }
}

Object.keys(defaultValueMap).forEach((key) => {
    if (!computedOptions[key]) {
        computedOptions[key] = defaultValueMap[key];
    }
})


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