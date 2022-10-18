<template>
    <div class="w-1/2 my-auto">
        <h1 class="text-2xl font-bold">{{ heading }}</h1>
    </div>
    <div v-if="isHomepage" class="flex flex-col w-1/2">
        <ButtonAndLink
            to="/add"
            text="Wizkid"
            classes="bg-green-700 self-end"
            role="button"
            icon="fa-regular fa-square-plus"
            aria-label="Add new wizkid"
        />
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
