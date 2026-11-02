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
                        <a
                            :href="REPO_URL"
                            aria-label="Source code on GitHub"
                            class="inline-flex size-11 items-center justify-center rounded-full text-muted hover:text-ink"
                        >
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                viewBox="0 0 16 16"
                                class="size-[18px]"
                                fill="currentColor"
                            >
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                                />
                            </svg>
                        </a>
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
