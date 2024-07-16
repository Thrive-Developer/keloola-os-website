<template>
    <Navbar active-page="download">
        <template #content>
            <!-- Content -->
            <div class="container mx-auto px-4 sm:px-16 -mt-36">
                <h1 class="text-custome-orange text-3xl font-semibold">
                    All Versions
                </h1>
            </div>
            <div class="bg-custome-gray text-white">
                <div
                    class="bg-contain bg-no-repeat bg-top z-0 bg-custome-gray mt-3"
                    style="background-image: url(/assets/Clip\ path\ group.svg)"
                >
                    <div class="container mx-auto px-4 sm:px-16 py-12">
                        <p class="text-center text-white mb-2 italic text-sm">
                            Currently supported
                        </p>
                        <h2
                            class="text-custome-orange text-3xl font-medium text-center"
                        >
                            Keloola OS Releases
                        </h2>
                        <p class="text-center text-white mt-1 text-sm">
                            The table below shows all the Keloola OS releases
                            which are currently supported.
                        </p>
                        <div
                            class="overflow-auto mt-3.5"
                            style="
                                scrollbar-width: thin;
                                scrollbar-color: #777777 #e4e5e7;
                            "
                        >
                            <table
                                class="mt-12 text-sm font-light text-surface w-full"
                            >
                                <thead
                                    class="bg-custome-orange text-white text-sm"
                                >
                                    <tr>
                                        <th
                                            scope="col"
                                            class="px-4 py-2 border border-black min-w-24"
                                        >
                                            VERSION
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-4 py-2 border border-black min-w-40"
                                        >
                                            CODE NAME
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-4 py-2 border border-black min-w-28"
                                        >
                                            EDITION
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-4 py-2 border border-black min-w-40"
                                        >
                                            PACKAGE USE
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-4 py-2 border border-black min-w-56"
                                        >
                                            STATUS
                                        </th>
                                    </tr>
                                </thead>
                                <tbody
                                    class="text-sm leading-loose items-start bg-white text-black hover:bg-[#FFC9B0]"
                                >
                                    <tr
                                        v-for="(row, index) in os_versions"
                                        :key="index"
                                        class="hover:bg-[#FFC9B0]"
                                    >
                                        <td
                                            class="px-4 py-2 border border-black"
                                        >
                                            {{ row.version }}
                                        </td>
                                        <td
                                            class="px-4 py-2 border border-black"
                                        >
                                            <a :href="`/download/${row.slug}`">
                                                {{ row.code_name }}
                                            </a>
                                        </td>
                                        <td
                                            class="px-4 py-2 border border-black"
                                        >
                                            <p
                                                v-for="(
                                                    edition, index
                                                ) in row.os_editions"
                                                :key="index"
                                            >
                                                <a
                                                    :href="`/ready-download/${row.slug}?edition=${edition.slug}`"
                                                >
                                                    {{ edition.name }}
                                                </a>
                                            </p>
                                        </td>
                                        <td
                                            class="px-4 py-2 border border-black"
                                        >
                                            {{ row.package_base }}
                                        </td>
                                        <td
                                            class="px-4 py-2 border border-black"
                                        >
                                            {{ row.status }}
                                        </td>
                                    </tr>
                                    <!-- <tr>
                                        <td class="px-4 py-2 border border-black">21.2</td>
                                        <td class="px-4 py-2 border border-black">Victoria</td>
                                        <td class="px-4 py-2 border border-black">Cinnamon</td>
                                        <td class="px-4 py-2 border border-black">Ubuntu Jammy</td>
                                        <td class="px-4 py-2 border border-black">Long term support release (LTS), supported until April 2027.</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black">Cinnamon (Edge)</td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black">MATE</td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black">Xfce</td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 border border-black">21.1</td>
                                        <td class="px-4 py-2 border border-black">Vera</td>
                                        <td class="px-4 py-2 border border-black">Cinnamon</td>
                                        <td class="px-4 py-2 border border-black">Ubuntu Jammy</td>
                                        <td class="px-4 py-2 border border-black">Long term support release (LTS), supported until April 2027.</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black">MATE</td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black">Xfce</td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 border border-black">21</td>
                                        <td class="px-4 py-2 border border-black">Vanessa</td>
                                        <td class="px-4 py-2 border border-black">Cinnamon</td>
                                        <td class="px-4 py-2 border border-black">Ubuntu Jammy</td>
                                        <td class="px-4 py-2 border border-black">Long term support release (LTS), supported until April 2027.</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black">MATE</td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black">Xfce</td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 border border-black">20.3</td>
                                        <td class="px-4 py-2 border border-black">Una</td>
                                        <td class="px-4 py-2 border border-black">Cinnamon</td>
                                        <td class="px-4 py-2 border border-black">Ubuntu Focal</td>
                                        <td class="px-4 py-2 border border-black">Long term support release (LTS), supported until April 2025.</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black">Cinnamon (Edge)</td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black">MATE</td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black">Xfce</td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 border border-black">20.2</td>
                                        <td class="px-4 py-2 border border-black">Uma</td>
                                        <td class="px-4 py-2 border border-black">Cinnamon</td>
                                        <td class="px-4 py-2 border border-black">Ubuntu Focal</td>
                                        <td class="px-4 py-2 border border-black">Long term support release (LTS), supported until April 2025.</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black">Cinnamon (Edge)</td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black">MATE</td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black">Xfce</td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 border border-black">20.1</td>
                                        <td class="px-4 py-2 border border-black">Ulyssa</td>
                                        <td class="px-4 py-2 border border-black">Cinnamon</td>
                                        <td class="px-4 py-2 border border-black">Ubuntu Focal</td>
                                        <td class="px-4 py-2 border border-black">Long term support release (LTS), supported until April 2025.</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black">Cinnamon (Edge)</td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black">MATE</td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black">Xfce</td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 border border-black">20</td>
                                        <td class="px-4 py-2 border border-black">Ulyana</td>
                                        <td class="px-4 py-2 border border-black">Cinnamon</td>
                                        <td class="px-4 py-2 border border-black">Ubuntu Focal</td>
                                        <td class="px-4 py-2 border border-black">Long term support release (LTS), supported until April 2025.</td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black">MATE</td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black">Xfce</td>
                                        <td class="px-4 py-2 border border-black"></td>
                                        <td class="px-4 py-2 border border-black"></td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-2 border border-black">6</td>
                                        <td class="px-4 py-2 border border-black">Faye</td>
                                        <td class="px-4 py-2 border border-black">Cinnamon</td>
                                        <td class="px-4 py-2 border border-black">Debian Bookworm</td>
                                        <td class="px-4 py-2 border border-black">Long term support release (LTS).</td>
                                    </tr> -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div
                    class="bg-contain bg-no-repeat bg-left-bottom h-72 z-0 flex justify-center items-center"
                    style="background-image: url(/assets/wave-03\ 5.svg)"
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
        release: Object,
        os_versions: Array,
    },
};
</script>
