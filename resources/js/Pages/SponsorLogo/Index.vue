<template>
    <Head title="Sponsor Logo" />
    <div class="page-header d-print-none">
        <div class="container-xl">
            <div class="row g-2 align-items-center">
                <div class="col">
                    <h2 class="page-title">Sponsor</h2>
                </div>
                <div class="col-auto ms-auto d-print-none">
                    <div class="btn-list">
                        <ButtonCreate :route="route" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="page-body">
        <div class="container-xl">
            <div class="row row-deck row-cards">
                <div class="col-12">
                    <Table :models="models" :route="route" :fields="fields">
                        <template #tbody>
                            <tr
                                v-for="(model, index) in models.data"
                                :key="index"
                            >
                                <td>{{ parseInt(models.from) + index }}</td>
                                <td>{{ model.sponsor?.name }}</td>
                                <td>
                                    <img
                                        :src="model.image"
                                        alt="logo"
                                        width="150px"
                                    />
                                </td>
                                <td class="text-center">
                                    <ButtonEdit :route="route" :id="model.id" />
                                    <ButtonDelete
                                        :route="route"
                                        :id="model.id"
                                    />
                                </td>
                            </tr>
                        </template>
                    </Table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Head, Link } from "@inertiajs/vue3";
import { ref } from "vue";
import Table from "../../Components/Table.vue";
import ButtonCreate from "../../Components/Button/ButtonCreate.vue";
import ButtonEdit from "../../Components/Button/ButtonEdit.vue";
import ButtonDelete from "../../Components/Button/ButtonDelete.vue";

export default {
    name: "sponsorlogoIndex",
    components: {
        Head,
        Link,
        Table,
        ButtonCreate,
        ButtonEdit,
        ButtonDelete,
    },
    props: {
        models: Object,
    },
    setup(props) {
        const route = ref("admin/sponsor-logo");

        const fields = [
            { key: "sponsor", label: "Sponsor" },
            { key: "image", label: "Image" },
        ];

        return {
            fields,
            route,
        };
    },
};
</script>
