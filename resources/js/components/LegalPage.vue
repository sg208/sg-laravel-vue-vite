<template>
    <article
        class="max-w-[68ch] text-[17px] leading-relaxed [&_a]:underline [&_a]:decoration-control [&_a]:underline-offset-4 [&_a:hover]:decoration-ink [&_h2]:mt-12 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:leading-snug [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6"
    >
        <h1 class="font-serif text-5xl leading-[1.02] tracking-[-0.01em]">
            {{ heading }}
        </h1>
        <p v-if="updated" class="text-muted">Last updated {{ updated }}</p>
        <slot />
    </article>
</template>

<script setup>
defineProps({
    heading: String,
    updated: String,
});
</script>
