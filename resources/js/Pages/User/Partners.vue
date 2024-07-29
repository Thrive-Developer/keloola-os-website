<template>
    <Navbar active-page="project">
        <template #content>
            <!-- Content -->
            <div class="container mx-auto px-4 sm:px-16 -mt-36">
                <h1 class="text-custome-orange text-4xl font-semibold">Partners</h1>
            </div>
            
            <div class="bg-radial from-custome-radialred-from to-custome-radialred-to">
                <div class="bg-contain bg-no-repeat bg-top z-0 mt-3 bg-radial from-custome-radialred-from to-custome-radialred-to" style="background-image: url(/assets/Clip\ path\ group.svg)">
                    <div class="container mx-auto px-4 sm:px-16 pt-12 pb-20">
                        <p class="text-center text-sm">Keloola OS thrives on strong partnerships. Our daily operations benefit from the professional backing, support, and services provided by our esteemed partners.</p>
                        <p class="text-center text-sm">Their collaboration enhances our success, streamlines our processes, and allows us to concentrate on our core expertise.</p>
                        <div class="mt-6 bg-custome-dark w-[80%] md:w-[60%] lg:w-96 xl:w-2/6 min-h-80 mx-auto p-6">
                            <div class="flex justify-center items-center gap-2">
                                <img src="/assets/partners/bright-logo.png" class="img-fluid max-w-[250px]" alt="Bright Corporation">
                            </div>
                            <p class="mt-6 text-center text-sm leading-loose">
                                PT. Suryadhamma Investama, also known as Bright Corporation, is one of Indonesia’s leading technology solution providers and a trusted partner of Keloola OS. The company offers advanced solutions in AI, robotics, and automation to help businesses of all sizes achieve success. Since 2007, Bright Corporation has led the industry with a commitment to excellence and innovation. Known for their expertise in management consulting and hospitality management, Bright Corporation provides a wide range of tailored services to meet their clients' needs. Achieve business success with advanced solutions from Bright Corporation in AI, robotics, and automation.
                            </p>
                        </div>
    
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                            <div class="bg-custome-dark w-[80%] md:w-auto mx-auto p-6 rounded-xl">
                                <div class="flex justify-center items-center gap-2">
                                    <img src="/assets/partners/thrive-logo.png" class="img-fluid max-w-[250px]" alt="Thrive IT Solutions">
                                </div>
                                <p class="mt-6 text-center text-sm leading-loose">
                                    Thrive is a leading IT consulting company with over 15 years of experience. The company has served clients from various business sectors, including Kompas Group, Jawa Pos (JPNN), TIKI JNE, Jaya Ancol, Toyota Indonesia, Sharp Indonesia, Lexus, Garuda Indonesia, Daihatsu, BMW, and many other prominent names across different industries. Achieve excellence in IT consulting with Thrive's expertise and trusted solutions.
                                </p>
                            </div>
                            <div class="bg-custome-dark w-[80%] md:w-auto mx-auto p-6 rounded-xl">
                                <div class="flex justify-center items-center gap-2">
                                    <img src="/assets/partners/ET-logo.png" class="img-fluid max-w-[250px]" alt="Einstein Technologies">
                                    <!-- <p class="font-bold text-xl">LOGO</p> -->
                                </div>
                                <p class="mt-6 text-center text-sm leading-loose">
                                    Einstein Technologies is a leading manufacturing company specializing in Robotic Integrations, Business Laptops, Electronic Pricetags, Firewalls, Desktop Workstations, and IoT solutions. With a strong reputation for delivering high-quality products and innovative solutions, Einstein Technologies has become a trusted name in the industry. Achieve operational excellence and elevate your business with cutting-edge solutions from Einstein Technologies.
                                </p>
                            </div>
                            <div class="bg-custome-dark w-[80%] md:w-auto mx-auto p-6 rounded-xl">
                                <div class="flex justify-center items-center gap-2">
                                    <img src="/assets/partners/tableads-logo.png" class="img-fluid max-w-[250px]" alt="Table Ads">
                                    <!-- <p class="font-bold text-xl">LOGO</p> -->
                                </div>
                                <p class="mt-6 text-center text-sm leading-loose">
                                    TABLEADS is a pioneering company specializing in smart table signage for hotels, restaurants, bars, and cafes. Our devices enhance customer engagement by displaying advertisements and menus, increasing ad visibility by up to 100%. Reach more customers and attract loyalty with coupons and voucher codes. Elevate your business with TABLEADS' innovative solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="bg-cover bg-no-repeat bg-right w-auto h-48 z-0 -mt-48" style="background-image: url(/assets/wave-03\ 2.svg)"></div>
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
