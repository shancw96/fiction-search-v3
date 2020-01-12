import Storage from "../../../utils/storage";
const defaultSetting = {
    fontSize: 16,
    backgroundColor: "#dff9fb ",
    color: "rgb(45, 52, 54)",
    fontFamily: ""
};
const page = {
    state: {
        control: Storage.get("pageControl", defaultSetting),
        autoSave: Storage.get("autoSave", false),
        uploadTime: Storage.get("uploadTime", Date.now())
    },
    mutations: {
        SET_PAGE_CONTROL: (state, pageControl) => {
            console.log("SET PAGE_CONTROL");
            state.control = pageControl;
            Storage.set("pageControl", state.control);
        },
        TOGGLE_AUTO_SAVE: (state, flag) => {
            console.log("TOGGLE_AUTO_SAVE");
            state.autoSave = !!flag;
            Storage.set("autoSave", state.autoSave);
        },
        UPDATE_UPLOAD_TIME: (state, timeStamp) => {
            console.log("UPDATE_UPLOAD_TIME");
            state.uploadTime = timeStamp;
            Storage.set("uploadTime", state.uploadTime);
        }
    },
    actions: {
        setPageControl({ commit }, pageControl) {
            commit("SET_PAGE_CONTROL", pageControl);
        },
        toggleAutoSave({ commit }, payload) {
            commit("TOGGLE_AUTO_SAVE", payload);
        },
        updateUploadTime({ commit }, payload) {
            commit("UPDATE_UPLOAD_TIME", payload);
        }
    }
};

export default page;
