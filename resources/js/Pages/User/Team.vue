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
                            <tbody class="text-sm bg-white text-black">
                                <tr class="hover:bg-[#FFC9B0]">
                                    <td class="px-6 py-4 border border-black text-left">
                                        <div class="flex items-center">
                                            <svg width="25" height="20">
                                            <rect x="0" y="0" width="25" height="20" fill="#CE1126" />
                                            <rect x="0" y="10" width="25" height="10" fill="#e5e7eb" />
                                            </svg>
                                        </div>
                                    </td>
                                    <td class="px-4 py-2 border border-black">Eddy Yansen</td>
                                    <td class="px-4 py-2 border border-black"><a href="https://www.linkedin.com/in/eddyyansen/" target="_blank" rel="noopener noreferrer">“eddyyansen”</a></td>
                                    <td class="px-4 py-2 border border-black">Founder and Chief Executive Officer</td>
                                </tr>
                                <tr class="hover:bg-[#FFC9B0]">
                                    <td class="px-6 py-4 border border-black text-left">
                                        <div class="flex items-center">
                                            <svg width="25" height="20">
                                            <rect x="0" y="0" width="25" height="20" fill="#CE1126" />
                                            <rect x="0" y="10" width="25" height="10" fill="#e5e7eb" />
                                            </svg>
                                        </div>
                                    </td>
                                    <td class="px-4 py-2 border border-black">Ryno Azhar</td>
                                    <td class="px-4 py-2 border border-black"><a href="https://www.linkedin.com/in/ryno-azhar-18697b39/" target="_blank" rel="noopener noreferrer">“ryno-azhar-18697b39”</a></td>
                                    <td class="px-4 py-2 border border-black">Technical Director</td>
                                </tr>
                                <tr class="hover:bg-[#FFC9B0]">
                                    <td class="px-6 py-4 border border-black text-left">
                                        <div class="flex items-center">
                                            <svg width="25" height="20">
                                            <rect x="0" y="0" width="25" height="20" fill="#CE1126" />
                                            <rect x="0" y="10" width="25" height="10" fill="#e5e7eb" />
                                            </svg>
                                        </div>
                                    </td>
                                    <td class="px-4 py-2 border border-black">Frendi Triarista</td>
                                    <td class="px-4 py-2 border border-black"><a href="https://www.linkedin.com/in/frendi-triarista/" target="_blank" rel="noopener noreferrer">“frendi-triarista”</a></td>
                                    <td class="px-4 py-2 border border-black">Head of Software Engineer</td>
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
                            <tbody class="text-sm bg-white text-black">
                                <tr class="hover:bg-[#FFC9B0]"> 
                                    <td class="px-4 py-2 border border-black">Develop Team</td>
                                    <td class="px-4 py-2 border border-black">Software development and bug fixing</td>
                                    <td class="px-4 py-2 border border-black"><a href="https://github.com/orgs/Thrive-Developer/people" target="_blank" rel="noopener noreferrer">Github</a></td>
                                </tr>
                                <tr class="hover:bg-[#FFC9B0]"> 
                                    <td class="px-4 py-2 border border-black">Design Team</td>
                                    <td class="px-4 py-2 border border-black">Web and user interface design</td>
                                    <td class="px-4 py-2 border border-black"><a href="https://www.figma.com/@keloola" target="_blank" rel="noopener noreferrer">Figma</a></td>
                                </tr>
                                <tr class="hover:bg-[#FFC9B0]"> 
                                    <td class="px-4 py-2 border border-black">Another Teams</td>
                                    <td class="px-4 py-2 border border-black">Managing projects, administrative support, quality assurance, documentation, and customer support</td>
                                    <td class="px-4 py-2 border border-black"><a href="https://www.linkedin.com/company/thriveconsultant/people/" target="_blank" rel="noopener noreferrer">Linkedin</a></td>
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
