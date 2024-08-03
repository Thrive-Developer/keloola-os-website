<template>
    <Head :title="config ? 'Edit Config' : 'Create Config'" />
    <div class="page-header d-print-none">
        <div class="container-xl">
            <div class="row g-2 align-items-center">
                <div class="col">
                    <h2 class="page-title">
                        {{ config ? "Edit" : "Create" }} Config
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
                                    <label class="form-label">Key</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        autocomplete="off"
                                        v-model="model.key"
                                        readonly
                                    />
                                    <small
                                        class="form-text text-danger"
                                        v-if="errors.key"
                                        >{{ errors.key }}</small
                                    >
                                </div>

                                <span v-if="config.type == 'BUTTON'">
                                    <div class="mb-3">
                                        <label class="form-label">Label</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            autocomplete="off"
                                            v-model="model.value"
                                        />
                                        <small
                                            class="form-text text-danger"
                                            v-if="errors.value"
                                            >{{ errors.value }}</small
                                        >
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label">Link</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            autocomplete="off"
                                            v-model="model.link"
                                        />
                                        <small
                                            class="form-text text-danger"
                                            v-if="errors.link"
                                            >{{ errors.link }}</small
                                        >
                                    </div>
                                </span>

                                <span v-else-if="config.type == 'TEXT'">
                                    <div class="mb-3">
                                        <label class="form-label">Value</label>
                                        <ckeditor
                                            :editor="state.editor"
                                            v-model="model.value"
                                            :config="state.editorConfig"
                                        ></ckeditor>
                                        <small
                                            class="form-text text-danger"
                                            v-if="errors.value"
                                            >{{ errors.value }}</small
                                        >
                                    </div>
                                </span>
                                <span v-else-if="config.type == 'IMAGE'">
                                    <div class="mb-3">
                                        <label class="form-label">Value</label>
                                        <input
                                            type="file"
                                            class="form-control"
                                            autocomplete="off"
                                            @input="updateImage($event)"
                                        />
                                        <img
                                            v-if="state.currentImage"
                                            :src="state.currentImage"
                                            alt="product image"
                                            :style="{
                                                width: '250px',
                                                height: '250px',
                                            }"
                                            class="img-thumbnail mt-3"
                                        />
                                        <small
                                            class="form-text text-danger"
                                            v-if="errors.image"
                                            >{{ errors.image }}</small
                                        >
                                    </div>
                                </span>
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
        // Link,
        // ckeditor: CKEditor.component,
    },

    props: {
        errors: Object,
        config: Object,
    },

    setup(props) {
        const model = reactive({
            key: props.config ? props.config.key : "",
            value: props.config ? props.config.value : "",
            link: props.config ? props.config.link : "",
        });

        let state = reactive({
            currentImage: props.config ? props.config.value : "",
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
            if (props.config) {
                router.post(`/admin/config/${props.config.id}`, {
                    _method: "put",
                    ...model,
                });
                return;
            }
            router.post("/admin/config", model);
        }

        function handleBackPage() {
            router.get("/admin/config");
        }

        function uploadAdapterPlugin(editor) {
            editor.plugins.get("FileRepository").createUploadAdapter = (
                loader
            ) => {
                return new UploadAdapter(loader);
            };
        }

        function updateImage(event) {
            const file = event.target.files[0];
            model.value = file;

            const reader = new FileReader();
            reader.onload = function () {
                state.currentImage = reader.result;
            };

            reader.readAsDataURL(file);
        }

        return {
            model,
            store,
            handleBackPage,
            state,
            updateImage,
        };
    },
};
</script>
