<template>
    <div class="w-full bg-custome-gray text-white">
        <div
            :class="`w-full bg-black z-10 overflow-hidden ${
                props.radius ? 'radius-page' : ''
            }`"
        >
            <nav
                class="bg-contain bg-no-repeat bg-left-top h-72 w-full pt-10 bg-black z-0"
                style="background-image: url(/assets/wave.svg)"
            >
                <div id="menu" class="transition ease-in-out duration-300 py-6">
                    <div
                        class="container mx-auto flex flex-wrap items-center justify-between px-2 sm:px-16"
                    >
                        <a href="/" class="flex">
                            <div class="flex justify-between items-center">
                                <img
                                    src="/assets/Path 34.svg"
                                    alt="Logo"
                                    class="mr-2"
                                />
                                <p class="text-white text-2xl">Keloola OS</p>
                            </div>
                        </a>
                        <button
                            data-collapse-toggle="mobile-menu"
                            type="button"
                            class="md:hidden ml-3 text-gray-400 rounded-lg inline-flex items-center justify-center"
                            aria-controls="mobile-menu-2"
                            aria-expanded="false"
                        >
                            <svg
                                class="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <svg
                                class="hidden w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </button>
                        <div
                            class="hidden bg-custome-gray md:bg-transparent z-50 md:block w-full md:w-auto"
                            id="mobile-menu"
                        >
                            <ul
                                class="flex-col md:flex-row flex md:items-center md:space-x-8 mt-4 md:mt-0 md:text-xs"
                            >
                                <li>
                                    <a
                                        href="/"
                                        :class="`text-white hover:bg-gray-700 border-b border-gray-900 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-white md:p-0 md:py-2 ${
                                            activePage == 'home'
                                                ? 'md:border-b-2 md:border-custome-orange'
                                                : ''
                                        } `"
                                        >Home</a
                                    >
                                </li>
                                <li>
                                    <button
                                        id="dropdownNavbarLink"
                                        data-dropdown-toggle="dropdownNavbar"
                                        :class="`text-white hover:bg-gray-700 md:hover:bg-transparent pl-3 pr-4 py-2 md:hover:text-white md:p-0 md:py-2 font-medium flex items-center justify-between w-full md:w-auto ${
                                            activePage == 'download'
                                                ? 'md:border-b-2 md:border-custome-orange'
                                                : ''
                                        }`"
                                    >
                                        Download
                                        <svg
                                            class="w-4 h-4 ml-1"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                    <!-- Dropdown menu -->
                                    <div
                                        id="dropdownNavbar"
                                        class="hidden bg-gray-700 text-base z-10 list-none divide-y divide-gray-900 rounded shadow my-4 w-[480px]"
                                    >
                                        <div
                                            class="px-4 py-4 text-white grid grid-cols-1 md:grid-cols-2"
                                        >
                                            <div>
                                                <p
                                                    class="text-sm text-custome-orange font-medium"
                                                >
                                                    Latest Version
                                                </p>
                                                <div
                                                    class="flex items-center justify-start mt-2"
                                                >
                                                    <a
                                                        href="/ready-download"
                                                        class="text-xs hover:text-custome-orange text-white block"
                                                        >Keloola OS 1.0</a
                                                    >
                                                    <span
                                                        class="bg-custome-orange rounded-md ml-1 text-xs px-2"
                                                        >Recommend</span
                                                    >
                                                </div>
                                            </div>
                                            <div class="mt-4 md:mt-0">
                                                <p
                                                    class="text-sm text-custome-orange font-medium"
                                                >
                                                    Other Version
                                                </p>
                                                <div class="mt-2">
                                                    <a
                                                        href="/tambora"
                                                        class="text-xs hover:text-custome-orange text-white block"
                                                        >Tambora 1.0</a
                                                    >
                                                    <a
                                                        href="/download"
                                                        class="text-xs hover:text-custome-orange text-white block mt-4"
                                                        >All Versions</a
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="bg-cover bg-no-repeat bg-left-top h-36 w-full pt-10 bg-black z-0 text-white grid grid-cols-2 px-4 hidden md:flex"
                                            style="
                                                background-image: url(/assets/wave.svg);
                                            "
                                            v-if="
                                                $page.props.btn_install_guide &&
                                                $page.props.btn_install_guide
                                                    .link
                                            "
                                        >
                                            <div>
                                                <p
                                                    class="text-sm font-semibold"
                                                >
                                                    Checkout the doc!
                                                </p>
                                                <p class="text-xs mt-2">
                                                    Follow the to learn how to
                                                    download and install Keloola
                                                    OS
                                                </p>
                                            </div>
                                            <div class="w-full text-end">
                                                <a
                                                    :href="
                                                        $page.props
                                                            .btn_install_guide
                                                            .link
                                                    "
                                                    class="text-white border border-custome-orange p-3 rounded-lg text-xs ml-auto"
                                                >
                                                    {{
                                                        $page.props
                                                            .btn_install_guide
                                                            .value
                                                    }}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <button
                                        id="dropdownNavbarLinkProject"
                                        data-dropdown-toggle="dropdownNavbarProject"
                                        :class="`text-white hover:bg-gray-700 md:hover:bg-transparent pl-3 pr-4 py-2 md:hover:text-white md:p-0 md:py-2 font-medium flex items-center justify-between w-full md:w-auto ${
                                            activePage == 'project'
                                                ? 'md:border-b-2 md:border-custome-orange'
                                                : ''
                                        }`"
                                    >
                                        Project
                                        <svg
                                            class="w-4 h-4 ml-1"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                    <!-- Dropdown menu -->
                                    <div
                                        id="dropdownNavbarProject"
                                        class="hidden bg-gray-700 text-base z-10 list-none divide-y divide-gray-900 rounded shadow my-4 w-[480px]"
                                    >
                                        <div
                                            class="px-4 py-1 text-white grid grid-cols-2"
                                        >
                                            <div>
                                                <p
                                                    class="text-sm text-custome-orange font-medium"
                                                >
                                                    Funding
                                                </p>
                                                <div class="mt-2">
                                                    <a
                                                        href="/donors"
                                                        class="text-xs hover:text-custome-orange text-white block"
                                                        >Donors</a
                                                    >
                                                    <a
                                                        href="/sponsors"
                                                        class="text-xs hover:text-custome-orange text-white block mt-4"
                                                        >Sponsors</a
                                                    >
                                                    <a
                                                        href="/partners"
                                                        class="text-xs hover:text-custome-orange text-white block mt-4"
                                                        >Partners</a
                                                    >
                                                </div>
                                            </div>
                                            <div>
                                                <p
                                                    class="text-sm text-custome-orange font-medium"
                                                >
                                                    Contributing
                                                </p>
                                                <div class="mt-2">
                                                    <a
                                                        href="/get-involved"
                                                        class="text-xs hover:text-custome-orange text-white block"
                                                        >Get Involved</a
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="bg-cover bg-no-repeat bg-left-top h-16 w-full pt-6 bg-black z-0 text-white px-4"
                                            style="
                                                background-image: url(/assets/wave.svg);
                                            "
                                        >
                                            <p class="text-xs text-center">
                                                Every little helps, don't
                                                hesitate to get involved
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <button
                                        id="dropdownNavbarLinkAbout"
                                        data-dropdown-toggle="dropdownNavbarAbout"
                                        :class="`text-white hover:bg-gray-700 md:hover:bg-transparent pl-3 pr-4 py-2 md:hover:text-white md:p-0 md:py-2 font-medium flex items-center justify-between w-full md:w-auto ${
                                            activePage == 'about'
                                                ? 'md:border-b-2 md:border-custome-orange'
                                                : ''
                                        }`"
                                    >
                                        About
                                        <svg
                                            class="w-4 h-4 ml-1"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                    <!-- Dropdown menu -->
                                    <div
                                        id="dropdownNavbarAbout"
                                        class="hidden bg-gray-700 text-base z-10 list-none divide-y divide-gray-900 rounded shadow my-4 w-[480px]"
                                    >
                                        <div
                                            class="px-4 py-2 text-white grid grid-cols-2"
                                        >
                                            <div>
                                                <a
                                                    href="/team"
                                                    class="text-xs hover:text-custome-orange text-white block"
                                                    >Team</a
                                                >
                                            </div>
                                            <div>
                                                <a
                                                    href="/contact"
                                                    class="text-xs hover:text-custome-orange text-white block"
                                                    >Contact Us</a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        :class="`text-white hover:bg-gray-700 border-b border-gray-900 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-white md:p-0 md:py-2 ${
                                            activePage == 'links'
                                                ? 'md:border-b-2 md:border-custome-orange'
                                                : ''
                                        }`"
                                        >Links</a
                                    >
                                </li>
                                <li>
                                    <a href="/donors">
                                        <button
                                            class="text-xs ml-2 py-1.5 px-2.5 my-4 md:my-0 md:mt-0 bg-white rounded-md text-black"
                                        >
                                            Donate
                                        </button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <slot name="content"></slot>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["radius", "activePage", "btn_install_guide"]);
</script>
