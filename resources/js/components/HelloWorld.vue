<script setup>
import { ref } from "vue";

defineProps({
    msg: String,
});

const count = ref(0);
</script>

<template>
    <h1>{{ msg || "No message" }}</h1>
    <p>This is just example of Hello World auto importing</p>
</template>
