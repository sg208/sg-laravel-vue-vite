<template>
    <footer
        role="contentinfo"
        class="p-6 bg-gray-100 w-full border-t-2 border-t-gray-200"
    >
        <nav aria-label="Site information" class="max-w-5xl mx-auto">
            <ul class="flex flex-wrap gap-x-6 gap-y-3">
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
    "text-blue-800 underline underline-offset-2 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800";
</script>
