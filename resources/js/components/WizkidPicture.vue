<template>
    <img
        :src="picture"
        :alt="text"
        class="shadow rounded max-w-full h-auto align-middle border-none"
    />
</template>

<script setup>
defineProps({
    picture: String,
    text: String,
});
</script>
