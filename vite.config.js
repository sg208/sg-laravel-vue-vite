// core
import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

// Plugins
import vue from "@vitejs/plugin-vue";

// https://github.com/hannoeru/vite-plugin-pages
import Pages from "vite-plugin-pages";

// https://github.com/antfu/unplugin-vue-components
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

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
        Pages({
            dirs: "resources/js/pages",
        }),
        Components({
            dirs: ["resources/js/components"],
            resolvers: [ElementPlusResolver()],
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        }),
    ],
});
