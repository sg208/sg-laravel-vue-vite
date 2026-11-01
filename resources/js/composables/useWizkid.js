import { ref } from "vue";

// The static demo build (vite.static.config.js) points this at a bundled JSON file.
const WIZKID_API_URL =
    import.meta.env.VITE_WIZKID_API_URL ?? "http://localhost:8080/api/wizkid";

const useWizkid = () => {
    const isFetching = ref(true);
    const wizkidsData = ref();
    const errorMsg = ref();

    const getWizkidsData = async () => {
        try {
            const response = await fetch(WIZKID_API_URL);
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
