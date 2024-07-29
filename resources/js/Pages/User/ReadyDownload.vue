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

                <div
                    class="flex justify-center mt-12"
                    v-if="
                        btn_install_instruction && btn_install_instruction.link
                    "
                >
                    <a
                        :href="btn_install_instruction.link"
                        class="text-white bg-custome-orange p-3 rounded-lg mr-4 text-xs"
                        >{{ btn_install_instruction.value }}</a
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
                        <div :class="`${index % 2 == 0 ? 'w-full md:w-1/2' : 'block md:hidden'} `">
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
                                    :href="`/download/${os_version.slug}?edition=${edition.slug}`"
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
                        <div :class="`${index % 2 != 0 ? 'w-full md:w-1/2 hidden md:block' : 'hidden'} `">
                            <img
                                :src="edition.image"
                                class="w-12/12 lg:w-8/12 mx-auto lg:mx-0"
                                alt="image"
                            />
                        </div>
                    </div>
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
        btn_install_instruction: Object,
    },
};
</script>
