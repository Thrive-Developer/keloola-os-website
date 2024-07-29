<template>
    <Navbar active-page="download">
        <template #content>
            <!-- Content -->
            <div class="container mx-auto px-4 sm:px-16 -mt-36">
                <h1 class="text-custome-orange text-3xl font-semibold">
                    {{ os_version.code_name }} {{ os_version.version }}
                </h1>
            </div>

            <div
                class="bg-radial from-custome-radialred-from to-custome-radialred-to text-white"
            >
                <div
                    class="bg-cover bg-center z-0 mt-3"
                    style="background-image: url(/assets/Clip\ path\ group.svg)"
                >
                    <div class="container mx-auto px-4 sm:px-16 pt-20 pb-28">
                        <p
                            class="text-custome-orange italic text-center font-bold"
                        >
                            What is {{ os_version.code_name }}
                            {{ os_version.version }}?
                        </p>
                        <p class="text-center text-sm leading-relaxed">
                            {{ os_version.description }}
                        </p>

                        <div
                            class="container mx-auto px-4 sm:px-16 pt-20 pb-28"
                        >
                            <div
                                class="mt-12 md:flex items-center gap-12"
                                v-for="(edition, index) in editions"
                                :key="index"
                            >
                                <div
                                    class="w-full md:w-1/2"
                                    v-if="index % 2 == 0"
                                >
                                    <img
                                        :src="edition.image"
                                        class="w-12/12 lg:w-8/12 mx-auto lg:mx-0"
                                        alt="image"
                                    />
                                </div>
                                <div class="w-full mt-6 md:mt-0 md:w-1/2">
                                    <p class="italic text-sm">
                                        {{ edition.slogan }}
                                    </p>
                                    <p class="text-2xl my-2 font-bold">
                                        {{ edition.name }} Edition
                                    </p>
                                    <p class="text-sm mb-2 leading-loose">
                                        {{ edition.description }}
                                    </p>
                                    <div
                                        class="mt-6 flex justify-start items-center gap-4"
                                    >
                                        <a
                                            :href="edition.download_link"
                                            class="text-white bg-custome-orange p-3 rounded-lg mr-4 text-xs"
                                            >Download</a
                                        >
                                        <a
                                            v-if="edition.new_features"
                                            :href="`/new-feature/${edition.slug}`"
                                            class="text-custome-orange text-sm"
                                            >New Features</a
                                        >
                                        <a
                                            v-if="edition.release_notes"
                                            :href="`/release-notes/${edition.slug}`"
                                            class="text-custome-orange text-sm"
                                            >Release Notes</a
                                        >
                                    </div>
                                </div>
                                <div
                                    class="w-full md:w-1/2"
                                    v-if="index % 2 != 0"
                                >
                                    <img
                                        :src="edition.image"
                                        class="w-12/12 lg:w-8/12 mx-auto lg:mx-0"
                                        alt="image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Content -->
        </template>
    </Navbar>

    <Footer />
</template>

<script>
import Navbar from "../../Components/User/Navbar.vue";
import Footer from "../../Components/User/Footer.vue";
import UserLayout from "../../Layouts/User.vue";

export default {
    name: "IndexUser",
    layout: UserLayout,
    components: {
        Navbar,
        Footer,
    },
    props: {
        os_version: Object,
        editions: Array,
    },
};
</script>
