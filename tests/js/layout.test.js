import { describe, expect, it } from "vitest";
import { flushPromises, mount } from "@vue/test-utils";
import { createMemoryHistory, createRouter } from "vue-router";
import App from "../../resources/js/App.vue";
import AccessibilityPage from "../../resources/js/pages/accessibility.vue";
import PrivacyPage from "../../resources/js/pages/privacy.vue";
import TermsPage from "../../resources/js/pages/terms.vue";
import AddPage from "../../resources/js/pages/add.vue";
import UpdatePage from "../../resources/js/pages/update.vue";
import DeletePage from "../../resources/js/pages/delete.vue";
import LoginPage from "../../resources/js/pages/login.vue";
import NotFoundPage from "../../resources/js/pages/[...all].vue";

const routes = [
    { path: "/accessibility", component: AccessibilityPage },
    { path: "/privacy", component: PrivacyPage },
    { path: "/terms", component: TermsPage },
    { path: "/add", component: AddPage },
    { path: "/update", component: UpdatePage },
    { path: "/delete", component: DeletePage },
    { path: "/login", component: LoginPage },
    { path: "/:all(.*)*", component: NotFoundPage },
];

const mountAt = async (path) => {
    const router = createRouter({ history: createMemoryHistory(), routes });
    router.push(path);
    await router.isReady();
    const wrapper = mount(App, {
        global: { plugins: [router] },
        attachTo: document.body,
    });
    await flushPromises();
    return { wrapper, router };
};

describe("App layout", () => {
    it.each(["/accessibility", "/privacy", "/terms", "/add", "/update", "/delete", "/login", "/nope"])(
        "%s has one h1, the landmarks and the footer links",
        async (path) => {
            const { wrapper } = await mountAt(path);

            expect(wrapper.findAll("h1")).toHaveLength(1);
            expect(wrapper.findAll("header")).toHaveLength(1);
            expect(wrapper.findAll("main#main")).toHaveLength(1);
            expect(wrapper.findAll("footer")).toHaveLength(1);
            expect(wrapper.find('nav[aria-label="Main"]').exists()).toBe(true);
            expect(
                wrapper.find('footer nav[aria-label="Site information"]').exists(),
            ).toBe(true);
            expect(
                wrapper.find('a[href="https://github.com/sg208/sg-laravel-vue-vite"]').exists(),
            ).toBe(true);
            wrapper.unmount();
        },
    );

    it("starts with a skip link to the main content", async () => {
        const { wrapper } = await mountAt("/terms");
        const firstLink = wrapper.find("a");

        expect(firstLink.attributes("href")).toBe("#main");
        expect(firstLink.text()).toBe("Skip to main content");
        wrapper.unmount();
    });

    it("moves focus to the new page's h1 after navigation", async () => {
        const { wrapper, router } = await mountAt("/terms");
        await router.push("/privacy");
        await flushPromises();

        expect(document.activeElement?.tagName).toBe("H1");
        expect(document.activeElement?.textContent?.trim()).toBe("Privacy");
        wrapper.unmount();
    });
});
