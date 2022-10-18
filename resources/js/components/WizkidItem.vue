<template>
    <li
        class="border-2 rounded-lg bg-gray-50 p-3 flex flex-col lg:flex-row gap-3"
    >
        <span class="flex flex-wrap justify-center">
            <span class="lg:w-20">
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
            <span
                class="flex flex-col lg:flex-row lg:grow gap-2 text-md"
                role="list"
            >
                <WizkidItemPills :item="item.role" />
                <WizkidItemPills :item="item.email" />
                <WizkidItemPills :item="item.phone" />
                <span class="flex flex-row my-auto lg:self-end">
                    <ButtonAndLink
                        to="/update"
                        classes="self-end text-blue-700"
                        :aria-label="`Update ${item.name} data`"
                        role="button"
                        icon="fa-solid fa-pen-to-square"
                    />
                    <ButtonAndLink
                        to="/delete"
                        classes="self-end text-blue-700"
                        :aria-label="`Delete ${item.name} data`"
                        role="button"
                        icon="fa-solid fa-trash-can"
                    />
                </span>
            </span>
        </span>
    </li>
</template>

<script setup>
defineProps({
    item: Object,
});
</script>
