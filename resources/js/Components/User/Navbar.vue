<template>
    <nav
        class="bg-contain bg-no-repeat bg-right-top h-72 w-full pt-10 bg-black z-0"
        style="background-image: url(/assets/wave.svg)"
    >
        <div
            class="container mx-auto flex flex-wrap items-center justify-between px-16"
        >
            <a href="#" class="flex">
                <div class="flex justify-between items-center">
                    <img src="/assets/Path 34.svg" alt="Logo" class="mr-2" />
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
                            href="#"
                            class="text-white hover:bg-gray-700 border-b border-gray-900 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-white md:p-0 md:py-2 md:border-b-2 md:border-custome-orange"
                            >Home</a
                        >
                    </li>
                    <li>
                        <button
                            id="dropdownNavbarLink"
                            data-dropdown-toggle="dropdownNavbar"
                            class="text-white hover:bg-gray-700 md:hover:bg-transparent pl-3 pr-4 py-2 md:hover:text-white md:p-0 md:py-2 font-medium flex items-center justify-between w-full md:w-auto"
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
                            class="hidden bg-gray-700 text-base z-10 list-none divide-y divide-gray-900 rounded shadow my-4 w-44"
                        >
                            <ul
                                class="py-1"
                                aria-labelledby="dropdownLargeButton"
                            >
                                <li>
                                    <a
                                        href="#"
                                        class="text-xs hover:bg-gray-900 text-white block px-4 py-2"
                                        >Home</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="text-xs hover:bg-gray-900 text-white block px-4 py-2"
                                        >Settings</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="text-xs hover:bg-gray-900 text-white block px-4 py-2"
                                        >Earnings</a
                                    >
                                </li>
                            </ul>
                            <div class="py-1">
                                <a
                                    href="#"
                                    class="text-xs hover:bg-gray-900 text-white block px-4 py-2"
                                    >Sign out</a
                                >
                            </div>
                        </div>
                    </li>
                    <li>
                        <a
                            href="#"
                            class="text-white hover:bg-gray-700 border-b border-gray-900 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-white md:p-0 md:py-2"
                            >Project</a
                        >
                    </li>
                    <li>
                        <a
                            href="#"
                            class="text-white hover:bg-gray-700 border-b border-gray-900 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-white md:p-0 md:py-2"
                            >About</a
                        >
                    </li>
                    <li>
                        <a
                            href="#"
                            class="text-white hover:bg-gray-700 border-b border-gray-900 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-white md:p-0 md:py-2"
                            >Links</a
                        >
                    </li>
                    <li>
                        <button
                            class="text-xs ml-2 py-1.5 px-2.5 my-4 md:my-0 md:mt-0 bg-white rounded-md text-black"
                        >
                            Donate
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {};
</script>
