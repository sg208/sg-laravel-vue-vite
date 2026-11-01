<template>
    <a
        href="#main"
        class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-ground"
    >
        Skip to main content
    </a>
    <div class="flex min-h-screen flex-col bg-ground text-ink">
        <Header />
        <main
            id="main"
            ref="mainRef"
            tabindex="-1"
            class="mx-auto w-full max-w-[1100px] grow px-4 pt-8 pb-24 focus:outline-none sm:px-6 sm:pt-12"
        >
            <router-view />
        </main>
        <Footer />
    </div>
</template>

<script setup>
import { nextTick, ref } from "vue";
import { START_LOCATION, useRouter } from "vue-router";

const router = useRouter();
const mainRef = ref();

// After a client-side page change, move focus to the new page's h1 so screen
// reader and keyboard users start at the top of the new content.
router.afterEach(async (to, from) => {
    const isFirstLoad = from === START_LOCATION;
    if (isFirstLoad || to.path === from.path) return;
    await nextTick();
    const heading = mainRef.value?.querySelector("h1");
    const target = heading ?? mainRef.value;
    target?.setAttribute("tabindex", "-1");
    target?.focus({ preventScroll: true });
});
</script>
