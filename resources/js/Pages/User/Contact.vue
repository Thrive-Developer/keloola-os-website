<template>
    <Navbar active-page="about">
        <template #content>
            <!-- Content -->
            <div class="container mx-auto px-4 sm:px-16 -mt-36">
                <h1 class="text-custome-orange text-3xl font-semibold">Contact Us</h1>
            </div>
            
            <div class="bg-custome-gray mt-3 text-center">
                <div class="container mx-auto px-4 sm:px-16 pt-12 pb-20">
                    <h1 class="text-custome-orange text-3xl font-bold">Support Queries</h1>
                    <p class="text-sm mt-4">Seek help, support and assistance with using or installing Linux Mint...</p>
                    <div class="border border-black pt-10 pb-14 px-20 mt-8 grid grid-cols-1 lg:grid-cols-1 gap-6">
                        <!-- <div>
                            <img src="assets/documentation.svg" alt="documentation" class="mx-auto">
                            <p class="text-center text-custome-orange font-bold mt-4 mb-1">Documentation</p>
                            <p class="text-center text-sm leading-loose mb-5">We're providing documentation to make <br>
                                using Linux Mint as easy as possible.
                            </p>
                            <a href="https://www.keloola.com/comming-soon/" target="_blank" class="text-white bg-custome-orange py-2.5 px-5 rounded-lg mx-auto mt-4 font-semibold">Read</a>
                        </div>
                        <div>
                            <img src="assets/forum.svg" alt="forum" class="mx-auto">
                            <p class="text-center text-custome-orange font-bold mt-4 mb-1">Forums</p>
                            <p class="text-center text-sm leading-loose mb-5">Browse the forums and seek <br>
                                assistance from other users. Many <br>
                                questions are already answered. <br>
                            </p>
                            <a href="https://www.keloola.com/comming-soon/" target="_blank" class="text-white bg-custome-orange py-2.5 px-5 rounded-lg mx-auto mt-4 font-semibold">Browse</a>
                        </div> -->
                        <div>
                            <img src="assets/chat.svg" alt="chat" class="mx-auto">
                            <p class="text-center text-custome-orange font-bold mt-4 mb-1">Chat Room*</p>
                            <p class="text-center text-sm leading-loose mb-5">If you're stuck, connect to the chat room <br>
                                and ask whoever is connected at the moment.
                            </p>
                            <a href="https://discord.com/invite/MJeZsPacuY" target="_blank" class="border border-custome-orange text-custome-orange py-2.5 px-5 rounded-lg mx-auto mt-4 font-semibold">Chat</a>
                        </div>
                    </div>
                    <p class="text-sm text-left mt-16">* If you are new to IRC (the technology used by the chatroom), please read this tutorial.</p>
                </div>
                
                <div class="bg-contain bg-no-repeat bg-bottom w-auto h-72 -mt-72" style="background-image: url(/assets/wave-03\ 2.svg)"></div>
            </div>

            <div class="bg-gradient-to-r from-custome-radialred-from via-custome-radialred-to via-70% to-custome-radialred-to text-center">
                <div class="container mx-auto pt-12 pb-20 px-4 sm:px-16">
                    <h1 class="text-custome-orange text-3xl font-bold">Feedback</h1>
                    <p class="text-sm mt-4">Contribute ideas, translations, bug reports, development...</p>
                    <div class="mt-8 pb-8 pt-11 bg-black">
                        <img src="assets/lamp.svg" alt="lamp" class="mx-auto">
                        <h1 class="text-custome-orange text-3xl font-bold">Get Involved</h1>
                        <p class="text-sm mt-4 mb-5">Contribute to the Linux Mint project with ideas, translations, bug reports...</p>
                        <a href="https://ticket.thrive.co.id/" class="text-white bg-custome-orange p-2.5 rounded-lg mx-auto mt-4 font-semibold text-sm">Go</a>
                    </div>
                </div>
            </div>

            <div class="bg-black pt-8 pb-6 text-center px-4 sm:px-16">
                <p class="font-bold italic">Can't find what you're looking for?</p>
                <p class="text-sm my-4 leading-loose">For queries related to passwords, accounts, registration and moderation, email the administration team at admin@linuxmint.com. <br>
                    For other queries, send an email to root@linuxmint.com. o not address support queries to these addresses.
                </p>
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
