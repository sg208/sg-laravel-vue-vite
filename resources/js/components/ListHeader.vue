<template>
    <div class="w-1/2 my-auto">
        <h1 class="text-2xl font-bold">{{ heading }}</h1>
    </div>
    <div v-if="isHomepage" class="flex flex-col w-1/2">
        <router-link
            to="/add"
            class="bg-green-600 py-2 px-4 text-white rounded-lg self-end"
            role="button"
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
