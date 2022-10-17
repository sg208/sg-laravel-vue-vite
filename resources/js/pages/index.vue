<template>
    <div v-if="isFetching">Fetching data, please wait ...</div>
    <div v-else class="text">
        <div class="flex flex-row w-full">
            <ListHeader heading="Wizkids" />
        </div>
        <ul class="flex flex-col space-y-5 pt-6">
            <WizkidItem
                v-for="wizkid in wizkidsData"
                :key="wizkid._id"
                :item="wizkid"
            />
        </ul>
    </div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import useWizkid from "./../composables/useWizkid";

const { isFetching, getWizkidsData, wizkidsData, errorMsg } = useWizkid();

onMounted(() => {
    getWizkidsData();
});
</script>
