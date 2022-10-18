<template>
    <i :class="name" aria-hidden="true"></i>
</template>

<script setup>
defineProps({
    name: String,
});
</script>
