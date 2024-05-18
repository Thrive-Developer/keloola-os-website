<template>
    <Navbar active-page="download">
        <template #content>
            <!-- Content -->
            <div class="container mx-auto px-4 sm:px-16 -mt-36">
                <h1 class="text-custome-orange text-3xl font-semibold">Tambora 1.0</h1>
            </div>
            
            <div class="bg-radial from-custome-radialred-from to-custome-radialred-to text-white">
                <div class="bg-cover bg-center z-0 mt-3" style="background-image: url(/assets/Clip\ path\ group.svg)">
                    <div class="container mx-auto px-4 sm:px-16 pt-20 pb-28">
                        <p class="text-custome-orange italic text-center font-bold">What is Tambora 1.0?</p>
                        <p class="text-center text-sm leading-relaxed">Tambora 1.0 is a Keloola OS project which stands for "Keloola OS Tambora Edition". <br class="hidden lg:flex">
                            Its goal is to ensure Keloola OS can continue to deliver the same user experience if Rocky Linux was ever to disappear. <br class="hidden lg:flex">
                            It allows us to assess how much we depend on Rocky Linux and how much work would be involved in such an event. <br class="hidden lg:flex">
                            Tambora 1.0 is also one of our development targets, as such it guarantees <br class="hidden lg:flex">
                            the software we develop is compatible outside of Rocky Linux.
                        </p>
                        <div class="mt-12 md:flex items-center gap-6">
                            <div class="w-full md:w-1/2">
                                <img src="assets/monitor.png" class="mx-auto md:ml-auto" alt="image">
                            </div>
                            <div class="w-full mx-auto mt-6 md:mt-0 md:w-1/2">
                                <p class="italic font-medium">An alternative to Rocky Linux</p>
                                <p class="text-3xl my-2 font-bold">Tambora Edition</p>
                                <p class="text-sm my-2 leading-loose">LMDE aims to be as similar as possible to Keloola OS, but without using Rocky Linux. The package<br>
                                    base is provided by Centos instead.
                                </p>
                                <div class="mt-4">
                                    <button class="text-white bg-custome-orange p-3 rounded-lg mr-4 text-xs">Download</button>
                                    <!-- <a href="" class="text-custome-orange text-sm">Release Notes</a> -->
                                </div>
                            </div>
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

export default {
    name: "IndexUser",
    layout: UserLayout,
    components: {
        Navbar,
        Footer,
    },
};
</script>
