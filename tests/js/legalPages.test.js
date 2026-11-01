import { describe, expect, it } from "vitest";
import { mount, RouterLinkStub } from "@vue/test-utils";
import Footer from "../../resources/js/components/Footer.vue";
import AccessibilityPage from "../../resources/js/pages/accessibility.vue";
import PrivacyPage from "../../resources/js/pages/privacy.vue";
import TermsPage from "../../resources/js/pages/terms.vue";
import { getPageTitle } from "../../resources/js/pageTitles";

const mountOptions = { global: { stubs: { RouterLink: RouterLinkStub } } };
const REPO_URL = "https://github.com/sg208/sg-laravel-vue-vite";

describe("Footer", () => {
    it("links the three info pages and the GitHub repo", () => {
        const wrapper = mount(Footer, mountOptions);
        const routes = wrapper
            .findAllComponents(RouterLinkStub)
            .map((link) => link.props("to"));
        const repoLink = wrapper.get(`a[href="${REPO_URL}"]`);

        expect(wrapper.get("footer nav").attributes("aria-label")).toBe(
            "Site information",
        );
        expect(routes).toEqual(["/accessibility", "/privacy", "/terms"]);
        expect(repoLink.text()).toBe("Source on GitHub");
        expect(repoLink.attributes("target")).toBeUndefined();
    });
});

describe.each([
    ["accessibility", AccessibilityPage, "Accessibility"],
    ["privacy", PrivacyPage, "Privacy"],
    ["terms", TermsPage, "Terms of use"],
])("%s page", (_name, Page, heading) => {
    it("has exactly one h1 and points to GitHub issues", () => {
        const wrapper = mount(Page, mountOptions);

        expect(wrapper.findAll("h1")).toHaveLength(1);
        expect(wrapper.get("h1").text()).toBe(heading);
        expect(wrapper.find(`a[href="${REPO_URL}/issues"]`).exists()).toBe(
            true,
        );
    });
});

describe("privacy page", () => {
    it("names the host and the image service", () => {
        const text = mount(PrivacyPage, mountOptions).text();

        expect(text).toContain("Cloudflare");
        expect(text).toContain("picsum.photos");
    });
});

describe("getPageTitle", () => {
    it("gives each page a unique title", () => {
        const paths = ["/", "/accessibility", "/privacy", "/terms"];
        const titles = paths.map(getPageTitle);

        expect(new Set(titles).size).toBe(paths.length);
        expect(getPageTitle("/privacy")).toBe("Privacy · Wizkid Manager 2000");
        expect(getPageTitle("/nope")).toBe(
            "Page not found · Wizkid Manager 2000",
        );
    });
});
