// One HTML entry per real route plus 404.html, so the Worker can answer unknown
// URLs with HTTP 404 (wrangler.jsonc `not_found_handling: "404-page"`).
// Routes come from vite-plugin-pages, the same list the router uses.

export const NOT_FOUND_FILE = "404.html";

const isStaticPath = (path) => !path.includes(":") && !path.includes("*");

const joinPath = (parent, child) =>
    child.startsWith("/") ? child : `${parent.replace(/\/$/, "")}/${child}`;

// Flatten nested routes into full paths.
export const getRoutePaths = (routes, parent = "/") =>
    routes.flatMap((route) => {
        const path = joinPath(parent, route.path);
        return [path, ...getRoutePaths(route.children ?? [], path)];
    });

// "/" → index.html, "/add" → add.html (served at /add by html_handling).
export const getHtmlFileName = (path) =>
    path === "/" ? "index.html" : `${path.replace(/^\/|\/$/g, "")}.html`;

export const getStaticHtmlFiles = (routes) => [
    ...new Set(getRoutePaths(routes).filter(isStaticPath).map(getHtmlFileName)),
];

export const routeHtmlPlugin = () => {
    let pagesApi;
    return {
        name: "route-html",
        apply: "build",
        enforce: "post",
        configResolved(config) {
            pagesApi = config.plugins.find(
                (plugin) => plugin.name === "vite-plugin-pages",
            )?.api;
        },
        async generateBundle(_options, bundle) {
            const indexHtml = bundle["index.html"]?.source;
            if (!pagesApi || indexHtml === undefined) {
                this.error("route-html needs vite-plugin-pages and index.html");
            }
            const routes = await pagesApi.getResolvedRoutes();
            const fileNames = [...getStaticHtmlFiles(routes), NOT_FOUND_FILE];
            fileNames
                .filter((fileName) => fileName !== "index.html")
                .forEach((fileName) =>
                    this.emitFile({ type: "asset", fileName, source: indexHtml }),
                );
        },
    };
};
