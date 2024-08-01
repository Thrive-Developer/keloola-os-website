<template>
    <Head :title="custom_page ? 'Edit Custom Page' : 'Create Custom Page'" />
    <div class="page-header d-print-none">
        <div class="container-xl">
            <div class="row g-2 align-items-center">
                <div class="col">
                    <h2 class="page-title">
                        {{ custom_page ? "Edit" : "Create" }} Custom Page
                    </h2>
                </div>
            </div>
        </div>
    </div>
    <div class="page-body">
        <div class="container-xl">
            <div class="row row-deck row-cards">
                <form @submit.prevent="store">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body border-bottom py-3">
                                <div class="mb-3">
                                    <label class="form-label">Title</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        autocomplete="off"
                                        v-model="model.title"
                                    />
                                    <small
                                        class="form-text text-danger"
                                        v-if="errors.title"
                                        >{{ errors.title }}</small
                                    >
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Content</label>
                                    <ckeditor
                                        :editor="state.editor"
                                        v-model="model.content"
                                        :config="state.editorConfig"
                                    ></ckeditor>
                                    <small
                                        class="form-text text-danger"
                                        v-if="errors.content"
                                        >{{ errors.content }}</small
                                    >
                                </div>
                            </div>
                            <div class="card-footer">
                                <button
                                    type="button"
                                    @click="handleBackPage"
                                    class="btn btn-danger me-2"
                                >
                                    Back
                                </button>
                                <button type="submit" class="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { Head, router } from "@inertiajs/vue3";
import { reactive } from "vue";
import {
	ClassicEditor,
	AccessibilityHelp,
	Autoformat,
	AutoImage,
	AutoLink,
	Autosave,
	BalloonToolbar,
	BlockQuote,
	BlockToolbar,
	Bold,
	CloudServices,
	Code,
	CodeBlock,
	Essentials,
	GeneralHtmlSupport,
	Heading,
	Highlight,
	HtmlComment,
	HtmlEmbed,
	ImageBlock,
	ImageCaption,
	ImageInsertViaUrl,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Italic,
	Link,
	List,
	Paragraph,
	PasteFromOffice,
	SelectAll,
	ShowBlocks,
	SourceEditing,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	TextTransformation,
	TodoList,
	Underline,
	Undo,
	MediaEmbed,
	Base64UploadAdapter 
} from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import UploadAdapter from "../../Plugins/UploadAdapter.js";

export default {
    components: {
        Head,
        // ckeditor: CKEditor.component,
    },

    props: {
        errors: Object,
        custom_page: Object,
    },

    setup(props) {
        const model = reactive({
            title: props.custom_page ? props.custom_page.title : "",
            slug: props.custom_page ? props.custom_page.slug : "",
            content: props.custom_page ? props.custom_page.content : "",
        });

        let state = reactive({
            currenctProductImage: "",
            editor: ClassicEditor,
            editorConfig: {
                extraPlugins: [uploadAdapterPlugin],
                toolbar: {
                    items: [
                        'undo',
                        'redo',
                        '|',
                        // 'showBlocks',
                        // 'selectAll',
                        // 'textPartLanguage',
                        // '|',
                        'heading',
                        '|',
                        'bold',
                        'italic',
                        'link',
                        'bulletedList',
                        'numberedList',
                        // 'underline',
                        // 'code',
                        '|',
                        // 'todoList',
                        'outdent',
                        'indent',
                        '|',
                        // 'highlight',
                        'insertTable',
                        'blockQuote',
                        'insertImage',
                        'mediaEmbed',
                        'codeBlock',
                        // 'htmlEmbed',
                        // '|',
                        // 'accessibilityHelp'
                    ],
                    shouldNotGroupWhenFull: false
                },
                plugins: [
                    AccessibilityHelp,
                    Autoformat,
                    AutoImage,
                    AutoLink,
                    Autosave,
                    BalloonToolbar,
                    BlockQuote,
                    BlockToolbar,
                    Bold,
                    CloudServices,
                    Code,
                    CodeBlock,
                    Essentials,
                    GeneralHtmlSupport,
                    Heading,
                    Highlight,
                    HtmlComment,
                    HtmlEmbed,
                    ImageBlock,
                    ImageCaption,
                    ImageInsertViaUrl,
                    ImageToolbar,
                    ImageUpload,
                    Indent,
                    IndentBlock,
                    Italic,
                    Link,
                    List,
                    Paragraph,
                    PasteFromOffice,
                    SelectAll,
                    ShowBlocks,
                    SourceEditing,
                    Table,
                    TableCaption,
                    TableCellProperties,
                    TableColumnResize,
                    TableProperties,
                    TableToolbar,
                    TextTransformation,
                    TodoList,
                    Underline,
                    Undo,
                    MediaEmbed,
                    Base64UploadAdapter
                ],
                heading: {
                    options: [
                        {
                            model: 'paragraph',
                            title: 'Paragraph',
                            class: 'ck-heading_paragraph'
                        },
                        {
                            model: 'heading1',
                            view: 'h1',
                            title: 'Heading 1',
                            class: 'ck-heading_heading1'
                        },
                        {
                            model: 'heading2',
                            view: 'h2',
                            title: 'Heading 2',
                            class: 'ck-heading_heading2'
                        },
                        {
                            model: 'heading3',
                            view: 'h3',
                            title: 'Heading 3',
                            class: 'ck-heading_heading3'
                        },
                        {
                            model: 'heading4',
                            view: 'h4',
                            title: 'Heading 4',
                            class: 'ck-heading_heading4'
                        },
                        {
                            model: 'heading5',
                            view: 'h5',
                            title: 'Heading 5',
                            class: 'ck-heading_heading5'
                        },
                        {
                            model: 'heading6',
                            view: 'h6',
                            title: 'Heading 6',
                            class: 'ck-heading_heading6'
                        }
                    ]
                },
                balloonToolbar: ['bold', 'italic', '|', 'link', '|', 'bulletedList', 'numberedList'],
                blockToolbar: ['bold', 'italic', '|', 'link', 'insertTable', '|', 'bulletedList', 'numberedList', 'outdent', 'indent'],
                htmlSupport: {
                    allow: [
                        {
                            name: /^.*$/,
                            styles: true,
                            attributes: true,
                            classes: true
                        }
                    ]
                },
                initialData: '',
                link: {
                    addTargetToExternalLinks: true,
                    defaultProtocol: 'https://',
                    decorators: {
                        toggleDownloadable: {
                            mode: 'manual',
                            label: 'Downloadable',
                            attributes: {
                                download: 'file'
                            }
                        }
                    }
                },
                placeholder: 'Type or paste your content here!',
                table: {
                    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
                },
                image: {
                    toolbar: ['imageTextAlternative']
                },
            },
        });

        function store() {
            if (props.custom_page) {
                router.put(`/admin/custom-page/${props.custom_page.id}`, model);
                return;
            }
            router.post("/admin/custom-page", model);
        }

        function handleBackPage() {
            router.get("/admin/custom-page");
        }

        function uploadAdapterPlugin(editor) {
            editor.plugins.get("FileRepository").createUploadAdapter = (
                loader
            ) => {
                return new UploadAdapter(loader);
            };
        }

        return {
            model,
            store,
            handleBackPage,
            state,
        };
    },
};
</script>
