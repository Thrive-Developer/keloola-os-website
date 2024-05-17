<template>
    <Head title="Create Example" />
    <div class="page-header d-print-none">
        <div class="container-xl">
            <div class="row g-2 align-items-center">
                <div class="col">
                    <h2 class="page-title">
                        {{ example ? "Edit" : "Create" }} Example
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
                                    <input
                                        type="text"
                                        class="form-control"
                                        v-model="model.content"
                                    />
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

export default {
    components: {
        Head,
        Link,
    },

    props: {
        errors: Object,
        example: Object,
    },

    setup(props) {
        const model = reactive({
            title: props.example ? props.example.title : "",
            content: props.example ? props.example.content : "",
        });

        function store() {
            if (props.example) {
                router.put(`/admin/example/${props.example.id}`, model);
                return;
            }
            router.post("/admin/example", model);
        }

        function handleBackPage() {
            router.get("/admin/example");
        }

        return {
            model,
            store,
            handleBackPage,
        };
    },
};
</script>
