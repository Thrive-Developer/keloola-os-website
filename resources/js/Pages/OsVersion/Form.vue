<template>
    <Head :title="os_version ? 'Edit OS Version' : 'Create OS Version'" />
    <div class="page-header d-print-none">
        <div class="container-xl">
            <div class="row g-2 align-items-center">
                <div class="col">
                    <h2 class="page-title">
                        {{ os_version ? "Edit" : "Create" }} OS Version
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
                                    <label class="form-label"
                                        >Package base</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        autocomplete="off"
                                        v-model="model.package_base"
                                    />
                                    <small
                                        class="form-text text-danger"
                                        v-if="errors.package_base"
                                        >{{ errors.package_base }}</small
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

export default {
    components: {
        Head,
        Link,
    },

    props: {
        errors: Object,
        os_version: Object,
    },

    setup(props) {
        const model = reactive({
            version: props.os_version ? props.os_version.version : "",
            code_name: props.os_version ? props.os_version.code_name : "",
            package_base: props.os_version ? props.os_version.package_base : "",
            status: props.os_version ? props.os_version.status : "",
            description: props.os_version ? props.os_version.description : "",
        });

        function store() {
            if (props.os_version) {
                router.put(`/admin/os-version/${props.os_version.id}`, model);
                return;
            }
            router.post("/admin/os-version", model);
        }

        function handleBackPage() {
            router.get("/admin/os-version");
        }

        return {
            model,
            store,
            handleBackPage,
        };
    },
};
</script>
