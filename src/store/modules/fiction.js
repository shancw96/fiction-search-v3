import Storage from "../../../utils/storage";
import { isEmpty } from "../../../utils/common";
import { findIndex, propEq } from "ramda";
const fiction = {
    state: {
        collectedFiction: Storage.get("fiction_collected"),
        hotSearchList: Storage.get("fiction_hotSearch"),
        currentView: Storage.get("fiction_currentView")
    },
    mutations: {
        SET_FICTION_HOT_SEARCH: (state, bookList) => {
            state.hotSearchList = bookList;
            Storage.set("fiction_hotSearch", state.hotSearchList);
        },

        //collected fiction
        // 删除指定小说
        DELETE_FICTION_COLLECT: (state, name) => {
            console.log("--- delete collected fiction ---");
            state.collectedFiction = state.collectedFiction.filter(item => item.title !== name);
            Storage.set("fiction_collected", state.collectedFiction);
        },
        //插入，新收藏的小说
        INSERT_FICTION_COLLECT: (state, obj) => {
            //收藏列表为空的话，避免报错
            if (isEmpty(state.collectedFiction)) {
                state.collectedFiction = [];
            }
            const notHaveBook = state.collectedFiction.every(fiction => fiction.title !== obj.title);
            if (!notHaveBook) {
                console.log("----添加失败，已经收藏---");
                return;
            }
            state.collectedFiction.push(obj);
            Storage.set("collected", state.collectedFiction);
        },
        UPDATE_FICTION_COLLECT: (state, obj) => {
            console.log("---UPDATE_FICTION_COLLECT---");
            if (isEmpty(state.collectedFiction)) {
                state.collectedFiction = [];
            }
            //如果有重复的，则替换
            state.collectedFiction = state.collectedFiction.map(fiction => {
                if (fiction.title == obj.title) {
                    fiction = obj;
                }
                return fiction;
            });
            Storage.set("fiction_collected", state.collectedFiction);
        },
        //将点击的小说放置在头部
        SORT_FICTION_COLLECT: (state, obj) => {
            console.log("---SORT_FICTION_COLLECT---");
            //通过ramda 找到下标，然后进行切割重组
            const clickBookIndex = findIndex(propEq("title", obj.title))(state.collectedFiction);
            state.collectedFiction = [
                ...state.collectedFiction.slice(clickBookIndex, clickBookIndex + 1),
                ...state.collectedFiction.slice(0, clickBookIndex - 1),
                ...state.collectedFiction.slice(clickBookIndex + 1)
            ];

            Storage.set("fiction_collected", state.collectedFiction);
        },

        // /**************视图相关********************** */
        //不需要永久保存存放在session中
        SET_FICTION_VIEW: (state, obj) => {
            state.currentView = obj;
            Storage.set("fiction_currentView", state.currentView, "session");
        }
    },
    actions: {
        setFictionHotSearch({ commit }, bookList) {
            commit("SET_FICTION_HOT_SEARCH", bookList);
        },
        resetCollected({ commit }, payload) {
            commit("RESET_FICTION_COLLECT", payload);
        },
        deleteCollected({ commit }, name) {
            commit("DELETE_FICTION_COLLECT", name);
        },
        insertCollected({ commit }, obj) {
            commit("INSERT_FICTION_COLLECT", obj);
        },
        updateCollected({ commit }, obj) {
            commit("UPDATE_FICTION_COLLECT", obj);
        },
        sortCollected({ commit }, obj) {
            commit("SORT_FICTION_COLLECT", obj);
        },
        // /**************视图相关********************** */
        setCurrentView({ commit }, obj) {
            commit("SET_FICTION_VIEW", obj);
        }
    }
};

export default fiction;
