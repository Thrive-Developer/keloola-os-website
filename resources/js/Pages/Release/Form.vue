<template>
    <Head :title="release ? 'Edit Release' : 'Create Release'" />
    <div class="page-header d-print-none">
        <div class="container-xl">
            <div class="row g-2 align-items-center">
                <div class="col">
                    <h2 class="page-title">
                        {{ release ? "Edit" : "Create" }} Release
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
                    <label class="form-label">Version</label>
                    <input
                        type="text"
                        class="form-control"
                        autocomplete="off"
                        v-model="model.version"
                    />
                    <small
                        class="form-text text-danger"
                        v-if="errors.version"
                        >{{ errors.version }}</small
                    >
                </div>
                 
                <div class="mb-3">
                    <label class="form-label">Code name</label>
                    <input
                        type="text"
                        class="form-control"
                        autocomplete="off"
                        v-model="model.code_name"
                    />
                    <small
                        class="form-text text-danger"
                        v-if="errors.code_name"
                        >{{ errors.code_name }}</small
                    >
                </div>
                <div class="mb-3">
                    <label class="form-label">Edition</label>
                    <select v-model="model.edition_id" multiple class="form-control">
                        <option v-for="(row, index) in edition.data" :key="index" :value="row.id">
                            {{ row.nama }}
                        </option>
                    </select>
                    <p>Selected Options: {{ model.edition_id }}</p>
                    <small
                        class="form-text text-danger"
                        v-if="errors.edition_id"
                        >{{ errors.edition_id }}</small
                    >
                </div>
                 
                <div class="mb-3">
                    <label class="form-label">Package use</label>
                    <input
                        type="text"
                        class="form-control"
                        autocomplete="off"
                        v-model="model.package_use"
                    />
                    <small
                        class="form-text text-danger"
                        v-if="errors.package_use"
                        >{{ errors.package_use }}</small
                    >
                </div>
                 
                <div class="mb-3">
                    <label class="form-label">Status</label>
                    <input
                        type="text"
                        class="form-control"
                        autocomplete="off"
                        v-model="model.status"
                    />
                    <small
                        class="form-text text-danger"
                        v-if="errors.status"
                        >{{ errors.status }}</small
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

import { reactive, ref } from "vue";

export default {
    components: {
        Head,
        Link,
    },

    props: {
        edition: Object,
        errors: Object,
        release: Object,
    },

    setup(props) {
        const model = reactive({
            version: props.release ? props.release.version : '',
            code_name: props.release ? props.release.code_name : '',
            edition_id: props.release ? props.release.edition_id : [],
            package_use: props.release ? props.release.package_use : '',
            status: props.release ? props.release.status : '',
        });

        function store() {
            let result = JSON.parse(JSON.stringify(model))
            result.edition_id = JSON.stringify(result.edition_id)
            if (props.release) {
                router.put(`/release/${props.release.id}`, result);
                return;
            }
            router.post("/release", result);
        }

        function handleBackPage() {
            router.get("/release");
        }

        return {
            model,
            store,
            handleBackPage
        };
    },
};
</script>
