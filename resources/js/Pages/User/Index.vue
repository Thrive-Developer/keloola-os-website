<template>
    <div class="w-full bg-custome-gray">
        <div
            class="w-full bg-black z-10 overflow-hidden"
            style="
                border-bottom-left-radius: 100% 20%;
                border-bottom-right-radius: 100% 20%;
            "
        >
            <Navbar />

            <!-- Content -->
            <div
                class="bg-contain bg-right-top bg-no-repeat h-auto -mt-36 z-10 rounded-b-lg"
                style="background-image: url(/assets/Vector.svg)"
            >
                <div class="flex justify-between container mx-auto px-16">
                    <div class="mt-10 mb-36 w-full md:w-1/2">
                        <p class="text-custome-orange">“Victoria”</p>
                        <h1 class="text-white text-5xl font-bold my-2">
                            Keloola OS
                        </h1>
                        <p class="text-white">
                            The first Version of the friendly operating system
                            is here.<br />
                            Install it on your computer today!
                        </p>
                        <div class="mt-4">
                            <button
                                class="text-white bg-custome-orange p-3 rounded-lg mr-4 text-xs"
                            >
                                Download
                            </button>
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
        </div>
    </div>

    <div class="h-auto pt-28 bg-custome-gray">
        <div class="container mx-auto px-16 lg:flex lg:justify-between">
            <div class="w-full lg:w-1/3 lg:pr-6">
                <p class="text-white">Features</p>
                <h2 class="text-custome-orange text-4xl font-medium my-2">
                    What is Keloola OS?
                </h2>
                <p class="text-white text-xs leading-loose">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                </p>
                <div
                    class="p-10 mt-8 border-gradient-yellow"
                    style="border-radius: 20px"
                >
                    <img src="assets/graphic-design.svg" alt="graphic-design" />
                    <p class="text-custome-yellow font-bold mb-8 mt-1.5">
                        Graphic Design
                    </p>
                    <p class="text-white text-xs leading-loose">
                        Lorem ipsum dolor sit amet, consect adipiscing elit, sed
                        diam nonummy nibh euismod tincidunt ut laoreet dolore.
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
                    <p class="text-white text-xs leading-loose">
                        Lorem ipsum dolor sit amet, consect adipiscing elit, sed
                        diam nonummy nibh euismod tincidunt ut laoreet dolore.
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
                    <p class="text-white text-xs leading-loose">
                        Lorem ipsum dolor sit amet, consect adipiscing elit, sed
                        diam nonummy nibh euismod tincidunt ut laoreet dolore.
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
                    <p class="text-white text-xs leading-loose">
                        Lorem ipsum dolor sit amet, consect adipiscing elit, sed
                        diam nonummy nibh euismod tincidunt ut laoreet dolore.
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
                    <p class="text-white text-xs leading-loose">
                        Lorem ipsum dolor sit amet, consect adipiscing elit, sed
                        diam nonummy nibh euismod tincidunt ut laoreet dolore.
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

    <div class="bg-black py-32">
        <h2 class="text-custome-orange text-3xl font-medium text-center">
            Give it a try. You’ll love it!
        </h2>
        <p class="text-center text-white text-xs">
            Most of users come from Windows and they never look back
        </p>
    </div>

    <div
        class="bg-cover bg-center z-0 bg-custome-gray"
        style="background-image: url(/assets/wave-04\ 1.svg)"
    >
        <div class="container mx-auto px-16 py-28">
            <p class="text-center text-white mb-2 italic">
                Why choose Keloola OS?
            </p>
            <h2 class="text-custome-orange text-3xl font-medium text-center">
                Easy to use, fast and comfortable
            </h2>
            <p class="text-center text-white mt-1 text-xs">
                Give your hardware the operating system it deserve and feel
                right at home.
            </p>
            <div class="mt-11 grid md:grid-cols-2 lg:grid-cols-3 gap-14">
                <div class="flex justify-center items-start">
                    <img src="assets/Path 21.svg" class="mr-5" alt="image" />
                    <div>
                        <p class="text-custome-orange font-bold">OOTB</p>
                        <p class="text-white text-xs leading-loose">
                            Lorem ipsum dolor sit amet, consect adipiscing elit,
                            sed diam nonummy nibh euismod tincidunt ut laoreet
                            dolore.
                        </p>
                    </div>
                </div>
                <div class="flex justify-center items-start">
                    <img src="assets/Path 21.svg" class="mr-5" alt="image" />
                    <div>
                        <p class="text-custome-orange font-bold">Rock Solid</p>
                        <p class="text-white text-xs leading-loose">
                            Lorem ipsum dolor sit amet, consect adipiscing elit,
                            sed diam nonummy nibh euismod tincidunt ut laoreet
                            dolore.
                        </p>
                    </div>
                </div>
                <div class="flex justify-center items-start">
                    <img src="assets/Path 21.svg" class="mr-5" alt="image" />
                    <div>
                        <p class="text-custome-orange font-bold">OOTB</p>
                        <p class="text-white text-xs leading-loose">
                            Lorem ipsum dolor sit amet, consect adipiscing elit,
                            sed diam nonummy nibh euismod tincidunt ut laoreet
                            dolore.
                        </p>
                    </div>
                </div>
                <div class="flex justify-center items-start">
                    <img src="assets/Path 21.svg" class="mr-5" alt="image" />
                    <div>
                        <p class="text-custome-orange font-bold">Rock Solid</p>
                        <p class="text-white text-xs leading-loose">
                            Lorem ipsum dolor sit amet, consect adipiscing elit,
                            sed diam nonummy nibh euismod tincidunt ut laoreet
                            dolore.
                        </p>
                    </div>
                </div>
                <div class="flex justify-center items-start">
                    <img src="assets/Path 21.svg" class="mr-5" alt="image" />
                    <div>
                        <p class="text-custome-orange font-bold">OOTB</p>
                        <p class="text-white text-xs leading-loose">
                            Lorem ipsum dolor sit amet, consect adipiscing elit,
                            sed diam nonummy nibh euismod tincidunt ut laoreet
                            dolore.
                        </p>
                    </div>
                </div>
                <div class="flex justify-center items-start">
                    <img src="assets/Path 21.svg" class="mr-5" alt="image" />
                    <div>
                        <p class="text-custome-orange font-bold">Rock Solid</p>
                        <p class="text-white text-xs leading-loose">
                            Lorem ipsum dolor sit amet, consect adipiscing elit,
                            sed diam nonummy nibh euismod tincidunt ut laoreet
                            dolore.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div
        class="w-full bg-radial bg-center bg-no-repeat from-custome-radialred-from to-custome-radialred-to"
    >
        <div class="container mx-auto pt-16 pb-12 px-16">
            <p class="text-center text-white mb-2 italic">
                Have any questions?
            </p>
            <h2 class="text-custome-orange text-3xl font-semibold text-center">
                Fun, helpful and passionate
            </h2>
            <p class="text-center text-white mt-1 text-xs leading-loose">
                If you’re making your first steps with Keloola OS don’t hesitate
                to join the forums. Keloola users are <br />
                often welcoming, helpful and eager to share their experience.
            </p>
            <div class="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-14">
                <div>
                    <p class="text-custome-orange font-bold">Is it free?</p>
                    <p class="text-white text-xs leading-loose">
                        Yes, Linux Mint is completely free <br />
                        of charge. Almost everything in <br />
                        Keloola OS is also open-source.
                    </p>
                </div>
                <div>
                    <p class="text-custome-orange font-bold">
                        Will it work on my computer?
                    </p>
                    <p class="text-white text-xs leading-loose">
                        Yes, eloola OS works on most<br />
                        computers. It can also be run from<br />
                        a live USB stick to make sure<br />
                        everything works fine without<br />
                        having to install anything.
                    </p>
                </div>
                <div>
                    <p class="text-custome-orange font-bold">
                        Can I keep Windows?
                    </p>
                    <p class="text-white text-xs leading-loose">
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
                    <p class="text-white text-xs leading-loose">
                        Hopefully. Linux Mint comes with what<br />
                        most people need out of the box as<br />
                        well as easy access to more than<br />
                        60,000 software packages and<br />
                        7,800 games.
                    </p>
                </div>
            </div>
            <div class="flex justify-center mt-14">
                <button
                    class="text-white bg-custome-orange p-3 rounded-lg mr-4 font-bold text-xs"
                >
                    Read more FAQs
                </button>
            </div>
        </div>
    </div>

    <div class="bg-custome-gray">
        <div
            class="bg-contain bg-no-repeat bg-left-top h-72 pt-10 z-0"
            style="background-image: url(/assets/wave-03\ 6.svg)"
        ></div>
        <div class="-mt-48 mb-28">
            <p class="text-xs italic z-10 text-white text-center">
                From the press
            </p>
        </div>
        <div
            class="bg-contain bg-no-repeat bg-right-bottom h-72 pt-10 z-0"
            style="background-image: url(/assets/wave-03\ 2.svg)"
        ></div>
    </div>

    <div class="bg-custome-graylight">
        <div class="container mx-auto px-16 pt-16 pb-12">
            <p class="text-center text-white mb-2 italic">From the blog</p>
            <h2 class="text-custome-orange text-3xl font-medium text-center">
                Latest news
            </h2>
            <p class="text-center text-white mt-1 text-xs">
                Click news title to get to the article.
            </p>
            <div
                class="grid md:grid-cols-2 lg:grid-cols-3 items-start mt-14 gap-6"
            >
                <div class="bg-custome-dark p-8 rounded-xl">
                    <div class="flex justify-between items-center">
                        <p class="text-white text-xs">15-10-2023</p>
                        <div
                            class="text-white bg-custome-orange py-1 px-5 rounded-md text-xs"
                        >
                            Blog
                        </div>
                    </div>
                    <p class="text-custome-orange mt-4 mb-4 text-xs">
                        Monthly News - October 2023
                    </p>
                    <p class="text-white text-xs leading-loose">
                        Lorem ipsum dolor sit amet, consect adipiscing elit, sed
                        diam nonummy nibh euismod tincidunt ut laoreet dolore
                        magna aliquam erat volutpat. Ut wisi enim ad minim
                        veniam, quis nostrud exerci[...]
                    </p>
                </div>
                <div class="bg-custome-dark p-8 rounded-xl">
                    <div class="flex justify-between items-center">
                        <p class="text-white text-xs">10-10-2023</p>
                        <div
                            class="text-white bg-custome-orange py-1 px-5 rounded-md text-xs"
                        >
                            Blog
                        </div>
                    </div>
                    <p class="text-custome-orange mt-4 mb-4 text-xs">
                        Edge Iso Available for Keloola OS
                    </p>
                    <p class="text-white text-xs leading-loose">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut[...]
                    </p>
                </div>
                <div class="bg-custome-dark p-8 rounded-xl">
                    <div class="flex justify-between items-center">
                        <p class="text-white text-xs">24-09-2023</p>
                        <div
                            class="text-white bg-custome-orange py-1 px-5 rounded-md text-xs"
                        >
                            Blog
                        </div>
                    </div>
                    <p class="text-custome-orange mt-4 mb-4 text-xs">
                        Keloola OS Tambora Released!
                    </p>
                    <p class="text-white text-xs leading-loose">
                        Lorem ipsum dolor sit amet, consect adipiscing elit, sed
                        diam nonummy euismod tincidunt ut laoreet dolore magna
                        aliquam erat volutpat. Ut wisi enim ad minim veniam,
                        quis[...]
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
        <div class="container mx-auto z-10 -mt-36 pb-40">
            <h2 class="text-custome-orange text-3xl font-medium text-center">
                A fantastic community!
            </h2>
            <p class="text-center text-white mt-1 text-xs leading-loose">
                We receive more than 300 donations a month. Our users love what
                we do and they mean the World to us. <br />
                Around the desktop operating system Linux Mint is also a
                fantastic community.
            </p>
        </div>
    </div>

    <div
        class="bg-cover bg-center z-0 bg-custome-gray"
        style="background-image: url(/assets/wave-04\ 1.svg)"
    >
        <div class="container mx-auto px-16 py-28">
            <p class="text-center text-white mb-2 italic text-sm">
                Brought to you by
            </p>
            <h2 class="text-custome-orange text-3xl font-medium text-center">
                Partners and sponsors
            </h2>
            <p class="text-center text-white mt-1 text-xs">
                Keloola OS is also supported by an amazing network of partners
                and sponsors
            </p>
            <div class="mt-20">
                <div class="flex justify-center gap-14">
                    <div
                        class="bg-white w-[250px] h-[46.44px] rounded-full"
                    ></div>
                    <div
                        class="bg-custome-orange w-[250px] h-[46.44px] rounded-full"
                    ></div>
                    <div
                        class="bg-white w-[250px] h-[46.44px] rounded-full"
                    ></div>
                </div>
                <div class="flex justify-center gap-14 my-14">
                    <div
                        class="bg-custome-orange w-[250px] h-[46.44px] rounded-full"
                    ></div>
                    <div
                        class="bg-white w-[250px] h-[46.44px] rounded-full"
                    ></div>
                </div>
                <div class="flex justify-center gap-14">
                    <div
                        class="bg-white w-[250px] h-[46.44px] rounded-full"
                    ></div>
                    <div
                        class="bg-custome-orange w-[250px] h-[46.44px] rounded-full"
                    ></div>
                    <div
                        class="bg-white w-[250px] h-[46.44px] rounded-full"
                    ></div>
                </div>
            </div>
        </div>
    </div>
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
};
</script>
