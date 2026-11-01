<template>
    <header class="bg-ground">
        <div
            class="mx-auto flex w-full max-w-[1100px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-4 sm:px-6"
        >
            <router-link
                to="/"
                class="inline-flex min-h-11 items-center gap-3 rounded-full font-semibold text-ink"
            >
                <WizkidMark />
                <span>Wizkid Manager 2000</span>
            </router-link>
            <Nav />
        </div>
    </header>
</template>
