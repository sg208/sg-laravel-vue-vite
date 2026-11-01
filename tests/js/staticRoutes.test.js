// @vitest-environment node
import { describe, expect, it } from "vitest";
import { fileURLToPath } from "node:url";
import { resolveConfig } from "vite";
import {
    getHtmlFileName,
    getRoutePaths,
    NOT_FOUND_FILE,
} from "../../vite.static-routes.js";
import { getPageTitle } from "../../resources/js/pageTitles";

const configFile = fileURLToPath(
    new URL("../../vite.static.config.js", import.meta.url),
);

// Runs the real static build config, so the routes are the router's own list.
const runStaticBuildPlugins = async () => {
    const config = await resolveConfig({ configFile, logLevel: "silent" }, "build");
    const findPlugin = (name) => config.plugins.find((plugin) => plugin.name === name);
    const routes = await findPlugin("vite-plugin-pages").api.getResolvedRoutes();
    const emitted = [];
    const context = {
        emitFile: ({ fileName }) => emitted.push(fileName),
        error: (message) => {
            throw new Error(message);
        },
    };
    const bundle = { "index.html": { source: "<html></html>" } };
    await findPlugin("route-html").generateBundle.call(context, {}, bundle);
    return { routes, htmlFiles: ["index.html", ...emitted] };
};

describe("static build route HTML", () => {
    it("emits an HTML file for every static router path", async () => {
        const { routes, htmlFiles } = await runStaticBuildPlugins();
        const staticPaths = getRoutePaths(routes).filter(
            (path) => !path.includes(":") && !path.includes("*"),
        );

        expect(staticPaths).toContain("/");
        expect(staticPaths.length).toBeGreaterThan(1);
        staticPaths.forEach((path) => {
            expect(htmlFiles).toContain(getHtmlFileName(path));
        });
    });

    it("emits 404.html and nothing for the catch-all route", async () => {
        const { htmlFiles } = await runStaticBuildPlugins();

        expect(htmlFiles).toContain(NOT_FOUND_FILE);
        expect(htmlFiles.every((file) => /^[a-z0-9/-]+\.html$/.test(file))).toBe(true);
    });

    it("gives every static router path its own page title", async () => {
        const { routes } = await runStaticBuildPlugins();
        const staticPaths = getRoutePaths(routes).filter((path) => !path.includes(":"));

        staticPaths.forEach((path) => {
            expect(getPageTitle(path)).not.toMatch(/^Page not found/);
        });
    });
});

describe("getHtmlFileName", () => {
    it.each([
        ["/", "index.html"],
        ["/add", "add.html"],
        ["/docs/intro/", "docs/intro.html"],
    ])("%s → %s", (path, fileName) => {
        expect(getHtmlFileName(path)).toBe(fileName);
    });
});
