<template>
    <div id="content-container" class="flex flex-col p-0 m-0 flex-nowrap">
        <Header class="w-full bg-blue-400 p-6" />
        <main role="main" class="grow h-full w-full max-w-5xl p-6 mx-auto">
            <router-view />
        </main>
        <Footer />
    </div>
    <div id="a11y-assertive" aria-live="assertive" aria-atomic="true"></div>
    <div id="a11y-polite" aria-live="polite" aria-atomic="true"></div>
</template>
