<template>
    <Navbar active-page="download">
        <template #content>
            <!-- Content -->
            <div class="container mx-auto px-4 sm:px-16 -mt-36">
                <h1 class="text-custome-orange text-3xl font-semibold">
                    Release Notes
                </h1>
            </div>
            <div
                class="bg-gradient-to-r from-[#413E1E] via-custome-gray via-40% to-custome-gray mt-3 py-12 text-white w-full"
            >
                <div class="container mx-auto px-4 sm:px-16 w-full">
                    <span v-html="os_edition.release_notes"></span>
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
        os_edition: Object,
    },
};
</script>
