<template>
    <div>
        <div class="d-flex flex-column">
            <div class="page page-center" style="margin-top: 100px">
                <div class="container container-tight py-4">
                    <div class="text-center mb-4">
                        <!-- <a href="." class="navbar-brand navbar-brand-autodark">
                            <img
                                src="../../../../public/static/logo.svg"
                                width="110"
                                height="32"
                                alt="Tabler"
                                class="navbar-brand-image"
                            />
                        </a> -->
                        <h3>Starter Template</h3>
                    </div>
                    <div class="card card-md">
                        <div class="card-body">
                            <h2 class="h2 text-center mb-4">
                                Login to your account
                            </h2>
                            <div
                                v-if="$page.props.flash.error"
                                class="alert alert-danger"
                                role="alert"
                            >
                                {{ $page.props.flash.error }}
                            </div>
                            <form
                                action="./"
                                method="get"
                                autocomplete="off"
                                novalidate
                                @submit.prevent="login"
                            >
                                <div class="mb-3">
                                    <label class="form-label"
                                        >Email address</label
                                    >
                                    <input
                                        type="email"
                                        class="form-control"
                                        placeholder="your@email.com"
                                        autocomplete="off"
                                        v-model="user.email"
                                    />
                                    <small
                                        class="form-text text-danger"
                                        v-if="errors.email"
                                        >{{ errors.email }}</small
                                    >
                                </div>
                                <div class="mb-2">
                                    <label class="form-label">Password</label>
                                    <div class="input-group input-group-flat">
                                        <input
                                            type="password"
                                            class="form-control"
                                            placeholder="Your password"
                                            autocomplete="off"
                                            v-model="user.password"
                                        />
                                        <span class="input-group-text">
                                            <a
                                                href="#"
                                                class="link-secondary"
                                                title="Show password"
                                                data-bs-toggle="tooltip"
                                                ><!-- Download SVG icon from http://tabler-icons.io/i/eye -->
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="icon"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="2"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <path
                                                        stroke="none"
                                                        d="M0 0h24v24H0z"
                                                        fill="none"
                                                    />
                                                    <path
                                                        d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"
                                                    />
                                                    <path
                                                        d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"
                                                    />
                                                </svg>
                                            </a>
                                        </span>
                                    </div>
                                    <small
                                        class="form-text text-danger"
                                        v-if="errors.password"
                                        >{{ errors.password }}</small
                                    >
                                </div>
                                <div class="form-footer">
                                    <button
                                        type="submit"
                                        class="btn btn-primary w-100"
                                    >
                                        Sign in
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- <div class="text-center text-secondary mt-3">
                    Don't have account yet?
                    <a href="./sign-up.html" tabindex="-1">Sign up</a>
                </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Head, Link, router } from "@inertiajs/vue3";
import { reactive } from "vue";
import Default from "../../Layouts/Default.vue";

export default {
    components: {
        Head,
        Link,
    },
    props: {
        errors: Object,
    },
    layout: Default,
    setup() {
        const user = reactive({
            email: "",
            password: "",
        });

        async function login() {
            let email = user.email;
            let password = user.password;

            await router.post("/login", {
                email: email,
                password: password,
            });

            // user.email = "";
            user.password = "";
        }

        return {
            user,
            login,
        };
    },
};
</script>
