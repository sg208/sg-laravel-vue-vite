import { ref } from "vue";

function useWizkid() {
    const isFetching = ref(true);
    const wizkidsData = ref();
    const errorMsg = ref();

    const getWizkidsData = async () => {
        await fetch("http://localhost:8080/api/wizkid")
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
