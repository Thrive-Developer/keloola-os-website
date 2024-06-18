<template>
    <Head :title="sponsor ? 'Edit Sponsor' : 'Create Sponsor'" />
    <div class="page-header d-print-none">
        <div class="container-xl">
            <div class="row g-2 align-items-center">
                <div class="col">
                    <h2 class="page-title">
                        {{ sponsor ? "Edit" : "Create" }} Category Sponsor
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

                                <!-- <div class="row g-2 align-items-center">
                                    <div class="col"><h3>Logo</h3></div>
                                    <div class="col-auto ms-auto">
                                        <div class="btn-list">
                                            <button
                                                class="btn btn-primary"
                                                type="button"
                                                @click="addLogo"
                                            >
                                                Add
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="card mt-3">
                                    <div class="table-responsive">
                                        <table
                                            class="table table-vcenter card-table"
                                        >
                                            <thead>
                                                <tr>
                                                    <th>Show Logo</th>
                                                    <th>Logo</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr
                                                    v-for="(
                                                        item, index
                                                    ) in model.logos"
                                                    :key="index"
                                                >
                                                    <td>
                                                        <img
                                                            v-if="item.current"
                                                            :src="item.current"
                                                            alt="product image"
                                                            :style="{
                                                                width: '150px',
                                                                height: '150px',
                                                            }"
                                                            class="img-fluid mt-3"
                                                        />
                                                        <p v-else>-</p>
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="file"
                                                            class="form-control"
                                                            autocomplete="off"
                                                            @input="
                                                                updateLogo(
                                                                    $event,
                                                                    index,
                                                                    'product_gallery'
                                                                )
                                                            "
                                                        />
                                                    </td>
                                                    <td>
                                                        <a
                                                            href="#"
                                                            type="button"
                                                            @click="
                                                                deleteLogo(
                                                                    index
                                                                )
                                                            "
                                                            class="btn btn-sm btn-danger"
                                                            >Delete</a
                                                        >
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div> -->
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
        sponsor: Object,
    },

    setup(props) {
        const model = reactive({
            name: props.sponsor ? props.sponsor.name : "",
            logos: [],
        });

        function store() {
            if (props.sponsor) {
                router.put(`/admin/sponsor/${props.sponsor.id}`, model);
                return;
            }
            router.post("/admin/sponsor", model);
        }

        function handleBackPage() {
            router.get("/admin/sponsor");
        }

        function addLogo() {
            model.logos.push({
                current: "",
                image: "",
            });
        }
        function deleteLogo(index) {
            model.logos.splice(index, 1);
        }

        function updateLogo(event, index = 0, column = "product_image") {
            const file = event.target.files[0];
            model.logos[index].image = file;

            const reader = new FileReader();
            reader.onload = function () {
                model.logos[index].current = reader.result;
            };

            reader.readAsDataURL(file);
        }

        return {
            model,
            store,
            handleBackPage,
            deleteLogo,
            addLogo,
            updateLogo,
        };
    },
};
</script>
