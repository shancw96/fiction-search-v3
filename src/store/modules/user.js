import Storage from "../../../utils/storage";

const User = {
    state: {
        token: Storage.get("token", {})
    },
    mutations: {
        SET_JWT: (state, token) => {
            console.log("SET_JWT");
            state.token = token;
            Storage.set("token", state.token);
        }
    },
    actions: {
        setToken({ commit }, token) {
            commit("SET_JWT", token);
        }
    }
};

export default User;
