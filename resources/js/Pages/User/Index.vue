<template>
    <Navbar :radius="true" active-page="home">
        <template #content>
            <!-- Content -->
            <div
                class="bg-contain bg-right-top bg-no-repeat h-auto -mt-36 z-10 rounded-b-lg"
                style="background-image: url(/assets/Vector.svg)"
            >
                <div
                    class="flex justify-between container mx-auto px-4 sm:px-16"
                >
                    <div class="mt-10 mb-36 w-full md:w-1/2">
                        <p class="text-custome-orange">“Victoria”</p>
                        <h1 class="text-white text-5xl font-bold my-2">
                            Keloola OS
                        </h1>
                        <p class="text-white">
                            Unmatched Stability for Business PCs and Laptops.
                        </p>
                        <div class="mt-4">
                            <a
                                href="/ready-download"
                                class="text-white bg-custome-orange p-3 rounded-lg mr-4 text-xs"
                                >Download</a
                            >
                            <button
                                class="text-white border border-custome-orange p-3 rounded-lg text-xs"
                            >
                                Installation Instructions
                            </button>
                        </div>
                    </div>
                    <div
                        class="mt-10 mb-36 w-1/2 hidden md:flex justify-center"
                    >
                        <img
                            src="/assets/Group 67.svg"
                            class="w-full lg:w-3/4 h-auto"
                            alt="Computer"
                        />
                    </div>
                </div>
            </div>
            <!-- End Content -->
        </template>
    </Navbar>

    <div class="h-auto pt-28 bg-custome-gray">
        <div class="container mx-auto px-4 sm:px-16 lg:flex lg:justify-between">
            <div class="w-full lg:w-1/3 lg:pr-6">
                <p class="text-white">Features</p>
                <h2 class="text-custome-orange text-4xl font-medium my-2">
                    What is Keloola OS?
                </h2>
                <p class="text-white text-sm leading-loose">
                    Keloola OS is an operating system tailored for both low-end
                    and high-end desktop and laptop computers, specifically
                    crafted to cater to business users who prioritize stability.
                    It is designed to function optimally 'out of the box,' fully
                    loaded with essential apps required for most users.
                </p>
                <div
                    class="p-10 mt-8 border-gradient-yellow"
                    style="border-radius: 20px"
                >
                    <img src="assets/graphic-design.svg" alt="graphic-design" />
                    <p class="text-custome-yellow font-bold mb-8 mt-1.5">
                        Keloola Business Suite
                    </p>
                    <p class="text-white text-sm leading-loose">
                        Keloola OS includes a business suite for file sharing,
                        accounting, chat, support tickets, and more.
                    </p>
                </div>
            </div>
            <div class="w-full lg:w-1/3 lg:px-6">
                <div
                    class="p-10 mt-10 border-gradient-green"
                    style="border-radius: 20px"
                >
                    <img src="assets/productivity.svg" alt="productivity" />
                    <p class="text-custome-green font-bold mb-8 mt-1.5">
                        Productivity
                    </p>
                    <p class="text-white text-sm leading-loose">
                        With WPS Office's complete office suite, use the word
                        processor, make presentations, drawings, spreadsheets or
                        even databases. Easily import from or export to PDF or
                        Microsoft Office documents.
                    </p>
                </div>
                <div
                    class="p-10 mt-8 border-gradient-orange"
                    style="border-radius: 20px"
                >
                    <img src="assets/multimedia.svg" alt="multimedia" />
                    <p class="text-custome-orange font-bold mb-8 mt-1.5">
                        Multimedia
                    </p>
                    <p class="text-white text-sm leading-loose">
                        Enjoy your music, watch TV and movies, listen to
                        podcasts, Spotify and online radio.
                    </p>
                </div>
            </div>
            <div class="w-full lg:w-1/3 lg:pl-6">
                <div
                    class="p-10 border-gradient-red"
                    style="border-radius: 20px"
                >
                    <img src="assets/web.svg" alt="web" />
                    <p class="text-custome-red font-bold mb-8 mt-1.5">Web</p>
                    <p class="text-white text-sm leading-loose">
                        Browse the Web, watch Youtube and Netflix with Firefox.
                        Turn any website into a desktop app for immediate
                        access.
                    </p>
                </div>
                <div
                    class="p-10 mt-8 border-gradient-blue"
                    style="border-radius: 20px"
                >
                    <img src="assets/gaming.svg" alt="gaming" />
                    <p class="text-custome-blue font-bold mb-8 mt-1.5">
                        Gaming
                    </p>
                    <p class="text-white text-sm leading-loose">
                        Perfect for business, designed for light gaming. Work
                        efficiently, relieve stress seamlessly.
                    </p>
                </div>
            </div>
        </div>
        <div
            class="bg-contain bg-no-repeat bg-left-bottom h-80 -mt-28 z-0"
            style="background-image: url(/assets/wave-03\ 1.svg)"
        ></div>
    </div>

    <div
        class="rounded-full bg-cover hidden lg:flex absolute bg-radial from-custome-radialyellow-from via-custome-radialyellow-via via-27% via-custome-radialyellow-via2 via-70% to-custome-radialyellow-to z-0 blur-xl w-[800px] h-[800px] top-[1200px] left-[-20%]"
    ></div>
    <div
        class="rounded-full bg-cover hidden lg:flex absolute bg-radial from-custome-radialyellow-from via-custome-radialyellow-via via-27% via-custome-radialyellow-via2 via-70% to-custome-radialyellow-to z-0 blur-xl w-[800px] h-[800px] top-[2800px] left-[-25%]"
    ></div>

    <div class="bg-black py-32 px-4 sm:px-16">
        <h2 class="text-custome-orange text-3xl font-medium text-center">
            Discover Stability with Keloola OS
        </h2>
        <p class="text-center text-white text-sm">
            The Trusted Choice for Business Users
        </p>
    </div>

    <div
        class="bg-cover bg-center z-0 bg-custome-gray"
        style="background-image: url(/assets/wave-04\ 1.svg)"
    >
        <div class="container mx-auto px-4 sm:px-16 py-28">
            <p class="text-center text-white mb-2 italic">
                Why choose Keloola OS?
            </p>
            <h2 class="text-custome-orange text-3xl font-medium text-center">
                Easy to use, fast and comfortable
            </h2>
            <p class="text-center text-white mt-1 text-sm">
                Give your hardware the operating system it deserve and feel
                right at home.
            </p>
            <div class="mt-11 grid md:grid-cols-2 lg:grid-cols-3 gap-14">
                <div class="flex justify-center items-start">
                    <img src="assets/Path 21.svg" class="mr-5" alt="image" />
                    <div>
                        <p class="text-custome-orange font-bold">OOTB</p>
                        <p class="text-white text-sm leading-loose">
                            Everything just works "Out Of The Box", without the
                            need to configure anything or to install extra
                            applications. It's ready to go. Although it's very
                            configurable, everything is set and tuned nicely by
                            default and no unnecessary questions are asked.
                        </p>
                    </div>
                </div>
                <div class="flex justify-center items-start">
                    <img src="assets/Path 21.svg" class="mr-5" alt="image" />
                    <div>
                        <p class="text-custome-orange font-bold">Rock Solid</p>
                        <p class="text-white text-sm leading-loose">
                            With centralized software updates, system snapshots,
                            a unique Update Manager and the robustness of its
                            Linux architecture, Keloola OS requires very little
                            maintenance. It works, it's safe and it doesn't
                            break.
                        </p>
                    </div>
                </div>
                <div class="flex justify-center items-start">
                    <img src="assets/Path 21.svg" class="mr-5" alt="image" />
                    <div>
                        <p class="text-custome-orange font-bold">KISS</p>
                        <p class="text-white text-sm leading-loose">
                            It's very easy to use. It features an intuitive
                            desktop and adopts KISS principles. Anyone can
                            rapidly feel at home and use Keloola OS. User
                            experience, workflow and comfort is key.
                        </p>
                    </div>
                </div>
                <div class="flex justify-center items-start">
                    <img src="assets/Path 21.svg" class="mr-5" alt="image" />
                    <div>
                        <p class="text-custome-orange font-bold">
                            Free with Premium Support
                        </p>
                        <p class="text-white text-sm leading-loose">
                            Explore Keloola OS: a free, open-source enterprise
                            operating system with optional Premium Livepatch for
                            enhanced support. Perfect for business stability and
                            continuity.
                        </p>
                    </div>
                </div>
                <div class="flex justify-center items-start">
                    <img src="assets/Path 21.svg" class="mr-5" alt="image" />
                    <div>
                        <p class="text-custome-orange font-bold">Home rule</p>
                        <p class="text-white text-sm leading-loose">
                            It's your computer, your rules. This is a key
                            principle at Keloola OS. We don't collect data, we
                            don't work against you. You're the boss. Your
                            operating system is designed to do what you want
                            without getting in your way.
                        </p>
                    </div>
                </div>
                <div class="flex justify-center items-start">
                    <img src="assets/Path 21.svg" class="mr-5" alt="image" />
                    <div>
                        <p class="text-custome-orange font-bold">
                            Community-centric
                        </p>
                        <p class="text-white text-sm leading-loose">
                            There is a tight bond and a great relationship
                            between the development team and the community. We
                            communicate with our users and constantly use their
                            feedback to improve Keloola OS.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div
        class="w-full bg-radial bg-center bg-no-repeat from-custome-radialred-from to-custome-radialred-to"
    >
        <div class="container mx-auto pt-16 pb-12 px-4 sm:px-16">
            <p class="text-center text-white mb-2 italic">
                Have any questions?
            </p>
            <h2 class="text-custome-orange text-3xl font-semibold text-center">
                Engaging, Supportive, and Enthusiastic
            </h2>
            <p class="text-center text-white mt-1 text-sm leading-loose">
                Take your first steps with Keloola OS and join our discord.<br />
                You’ll find Keloola users ready to welcome you, offer help, and
                share their experiences.
            </p>
            <div class="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-14">
                <div>
                    <p class="text-custome-orange font-bold">
                        Need More Than Free Linux?
                    </p>
                    <p class="text-white text-sm leading-loose">
                        Automate your Linux patching while minimizing downtime,
                        staying compliant, ensuring business continuity, and
                        getting all the support you need.
                    </p>
                </div>
                <div>
                    <p class="text-custome-orange font-bold">
                        Will it work on my computer?
                    </p>
                    <p class="text-white text-sm leading-loose">
                        Yes, Keloola OS works on most computers. It can also be
                        run from a live USB stick to make sure everything works
                        fine without having to install anything.
                    </p>
                </div>
                <div>
                    <p class="text-custome-orange font-bold">
                        Can I keep Windows?
                    </p>
                    <p class="text-white text-sm leading-loose">
                        Yes, you can have both Windows<br />
                        and Keloola OS. A menu asks you<br />
                        which one to use when you start<br />
                        the computer.
                    </p>
                </div>
                <div>
                    <p class="text-custome-orange font-bold">
                        Will it suit my needs?
                    </p>
                    <p class="text-white text-sm leading-loose">
                        Hopefully. Linux Mint comes with what<br />
                        most people need out of the box as<br />
                        well as easy access to more than<br />
                        60,000 software packages and<br />
                        7,800 games.
                    </p>
                </div>
            </div>
            <div class="flex justify-center mt-14">
                <a href="/faq" class="text-white bg-custome-orange p-3 rounded-lg mr-4 font-bold text-sm">Read more FAQs</a>
            </div>
        </div>
    </div>

    <div class="bg-custome-gray text-white">
        <div
            class="bg-contain bg-no-repeat bg-left-top h-72 pt-10 z-0"
            style="background-image: url(/assets/wave-03\ 6.svg)"
        ></div>
        <div class="-mt-48 mb-28">
            <p class="text-sm italic z-10 text-white text-center mb-8">
                From the press
            </p>
            <div class="px-32">
                <swiper 
                    :cssMode="true"
                    :navigation="true"
                    :pagination="true"
                    :mousewheel="true"
                    :keyboard="true" :slides-per-view="1" :space-between="50" :modules="modules" @swiper="onSwiper" @slideChange="onSlideChange">
                    <swiper-slide v-for="(row, index) in testimonial" :key="index" class="px-32 text-center text-xl leading-loose">
                        <p >{{row.description}}</p>
                        <div class="flex justify-center">
                            <img
                                src="/assets/quotes.svg"
                                class="w-[20px] h-[20px] text-white my-8"
                                alt="quotes"
                            />
                        </div>
                        <p class="text-base">{{row.name}}</p>
                        <p class="text-sm">{{row.from}}</p>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <div
            class="bg-contain bg-no-repeat bg-right-bottom h-72 z-0 -mt-72"
            style="background-image: url(/assets/wave-03\ 2.svg)"
        ></div>
    </div>

    <div class="bg-custome-graylight" v-if="news.length > 0">
        <div class="container mx-auto px-4 sm:px-16 pt-16 pb-12">
            <p class="text-center text-white mb-2 italic">From the blog</p>
            <h2 class="text-custome-orange text-3xl font-medium text-center">
                Latest news
            </h2>
            <p class="text-center text-white mt-1 text-sm">
                Click news title to get to the article.
            </p>
            <div
                class="grid md:grid-cols-2 lg:grid-cols-3 items-start mt-14 gap-6"
            >
                <div
                    class="bg-custome-dark p-8 rounded-xl"
                    v-for="item in news"
                    :key="item.id"
                >
                    <div class="flex justify-between items-center">
                        <p class="text-white text-sm">
                            {{ item.created_at && fDate(item.created_at) }}
                        </p>
                        <div
                            class="text-white bg-custome-orange py-1 px-5 rounded-md text-sm"
                        >
                            Blog
                        </div>
                    </div>
                    <p class="text-custome-orange mt-4 mb-4 text-sm">
                        <a :href="`news/${item.slug}`">{{ item.title }}</a>
                    </p>
                    <p class="text-white text-sm leading-loose">
                        {{ truncate(stripHtmlTags(item.content)) }}
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div
        class="w-full bg-radial bg-center bg-no-repeat from-custome-radialred-from to-custome-radialred-to"
    >
        <div
            class="bg-cover bg-center h-80 z-0 flex justify-center items-center"
            style="background-image: url(/assets/wave-03\ 3.svg)"
        ></div>
        <div class="container mx-auto z-10 -mt-36 pb-40 px-4 px-16">
            <h2 class="text-custome-orange text-3xl font-medium text-center">
                Keloola OS: Engineered for Stability!
            </h2>
            <p class="text-center text-white mt-1 text-sm leading-loose">
                Precision-engineered for stability, specifically tailored for
                business laptops and PCs.<br />
                It delivers dependable, smooth performance in critical
                environments, ensuring robust and reliable operation where it
                counts. <br />
                Designed to meet the demands of professional settings, Keloola
                OS guarantees consistent functionality and peak efficiency for
                all your business needs.
            </p>
        </div>
    </div>

    <div
        class="bg-cover bg-center z-0 bg-custome-gray"
        style="background-image: url(/assets/wave-04\ 1.svg)"
    >
        <div class="container mx-auto px-4 sm:px-16 py-28">
            <p class="text-center text-white mb-2 italic text-sm">
                Brought to you by
            </p>
            <h2 class="text-custome-orange text-3xl font-medium text-center">
                Partners and sponsors
            </h2>
            <p class="text-center text-white mt-1 text-sm">
                Join the Supportive Community Behind Keloola OS! Powered by a
                remarkable network of partners and sponsors, we're stronger
                together.
            </p>
            <div class="mt-20">
                <div class="flex justify-center gap-14">
                    <div
                        class="bg-white w-[250px] rounded-full p-2 flex justify-center"
                    >
                        <img
                            src="https://os.keloola.com/partners/bright-180x64.png"
                            alt="image"
                        />
                    </div>
                    <div
                        class="bg-white w-[250px] rounded-full p-2 flex justify-center"
                    >
                        <img
                            src="https://os.keloola.com/partners/et-175x60.png"
                            alt="image"
                        />
                    </div>
                </div>

                <!-- <div class="flex justify-center gap-14">
                    <div class="bg-white w-[250px] h-[46.44px] rounded-full"></div>
                    <div class="bg-custome-orange w-[250px] h-[46.44px] rounded-full"></div>
                    <div class="bg-white w-[250px] h-[46.44px] rounded-full"></div>
                </div>
                <div class="flex justify-center gap-14 my-14">
                    <div class="bg-custome-orange w-[250px] h-[46.44px] rounded-full"></div>
                    <div class="bg-white w-[250px] h-[46.44px] rounded-full"></div>
                </div>
                <div class="flex justify-center gap-14">
                    <div class="bg-white w-[250px] h-[46.44px] rounded-full"></div>
                    <div class="bg-custome-orange w-[250px] h-[46.44px] rounded-full"></div>
                    <div class="bg-white w-[250px] h-[46.44px] rounded-full"></div>
                </div> -->
            </div>
        </div>
    </div>

    <Footer />
