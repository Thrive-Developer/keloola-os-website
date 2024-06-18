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
                class="bg-gradient-to-r from-[#413E1E] via-custome-gray via-40% to-custome-gray mt-3 py-12 text-white"
            >
                <h2 class="font-medium text-center">
                    Are You Prepared to Install?
                </h2>
                <p class="text-center text-white text-sm leading-loose my-2">
                    {{ os_version.code_name }} is available in various editions
                    tailored to meet diverse needs. Please select your preferred
                    version below.<br />
                    For detailed guidance on the installation process, consult
                    the provided instructions.
                </p>

                <div class="flex justify-center mt-12">
                    <a
                        href="https://www.keloola.com/coming-soon/"
                        class="text-white bg-custome-orange p-3 rounded-lg mr-4 text-xs"
                        >Installation Instructions</a
                    >
                </div>
            </div>

            <div class="bg-black text-white">
                <div
                    class="bg-contain bg-left-top bg-no-repeat h-72 pt-10 z-0"
                    style="background-image: url(/assets/wave-03\ 6.svg)"
                ></div>
                <div class="container mx-auto px-4 sm:px-16 -mt-60 pb-28 z-10">
                    <div
                        class="mt-12 md:flex items-center gap-12"
                        v-for="(edition, index) in editions"
                        :key="index"
                    >
                        <div class="w-full md:w-1/2" v-if="index % 2 == 0">
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
                                {{ edition.name }}
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
                        <div class="w-full md:w-1/2" v-if="index % 2 != 0">
                            <img
                                :src="edition.image"
                                class="w-12/12 lg:w-8/12 mx-auto lg:mx-0"
                                alt="image"
                            />
                        </div>
                    </div>
                    <!-- <div class="mt-12 md:flex items-center gap-12">
                        <div class="w-full mt-6 md:mt-0 md:w-1/2">
                            <p class="italic text-sm">Stable, robust, traditional</p>
                            <p class="text-2xl my-2 font-bold">MATE Edition</p>
                            <p class="text-sm mb-2 leading-loose">Linux Mint is also involved in the development of MATE, a classic desktop <br class="hidden lg:flex">
                                environment which is the continuation of GNOME 2, Linux Mint’s default <br class="hidden lg:flex">
                                desktop between 2006 and 2011. Although it misses a few features and <br class="hidden lg:flex">
                                its development is slower than Cinnamon’s, MATE runs faster, <br class="hidden lg:flex">
                                uses fewer resources and is more stable than Cinnamon.
                            </p>
                            <div class="mt-6 flex justify-start items-center gap-4">
                                <button class="text-white bg-custome-orange p-3 rounded-lg mr-4 text-xs">Download</button>
                                <a href="" class="text-custome-orange text-sm">New Features</a>
                                <a href="" class="text-custome-orange text-sm">Release Notes</a>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2">
                            <img src="assets/monitor.png" class="w-12/12 lg:w-8/12 mx-auto lg:mx-0" alt="image">
                        </div>
                    </div>
                    <div class="mt-12 md:flex items-center gap-12">
                        <div class="w-full md:w-1/2">
                            <img src="assets/monitor.png" class="w-12/12 lg:w-8/12 mx-auto lg:mx-0" alt="image">
                        </div>
                        <div class="w-full mt-6 md:mt-0 md:w-1/2">
                            <p class="italic text-sm">Light, simple, efficient</p>
                            <p class="text-2xl my-2 font-bold">Xface Edition</p>
                            <p class="text-sm mb-2 leading-loose">Xfce is a lightweight desktop environment. It doesn’t support as many <br class="hidden lg:flex">
                                features as Cinnamon or MATE, but it’s extremely stable and very light <br class="hidden lg:flex">
                                on resource usage.
                            </p>
                            <div class="mt-6 flex justify-start items-center gap-4">
                                <button class="text-white bg-custome-orange p-3 rounded-lg mr-4 text-xs">Download</button>
                                <a href="" class="text-custome-orange text-sm">New Features</a>
                                <a href="" class="text-custome-orange text-sm">Release Notes</a>
                            </div>
                        </div>
                    </div>
                    <div class="mt-12 md:flex items-center gap-12">
                        <div class="w-full mt-6 md:mt-0 md:w-1/2">
                            <p class="italic text-sm">Support for the most modern hardware</p>
                            <p class="text-2xl my-2 font-bold">Cinnamon “EDGE” Edition</p>
                            <p class="text-sm mb-2 leading-loose">An "EDGE" ISO image is also available for the Cinnamon edition. <br class="hidden lg:flex">
                                This image ships with a newer kernel to be able to support the latest <br class="hidden lg:flex">
                                hardware chipsets. If you cannot boot the regular editions, <br class="hidden lg:flex">
                                we recommend you try the "EDGE" ISO instead.
                            </p>
                            <div class="mt-6 flex justify-start items-center gap-4">
                                <button class="text-white bg-custome-orange p-3 rounded-lg mr-4 text-xs">Download</button>
                                <a href="" class="text-custome-orange text-sm">New Features</a>
                                <a href="" class="text-custome-orange text-sm">Release Notes</a>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2">
                            <img src="assets/monitor.png" class="w-12/12 lg:w-8/12 mx-auto lg:mx-0" alt="image">
                        </div>
                    </div> -->
                </div>

                <div
                    class="bg-cover bg-center h-72 z-0 flex justify-center items-center -mt-72"
                    style="background-image: url(/assets/wave-03\ 5.svg)"
                ></div>
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
