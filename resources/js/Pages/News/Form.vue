<template>
    <Head :title="news ? 'Edit News' : 'Create News'" />
    <div class="page-header d-print-none">
        <div class="container-xl">
            <div class="row g-2 align-items-center">
                <div class="col">
                    <h2 class="page-title">
                        {{ news ? "Edit" : "Create" }} News
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
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-vue";
import UploadAdapter from "../../Plugins/UploadAdapter.js";

export default {
    components: {
        Head,
        Link,
        ckeditor: CKEditor.component,
    },

    props: {
        errors: Object,
        news: Object,
    },

    setup(props) {
        const model = reactive({
            title: props.news ? props.news.title : "",
            slug: props.news ? props.news.slug : "",
            content: props.news ? props.news.content : "",
        });

        let state = reactive({
            currenctProductImage: "",
            editor: ClassicEditor,
            editorConfig: {
                extraPlugins: [uploadAdapterPlugin],
                toolbar: [
                    "undo",
                    "redo",
                    "|",
                    "heading",
                    "|",
                    "bold",
                    "italic",
                    "link",
                    "bulletedList",
                    "numberedList",
                    "|",
                    "indent",
                    "outdent",
                    "|",
                    "blockQuote",
                    "insertTable",
                    "|",
                    "imageUpload",
                    "mediaEmbed",
                    // "alignment",
                    // "fontFamily",
                    // "fontSize",
                ],
            },
        });

        function store() {
            if (props.news) {
                router.put(`/admin/news/${props.news.id}`, model);
                return;
            }
            router.post("/admin/news", model);
        }

        function handleBackPage() {
            router.get("/admin/news");
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
