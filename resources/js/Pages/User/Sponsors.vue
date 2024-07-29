<template>
    <Navbar active-page="project">
        <template #content>
            <!-- Content -->
            <div class="container mx-auto px-4 sm:px-16 -mt-36">
                <h1 class="text-custome-orange text-3xl font-semibold">
                    Sponsors
                </h1>
            </div>

            <div class="bg-custome-graylight text-white">
                <div
                    class="bg-contain lg:bg-cover bg-no-repeat bg-top z-0 mt-3"
                    style="
                        background-image: url(/assets/Clip\ path\ group\ sponsor.svg);
                    "
                >
                    <div class="container mx-auto px-4 sm:px-16 pt-20 pb-28">
                        <div
                            class="md:flex md:justify-between items-center mb-12"
                        >
                            <div>
                                <p class="text-2xl font-bold">
                                    Many thanks to all our sponsors!
                                </p>
                                <p class="text-sm mt-2">
                                    Keloola OS is proudly sponsored by the following organizations.
                                </p>
                            </div>
                            <button
                                class="text-white border border-custome-orange p-3 rounded-lg text-xs block mx-auto mt-4 md:flex md:mx-0 md:mt-0"
                                v-if="btn_sponsor && btn_sponsor.link"
                                @click="openLink(btn_sponsor.link)"
                            >
                                {{ btn_sponsor.value }}
                            </button>
                        </div>
                        <div v-if="gold_sponsors.length > 0">
                            <div
                                class="flex justify-between items-center gap-3"
                            >
                                <hr class="bg-white font-bold w-full" />
                                <button
                                    class="text-white bg-custome-orange p-2 rounded-lg min-w-28 text-xs"
                                >
                                    Gold Sponsor
                                </button>
                                <hr class="bg-white font-bold w-full" />
                            </div>
                            <div
                                class="grid grid-cols-2 lg:grid-cols-2 gap-6 my-14 lg:px-36"
                            >
                                <div
                                    class="flex items-center gap-2"
                                    v-for="(gold, index) in gold_sponsors"
                                    :key="index"
                                >
                                    <img
                                        :src="gold.image"
                                        alt="image"
                                        width="400"
                                    />
                                </div>
                            </div>
                        </div>
                        <div v-if="silver_sponsors.length > 0">
                            <div
                                class="flex justify-between items-center gap-3"
                            >
                                <hr class="bg-white font-bold w-full" />
                                <button
                                    class="text-white bg-custome-orange p-3 rounded-lg min-w-28 text-xs"
                                >
                                    Silver Sponsor
                                </button>
                                <hr class="bg-white font-bold w-full" />
                            </div>
                            <div
                                class="grid grid-cols-2 lg:grid-cols-4 gap-6 my-14 lg:px-36"
                            >
                                <div
                                    class="flex items-center gap-2"
                                    v-for="(silver, index) in silver_sponsors"
                                    :key="index"
                                >
                                    <img
                                        :src="silver.image"
                                        alt="image"
                                        width="300"
                                    />
                                </div>
                            </div>
                        </div>
                        <div v-if="bronze_sponsors.length > 0">
                            <div
                                class="flex justify-between items-center gap-3"
                            >
                                <hr class="bg-white font-bold w-full" />
                                <button
                                    class="text-white bg-custome-orange p-3 rounded-lg min-w-32 text-xs"
                                >
                                    Bronze Sponsor
                                </button>
                                <hr class="bg-white font-bold w-full" />
                            </div>
                            <div
                                class="grid grid-cols-2 lg:grid-cols-4 gap-6 my-14 lg:px-36"
                            >
                                <div
                                    class="flex items-center gap-2"
                                    v-for="(bronze, index) in bronze_sponsors"
                                    :key="index"
                                >
                                    <img
                                        :src="bronze.image"
                                        alt="image"
                                        width="200"
                                    />
                                </div>
                            </div>
                        </div>
                        <div v-if="community_sponsors.length > 0">
                            <div
                                class="flex justify-between items-center gap-3"
                            >
                                <hr class="bg-white font-bold w-full" />
                                <button
                                    class="text-white bg-custome-orange p-3 rounded-lg min-w-40 text-xs"
                                >
                                    Community Sponsor
                                </button>
                                <hr class="bg-white font-bold w-full" />
                            </div>
                            <div
                                class="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6 my-10 lg:px-36"
                            >

                                <div
                                    class="flex items-center gap-2"
                                    v-for="(
                                        community, index
                                    ) in community_sponsors"
                                    :key="index"
                                >
                                    <img
                                        :src="community.image"
                                        alt="image"
                                        width="100"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="bg-contain bg-left-bottom bg-no-repeat h-72 -mt-96 lg:mt-0 z-0 flex justify-center items-center"
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
        gold_sponsors: Array,
        silver_sponsors: Array,
        bronze_sponsors: Array,
        community_sponsors: Array,
        btn_sponsor: Object,
    },
    setup() {
        function openLink(link) {
            window.location.href = link;
        }

        return { openLink };
    },
};
</script>
