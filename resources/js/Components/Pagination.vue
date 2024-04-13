<template>
    <ul class="pagination m-0 ms-auto">
        <li
            class="page-item mx-1"
            v-for="(link, key) in links"
            :key="key"
            v-bind:class="isActive(link)"
        >
            <Link
                :class="['page-link', { disabled: !link.url }]"
                :href="link?.url ?? ''"
            >
                <span v-if="link.label === 'Previous'">
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
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M15 6l-6 6l6 6" />
                    </svg>
                    Prev
                </span>
                <span v-else-if="link.label === 'Next'">
                    Next
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
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 6l6 6l-6 6" />
                    </svg>
                </span>
                <span v-else>
                    {{ link.label }}
                </span>
            </Link>
        </li>
    </ul>
</template>

<script>
import { Link } from "@inertiajs/vue3";
export default {
    components: {
        Link,
    },
    props: {
        links: Array,
    },
    computed: {
        showPagination() {
            return this.links.length > 3;
        },
    },
    methods: {
        isActive(link) {
            return link.active === true ? "active" : "normal";
        },
        handleNoLink() {
            return false;
        },
    },
};
</script>
