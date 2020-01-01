import Storage from "../../../utils/storage";
const defaultSetting = {
    fontSize: 16,
    backgroundColor: "#dff9fb ",
    color: "rgb(45, 52, 54)"
};
const page = {
    state: {
        control: Storage.get("pageControl", defaultSetting)
    },
    mutations: {
        SET_PAGE_CONTROL: (state, bookList) => {
            state.hotSearchList = bookList;
            Storage.set("pageControl", state.hotSearchList);
        }
    },
    actions: {
        setPageControl({ commit }, bookList) {
            commit("SET_PAGE_CONTROL", bookList);
        }
    }
};

export default page;