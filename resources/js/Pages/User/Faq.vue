<template>
    <Navbar active-page="about">
        <template #content>
            <!-- Content -->
            <div class="container mx-auto px-4 sm:px-16 -mt-36">
                <h1 class="text-custome-orange text-3xl font-semibold">FAQ</h1>
            </div>
            <div class="bg-custome-gray mt-3 text-center">
                <div class="container mx-auto px-4 sm:px-16 pt-12 pb-20 min-h-[300px]">
                    <div v-for="(row, index) in faq" :key="index" @click="toggleCollapse(index)" class="w-full mb-4 cursor-pointer transition ease-in-out delay-600">
                        <div class="text-left bg-gradient-to-r from-custome-radialred-from via-custome-radialred-to via-70% to-custome-graylight p-4 flex justify-between items-center">
                            <p >{{row.question}}</p>
                            <svg v-if="row.isOpen" width="16" height="16" viewBox="0 0 16 16" fill="#fff">
                                <path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11A.5.5 0 012 8z"/>
                            </svg>
                            <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="#fff">
                                <path fill-rule="evenodd" d="M8 1a.5.5 0 01.5.5V7h5.5a.5.5 0 010 1H8.5v5.5a.5.5 0 01-1 0V8H2a.5.5 0 010-1h5.5V1.5A.5.5 0 018 1z"/>
                            </svg>
                        </div>
                        <p :class="row.isOpen ? 'h-auto opacity-100 p-4 text-left text-sm leading-loose' : 'h-0 opacity-0 p-0 text-left text-sm leading-loose'">{{row.answer}}</p>
                    </div>
                </div>
                
                <!-- <div class="bg-contain bg-no-repeat bg-right-bottom w-auto h-72 -mt-72" style="background-image: url(/assets/wave-03\ 2.svg)"></div> -->
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
import { ref } from "vue";

export default {
    name: "IndexUser",
    layout: UserLayout,
    components: {
        Navbar,
        Footer
    },
    props: {
        faq: Array,
    },
    setup(props) {
        const toggleCollapse = (index) => {
            const faq = props.faq ?? []
            const defaultValue = faq[index].isOpen 
            
            faq.map((val) => {
                val.isOpen = false
            })
            
            faq[index].isOpen = !defaultValue
        }
        
        return { toggleCollapse }
    }
};
</script>
