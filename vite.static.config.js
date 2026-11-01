// Static demo build: the Vue SPA without Laravel, served by a Cloudflare Worker.
// Wizkid data comes from jsonserver/db.json, emitted as dist/api/wizkid.json.
import { readFileSync } from "node:fs";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import Pages from "vite-plugin-pages";
import Components from "unplugin-vue-components/vite";

const emitWizkidJson = () => ({
    name: "emit-wizkid-json",
    apply: "build",
    generateBundle() {
        const db = JSON.parse(
            readFileSync(new URL("./jsonserver/db.json", import.meta.url), "utf8"),
        );
        this.emitFile({
            type: "asset",
            fileName: "api/wizkid.json",
            source: JSON.stringify(db.wizkid),
        });
    },
});

export default defineConfig({
    publicDir: false,
    define: {
        "import.meta.env.VITE_WIZKID_API_URL": JSON.stringify("/api/wizkid.json"),
    },
    plugins: [
        emitWizkidJson(),
        vue(),
        tailwindcss(),
        Pages({ dirs: "resources/js/pages" }),
        Components({
            dirs: ["resources/js/components"],
            include: [/\.vue$/, /\.vue\?vue/],
        }),
    ],
    build: {
        outDir: "dist",
        emptyOutDir: true,
    },
});
