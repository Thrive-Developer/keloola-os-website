<template>
    <div>

        <Head>
            <title>
                Keloola OS - Embrace Stability and Simplicity
            </title>
            <meta name="description" head-key="description"
                content="Discover Keloola OS, the Linux-based operating system that combines robust stability with user-friendly simplicity. Ideal for both personal and professional use, Keloola OS provides a reliable platform for your computing needs." />
            <meta name="keywords" head-key="keywords"
                content="Keloola OS, business operating system, stable OS, business PCs, business laptops, professional OS, reliable performance, pre-loaded apps, desktop OS, laptop OS, stability-focused OS, business efficiency" />
        </Head>
        <slot />
    </div>
</template>

<script>
import { Head } from "@inertiajs/vue3";

export default {
    components: {
        Head,
    },
};
</script>
