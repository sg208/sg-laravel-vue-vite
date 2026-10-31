// core
import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

// Plugins
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

// https://github.com/hannoeru/vite-plugin-pages
import Pages from "vite-plugin-pages";

// https://github.com/unplugin/unplugin-vue-components
import Components from "unplugin-vue-components/vite";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/js/app.js"],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        tailwindcss(),
        Pages({
            dirs: "resources/js/pages",
        }),
        Components({
            dirs: ["resources/js/components"],
            include: [/\.vue$/, /\.vue\?vue/],
        }),
    ],
});
