<template>
    <router-link
        :to="to"
        class="font-semibold py-2 px-4 text-white rounded-lg"
        :class="classes"
        v-bind="{ ariaLabel: ariaLabel || null, role: role }"
    >
        <Icon v-if="icon" :name="icon" :class="{ 'mr-2': text }" />
        <template v-if="text">{{ text }}</template>
    </router-link>
</template>

<script setup>
// TODO: Need to add variant with predefined class

defineProps({
    to: {
        type: String,
        default: "/",
    },
    classes: String,
    ariaLabel: String,
    role: {
        type: String,
        default: "link",
    },
    text: String,
    variant: String,
    icon: String,
});
</script>
