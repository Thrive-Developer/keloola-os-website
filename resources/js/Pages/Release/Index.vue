<template>
    <Head title="Release" />
    <div class="page-header d-print-none">
        <div class="container-xl">
            <div class="row g-2 align-items-center">
                <div class="col">
                    <h2 class="page-title">Release</h2>
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
                    <Table :models="models" :route="route" :fields="fields" />
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

export default {
    name: "releaseIndex",
    components: {
        Head,
        Link,
        Table,
        ButtonCreate,
    },
    props: {
        models: Object,
        edition: Object,
    },
    setup(props) {
        const route = ref("release");

        const fields = [
            { key: 'version', label: 'Version'},
            { key: 'code_name', label: 'Code_name'},
            { key: 'edition_id', label: 'Edition_id'},
            { key: 'package_use', label: 'Package_use'},
            { key: 'status', label: 'Status'},
        ];

        return {
            fields,
            route,
        };
    },
};
</script>
