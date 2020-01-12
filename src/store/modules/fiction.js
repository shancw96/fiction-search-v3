import Storage from "../../../utils/storage";
import { isEmpty } from "../../../utils/common";
import { findIndex, propEq, find } from "ramda";
import { Toast } from "vant";
const fiction = {
    state: {
        collectedFiction: Storage.get("fiction_collected", []),
        hotSearchList: Storage.get("fiction_hotSearch", []),
        currentView: Storage.get("fiction_currentView")
    },
    mutations: {
        SET_FICTION_HOT_SEARCH: (state, bookList) => {
            console.log("SET_FICTION_HOT_SEARCH");
            state.hotSearchList = bookList;
            Storage.set("fiction_hotSearch", state.hotSearchList);
        },

        //collected fiction
        // 删除指定小说
        DELETE_FICTION_COLLECT: (state, name) => {
            Toast.success("删除小说成功");
            state.collectedFiction = state.collectedFiction.filter(item => item.title !== name);
            Storage.set("fiction_collected", state.collectedFiction);
        },
        //插入，新收藏的小说
        INSERT_FICTION_COLLECT: (state, obj) => {
            console.log("INSERT_FICTION_COLLECT");
            //收藏列表为空的话，避免报错
            if (isEmpty(state.collectedFiction)) {
                state.collectedFiction = [];
            }
            const notHaveBook = state.collectedFiction.every(fiction => fiction.title !== obj.title);
            if (!notHaveBook) {
                Toast.fail("书籍已收藏，请勿重复添加");
                return false;
            }
            state.collectedFiction.push(obj);
            Storage.set("fiction_collected", state.collectedFiction);
            Toast.success("加入书架成功");
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
        RESET_FICTION_COLLECT: (state, array) => {
            console.log("---RESET_FICTION_COLLECT---");
            state.collectedFiction = array;
            Storage.set("fiction_collected", state.collectedFiction);
        },
        //将点击的小说放置在头部
        SORT_FICTION_COLLECT: (state, obj) => {
            console.log("---SORT_FICTION_COLLECT---");
            //通过ramda 找到下标，然后进行切割重组
            const clickBookIndex = findIndex(propEq("title", obj.title))(state.collectedFiction);
            console.log(clickBookIndex);

            state.collectedFiction = [
                ...state.collectedFiction.slice(clickBookIndex, clickBookIndex + 1),
                ...state.collectedFiction.slice(0, clickBookIndex),
                ...state.collectedFiction.slice(clickBookIndex + 1)
            ];

            Storage.set("fiction_collected", { ...state.collectedFiction, isCollected: true });
        },

        // /**************视图相关********************** */
        //不需要永久保存存放在session中
        SET_FICTION_VIEW: (state, obj) => {
            console.log("SET_FICTION_VIEW");
            state.currentView = obj;
            Storage.set("fiction_currentView", state.currentView, "session");
        },

        SET_CURRENT_VIEW_FROM_COLLECTED: (state, title) => {
            console.log("SET_CURRENT_VIEW_FROM_COLLECTED");
            // console.log("title");
            state.currentView = find(propEq("title", title))(state.collectedFiction);
            // console.log(state.currentView);
            Storage.set("fiction_currentView", state.currentView, "session");
            // console.log(Storage.get("fiction_currentView"));
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
        //如果bookHome中的小说，是已经收藏过的，那么直接用收藏的进度
        setCurrentViewFromCollected({ commit }, title) {
            commit("SET_CURRENT_VIEW_FROM_COLLECTED", title);
        },
        // /**************视图相关********************** */
        setCurrentView({ commit }, obj) {
            commit("SET_FICTION_VIEW", obj);
        }
    }
};

export default fiction;
