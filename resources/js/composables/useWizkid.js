import { ref } from "vue";

// The static demo build (vite.static.config.js) points this at a bundled JSON file.
const WIZKID_API_URL =
    import.meta.env.VITE_WIZKID_API_URL ?? "http://localhost:8080/api/wizkid";
// A stalled connection would otherwise leave the loading state up forever.
const REQUEST_TIMEOUT_MS = 10000;

const useWizkid = () => {
    const isFetching = ref(true);
    const wizkidsData = ref();
    const errorMsg = ref();

    const getWizkidsData = async () => {
        try {
            const response = await fetch(WIZKID_API_URL, {
                signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
            });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            wizkidsData.value = await response.json();
            errorMsg.value = "";
        } catch {
            errorMsg.value = "Something is wrong, please try again later.";
        } finally {
            isFetching.value = false;
        }
    };

    return {
        isFetching,
        wizkidsData,
        getWizkidsData,
        errorMsg,
    };
};

export default useWizkid;
