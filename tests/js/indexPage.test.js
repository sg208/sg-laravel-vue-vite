import { afterEach, describe, expect, it, vi } from "vitest";
import { flushPromises, mount, RouterLinkStub } from "@vue/test-utils";
import IndexPage from "../../resources/js/pages/index.vue";

const mountOptions = { global: { stubs: { RouterLink: RouterLinkStub } } };

describe("index page", () => {
    afterEach(() => {
        vi.unstubAllGlobals();
    });

    it("announces loading in a live region", () => {
        vi.stubGlobal(
            "fetch",
            vi.fn(() => new Promise(() => {})),
        );
        const wrapper = mount(IndexPage, mountOptions);

        expect(wrapper.get('[role="status"]').text()).toContain(
            "Fetching data",
        );
    });

    it("shows an alert when the fetch fails", async () => {
        vi.stubGlobal(
            "fetch",
            vi.fn(async () => {
                throw new Error("offline");
            }),
        );
        const wrapper = mount(IndexPage, mountOptions);
        await flushPromises();

        expect(wrapper.get('[role="alert"]').text()).toBe(
            "Something is wrong, please try again later.",
        );
        expect(wrapper.find("ul").exists()).toBe(false);
    });

    it("lists the wizkids when the fetch succeeds", async () => {
        const wizkids = [{ _id: "1", name: "Graham Heath", role: "intern" }];
        vi.stubGlobal(
            "fetch",
            vi.fn(async () => ({ json: async () => wizkids })),
        );
        const wrapper = mount(IndexPage, mountOptions);
        await flushPromises();

        expect(wrapper.find('[role="alert"]').exists()).toBe(false);
        expect(wrapper.findAll("ul > li")).toHaveLength(1);
    });
});
