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
                                src="assets/donations.svg"
                                alt="image"
                                class="mx-auto w-10/12"
                            />
                        </div>
                        <div class="w-full lg:w-1/2 mt-6 lg:mt-0">
                            <p class="text-sm leading-loose">
                                We believe Linux Mint can gather the momentum
                                and the community <br />
                                necessary to fund itself entirely through
                                donations, sponsoring and<br />
                                advertisement without the need to engage in
                                commercial activities and<br />
                                without focusing on anything else than improving
                                the distribution itself.<br />
                            </p>
                            <p class="my-4 text-sm leading-loose">
                                The donations we receive range from a single
                                dollar to a couple of hundreds.<br />
                                The important thing is for people to give
                                something, and for us to generate the<br />
                                income that will let us work and succeed on this
                                project, month after month.<br />
                            </p>
                            <p class="text-sm leading-loose">
                                If you want to help and if you can do so please
                                make a donation to the project<br />
                                and encourage others to do so.
                            </p>
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
                        <p class="text-xl mt-4 font-medium">
                            Paypal or Debit/Credit Card
                        </p>
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
                        <p class="text-sm mt-2">
                            To donate in another currency choose to donate in
                            Euro. Paypal will <br />
                            automatically convert the currency during the
                            transaction.
                        </p>
                    </div>
                    <div class="w-full lg:w-1/2 mt-6 lg:mt-0">
                        <p class="text-xl font-medium">Patreon</p>
                        <p class="text-sm mt-2">
                            Alternatively you can set up a monthly donation via
                            Patreon:
                        </p>
                        <button
                            class="bg-custome-orange text-sm p-2 rounded-lg mt-2 flex justify-start items-center"
                            v-if="btn_patreon && btn_patreon.link"
                            @click="openPatreon(btn_patreon.link)"
                        >
                            <img
                                src="assets/handshake.svg"
                                alt="handshake"
                                class="pr-2 mr-2 border-r h-4"
                            />{{ btn_patreon.value }}
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
                        Or you can donate anonymously to Linux Mint using
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
                            />itcoin use the following address:
                        </p>
                    </div>
                    <div
                        class="h-52 w-52 border rounded-lg mx-auto mt-14"
                    ></div>
                    <p class="text-sm mt-9">
                        Note: Patrons and crypto-donations are anonymous and not
                        listed on this page. Paypal donations are
                        semi-anonymous, by default only your first name and the
                        first letter of your surname will appear.
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
                                <tr>
                                    <td class="px-6 py-4 border border-black">
                                        2023-10-20
                                    </td>
                                    <td
                                        class="px-6 py-4 border border-black text-left"
                                    >
                                        <div class="flex items-center">
                                            <div
                                                class="w-6 h-4 bg-white mr-4"
                                            ></div>
                                            Country
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 border border-black">
                                        $ 10
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 border border-black">
                                        2023-10-20
                                    </td>
                                    <td
                                        class="px-6 py-4 border border-black text-left"
                                    >
                                        <div class="flex items-center">
                                            <div
                                                class="w-6 h-4 bg-white mr-4"
                                            ></div>
                                            Country
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 border border-black">
                                        $ 10
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 border border-black">
                                        2023-10-20
                                    </td>
                                    <td
                                        class="px-6 py-4 border border-black text-left"
                                    >
                                        <div class="flex items-center">
                                            <div
                                                class="w-6 h-4 bg-white mr-4"
                                            ></div>
                                            Country
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 border border-black">
                                        $ 10
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 border border-black">
                                        2023-10-20
                                    </td>
                                    <td
                                        class="px-6 py-4 border border-black text-left"
                                    >
                                        <div class="flex items-center">
                                            <div
                                                class="w-6 h-4 bg-white mr-4"
                                            ></div>
                                            Country
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 border border-black">
                                        $ 10
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 border border-black">
                                        2023-10-20
                                    </td>
                                    <td
                                        class="px-6 py-4 border border-black text-left"
                                    >
                                        <div class="flex items-center">
                                            <div
                                                class="w-6 h-4 bg-white mr-4"
                                            ></div>
                                            Country
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 border border-black">
                                        $ 10
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 border border-black">
                                        2023-10-20
                                    </td>
                                    <td
                                        class="px-6 py-4 border border-black text-left"
                                    >
                                        <div class="flex items-center">
                                            <div
                                                class="w-6 h-4 bg-white mr-4"
                                            ></div>
                                            Country
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 border border-black">
                                        $ 10
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 border border-black">
                                        2023-10-20
                                    </td>
                                    <td
                                        class="px-6 py-4 border border-black text-left"
                                    >
                                        <div class="flex items-center">
                                            <div
                                                class="w-6 h-4 bg-white mr-4"
                                            ></div>
                                            Country
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 border border-black">
                                        $ 10
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 border border-black">
                                        2023-10-20
                                    </td>
                                    <td
                                        class="px-6 py-4 border border-black text-left"
                                    >
                                        <div class="flex items-center">
                                            <div
                                                class="w-6 h-4 bg-white mr-4"
                                            ></div>
                                            Country
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 border border-black">
                                        $ 10
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 border border-black">
                                        2023-10-20
                                    </td>
                                    <td
                                        class="px-6 py-4 border border-black text-left"
                                    >
                                        <div class="flex items-center">
                                            <div
                                                class="w-6 h-4 bg-white mr-4"
                                            ></div>
                                            Country
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 border border-black">
                                        $ 10
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 border border-black">
                                        2023-10-20
                                    </td>
                                    <td
                                        class="px-6 py-4 border border-black text-left"
                                    >
                                        <div class="flex items-center">
                                            <div
                                                class="w-6 h-4 bg-white mr-4"
                                            ></div>
                                            Country
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 border border-black">
                                        $ 10
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 border border-black">
                                        2023-10-20
                                    </td>
                                    <td
                                        class="px-6 py-4 border border-black text-left"
                                    >
                                        <div class="flex items-center">
                                            <div
                                                class="w-6 h-4 bg-white mr-4"
                                            ></div>
                                            Country
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 border border-black">
                                        $ 10
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
                                        <th
                                            scope="col"
                                            class="px-6 py-4 border border-black min-w-40 text-left"
                                        >
                                            CONTRIBUTION
                                        </th>
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
                                    <tr>
                                        <td
                                            class="px-6 py-4 border border-black text-left"
                                        >
                                            <div class="flex items-center">
                                                <div
                                                    class="w-6 h-4 bg-white mr-4"
                                                ></div>
                                                Country
                                            </div>
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            2023-10-20
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        ></td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            $ 10
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 border border-black text-left"
                                        >
                                            <div class="flex items-center">
                                                <div
                                                    class="w-6 h-4 bg-white mr-4"
                                                ></div>
                                                Country
                                            </div>
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            2023-10-20
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        ></td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            $ 10
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 border border-black text-left"
                                        >
                                            <div class="flex items-center">
                                                <div
                                                    class="w-6 h-4 bg-white mr-4"
                                                ></div>
                                                Country
                                            </div>
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            2023-10-20
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        ></td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            $ 10
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 border border-black text-left"
                                        >
                                            <div class="flex items-center">
                                                <div
                                                    class="w-6 h-4 bg-white mr-4"
                                                ></div>
                                                Country
                                            </div>
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            2023-10-20
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        ></td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            $ 10
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 border border-black text-left"
                                        >
                                            <div class="flex items-center">
                                                <div
                                                    class="w-6 h-4 bg-white mr-4"
                                                ></div>
                                                Country
                                            </div>
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            2023-10-20
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        ></td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            $ 10
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 border border-black text-left"
                                        >
                                            <div class="flex items-center">
                                                <div
                                                    class="w-6 h-4 bg-white mr-4"
                                                ></div>
                                                Country
                                            </div>
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            2023-10-20
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        ></td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            $ 10
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 border border-black text-left"
                                        >
                                            <div class="flex items-center">
                                                <div
                                                    class="w-6 h-4 bg-white mr-4"
                                                ></div>
                                                Country
                                            </div>
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            2023-10-20
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        ></td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            $ 10
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 border border-black text-left"
                                        >
                                            <div class="flex items-center">
                                                <div
                                                    class="w-6 h-4 bg-white mr-4"
                                                ></div>
                                                Country
                                            </div>
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            2023-10-20
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        ></td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            $ 10
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 border border-black text-left"
                                        >
                                            <div class="flex items-center">
                                                <div
                                                    class="w-6 h-4 bg-white mr-4"
                                                ></div>
                                                Country
                                            </div>
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            2023-10-20
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        ></td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            $ 10
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 border border-black text-left"
                                        >
                                            <div class="flex items-center">
                                                <div
                                                    class="w-6 h-4 bg-white mr-4"
                                                ></div>
                                                Country
                                            </div>
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            2023-10-20
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        ></td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            $ 10
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
                                    <tr>
                                        <td
                                            class="px-6 py-4 border border-black text-left"
                                        >
                                            <div class="flex items-center">
                                                <div
                                                    class="w-6 h-4 bg-white mr-4"
                                                ></div>
                                                Country
                                            </div>
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            24
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            $ 1200
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 border border-black text-left"
                                        >
                                            <div class="flex items-center">
                                                <div
                                                    class="w-6 h-4 bg-white mr-4"
                                                ></div>
                                                Country
                                            </div>
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            1
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            $ 1200
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 border border-black text-left"
                                        >
                                            <div class="flex items-center">
                                                <div
                                                    class="w-6 h-4 bg-white mr-4"
                                                ></div>
                                                Country
                                            </div>
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            5
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            $ 1200
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 border border-black text-left"
                                        >
                                            <div class="flex items-center">
                                                <div
                                                    class="w-6 h-4 bg-white mr-4"
                                                ></div>
                                                Country
                                            </div>
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            8
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            $ 1200
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 border border-black text-left"
                                        >
                                            <div class="flex items-center">
                                                <div
                                                    class="w-6 h-4 bg-white mr-4"
                                                ></div>
                                                Country
                                            </div>
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            17
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            $ 1200
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 border border-black text-left"
                                        >
                                            <div class="flex items-center">
                                                <div
                                                    class="w-6 h-4 bg-white mr-4"
                                                ></div>
                                                Country
                                            </div>
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            22
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            $ 1200
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 border border-black text-left"
                                        >
                                            <div class="flex items-center">
                                                <div
                                                    class="w-6 h-4 bg-white mr-4"
                                                ></div>
                                                Country
                                            </div>
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            24
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            $ 1200
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 border border-black text-left"
                                        >
                                            <div class="flex items-center">
                                                <div
                                                    class="w-6 h-4 bg-white mr-4"
                                                ></div>
                                                Country
                                            </div>
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            24
                                        </td>
                                        <td
                                            class="px-6 py-4 border border-black"
                                        >
                                            $ 1200
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
        btn_patreon: Object,
    },
    setup() {
        function openPatreon(link) {
            window.open(link, "_blank");
        }

        return { openPatreon };
    },
};
</script>
