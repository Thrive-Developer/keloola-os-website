<template>
    <Head :title="sponsor_logo ? 'Edit SponsorL ogo' : 'Create Sponsor Logo'" />
    <div class="page-header d-print-none">
        <div class="container-xl">
            <div class="row g-2 align-items-center">
                <div class="col">
                    <h2 class="page-title">
                        {{ sponsor_logo ? "Edit" : "Create" }} Sponsor
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
                                    <label class="form-label">Category</label>
                                    <Select
                                        :options="listSponsors"
                                        v-model="model.sponsor_id"
                                        :selectOptions="{}"
                                    />
                                    <small
                                        class="form-text text-danger"
                                        v-if="errors.sponsor_id"
                                        >{{ errors.sponsor_id }}</small
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

export default {
    components: {
        Head,
        Link,
        Select,
    },

    props: {
        errors: Object,
        sponsor_logo: Object,
        sponsors: Array,
    },

    setup(props) {
        const model = reactive({
            sponsor_id: props.sponsor_logo ? props.sponsor_logo.sponsor_id : "",
            image: props.sponsor_logo ? props.sponsor_logo.image : "",
        });

        const state = reactive({
            currentImage: props.sponsor_logo ? props.sponsor_logo.image : "",
        });

        const listSponsors = props.sponsors.map((item) => {
            return {
                value: item.id,
                text: item.name,
            };
        });

        function store() {
            if (props.sponsor_logo) {
                router.post(`/admin/sponsor-logo/${props.sponsor_logo.id}`, {
                    _method: "put",
                    ...model,
                });
                return;
            }
            router.post("/admin/sponsor-logo", model);
        }

        function handleBackPage() {
            router.get("/admin/sponsor-logo");
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
            listSponsors,
            state,
            updateImage,
        };
    },
};
</script>
