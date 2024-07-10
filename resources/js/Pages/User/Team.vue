<template>
    <Navbar active-page="about">
        <template #content>
            <!-- Content -->
            <div class="container mx-auto px-4 sm:px-16 -mt-36">
                <h1 class="text-custome-orange text-4xl font-semibold">Team</h1>
            </div>
            
            <div class="bg-custome-gray mt-3">
                <div class="container mx-auto px-4 sm:px-16 py-14">
                    <p class="text-sm">Many people contribute to the Keloola OS project. Here are the main teams and their leaders.</p>
                    <h1 class="text-custome-orange text-4xl font-semibold mt-8">Team Leaders</h1>
                    <div class="overflow-auto mt-3.5" style="scrollbar-width: thin; scrollbar-color: #777777 #E4E5E7;">
                        <table class="min-w-full mt-3 text-sm font-light text-surface">
                            <thead class="bg-custome-orange text-white">
                                <tr>
                                <th scope="col" class="px-4 py-2 border border-black" colspan="3">LEADER</th>
                                <th scope="col" class="px-4 py-2 border border-black">TEAM</th>
                                </tr>
                            </thead>
                            <tbody class="text-sm">
                                <tr>
                                    <td class="px-6 py-4 border border-black text-left"><div class="flex items-center"><div class="w-6 h-4 bg-custome-orange mr-4"></div></div></td>
                                    <td class="px-4 py-2 border border-black">Clement Lefebvre</td>
                                    <td class="px-4 py-2 border border-black">“Clem”</td>
                                    <td class="px-4 py-2 border border-black">Overall project and development team</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 border border-black text-left"><div class="flex items-center"><div class="w-6 h-4 bg-custome-orange mr-4"></div></div></td>
                                    <td class="px-4 py-2 border border-black">Vincent Vermeulen</td>
                                    <td class="px-4 py-2 border border-black">“Xenopeel”</td>
                                    <td class="px-4 py-2 border border-black">Administration and moderation teams</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 border border-black text-left"><div class="flex items-center"><div class="w-6 h-4 bg-custome-orange mr-4"></div></div></td>
                                    <td class="px-4 py-2 border border-black">Oscar799</td>
                                    <td class="px-4 py-2 border border-black">“Oscar799”</td>
                                    <td class="px-4 py-2 border border-black">Administration and moderation teams</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <h1 class="text-custome-orange text-4xl font-semibold mt-8">Teams</h1>
                    <div class="overflow-auto mt-3.5" style="scrollbar-width: thin; scrollbar-color: #777777 #E4E5E7;">
                        <table class="min-w-full mt-3 text-sm font-light text-surface">
                            <thead class="bg-custome-orange text-white">
                                <tr>
                                    <th scope="col" class="px-4 py-2 border border-black">TEAM</th>
                                    <th scope="col" class="px-4 py-2 border border-black">MISSION</th>
                                    <th scope="col" class="px-4 py-2 border border-black">LINK</th>
                                </tr>
                            </thead>
                            <tbody class="text-sm">
                                <tr>
                                    <td class="px-4 py-2 border border-black">Develop Team</td>
                                    <td class="px-4 py-2 border border-black">Software development and bug fixing</td>
                                    <td class="px-4 py-2 border border-black">Github</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 border border-black">Administration and Moderation Teams</td>
                                    <td class="px-4 py-2 border border-black">Administration and moderation (forums, community website and IRC)</td>
                                    <td class="px-4 py-2 border border-black">Community Website</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 border border-black"></td>
                                    <td class="px-4 py-2 border border-black"></td>
                                    <td class="px-4 py-2 border border-black">Forums</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 border border-black">Design Team</td>
                                    <td class="px-4 py-2 border border-black">Web and user interface design</td>
                                    <td class="px-4 py-2 border border-black"></td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 border border-black">Translation Teams</td>
                                    <td class="px-4 py-2 border border-black">Software translations</td>
                                    <td class="px-4 py-2 border border-black">Launchpad</td>
                                </tr>
                                <tr>
                                    <td class="px-4 py-2 border border-black">QA Team</td>
                                    <td class="px-4 py-2 border border-black">Quality testing</td>
                                    <td class="px-4 py-2 border border-black">Community Website</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="bg-contain bg-no-repeat bg-left bg-center h-48 flex justify-center items-center -mt-36" style="background-image: url(/assets/wave-03\ 5.svg)"></div>
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
