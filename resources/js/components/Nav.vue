<template>
    <nav>
        <ul class="flex flex-col lg:flex-row gap-3 lg:gap-5">
            <li
                v-for="(route, index) in routes"
                :key="index"
                class="w-full font-bold text-base"
            >
                <ButtonAndLink
                    :to="route.to"
                    :icon="route.icon"
                    :aria-label="route.ariaLabel"
                    classes="!p-1 lg:!p-2"
                />
            </li>
        </ul>
    </nav>
</template>

<script setup>
const routes = [
    { to: "/", icon: "fa-solid fa-house", ariaLabel: "Back to homepage" },
    {
        to: "/login",
        icon: "fa-solid fa-user",
        ariaLabel: "User login to manage",
    },
];
</script>
