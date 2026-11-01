<template>
    <img
        :src="picture"
        :alt="text"
        width="56"
        height="56"
        loading="lazy"
        decoding="async"
        class="size-14 rounded-full bg-surface object-cover"
    />
</template>

<script setup>
defineProps({
    picture: String,
    text: String,
});
</script>
