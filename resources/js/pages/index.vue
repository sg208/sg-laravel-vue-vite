<template>
    <ListHeader heading="Wizkids">{{ summaryLine }}</ListHeader>

    <p role="status" aria-live="polite" class="sr-only">{{ statusMessage }}</p>

    <p
        v-if="isFetching"
        aria-hidden="true"
        class="mt-10 rounded-[22px] bg-surface px-5 py-8 text-muted"
    >
        Fetching data, please wait ...
    </p>
    <p
        v-else-if="errorMsg"
        role="alert"
        class="mt-10 rounded-[22px] bg-surface px-5 py-8 font-medium text-negative"
    >
        {{ errorMsg }}
    </p>
    <p
        v-else-if="!wizkidsData?.length"
        class="mt-10 rounded-[22px] bg-surface px-5 py-8"
    >
        There are no wizkids yet. Add the first one to start the list.
    </p>
    <template v-else>
        <RoleSummary :wizkids="wizkidsData" class="mt-10" />
        <ul
            aria-label="All wizkids"
            class="mt-4 divide-y-2 divide-ground overflow-hidden rounded-[22px] bg-surface"
        >
            <WizkidItem
                v-for="wizkid in wizkidsData"
                :key="wizkid._id"
                :item="wizkid"
            />
        </ul>
    </template>
</template>

<script setup>
import { computed, onMounted } from "vue";
import useWizkid from "./../composables/useWizkid";

const { isFetching, getWizkidsData, wizkidsData, errorMsg } = useWizkid();

const wizkidCount = computed(() => wizkidsData.value?.length ?? 0);

const summaryLine = computed(() => {
    if (isFetching.value || errorMsg.value) {
        return "Everyone on the team, with their role and how to reach them.";
    }
    const noun = wizkidCount.value === 1 ? "person" : "people";
    return `${wizkidCount.value} ${noun} on the team, with their role and how to reach them.`;
});

const statusMessage = computed(() => {
    if (isFetching.value) return "Fetching data, please wait ...";
    if (errorMsg.value) return "";
    if (wizkidCount.value === 0) return "No wizkids yet.";
    const noun = wizkidCount.value === 1 ? "wizkid" : "wizkids";
    return `Loaded ${wizkidCount.value} ${noun}.`;
});

onMounted(() => {
    getWizkidsData();
});
</script>
