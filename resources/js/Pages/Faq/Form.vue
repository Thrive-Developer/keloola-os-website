<template>
    <Head :title="faq ? 'Edit Faq' : 'Create Faq'" />
    <div class="page-header d-print-none">
        <div class="container-xl">
            <div class="row g-2 align-items-center">
                <div class="col">
                    <h2 class="page-title">
                        {{ faq ? "Edit" : "Create" }} Faq
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
                                    <label class="form-label">Question</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        autocomplete="off"
                                        v-model="model.question"
                                    />
                                    <small
                                        class="form-text text-danger"
                                        v-if="errors.question"
                                        >{{ errors.question }}</small
                                    >
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Answer</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        autocomplete="off"
                                        v-model="model.answer"
                                    />
                                    <small
                                        class="form-text text-danger"
                                        v-if="errors.answer"
                                        >{{ errors.answer }}</small
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
        faq: Object,
    },

    setup(props) {
        const model = reactive({
            question: props.faq ? props.faq.question : "",
            answer: props.faq ? props.faq.answer : "",
        });

        function store() {
            if (props.faq) {
                router.put(`/admin/faq/${props.faq.id}`, model);
                return;
            }
            router.post("/admin/faq", model);
        }

        function handleBackPage() {
            router.get("/admin/faq");
        }

        return {
            model,
            store,
            handleBackPage,
        };
    },
};
</script>
