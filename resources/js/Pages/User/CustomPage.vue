<template>
    <Navbar active-page="about">
        <template #content>
            <!-- Content -->
            <div class="container mx-auto px-4 sm:px-16 -mt-36">
                <h1 class="text-custome-orange text-3xl font-semibold">
                    {{ custom_page.title }}
                </h1>
            </div>
            <div
                class="bg-gradient-to-r from-[#413E1E] via-custome-gray via-40% to-custome-gray mt-3 py-12 text-white w-full"
            >
                <div class="container mx-auto px-4 sm:px-16 w-full">
                    <span v-html="custom_page.content"></span>
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
        custom_page: Object,
    },
};
</script>

<style>
pre {
    background: #2d2d2d;
    color: #f8f8f2;
    padding: 15px;
    border-radius: 5px;
    overflow-x: auto;
    font-family: 'Courier New', Courier, monospace;
    font-size: 14px;
}

code {
    background: #f8f8f2;
    color: #2d2d2d;
    padding: 2px 4px;
    border-radius: 3px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 14px;
}

pre code {
    background: none;
    color: inherit;
    padding: 0;
    border-radius: 0;
}
</style>