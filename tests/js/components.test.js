import { describe, expect, it } from "vitest";
import { mount, RouterLinkStub } from "@vue/test-utils";
import WizkidItem from "../../resources/js/components/WizkidItem.vue";
import ListHeader from "../../resources/js/components/ListHeader.vue";
import RoleSummary from "../../resources/js/components/RoleSummary.vue";
import { countRoles } from "../../resources/js/roles";

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

        expect(wrapper.get("h2").text()).toBe("Graham Heath");
        expect(wrapper.text()).toContain("intern");
        expect(wrapper.text()).toContain("grahamheath@qot.com");
        expect(wrapper.text()).toContain("+1 (999) 503-3632");
    });

    it("marks the sample photo decorative and names the actions", () => {
        const wrapper = mount(WizkidItem, {
            ...mountOptions,
            props: { item: wizkid },
        });
        const links = wrapper.findAllComponents(RouterLinkStub);

        expect(wrapper.get("img").attributes("alt")).toBe("");
        expect(links.map((link) => link.props("to"))).toEqual([
            "/update",
            "/delete",
        ]);
        expect(links.map((link) => link.attributes("aria-label"))).toEqual([
            "Update Graham Heath data",
            "Delete Graham Heath data",
        ]);
    });

    it("skips the details a wizkid does not have", () => {
        const wrapper = mount(WizkidItem, {
            ...mountOptions,
            props: { item: { _id: "2", name: "No Details" } },
        });

        expect(wrapper.find('[aria-label="Contact"]').exists()).toBe(false);
        expect(wrapper.text()).not.toContain("intern");
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

describe("countRoles", () => {
    it("counts each role, most senior first", () => {
        const counts = countRoles([
            { role: "intern" },
            { role: "boss" },
            { role: "intern" },
            { role: "astronaut" },
        ]);

        expect(counts).toEqual([
            { role: "boss", count: 1 },
            { role: "intern", count: 2 },
            { role: "astronaut", count: 1 },
        ]);
    });
});

describe("RoleSummary", () => {
    it("shows one panel per role with a plural label", () => {
        const wrapper = mount(RoleSummary, {
            props: {
                wizkids: [{ role: "boss" }, { role: "boss" }, { role: "intern" }],
            },
        });
        const panels = wrapper
            .findAll("li")
            .map((panel) => panel.findAll("span").map((part) => part.text()));

        expect(panels).toEqual([
            ["2", "bosses"],
            ["1", "intern"],
        ]);
    });
});
