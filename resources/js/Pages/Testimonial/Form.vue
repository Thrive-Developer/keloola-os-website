<template>
    <Head :title="testimonial ? 'Edit Testimonial' : 'Create Testimonial'" />
    <div class="page-header d-print-none">
        <div class="container-xl">
            <div class="row g-2 align-items-center">
                <div class="col">
                    <h2 class="page-title">
                        {{ testimonial ? "Edit" : "Create" }} Testimonial
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
                                    <label class="form-label">From</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        autocomplete="off"
                                        v-model="model.from"
                                    />
                                    <small
                                        class="form-text text-danger"
                                        v-if="errors.from"
                                        >{{ errors.from }}</small
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
                                    ></textarea>
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
        testimonial: Object,
    },

    setup(props) {
        const model = reactive({
            name: props.testimonial ? props.testimonial.name : "",
            description: props.testimonial ? props.testimonial.description : "",
            from: props.testimonial ? props.testimonial.from : "",
        });

        function store() {
            if (props.testimonial) {
                router.put(`/admin/testimonial/${props.testimonial.id}`, model);
                return;
            }
            router.post("/admin/testimonial", model);
        }

        function handleBackPage() {
            router.get("/admin/testimonial");
        }

        return {
            model,
            store,
            handleBackPage,
        };
    },
};
</script>
