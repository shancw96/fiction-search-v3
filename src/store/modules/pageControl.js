import Storage from "../../../utils/storage";
const defaultSetting = {
    fontSize: 16,
    backgroundColor: "#dff9fb ",
    color: "rgb(45, 52, 54)",
    fontFamily: ""
};
const page = {
    state: {
        control: Storage.get("pageControl", defaultSetting)
    },
    mutations: {
        SET_PAGE_CONTROL: (state, pageControl) => {
            console.log("SET PAGE_CONTROL");
            state.control = pageControl;
            Storage.set("pageControl", state.control);
        }
    },
    actions: {
        setPageControl({ commit }, pageControl) {
            commit("SET_PAGE_CONTROL", pageControl);
        }
    }
};

export default page;
