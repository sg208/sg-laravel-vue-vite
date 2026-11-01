<template>
    <ul
        aria-label="Wizkids by role"
        class="grid grid-cols-2 gap-4 md:grid-cols-4"
    >
        <li
            v-for="entry in roleCounts"
            :key="entry.role"
            class="flex min-w-0 flex-col gap-3 rounded-[22px] bg-surface p-5"
        >
            <span class="text-[32px] leading-none tabular-nums">
                {{ entry.count }}
            </span>
            <span
                :class="getRoleTone(entry.role)"
                class="self-start rounded-full px-3 py-1 text-sm font-medium"
            >
                {{ pluralizeRole(entry.role, entry.count) }}
            </span>
        </li>
    </ul>
</template>

<script setup>
import { computed } from "vue";
import { countRoles, getRoleTone, pluralizeRole } from "../roles";

const props = defineProps({
    wizkids: { type: Array, default: () => [] },
});

const roleCounts = computed(() => countRoles(props.wizkids));
</script>
