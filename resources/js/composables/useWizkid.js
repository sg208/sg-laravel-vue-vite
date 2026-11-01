import { ref } from "vue";

// The static demo build (vite.static.config.js) points this at a bundled JSON file.
const WIZKID_API_URL =
    import.meta.env.VITE_WIZKID_API_URL ?? "http://localhost:8080/api/wizkid";

function useWizkid() {
    const isFetching = ref(true);
    const wizkidsData = ref();
    const errorMsg = ref();

    const getWizkidsData = async () => {
        await fetch(WIZKID_API_URL)
            .then((response) => response.json())
            .then((data) => {
                wizkidsData.value = data;
                errorMsg.value = "";
                isFetching.value = false;
            })
            .catch(() => {
                isFetching.value = false;
                errorMsg.value = "Something is wrong, please try again later.";
            });
    };

    return {
        isFetching,
        wizkidsData,
        getWizkidsData,
        errorMsg,
    };
}

export default useWizkid;
