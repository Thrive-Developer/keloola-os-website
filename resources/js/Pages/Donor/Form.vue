<template>
    <Head :title="donor ? 'Edit Donor' : 'Create Donor'" />
    <div class="page-header d-print-none">
        <div class="container-xl">
            <div class="row g-2 align-items-center">
                <div class="col">
                    <h2 class="page-title">
                        {{ donor ? "Edit" : "Create" }} Donor
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
                                    <label class="form-label">Date</label>
                                    <input
                                        type="date"
                                        class="form-control"
                                        autocomplete="off"
                                        v-model="model.date"
                                    />
                                    <small
                                        class="form-text text-danger"
                                        v-if="errors.date"
                                        >{{ errors.date }}</small
                                    >
                                </div>

                                <div class="mb-3">
                                    <label class="form-label"
                                        >Sponsor name</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        autocomplete="off"
                                        v-model="model.sponsor_name"
                                    />
                                    <small
                                        class="form-text text-danger"
                                        v-if="errors.sponsor_name"
                                        >{{ errors.sponsor_name }}</small
                                    >
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Desc</label>
                                    <textarea
                                        v-model="model.desc"
                                        class="form-control"
                                        cols="30"
                                        rows="5"
                                    ></textarea>
                                    <small
                                        class="form-text text-danger"
                                        v-if="errors.desc"
                                        >{{ errors.desc }}</small
                                    >
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Amount</label>
                                    <input
                                        type="number"
                                        class="form-control"
                                        autocomplete="off"
                                        v-model="model.amount"
                                    />
                                    <small
                                        class="form-text text-danger"
                                        v-if="errors.amount"
                                        >{{ errors.amount }}</small
                                    >
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Country</label>
                                    <Select
                                        :options="listCountry"
                                        v-model="model.country"
                                    />
                                    <small
                                        class="form-text text-danger"
                                        v-if="errors.country"
                                        >{{ errors.country }}</small
                                    >
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Platform</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        autocomplete="off"
                                        v-model="model.platform"
                                    />
                                    <small
                                        class="form-text text-danger"
                                        v-if="errors.platform"
                                        >{{ errors.platform }}</small
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
import Select from "../../Components/Select.vue";

export default {
    components: {
        Head,
        Link,
        Select,
    },

    props: {
        errors: Object,
        donor: Object,
        countries: Array,
    },

    setup(props) {
        const model = reactive({
            date: props.donor ? props.donor.date : "",
            sponsor_name: props.donor ? props.donor.sponsor_name : "",
            desc: props.donor ? props.donor.desc : "",
            amount: props.donor ? props.donor.amount : "",
            country: props.donor ? props.donor.country : "",
            platform: props.donor ? props.donor.platform : "",
        });

        const listCountry = props.countries.map((item) => {
            return {
                value: item.country_name,
                text: item.country_name,
            };
        });

        function store() {
            if (props.donor) {
                router.put(`/admin/donor/${props.donor.id}`, model);
                return;
            }
            router.post("/admin/donor", model);
        }

        function handleBackPage() {
            router.get("/admin/donor");
        }

        return {
            model,
            store,
            handleBackPage,
            listCountry,
        };
    },
};
</script>
