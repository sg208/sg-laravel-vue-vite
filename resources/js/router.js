import { createRouter, createWebHistory } from "vue-router";
import routes from "~pages";
import { getPageTitle } from "./pageTitles";

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior: () => ({ top: 0 }),
});

router.afterEach((to) => {
    document.title = getPageTitle(to.path);
});

export default router;
