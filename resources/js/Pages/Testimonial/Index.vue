<template>
    <Head title="Testimonial" />
    <div class="page-header d-print-none">
        <div class="container-xl">
            <div class="row g-2 align-items-center">
                <div class="col">
                    <h2 class="page-title">Testimonial</h2>
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
    name: "testimonialIndex",
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
        const route = ref("admin/testimonial");

        props.models.data.map((model) => {
            model.description = truncate(model.description);
        });

        const fields = [
            { key: "name", label: "Name" },
            { key: "from", label: "From" },
            { key: "description", label: "Description" },
        ];

        function truncate(content) {
            return content.length > 50
                ? content.substring(0, 50) + " [...]"
                : content;
        }

        return {
            fields,
            route,
            truncate,
        };
    },
};
</script>
