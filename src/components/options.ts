import { SAObject } from './interface'

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

export const defaultValueMap: SAObject = {
    initialEditType: 'markdown',
    initialValue: '',
    height: '800px',
    previewStyle: 'vertical',
};
