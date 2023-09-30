import { SSObject } from './interface'

export const editorEvents = [
    'load',
    'change',
    'caretChange',
    'focus',
    'blur',
    'keydown',
    'keyup',
    'beforePreviewRender',
    'beforeConvertWysiwygToMarkdown',
];

export const defaultValueMap: SSObject = {
    initialEditType: 'markdown',
    initialValue: '',
    height: '300px',
    previewStyle: 'vertical',
};
