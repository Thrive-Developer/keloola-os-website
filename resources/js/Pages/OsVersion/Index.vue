<template>
    <Head title="OS Version" />
    <div class="page-header d-print-none">
        <div class="container-xl">
            <div class="row g-2 align-items-center">
                <div class="col">
                    <h2 class="page-title">OS Version</h2>
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
    name: "osversionIndex",
    components: {
        Head,
        Link,
        Table,
        ButtonCreate,
    },
    props: {
        models: Object,
    },
    setup(props) {
        const route = ref("admin/os-version");

        const fields = [
            { key: "version", label: "Version" },
            { key: "code_name", label: "Code Name" },
            { key: "package_base", label: "Package Base" },
            { key: "status", label: "Status" },
        ];

        return {
            fields,
            route,
        };
    },
};
</script>
