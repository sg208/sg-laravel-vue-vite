<template>
    <footer class="bg-surface">
        <div
            class="mx-auto flex w-full max-w-[1100px] flex-col gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-end md:justify-between"
        >
            <div class="max-w-md">
                <p class="font-serif text-4xl leading-none">Wizkid Manager 2000</p>
                <p class="mt-3 text-[15px] leading-relaxed text-muted">
                    A Vue demo built to sit inside a Laravel app. The list is
                    sample data.
                </p>
            </div>
            <nav aria-label="Site information">
                <ul class="flex flex-wrap gap-x-2 gap-y-1 text-[15px]">
                    <li v-for="link in pageLinks" :key="link.to">
                        <router-link :to="link.to" :class="linkClass">
                            {{ link.label }}
                        </router-link>
                    </li>
                    <li>
                        <a :href="REPO_URL" :class="linkClass">Source on GitHub</a>
                    </li>
                </ul>
            </nav>
        </div>
    </footer>
</template>

<script setup>
const REPO_URL = "https://github.com/sg208/sg-laravel-vue-vite";

const pageLinks = [
    { to: "/accessibility", label: "Accessibility" },
    { to: "/privacy", label: "Privacy" },
    { to: "/terms", label: "Terms" },
];

const linkClass =
    "inline-flex min-h-11 items-center rounded-full px-3 text-ink underline decoration-control underline-offset-4 hover:decoration-ink";
</script>
