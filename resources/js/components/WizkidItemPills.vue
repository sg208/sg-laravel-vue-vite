<template>
    <span v-if="item" class="p-2 bg-gray-100 rounded-lg" role="listitem">
        {{ item }}
    </span>
</template>

<script setup>
defineProps({
    item: String,
});
</script>
