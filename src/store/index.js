import Vue from "vue";
import Vuex from "vuex";

import getters from "./getters";
import fiction from "./modules/fiction";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    getters,
    modules: {
        fiction
    }
});
