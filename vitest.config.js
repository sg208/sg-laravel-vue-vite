import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";

// Separate from vite.config.js: the Laravel plugin and file routes are not needed in unit tests.
export default defineConfig({
    plugins: [
        vue(),
        Components({
            dirs: ["resources/js/components"],
            dts: false,
        }),
    ],
    test: {
        environment: "happy-dom",
        include: ["tests/js/**/*.test.js"],
    },
});
