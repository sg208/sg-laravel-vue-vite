<template>
    <div
        class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
    >
        <div class="min-w-0">
            <h1
                class="font-serif text-5xl leading-[1.02] tracking-[-0.01em]"
            >
                {{ heading }}
            </h1>
            <p
                v-if="$slots.default"
                class="mt-3 max-w-xl text-lg leading-relaxed text-muted"
            >
                <slot />
            </p>
        </div>
        <router-link
            v-if="isHomepage"
            to="/add"
            class="inline-flex min-h-11 shrink-0 items-center self-start rounded-full bg-accent px-6 font-medium text-accent-ink transition-colors hover:bg-accent-hover sm:self-auto"
        >
            Add new wizkid
        </router-link>
    </div>
</template>

<script setup>
defineProps({
    heading: String,
    isHomepage: {
        type: Boolean,
        default: true,
    },
});
</script>
