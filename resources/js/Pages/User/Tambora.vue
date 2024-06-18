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
                        <!-- <div class="mt-12 md:flex items-center gap-6">
                            <div class="w-full md:w-1/2">
                                <img
                                    src="assets/monitor.png"
                                    class="mx-auto md:ml-auto"
                                    alt="image"
                                />
                            </div>
                            <div class="w-full mx-auto mt-6 md:mt-0 md:w-1/2">
                                <p class="italic font-medium">
                                    An alternative to Rocky Linux
                                </p>
                                <p class="text-3xl my-2 font-bold">
                                    Tambora Edition
                                </p>
                                <p class="text-sm my-2 leading-loose">
                                    LMDE aims to be as similar as possible to
                                    Keloola OS, but without using Rocky Linux.
                                    The package<br />
                                    base is provided by Centos instead.
                                </p>
                                <div class="mt-4">
                                    <button
                                        class="text-white bg-custome-orange p-3 rounded-lg mr-4 text-xs"
                                    >
                                        Download
                                    </button>
                                </div>
                            </div>
                        </div> -->
                        <!-- <div
                            class="container mx-auto px-4 sm:px-16 pt-20 pb-28"
                        >
                            <div class="mt-12 md:flex items-center gap-12">
                                <div class="w-full md:w-1/2">
                                    <img
                                        src="assets/monitor.png"
                                        class="w-12/12 lg:w-8/12 mx-auto lg:mx-0"
                                        alt="image"
                                    />
                                </div>
                                <div class="w-full mt-6 md:mt-0 md:w-1/2">
                                    <p class="italic text-sm">
                                        Stability in Simplicity
                                    </p>
                                    <p class="text-2xl my-2 font-bold">
                                        Tambora Edition
                                    </p>
                                    <p class="text-sm mb-2 leading-loose">
                                        Tambora is the most streamlined and
                                        efficient version available. With its<br
                                            class="hidden lg:flex"
                                        />
                                        beautiful, intuitive interface, it sets
                                        a new standard for simplicity and<br
                                            class="hidden lg:flex"
                                        />
                                        performance in business computing.
                                    </p>
                                    <div
                                        class="mt-6 flex justify-start items-center gap-4"
                                    >
                                        <a
                                            href="https://www.keloola.com/coming-soon/"
                                            class="text-white bg-custome-orange p-3 rounded-lg mr-4 text-xs"
                                            >Download</a
                                        >
                                        <a
                                            href="/new-feature"
                                            class="text-custome-orange text-sm"
                                            >New Features</a
                                        >
                                        <a
                                            href="/release-notes"
                                            class="text-custome-orange text-sm"
                                            >Release Notes</a
                                        >
                                    </div>
                                </div>
                            </div>
                            <div class="mt-12 md:flex items-center gap-12">
                                <div class="w-full mt-6 md:mt-0 md:w-1/2">
                                    <p class="italic text-sm">
                                        Stable, robust, traditional
                                    </p>
                                    <p class="text-2xl my-2 font-bold">
                                        MATE Edition
                                    </p>
                                    <p class="text-sm mb-2 leading-loose">
                                        Linux Mint is also involved in the
                                        development of MATE, a classic desktop
                                        <br class="hidden lg:flex" />
                                        environment which is the continuation of
                                        GNOME 2, Linux Mint’s default
                                        <br class="hidden lg:flex" />
                                        desktop between 2006 and 2011. Although
                                        it misses a few features and
                                        <br class="hidden lg:flex" />
                                        its development is slower than
                                        Cinnamon’s, MATE runs faster,
                                        <br class="hidden lg:flex" />
                                        uses fewer resources and is more stable
                                        than Cinnamon.
                                    </p>
                                    <div
                                        class="mt-6 flex justify-start items-center gap-4"
                                    >
                                        <button
                                            class="text-white bg-custome-orange p-3 rounded-lg mr-4 text-xs"
                                        >
                                            Download
                                        </button>
                                        <a
                                            href=""
                                            class="text-custome-orange text-sm"
                                            >New Features</a
                                        >
                                        <a
                                            href=""
                                            class="text-custome-orange text-sm"
                                            >Release Notes</a
                                        >
                                    </div>
                                </div>
                                <div class="w-full md:w-1/2">
                                    <img
                                        src="assets/monitor.png"
                                        class="w-12/12 lg:w-8/12 mx-auto lg:mx-0"
                                        alt="image"
                                    />
                                </div>
                            </div>
                            <div class="mt-12 md:flex items-center gap-12">
                                <div class="w-full md:w-1/2">
                                    <img
                                        src="assets/monitor.png"
                                        class="w-12/12 lg:w-8/12 mx-auto lg:mx-0"
                                        alt="image"
                                    />
                                </div>
                                <div class="w-full mt-6 md:mt-0 md:w-1/2">
                                    <p class="italic text-sm">
                                        Light, simple, efficient
                                    </p>
                                    <p class="text-2xl my-2 font-bold">
                                        Xface Edition
                                    </p>
                                    <p class="text-sm mb-2 leading-loose">
                                        Xfce is a lightweight desktop
                                        environment. It doesn’t support as many
                                        <br class="hidden lg:flex" />
                                        features as Cinnamon or MATE, but it’s
                                        extremely stable and very light
                                        <br class="hidden lg:flex" />
                                        on resource usage.
                                    </p>
                                    <div
                                        class="mt-6 flex justify-start items-center gap-4"
                                    >
                                        <button
                                            class="text-white bg-custome-orange p-3 rounded-lg mr-4 text-xs"
                                        >
                                            Download
                                        </button>
                                        <a
                                            href=""
                                            class="text-custome-orange text-sm"
                                            >New Features</a
                                        >
                                        <a
                                            href=""
                                            class="text-custome-orange text-sm"
                                            >Release Notes</a
                                        >
                                    </div>
                                </div>
                            </div>
                            <div class="mt-12 md:flex items-center gap-12">
                                <div class="w-full mt-6 md:mt-0 md:w-1/2">
                                    <p class="italic text-sm">
                                        Support for the most modern hardware
                                    </p>
                                    <p class="text-2xl my-2 font-bold">
                                        Cinnamon “EDGE” Edition
                                    </p>
                                    <p class="text-sm mb-2 leading-loose">
                                        An "EDGE" ISO image is also available
                                        for the Cinnamon edition.
                                        <br class="hidden lg:flex" />
                                        This image ships with a newer kernel to
                                        be able to support the latest
                                        <br class="hidden lg:flex" />
                                        hardware chipsets. If you cannot boot
                                        the regular editions,
                                        <br class="hidden lg:flex" />
                                        we recommend you try the "EDGE" ISO
                                        instead.
                                    </p>
                                    <div
                                        class="mt-6 flex justify-start items-center gap-4"
                                    >
                                        <button
                                            class="text-white bg-custome-orange p-3 rounded-lg mr-4 text-xs"
                                        >
                                            Download
                                        </button>
                                        <a
                                            href=""
                                            class="text-custome-orange text-sm"
                                            >New Features</a
                                        >
                                        <a
                                            href=""
                                            class="text-custome-orange text-sm"
                                            >Release Notes</a
                                        >
                                    </div>
                                </div>
                                <div class="w-full md:w-1/2">
                                    <img
                                        src="assets/monitor.png"
                                        class="w-12/12 lg:w-8/12 mx-auto lg:mx-0"
                                        alt="image"
                                    />
                                </div>
                            </div>
                        </div> -->

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
                                            :href="`/ready-download/${os_version.slug}`"
                                            class="text-white bg-custome-orange p-3 rounded-lg mr-4 text-xs"
                                            >Download</a
                                        >
                                        <!-- <a
                                            :href="`/new-feature/${edition.slug}`"
                                            class="text-custome-orange text-sm"
                                            >New Features</a
                                        >
                                        <a
                                            :href="`/release-notes/${edition.slug}`"
                                            class="text-custome-orange text-sm"
                                            >Release Notes</a
                                        > -->
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
