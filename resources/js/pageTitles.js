// Each route gets its own document title; the SPA ships a single index.html.
export const SITE_NAME = "Wizkid Manager 2000";

const PAGE_TITLES = {
    "/": "Wizkids",
    "/add": "Add new wizkid",
    "/update": "Update wizkid data",
    "/delete": "Delete wizkid data",
    "/login": "Wizkid login",
    "/accessibility": "Accessibility",
    "/privacy": "Privacy",
    "/terms": "Terms of use",
};

export const getPageTitle = (path) => {
    const pageTitle = PAGE_TITLES[path] ?? "Page not found";
    return `${pageTitle} · ${SITE_NAME}`;
};
