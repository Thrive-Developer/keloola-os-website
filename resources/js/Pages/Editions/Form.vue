<template>
    <Head :title="editions ? 'Edit Editions' : 'Create Editions'" />
    <div class="page-header d-print-none">
        <div class="container-xl">
            <div class="row g-2 align-items-center">
                <div class="col">
                    <h2 class="page-title">
                        {{ editions ? "Edit" : "Create" }} Editions
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
                    <label class="form-label">Nama</label>
                    <input
                        type="text"
                        class="form-control"
                        autocomplete="off"
                        v-model="model.nama"
                    />
                    <small
                        class="form-text text-danger"
                        v-if="errors.nama"
                        >{{ errors.nama }}</small
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
        editions: Object,
    },

    setup(props) {
        const model = reactive({
            nama: props.editions ? props.editions.nama : '',
        });

        function store() {
            if (props.editions) {
                router.put(`/editions/${props.editions.id}`, model);
                return;
            }
            router.post("/editions", model);
        }

        function handleBackPage() {
            router.get("/editions");
        }

        return {
            model,
            store,
            handleBackPage,
        };
    },
};
</script>
