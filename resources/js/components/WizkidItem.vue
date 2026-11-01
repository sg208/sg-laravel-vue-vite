<template>
    <li
        class="grid grid-cols-[56px_minmax(0,1fr)] items-center gap-x-4 gap-y-3 px-4 py-4 sm:px-5 md:grid-cols-[56px_minmax(0,1.1fr)_minmax(0,1.3fr)_auto]"
    >
        <WizkidPicture :picture="item.picture" :text="`Picture of ${item.name}`" />
        <div class="min-w-0">
            <h2 class="text-lg leading-snug font-medium">{{ item.name }}</h2>
            <span
                v-if="item.role"
                :class="getRoleTone(item.role)"
                class="mt-1 inline-block rounded-full px-3 py-0.5 text-sm"
            >
                {{ item.role }}
            </span>
        </div>
        <ul
            v-if="contactLines.length"
            aria-label="Contact"
            class="col-span-2 min-w-0 text-[15px] leading-relaxed tabular-nums md:col-span-1"
        >
            <li v-for="line in contactLines" :key="line" class="break-words">
                {{ line }}
            </li>
        </ul>
        <div
            class="col-span-2 flex flex-wrap gap-2 md:col-span-1 md:justify-end"
            :class="{ 'md:col-start-4': !contactLines.length }"
        >
            <router-link
                to="/update"
                class="inline-flex min-h-11 items-center rounded-full bg-raised px-4 text-[15px] font-medium text-ink ring-1 ring-control ring-inset transition-colors hover:bg-ground"
                :aria-label="`Update ${item.name} data`"
            >
                Update
            </router-link>
            <router-link
                to="/delete"
                class="inline-flex min-h-11 items-center rounded-full px-4 text-[15px] font-medium text-negative underline-offset-4 transition-colors hover:underline"
                :aria-label="`Delete ${item.name} data`"
            >
                Delete
            </router-link>
        </div>
    </li>
</template>

<script setup>
import { computed } from "vue";
import { getRoleTone } from "../roles";

const props = defineProps({
    item: Object,
});

const contactLines = computed(() =>
    [props.item.email, props.item.phone].filter(Boolean),
);
</script>
