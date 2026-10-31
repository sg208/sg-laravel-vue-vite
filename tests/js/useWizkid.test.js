import { afterEach, describe, expect, it, vi } from "vitest";
import useWizkid from "../../resources/js/composables/useWizkid";

const wizkids = [{ _id: "1", name: "Graham Heath", role: "intern" }];

describe("useWizkid", () => {
    afterEach(() => {
        vi.unstubAllGlobals();
    });

    it("starts in the fetching state", () => {
        const { isFetching, wizkidsData } = useWizkid();

        expect(isFetching.value).toBe(true);
        expect(wizkidsData.value).toBeUndefined();
    });

    it("stores the wizkids returned by the API", async () => {
        const fetchMock = vi.fn(async () => ({ json: async () => wizkids }));
        vi.stubGlobal("fetch", fetchMock);

        const { isFetching, wizkidsData, errorMsg, getWizkidsData } =
            useWizkid();
        await getWizkidsData();

        expect(fetchMock).toHaveBeenCalledWith(
            "http://localhost:8080/api/wizkid",
        );
        expect(wizkidsData.value).toEqual(wizkids);
        expect(errorMsg.value).toBe("");
        expect(isFetching.value).toBe(false);
    });

    it("shows an error message when the request fails", async () => {
        vi.stubGlobal(
            "fetch",
            vi.fn(async () => {
                throw new Error("offline");
            }),
        );

        const { isFetching, wizkidsData, errorMsg, getWizkidsData } =
            useWizkid();
        await getWizkidsData();

        expect(wizkidsData.value).toBeUndefined();
        expect(errorMsg.value).toBe(
            "Something is wrong, please try again later.",
        );
        expect(isFetching.value).toBe(false);
    });
});
