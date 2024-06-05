<template>
    <Navbar active-page="download">
        <template #content>
            <!-- Content -->
            <div class="container mx-auto px-4 sm:px-16 -mt-36">
                <h1 class="text-custome-orange text-3xl font-semibold">New Feature</h1>
            </div>
            <div class="bg-gradient-to-r from-[#413E1E] via-custome-gray via-40% to-custome-gray mt-3 py-12 text-white w-full">
                <div class="container mx-auto px-4 sm:px-16 w-full">
                    <p class="text-2xl my-2 font-bold">Tambora Edition</p>
                    <p class="text-sm mb-2 leading-loose">Tambora is the most streamlined and efficient version available. With its
                        beautiful, intuitive interface, it sets a new standard for simplicity and <br>
                        performance in business computing.
                    </p>
                    <div class="w-full md:w-1/2 mx-auto">
                        <img src="assets/monitor.png" class="w-12/12 lg:w-8/12 mx-auto lg:mx-0" alt="image">
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

export default {
    name: "IndexUser",
    layout: UserLayout,
    components: {
        Navbar,
        Footer,
    },
};
</script>
