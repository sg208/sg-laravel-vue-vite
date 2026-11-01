<template>
    <article
        class="max-w-prose space-y-4 leading-relaxed [&_h2]:text-xl [&_h2]:font-bold [&_h2]:pt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-blue-800 [&_a]:underline [&_a]:underline-offset-2 [&_a]:break-words"
    >
        <h1 class="text-2xl font-bold">{{ heading }}</h1>
        <p v-if="updated" class="text-gray-700">Last updated {{ updated }}</p>
        <slot />
    </article>
</template>

<script setup>
defineProps({
    heading: String,
    updated: String,
});
</script>
