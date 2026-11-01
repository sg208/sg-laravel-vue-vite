<template>
    <div
        class="mt-10 flex flex-col gap-5 rounded-[22px] bg-surface px-5 py-8 sm:flex-row sm:items-center sm:justify-between"
    >
        <p class="max-w-xl text-lg leading-relaxed">
            <slot>This page is a placeholder. The demo only lists wizkids for now.</slot>
        </p>
        <router-link
            to="/"
            class="inline-flex min-h-11 shrink-0 items-center self-start rounded-full bg-raised px-5 font-medium text-ink ring-1 ring-control ring-inset transition-colors hover:bg-ground sm:self-auto"
        >
            Back to wizkids
        </router-link>
    </div>
</template>
