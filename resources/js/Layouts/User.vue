<template>
    <div>
        <Head>
            <title>
                Keloola OS - Engineered for Stability in Business PCs and
                Laptops
            </title>
            <meta
                name="description"
                head-key="description"
                content="Keloola OS is a stable operating system designed for business users, offering unmatched performance for both low-end and high-end desktop and laptop computers. Pre-loaded with essential apps, Keloola OS ensures dependable, smooth operation for all your business needs."
            />
            <meta
                name="keywords"
                head-key="keywords"
                content="Keloola OS, business operating system, stable OS, business PCs, business laptops, professional OS, reliable performance, pre-loaded apps, desktop OS, laptop OS, stability-focused OS, business efficiency"
            />
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
