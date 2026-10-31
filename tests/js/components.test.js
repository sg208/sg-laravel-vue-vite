import { describe, expect, it } from "vitest";
import { mount, RouterLinkStub } from "@vue/test-utils";
import WizkidItem from "../../resources/js/components/WizkidItem.vue";
import ListHeader from "../../resources/js/components/ListHeader.vue";

const mountOptions = { global: { stubs: { RouterLink: RouterLinkStub } } };

const wizkid = {
    _id: "634d583d6b8ff482c730d8e2",
    picture: "https://picsum.photos/id/1050/200",
    name: "Graham Heath",
    email: "grahamheath@qot.com",
    phone: "+1 (999) 503-3632",
    role: "intern",
};

describe("WizkidItem", () => {
    it("renders the wizkid name, role, email and phone", () => {
        const wrapper = mount(WizkidItem, {
            ...mountOptions,
            props: { item: wizkid },
        });

        expect(wrapper.get('[role="heading"]').text()).toBe("Graham Heath");
        expect(wrapper.text()).toContain("intern");
        expect(wrapper.text()).toContain("grahamheath@qot.com");
        expect(wrapper.text()).toContain("+1 (999) 503-3632");
    });

    it("gives the picture alt text and the actions accessible names", () => {
        const wrapper = mount(WizkidItem, {
            ...mountOptions,
            props: { item: wizkid },
        });
        const links = wrapper.findAllComponents(RouterLinkStub);

        expect(wrapper.get("img").attributes("alt")).toBe(
            "Picture of Graham Heath",
        );
        expect(links.map((link) => link.props("to"))).toEqual([
            "/update",
            "/delete",
        ]);
        expect(links.map((link) => link.attributes("aria-label"))).toEqual([
            "Update Graham Heath data",
            "Delete Graham Heath data",
        ]);
    });

    it("skips the chips a wizkid does not have", () => {
        const wrapper = mount(WizkidItem, {
            ...mountOptions,
            props: { item: { _id: "2", name: "No Details" } },
        });

        expect(wrapper.findAll('[role="listitem"]')).toHaveLength(0);
    });
});

describe("ListHeader", () => {
    it("shows the add link on the homepage", () => {
        const wrapper = mount(ListHeader, {
            ...mountOptions,
            props: { heading: "Wizkids" },
        });

        expect(wrapper.get("h1").text()).toBe("Wizkids");
        expect(wrapper.findComponent(RouterLinkStub).props("to")).toBe("/add");
    });

    it("hides the add link elsewhere", () => {
        const wrapper = mount(ListHeader, {
            ...mountOptions,
            props: { heading: "Add", isHomepage: false },
        });

        expect(wrapper.findComponent(RouterLinkStub).exists()).toBe(false);
    });
});
