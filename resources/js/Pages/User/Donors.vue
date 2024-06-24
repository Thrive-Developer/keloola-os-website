<template>
    <Navbar active-page="project">
        <template #content>
            <!-- Content -->
            <div class="container mx-auto px-4 sm:px-16 -mt-36">
                <h1 class="text-custome-orange text-3xl font-semibold">
                    Donors
                </h1>
            </div>

            <div class="bg-custome-gray mt-3">
                <div class="container mx-auto px-4 sm:px-16 py-4">
                    <h1 class="text-custome-orange text-2xl font-semibold">
                        Donating to Keloola OS
                    </h1>
                    <div class="lg:flex lg:justify-between items-start mt-12">
                        <div class="w-full lg:w-1/2">
                            <img
                                v-if="image_hero && image_hero.value"
                                :src="image_hero.value"
                                alt="image"
                                class="mx-auto w-10/12"
                            />
                        </div>
                        <div class="w-full lg:w-1/2 mt-6 lg:mt-0">
                            <span v-html="text_hero.value"></span>
                        </div>
                    </div>
                </div>
                <div
                    class="bg-contain bg-no-repeat bg-right-bottom h-72 -mt-60 z-0"
                    style="background-image: url(/assets/wave-03\ 2.svg)"
                ></div>
            </div>

            <div
                class="bg-gradient-to-r from-custome-radialred-from via-custome-radialred-to via-70% to-custome-radialred-to py-12"
            >
                <div
                    class="container mx-auto px-4 sm:px-16 py-4 lg:flex lg:justify-between lg:items-center"
                >
                    <div class="w-full lg:w-1/2">
                        <h1 class="text-custome-orange text-2xl font-semibold">
                            How to donate
                        </h1>
                        <p class="text-xl mt-4 font-medium">Bank Transfer</p>
                        <p class="text-sm mt-2">
                            You can make a donation is $USD or in IDR
                        </p>
                        <div
                            class="mt-2 flex justify-start items-center gap-1.5"
                        >
                            <a
                                class="bg-custome-orange text-sm p-2 rounded-lg flex justify-start items-center"
                                v-if="btn_usd && btn_usd.link"
                                :href="btn_usd.link"
                                target="_blank"
                            >
                                <img
                                    src="assets/dollar.svg"
                                    alt="dollar"
                                    class="pr-2 mr-2 border-r h-4"
                                />{{ btn_usd.value }}
                            </a>
                            <a
                                class="bg-custome-orange text-sm p-2 rounded-lg flex justify-start items-center"
                                v-if="btn_idr && btn_idr.link"
                                :href="btn_idr.link"
                                target="_blank"
                            >
                                <span class="pr-2 mr-2 border-r h-4">IDR</span>
                                {{ btn_idr.value }}
                            </a>
                        </div>
                        <!-- <p class="text-sm mt-2">
                            To donate in another currency choose to donate in
                            Euro. Paypal will <br />
                            automatically convert the currency during the
                            transaction.
                        </p> -->
                    </div>
                    <div class="w-full lg:w-1/2 mt-6 lg:mt-0">
                        <p class="text-xl font-medium">Other</p>
                        <p class="text-sm mt-2">
                            For donations using other payment methods, please
                            click the link below
                        </p>
                        <button
                            class="bg-custome-orange text-sm p-2 rounded-lg mt-2 flex justify-start items-center"
                            v-if="btn_other && btn_other.link"
                            @click="openOther(btn_other.link)"
                        >
                            <img
                                src="assets/handshake.svg"
                                alt="handshake"
                                class="pr-2 mr-2 border-r h-4"
                            />{{ btn_other.value }}
                        </button>
                    </div>
                </div>
            </div>

            <div class="bg-custome-graylight">
                <div
                    class="bg-cover bg-center h-80 z-0 flex justify-center items-center"
                    style="background-image: url(/assets/wave-03\ 3.svg)"
                ></div>
                <div class="-mt-80 container mx-auto px-4 sm:px-16 py-10">
                    <p class="text-xl mt-4 font-medium">Crypto-currencies</p>
                    <p class="text-sm mt-2">
                        Or you can donate anonymously to Keloola OS using
                        crypto-currencies.
                    </p>
                    <div class="flex justify-start items-center mt-3">
                        <div
                            class="flex justify-start items-center p-2 border-b-4 border-[#E27820]"
                        >
                            <img
                                src="assets/btc.svg"
                                alt="btc"
                                class="mr-1 h-4"
                            />
                            <p class="text-sm font-bold">BTC</p>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <p class="flex items-center text-sm mt-5 text-center">
                            To donate in
                            <img
                                src="assets/btc-white.svg"
                                alt="btc-white"
                                class="ml-1 h-4"
                            />Bitcoin use the following address:
                        </p>
                    </div>
                    <div class="h-52 w-52 border rounded-lg mx-auto mt-14">
                        <img
                            v-if="image_bitcoin && image_bitcoin.value"
                            :src="image_bitcoin.value"
                            alt="btc"
                            class="h-52 w-52"
                        />
                    </div>
                    <p class="text-sm mt-9">
                        Note: Crypto-donations are anonymous and not listed on
                        this page. Bank transfer donations are semi-anonymous,
                        by default only your first name and the first letter of
                        your username will appear.
                    </p>
                </div>
            </div>

            <div
                class="bg-gradient-to-r from-[#413E1E] via-[#28271A] via-10% via-custome-radialred-to via-40% to-custome-radialred-to py-12"
            >
                <div class="container mx-auto px-4 sm:px-16">
                    <h1 class="text-custome-orange text-2xl font-semibold">
                        Latest donors
                    </h1>
                    <div
                        class="max-h-96 overflow-auto mt-3.5"
                        style="
                            scrollbar-width: thin;
                            scrollbar-color: #777777 #e4e5e7;
                        "
                    >
                        <table
                            class="min-w-full text-center text-sm font-light text-surface"
                        >
                            <thead class="bg-custome-orange text-white">
                                <tr>
                                    <th
                                        scope="col"
                                        class="px-6 py-4 border border-black min-w-40"
                                    >
                                        DATE
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-4 border border-black min-w-72 text-left"
                                    >
                                        DONOR
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-4 border border-black min-w-52"
                                    >
                                        AMOUNT DONATED
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="(latest, index) in latest_donor"
                                    :key="index"
                                >
                                    <td class="px-6 py-4 border border-black">
                                        {{ latest.date }}
                                    </td>
                                    <td
                                        class="px-6 py-4 border border-black text-left"
                                    >
                                        <div class="flex items-center">
                                            <div class="w-6 h-4 bg-white mr-4">
                                                <img
                                                    :src="`/flags/${toLower(
                                                        latest.r_country
                                                            .country_iso
                                                    )}.png`"
                                                    :alt="latest.country"
                                                />
                                            </div>
                                            <p>{{ latest.country }}</p>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 border border-black">
                                        $ {{ latest.amount }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div
                class="bg-contain bg-no-repeat bg-top z-0 bg-custome-graylight"
                style="background-image: url(/assets/Clip\ path\ group.svg)"
            >
                <div class="py-14">
                    <div class="container mx-auto px-4 sm:px-16">
                        <h1 class="text-custome-orange text-2xl font-semibold">
                            Top 10 Countries
                        </h1>
                        <div
                            class="max-h-96 overflow-auto mt-3.5"
                            style="
                                scrollbar-width: thin;
                                scrollbar-color: #777777 #e4e5e7;
                            "
                        >
                            <table
                                class="min-w-full text-center text-sm font-light text-surface"
                            >
                                <thead class="bg-custome-orange text-white">
                                    <tr>
                                        <th
                                            scope="col"
                                            class="px-6 py-4 border border-black min-w-72"
                                        >
                                            COUNTRY
                                        </th>
                                        <!-- <th
                                            scope="col"
                                            class="px-6 py-4 border border-black min-w-40 text-left"
                                        >
                                            CONTRIBUTION
                                        </th> -->
                                        <th
                                            scope="col"
                                            class="px-6 py-4 border border-black min-w-40"
                                        >
                                            AVERAGE
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-4 border border-black min-w-40"
                                        >
                                            HIGHEST
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="(top10, index) in top10_country"
                                        :key="index"
                                    >
                                        <td
                                            class="px-6 py-4 border border-black text-left"
                                        >
                                            <div class="flex items-center">
                                                <div
                                                    class="w-6 h-4 bg-white mr-4"
                                                >
                                                    <img
                                                        :src="`/flags/${toLower(
                                                            top10.r_country
                                                                .country_iso
                                                        )}.png`"
                                                        :alt="top10.country"
                                                    />
                                                </div>
                                                <p>{{ top10.country }}</p>
                                            </div>
                                        </td>
                                        <!-- <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            {{ top10.date }}
                                        </td> -->
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            $
                                            {{
                                                parseFloat(top10.avg).toFixed(2)
                                            }}
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            $ {{ top10.max }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="py-14 bg-custome-gray bg-opacity-70">
                    <div class="container mx-auto px-4 sm:px-16">
                        <h1 class="text-custome-orange text-2xl font-semibold">
                            Top 100 Donors
                        </h1>
                        <div
                            class="max-h-96 overflow-auto mt-3.5"
                            style="
                                scrollbar-width: thin;
                                scrollbar-color: #777777 #e4e5e7;
                            "
                        >
                            <table
                                class="min-w-full text-center text-sm font-light text-surface"
                            >
                                <thead class="bg-custome-orange text-white">
                                    <tr>
                                        <th
                                            scope="col"
                                            class="px-6 py-4 border border-black min-w-72 text-left"
                                        >
                                            DONOR
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-4 border border-black min-w-40"
                                        >
                                            NUMBER OF DONATIONS
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-4 border border-black min-w-52"
                                        >
                                            AMOUNT DONATED
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="(
                                            top100, index
                                        ) in top100_country_count_donation"
                                        :key="index"
                                    >
                                        <td
                                            class="px-6 py-4 border border-black text-left"
                                        >
                                            <div class="flex items-center">
                                                <div
                                                    class="w-6 h-4 bg-white mr-4"
                                                >
                                                    <img
                                                        :src="`/flags/${toLower(
                                                            top100.r_country
                                                                .country_iso
                                                        )}.png`"
                                                        :alt="top100.country"
                                                    />
                                                </div>
                                                <p>{{ top100.country }}</p>
                                            </div>
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            {{ top100.total }}
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            $ {{ top100.sum }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div
                    class="bg-cover bg-no-repeat bg-right w-auto h-48 z-0 -mt-48"
                    style="background-image: url(/assets/wave-03\ 2.svg)"
                ></div>
            </div>
            <!-- End Content -->
        </template>
    </Navbar>

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
    props: {
        btn_usd: Object,
        btn_idr: Object,
        btn_other: Object,
        image_hero: Object,
        text_hero: Object,
        image_bitcoin: Object,
        latest_donor: Array,
        top10_country: Array,
        top100_country_count_donation: Array,
    },
    setup() {
        function openOther(link) {
            window.open(link, "_blank");
        }

        function toLower(text) {
            return text.toLowerCase();
        }

        return { openOther, toLower };
    },
};
</script>
