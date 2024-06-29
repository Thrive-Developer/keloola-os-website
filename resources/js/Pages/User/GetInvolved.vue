<template>
    <Navbar active-page="project">
        <template #content>
            <!-- Content -->
            <div class="container mx-auto px-4 sm:px-16 -mt-36">
                <h1 class="text-custome-orange text-4xl font-semibold">
                    Get Involved
                </h1>
            </div>

            <div
                class="bg-radial from-custome-radialred-from to-custome-radialred-to"
            >
                <div
                    class="bg-contain bg-no-repeat bg-top z-0 mt-3 bg-radial from-custome-radialred-from to-custome-radialred-to"
                    style="background-image: url(/assets/Clip\ path\ group.svg)"
                >
                    <div
                        class="container mx-auto px-4 sm:px-16 pt-12 pb-20 text-center"
                    >
                        <p class="text-sm italic">No matter how you help us</p>
                        <p class="text-2xl font-bold">Thank You</p>
                        <p class="text-sm leading-loose">
                            The Keloola OS project receives a great deal of
                            support from its community of users and we would
                            like <br class="hidden xl:flex" />
                            to thank each and every contributor for
                            participating. We are growing fast and our
                            distribution is <br class="hidden xl:flex" />
                            getting better every day thanks to you.
                        </p>

                        <div class="mt-20">
                            <p
                                class="text-2xl text-custome-orange font-bold text-left"
                            >
                                Financial help
                            </p>
                            <p class="text-sm text-left">
                                You can help by making a financial contribution
                                to the project.
                            </p>
                            <div
                                class="bg-custome-dark p-10 grid grid-cols-1 lg:grid-cols-2 gap-6 mt-9"
                                v-if="btn_donation && btn_donation.link"
                            >
                                <div>
                                    <img
                                        src="assets/donation.svg"
                                        alt="donation"
                                        class="mx-auto"
                                    />
                                    <p
                                        class="text-center text-custome-orange font-bold mt-4 mb-1"
                                    >
                                        Donations
                                    </p>
                                    <p
                                        class="text-center text-sm leading-loose"
                                    >
                                        Thanks to revenue from advertisements
                                        and your donations,
                                        <br class="hidden xl:flex" />
                                        the Keloola OS project can afford to buy
                                        dedicated servers,<br
                                            class="hidden xl:flex"
                                        />
                                        advertising campaigns, new hardware and
                                        equipment,<br class="hidden xl:flex" />
                                        and to provide an income for the
                                        development team.
                                    </p>
                                    <button
                                        @click="openLink(btn_donation.link)"
                                        class="text-white bg-custome-orange py-2.5 px-5 rounded-lg mx-auto mt-4 font-semibold text-sm"
                                    >
                                        {{ btn_donation.value }}
                                    </button>
                                </div>
                                <div
                                    class="mt-6 lg:mt-0"
                                    v-if="btn_sponsor && btn_sponsor.link"
                                >
                                    <img
                                        src="assets/sponsorships.svg"
                                        alt="sponsorships"
                                        class="mx-auto"
                                    />
                                    <p
                                        class="text-center text-custome-orange font-bold mt-4 mb-1"
                                    >
                                        Sponsorships
                                    </p>
                                    <p
                                        class="text-center text-sm leading-loose"
                                    >
                                        By sponsoring Keloola OS, you contribute
                                        to giving the<br
                                            class="hidden xl:flex"
                                        />
                                        development team a regular and
                                        predictable income.<br
                                            class="hidden xl:flex"
                                        />
                                        Sponsorships are the best way to help
                                        Keloola OS developers<br
                                            class="hidden xl:flex"
                                        />
                                        and artists get to the point where they
                                        are able<br class="hidden xl:flex" />
                                        to work full-time on Mint-related
                                        projects.
                                    </p>
                                    <button
                                        @click="openLink(btn_sponsor.link)"
                                        class="text-white bg-custome-orange py-2.5 px-5 rounded-lg mx-auto mt-4 font-semibold text-sm"
                                    >
                                        {{ btn_sponsor.value }}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="mt-20">
                            <p
                                class="text-2xl text-custome-orange font-bold text-left"
                            >
                                Support and promotion
                            </p>
                            <p class="text-sm text-left">
                                You can help by being part of the community and
                                helping other users.
                            </p>
                            <div
                                class="bg-custome-dark p-10 grid grid-cols-1 lg:grid-cols-2 gap-6 mt-9"
                                v-if="btn_community && btn_community.link"
                            >
                                <div>
                                    <img
                                        src="assets/community.svg"
                                        alt="community"
                                        class="mx-auto"
                                    />
                                    <p
                                        class="text-center text-custome-orange font-bold mt-4 mb-1"
                                    >
                                        Join the Community
                                    </p>
                                    <p
                                        class="text-center text-sm leading-loose"
                                    >
                                        Keloola OS isn't just an operating
                                        system, it's also a dynamic community<br
                                            class="hidden xl:flex"
                                        />
                                        of people who enjoy, gather, and
                                        interact with a free and open
                                        project.<br class="hidden xl:flex" />
                                        Make Mint better by welcoming people,
                                        participating in<br
                                            class="hidden xl:flex"
                                        />
                                        community-driven projects (repositories,
                                        podcasts, artwork...)<br
                                            class="hidden xl:flex"
                                        />
                                        or simply by meeting and talking to
                                        other Keloola OS.
                                    </p>
                                    <button
                                        @click="openLink(btn_community.link)"
                                        class="text-white bg-custome-orange py-2.5 px-5 rounded-lg mx-auto mt-4 text-sm"
                                    >
                                        {{ btn_community.value }}
                                    </button>
                                </div>
                                <div
                                    class="mt-6 lg:mt-0"
                                    v-if="btn_help_other && btn_help_other.link"
                                >
                                    <img
                                        src="assets/Help Others.svg"
                                        alt="Help Others"
                                        class="mx-auto"
                                    />
                                    <p
                                        class="text-center text-custome-orange font-bold mt-4 mb-1"
                                    >
                                        Help Others
                                    </p>
                                    <p
                                        class="text-center text-sm leading-loose"
                                    >
                                        If you have some spare time and you're
                                        willing to help<br
                                            class="hidden xl:flex"
                                        />
                                        other users with technical problems, you
                                        should seriously<br
                                            class="hidden xl:flex"
                                        />
                                        consider reading the forums and/or
                                        joining the IRC channel
                                        <br class="hidden xl:flex" />
                                        and helping other Keloola OS users solve
                                        the problems<br
                                            class="hidden xl:flex"
                                        />
                                        you know how to fix.
                                    </p>
                                    <button
                                        @click="openLink(btn_help_other.link)"
                                        class="text-white bg-custome-orange py-2.5 px-5 rounded-lg mx-auto mt-4 text-sm"
                                    >
                                        {{ btn_help_other.value }}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="mt-20">
                            <p
                                class="text-2xl text-custome-orange font-bold text-left"
                            >
                                Project contributions
                            </p>
                            <p class="text-sm text-left">
                                You can help by helping with bugs, translations
                                and development.
                            </p>
                            <div
                                class="bg-custome-dark p-10 grid grid-cols-1 lg:grid-cols-3 gap-6 mt-9"
                                v-if="btn_report_bug && btn_report_bug.link"
                            >
                                <div>
                                    <img
                                        src="assets/Report bugs.svg"
                                        alt="Report bugs"
                                        class="mx-auto"
                                    />
                                    <p
                                        class="text-center text-custome-orange font-bold mt-4 mb-1"
                                    >
                                        Report bugs
                                    </p>
                                    <p
                                        class="text-center text-sm leading-loose"
                                    >
                                        If you notice something that doesn't
                                        work properly,<br
                                            class="hidden xl:flex"
                                        />
                                        troubleshoot it and if you find a bug
                                        let us know.<br
                                            class="hidden xl:flex"
                                        />
                                        Read the Keloola OS Troubleshooting
                                        Guide to<br class="hidden xl:flex" />
                                        know how to troubleshoot issues and
                                        how<br class="hidden xl:flex" />
                                        to report bugs.
                                    </p>
                                    <button
                                        @click="openLink(btn_report_bug.link)"
                                        class="text-white bg-custome-orange py-2.5 px-5 rounded-lg mx-auto mt-4 font-semibold text-sm"
                                    >
                                        {{ btn_report_bug.value }}
                                    </button>
                                </div>
                                <div
                                    class="mt-6 lg:mt-0"
                                    v-if="btn_translate && btn_translate.link"
                                >
                                    <img
                                        src="assets/Translate.svg"
                                        alt="Translate"
                                        class="mx-auto"
                                    />
                                    <p
                                        class="text-center text-custome-orange font-bold mt-4 mb-1"
                                    >
                                        Translate
                                    </p>
                                    <p
                                        class="text-center text-sm leading-loose"
                                    >
                                        If you speak English and another
                                        language,<br class="hidden xl:flex" />
                                        you can help us translate Keloola OS.
                                        Your efforts
                                        <br class="hidden xl:flex" />
                                        will allow Keloola OS to fully support
                                        display<br class="hidden xl:flex" />
                                        in your language. Read the Keloola OS<br
                                            class="hidden xl:flex"
                                        />
                                        Translation Guide to get started.
                                    </p>
                                    <button
                                        @click="openLink(btn_translate.link)"
                                        class="text-white bg-custome-orange py-2.5 px-5 rounded-lg mx-auto mt-4 font-semibold text-sm"
                                    >
                                        {{ btn_translate.value }}
                                    </button>
                                </div>
                                <div
                                    class="mt-6 lg:mt-0"
                                    v-if="btn_develop && btn_develop.link"
                                >
                                    <img
                                        src="assets/Develop.svg"
                                        alt="Develop"
                                        class="mx-auto"
                                    />
                                    <p
                                        class="text-center text-custome-orange font-bold mt-4 mb-1"
                                    >
                                        Develop
                                    </p>
                                    <p
                                        class="text-center text-sm leading-loose"
                                    >
                                        We develop tools, applications and a
                                        desktop<br class="hidden xl:flex" />
                                        environment for Keloola OS. If you're
                                        interested in<br
                                            class="hidden xl:flex"
                                        />
                                        development read the Keloola OS
                                        Developer<br class="hidden xl:flex" />
                                        Guide to get started.
                                    </p>
                                    <button
                                        @click="openLink(btn_develop.link)"
                                        class="text-white bg-custome-orange py-2.5 px-5 rounded-lg mx-auto mt-4 font-semibold text-sm"
                                    >
                                        {{ btn_develop.value }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="bg-contain bg-no-repeat bg-right-bottom w-auto h-48 z-0 -mt-48"
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
        btn_donation: Object,
        btn_sponsor: Object,
        btn_community: Object,
        btn_help_other: Object,
        btn_report_bug: Object,
        btn_translate: Object,
        btn_develop: Object,
    },
    setup() {
        function openLink(link) {
            window.location.href = link;
        }

        return { openLink };
    },
};
</script>
