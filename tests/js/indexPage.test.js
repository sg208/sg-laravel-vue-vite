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
        expect(wrapper.findAll("h1")).toHaveLength(1);
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
        expect(
            wrapper.findAll('[aria-label="All wizkids"] > li'),
        ).toHaveLength(1);
        expect(wrapper.get('[role="status"]').text()).toBe("Loaded 1 wizkids.");
        expect(wrapper.findAll("h1")).toHaveLength(1);
        expect(wrapper.get("h2").text()).toBe("Graham Heath");
    });

    it("says so when the list is empty", async () => {
        vi.stubGlobal(
            "fetch",
            vi.fn(async () => ({ json: async () => [] })),
        );
        const wrapper = mount(IndexPage, mountOptions);
        await flushPromises();

        expect(wrapper.text()).toContain("There are no wizkids yet.");
        expect(wrapper.find('[aria-label="All wizkids"]').exists()).toBe(false);
    });
});
