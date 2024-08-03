<template>
    <Head>
        <title>
            {{ metaTitle }}
        </title>
        <meta
            v-if="metaDescription"
            name="description"
            head-key="description"
            :content="metaDescription"
        />
        <meta
            v-if="metaKeywords"
            name="keywords"
            head-key="keywords"
            :content="metaKeywords"
        />
    </Head>
    <Navbar active-page="download">
        <template #content>
            <!-- Content -->
            <div class="container mx-auto px-4 sm:px-16 -mt-36">
                <h1 class="text-custome-orange text-3xl font-semibold">
                    {{ news.title }}
                </h1>
            </div>
            <div
                class="bg-gradient-to-r from-[#413E1E] via-custome-gray via-40% to-custome-gray mt-3 py-12 text-white w-full"
                style="min-height: 369px"
            >
                <div class="container mx-auto px-4 sm:px-16 w-full">
                    <span v-html="news.content"></span>
                </div>
            </div>
            <!-- End Content -->
        </template>
    </Navbar>

    <Footer />
</template>

<script>
import { computed } from "vue";
import { Head } from "@inertiajs/vue3";
import Navbar from "../../Components/User/Navbar.vue";
import Footer from "../../Components/User/Footer.vue";
import UserLayout from "../../Layouts/User.vue";

export default {
    name: "IndexUser",
    layout: UserLayout,
    components: {
        Navbar,
        Footer,
        Head,
    },
    props: {
        news: Object,
    },
    setup(props) {
        const metaTitle = computed(
            () => props.news.meta_title || props.news.title
        );

        const metaDescription = computed(
            () => props.news.meta_description || ""
        );

        const metaKeywords = computed(() => props.news.meta_keywords || "");

        return {
            metaTitle,
            metaDescription,
            metaKeywords,
        };
    },
};
</script>
