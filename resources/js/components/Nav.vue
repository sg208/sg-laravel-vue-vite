<template>
    <nav aria-label="Main">
        <ul class="flex items-center gap-1">
            <li v-for="link in NAV_LINKS" :key="link.to">
                <router-link
                    :to="link.to"
                    class="inline-flex min-h-11 items-center rounded-full px-4 text-[15px] text-muted transition-colors hover:bg-surface hover:text-ink aria-[current=page]:bg-surface aria-[current=page]:text-ink"
                >
                    {{ link.label }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script setup>
const NAV_LINKS = [
    { to: "/", label: "Wizkids" },
    { to: "/login", label: "Log in" },
];
</script>
