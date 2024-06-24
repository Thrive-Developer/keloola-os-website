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
