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
import { Head, Link, router } from "@inertiajs/vue3";
import { reactive } from "vue";
import UploadAdapter from "../../Plugins/UploadAdapter.js";
import {
	ClassicEditor,
	AccessibilityHelp,
	Autoformat,
	AutoLink,
	Autosave,
	Bold,
	Code,
	CodeBlock,
	Essentials,
	GeneralHtmlSupport,
	Heading,
	HtmlEmbed,
	Italic,
	Paragraph,
	SelectAll,
	ShowBlocks,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	TextPartLanguage,
	TextTransformation,
	Title,
	Undo
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';


export default {
    components: {
        Head,
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
                toolbar: [
                    'undo',
					'redo',
					'|',
					'showBlocks',
					'selectAll',
					'textPartLanguage',
					'|',
					'heading',
					'|',
					'bold',
					'italic',
					'code',
					'|',
					'insertTable',
					'codeBlock',
					'htmlEmbed',
					'|',
					'accessibilityHelp'
                ],
                plugins: [
                    AccessibilityHelp,
                    Autoformat,
                    AutoLink,
                    Autosave,
                    Bold,
                    Code,
                    CodeBlock,
                    Essentials,
                    GeneralHtmlSupport,
                    Heading,
                    HtmlEmbed,
                    Italic,
                    Paragraph,
                    SelectAll,
                    ShowBlocks,
                    Table,
                    TableCaption,
                    TableCellProperties,
                    TableColumnResize,
                    TableProperties,
                    TableToolbar,
                    TextPartLanguage,
                    TextTransformation,
                    Title,
                    Undo
                ]
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
