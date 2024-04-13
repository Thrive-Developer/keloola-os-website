<template>
    <Sidebar />
    <Navbar />
    <div class="page-wrapper">
        <slot />
        <Footer />
    </div>
</template>

<script>
import Sidebar from "../Components/Sidebar.vue";
import Navbar from "../Components/Navbar.vue";
import Footer from "../Components/Footer.vue";

export default {
    name: "Layout",
    components: {
        Sidebar,
        Navbar,
        Footer,
    },
};
</script>
