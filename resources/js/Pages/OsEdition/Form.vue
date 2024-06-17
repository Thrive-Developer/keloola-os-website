<template>
    <Head :title="os_edition ? 'Edit OS Edition' : 'Create OS Edition'" />
    <div class="page-header d-print-none">
        <div class="container-xl">
            <div class="row g-2 align-items-center">
                <div class="col">
                    <h2 class="page-title">
                        {{ os_edition ? "Edit" : "Create" }} OS Edition
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
                                    <label class="form-label">OS version</label>
                                    <Select
                                        :options="listVersions"
                                        v-model="model.os_version_id"
                                    />
                                    <small
                                        class="form-text text-danger"
                                        v-if="errors.os_version_id"
                                        >{{ errors.os_version_id }}</small
                                    >
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Name</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        autocomplete="off"
                                        v-model="model.name"
                                    />
                                    <small
                                        class="form-text text-danger"
                                        v-if="errors.name"
                                        >{{ errors.name }}</small
                                    >
                                </div>

                                <div class="mb-3">
                                    <label class="form-label"
                                        >Description</label
                                    >

                                    <textarea
                                        v-model="model.description"
                                        class="form-control"
                                        cols="30"
                                        rows="10"
                                    />
                                    <small
                                        class="form-text text-danger"
                                        v-if="errors.description"
                                        >{{ errors.description }}</small
                                    >
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Slogan</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        autocomplete="off"
                                        v-model="model.slogan"
                                    />
                                    <small
                                        class="form-text text-danger"
                                        v-if="errors.slogan"
                                        >{{ errors.slogan }}</small
                                    >
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Image</label>
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

                                <div class="mb-3">
                                    <label class="form-label"
                                        >Download link</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        autocomplete="off"
                                        v-model="model.download_link"
                                    />
                                    <small
                                        class="form-text text-danger"
                                        v-if="errors.download_link"
                                        >{{ errors.download_link }}</small
                                    >
                                </div>

                                <div class="mb-3">
                                    <label class="form-label"
                                        >New Features</label
                                    >
                                    <ckeditor
                                        :editor="state.editor"
                                        v-model="model.new_features"
                                        :config="state.editorConfig"
                                    ></ckeditor>
                                    <small
                                        class="form-text text-danger"
                                        v-if="errors.new_features"
                                        >{{ errors.new_features }}</small
                                    >
                                </div>

                                <div class="mb-3">
                                    <label class="form-label"
                                        >Release Notes</label
                                    >
                                    <ckeditor
                                        :editor="state.editor"
                                        v-model="model.release_notes"
                                        :config="state.editorConfig"
                                    ></ckeditor>
                                    <small
                                        class="form-text text-danger"
                                        v-if="errors.release_notes"
                                        >{{ errors.release_notes }}</small
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
import Select from "../../Components/Select.vue";
import { reactive } from "vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-vue";
import UploadAdapter from "../../Plugins/UploadAdapter.js";

export default {
    components: {
        Head,
        Link,
        Select,
        ckeditor: CKEditor.component,
    },

    props: {
        errors: Object,
        os_edition: Object,
        os_versions: Array,
    },

    setup(props) {
        const model = reactive({
            os_version_id: props.os_edition
                ? props.os_edition.os_version_id
                : "",
            name: props.os_edition ? props.os_edition.name : "",
            slug: props.os_edition ? props.os_edition.slug : "",
            download_link: props.os_edition
                ? props.os_edition.download_link
                : "",
            description: props.os_edition ? props.os_edition.description : "",
            image: props.os_edition ? props.os_edition.image : "",
            new_features: props.os_edition ? props.os_edition.new_features : "",
            release_notes: props.os_edition
                ? props.os_edition.release_notes
                : "",
            slogan: props.os_edition ? props.os_edition.slogan : "",
        });

        let state = reactive({
            currentImage: props.os_edition ? props.os_edition.image : "",
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

        const listVersions = props.os_versions.map((item) => {
            return {
                value: item.id,
                text: item.version + " - " + item.code_name,
            };
        });

        function store() {
            if (props.os_edition) {
                router.put(`/admin/os-edition/${props.os_edition.id}`, model);
                return;
            }
            router.post("/admin/os-edition", model);
        }

        function handleBackPage() {
            router.get("/admin/os-edition");
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
            model.image = file;

            const reader = new FileReader();
            reader.onload = function () {
                state.currentImage = reader.result;
                console.log(state.currentImage);
            };

            reader.readAsDataURL(file);
        }

        return {
            model,
            store,
            handleBackPage,
            listVersions,
            state,
            updateImage,
        };
    },
};
</script>
