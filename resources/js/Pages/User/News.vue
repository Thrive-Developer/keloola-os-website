<template>
    <Navbar active-page="news">
        <template #content>
            <!-- Content -->
            <div class="container mx-auto px-4 sm:px-16 -mt-36">
                <h1 class="text-custome-orange text-3xl font-semibold">News</h1>
            </div>
            <div class="bg-custome-graylight" >
                <div class="container mx-auto px-4 sm:px-16 pt-16 pb-12">
                    <p class="text-center text-white mt-1 text-sm">
                        Click news title to get to the article.
                    </p>
                    <div
                        class="grid md:grid-cols-2 lg:grid-cols-3 items-start mt-14 gap-6"
                    >
                        <div
                            class="bg-custome-dark p-8 rounded-xl"
                            v-for="item in news"
                            :key="item.id"
                        >
                            <div class="flex justify-between items-center">
                                <p class="text-white text-sm">
                                    {{ item.created_at && fDate(item.created_at) }}
                                </p>
                                <div
                                    class="text-white bg-custome-orange py-1 px-5 rounded-md text-sm"
                                >
                                    Blog
                                </div>
                            </div>
                            <p class="text-custome-orange mt-4 mb-4 text-sm">
                                <a :href="`news/${item.slug}`">{{ item.title }}</a>
                            </p>
                            <p class="text-white text-sm leading-loose">
                                {{ truncate(stripHtmlTags(item.content)) }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Content -->
        </template>
    </Navbar>
    
    <Footer/>
</template>

<script>
import Navbar from "../../Components/User/Navbar.vue";
import Footer from "../../Components/User/Footer.vue";
import UserLayout from "../../Layouts/User.vue";
import dayjs from "dayjs";

export default {
    name: "IndexUser",
    layout: UserLayout,
    components: {
        Navbar,
        Footer,
    },
    props: {
        news: Array,
    },
    setup() {
        const fDate = (date) => {
            return dayjs(date).format("YYYY-MM-DD");
        };

        function truncate(content) {
            return content.length > 200
                ? content.substring(0, 200) + " [...]"
                : content;
        }

        function stripHtmlTags(html) {
            return html.replace(/<[^>]*>/g, "");
        }

        return {
            fDate,
            truncate,
            stripHtmlTags,
        };
    },

};
</script>
