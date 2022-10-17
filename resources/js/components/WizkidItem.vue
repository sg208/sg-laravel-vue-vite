<template>
    <li class="border-2 rounded-lg bg-gray-50 p-3 flex flex-row gap-3">
        <span class="flex flex-wrap justify-center">
            <span class="w-20">
                <WizkidPicture
                    :picture="item.picture"
                    :text="`Picture of ${item.name}`"
                />
            </span>
        </span>
        <span class="flex flex-col my-auto grow">
            <span role="heading" aria-level="3" class="font-bold text-lg pb-2">
                {{ item.name }}
            </span>
            <span class="flex flex-row gap-2 text-md" role="list">
                <span
                    v-if="item.role"
                    class="px-2 py-1 bg-white rounded-lg border-2"
                    role="listitem"
                >
                    {{ item.role }}
                </span>
                <span
                    v-if="item.email"
                    class="px-2 py-1 bg-white rounded-lg border-2"
                    role="listitem"
                >
                    {{ item.email }}
                </span>
                <span
                    v-if="item.phone"
                    class="px-2 py-1 bg-white rounded-lg border-2"
                >
                    {{ item.phone }}
                </span>
            </span>
        </span>
        <span class="flex flex-row my-auto gap-2">
            <router-link
                to="/update"
                class="bg-orange-500 text-white py-1 px-3 rounded-lg self-end"
                :aria-label="`Update ${item.name} data`"
                role="button"
            >
                Update
            </router-link>
            <router-link
                to="/delete"
                class="bg-red-500 py-1 px-3 text-white rounded-lg self-end"
                :aria-label="`Delete ${item.name} data`"
                role="button"
            >
                Delete
            </router-link>
        </span>
    </li>
</template>

<script setup>
defineProps({
    item: Object,
});
</script>