</template>

<script>
import Navbar from "../../Components/User/Navbar.vue";
import Footer from "../../Components/User/Footer.vue";
import UserLayout from "../../Layouts/User.vue";
import dayjs from "dayjs";
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default {
    name: "IndexUser",
    layout: UserLayout,
    components: {
        Navbar,
        Footer,
        Swiper,
        SwiperSlide,
    },
    props: {
        news: Array,
        testimonial: Array,
    },
    setup() {
        const fDate = (date) => {
            return dayjs(date).format("YYYY-MM-DD");
        };

        function truncate(content) {
            return content.length > 200
                ? content.substring(0, 200) + " [...]"
                : content;
        }

        function stripHtmlTags(html) {
            return html.replace(/<[^>]*>/g, "");
        }

        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };

        return {
            fDate,
            truncate,
            stripHtmlTags,
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, Mousewheel, Keyboard],
        };
    },
};
</script>

<style>
/* Custom CSS for Swiper Navigation */
.swiper-button-next,
.swiper-button-prev {
    color: #fff; /* Warna teks putih */
    border : #fff;
    border-radius: 50%; /* Membuat tombol berbentuk lingkaran */
    width: 40px; /* Lebar tombol */
    height: 40px; /* Tinggi tombol */
    display: flex; /* Membuat konten fleksibel */
    align-items: center; /* Posisi teks ke tengah tombol */
    justify-content: center; /* Posisi teks ke tengah tombol */
    font-size: 20px; /* Ukuran font teks */
    cursor: pointer; /* Pointer cursor saat dihover */
    transition: background-color 0.3s, transform 0.2s; /* Animasi perubahan background dan transform */
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  transform: scale(1.1); /* Memperbesar tombol saat dihover */
}

.swiper-button-next {
  right: 10px; /* Jarak dari sisi kanan */
}

.swiper-button-prev {
  left: 10px; /* Jarak dari sisi kiri */
}
    
</style>