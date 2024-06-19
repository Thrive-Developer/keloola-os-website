<template>
    <div class="card">
        <Success :message="$page.props.flash.success" />
        <Danger :message="$page.props.flash.danger" />

        <div class="card-body border-bottom py-3">
            <div class="d-flex">
                <div class="text-secondary">
                    Show
                    <div class="mx-2 d-inline-block">
                        <select
                            class="form-select"
                            v-model="searchModel.limit"
                            @change="handleSearch()"
                        >
                            <option
                                :value="10"
                                :selected="searchModel.limit == 10"
                            >
                                10
                            </option>
                            <option
                                :value="20"
                                :selected="searchModel.limit == 20"
                            >
                                20
                            </option>
                            <option
                                :value="50"
                                :selected="searchModel.limit == 50"
                            >
                                50
                            </option>
                            <option
                                :value="100"
                                :selected="searchModel.limit == 100"
                            >
                                100
                            </option>
                        </select>
                    </div>
                    entries
                </div>
                <div class="ms-auto text-secondary">
                    Search:
                    <div class="ms-2 d-inline-block">
                        <div class="input-group input-group-flat">
                            <input
                                type="text"
                                class="form-control form-control-sm"
                                autocomplete="off"
                                v-model="searchModel.search"
                                @keyup="handleSearch()"
                            />
                            <span class="input-group-text">
                                <a
                                    href="#"
                                    class="link-secondary"
                                    title="Clear search"
                                    @click="clearSearch"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="icon"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path d="M18 6l-12 12" />
                                        <path d="M6 6l12 12" />
                                    </svg>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="table-responsive">
            <table class="table card-table table-vcenter text-nowrap datatable">
                <thead>
                    <slot name="thead">
                        <tr>
                            <th>No</th>
                            <th v-for="(field, index) in fields" :key="index">
                                {{ field.label }}
                            </th>
                            <th class="text-center" v-if="isEdit || isDelete">
                                Actions
                            </th>
                        </tr>
                    </slot>
                </thead>
                <tbody>
                    <slot name="tbody">
                        <tr
                            v-for="(item, index) in mappingData(models.data)"
                            :key="index"
                        >
                            <td>{{ parseInt(models.from) + index }}</td>
                            <td v-for="field in fields" :key="field.key">
                                <span v-if="typeof field.type == 'undefined'">
                                    {{ item[field.key] }}
                                </span>
                                <span v-if="field.type == 'img'">
                                    <img
                                        :src="item[field.key]"
                                        :alt="item.name"
                                        class="img-fluid"
                                        style="width: 50px; height: 50px"
                                    />
                                </span>
                            </td>
                            <td class="text-center" v-if="isEdit || isDelete">
                                <ButtonEdit
                                    v-if="isEdit"
                                    :route="route"
                                    :id="item.id"
                                />
                                <ButtonDelete
                                    v-if="isDelete"
                                    :route="route"
                                    :id="item.id"
                                />
                            </td>
                        </tr>
                        <tr v-if="models.data.length === 0">
                            <td class="text-center" colspan="10">No data</td>
                        </tr>
                    </slot>
                </tbody>
            </table>
        </div>
        <div class="card-footer d-flex align-items-center">
            <p class="m-0 text-secondary">
                Showing <span>1</span> to <span>{{ models.per_page }}</span> of
                <span>{{ models.total }}</span> entries
            </p>
            <Pagination :links="models.links" />
        </div>
    </div>
</template>

<script>
import { router, Link } from "@inertiajs/vue3";
import { reactive } from "vue";
import Pagination from "./Pagination.vue";
import Success from "./Alert/Success.vue";
import Danger from "./Alert/Danger.vue";
import ButtonEdit from "./Button/ButtonEdit.vue";
import ButtonDelete from "./Button/ButtonDelete.vue";

export default {
    components: {
        Pagination,
        Success,
        Danger,
        Link,
        ButtonEdit,
        ButtonDelete,
    },
    props: {
        models: Object,
        fields: Array,
        route: String,
        isEdit: {
            type: Boolean,
            default: true,
        },
        isDelete: {
            type: Boolean,
            default: true,
        },
        mappingData: {
            type: Function,
            default: (models) => {
                return models;
            },
        },
        filter: {
            type: Object,
            default: () => {
                return {};
            },
        },
    },
    setup(props) {
        const searchModel = reactive({
            search: "",
            limit: props.models.per_page,
        });

        function handleSearch() {
            router.get(
                `/${props.route}`,
                { ...searchModel, ...props.filter },
                { preserveState: true }
            );
        }

        function clearSearch() {
            searchModel.search = "";
            handleSearch();
        }

        return {
            handleSearch,
            clearSearch,
            searchModel,
        };
    },
};
</script>
