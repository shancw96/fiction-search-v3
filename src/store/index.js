import Vue from "vue";
import Vuex from "vuex";

import getters from "./getters";
import fiction from "./modules/fiction";
import page from "./modules/pageControl";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    getters,
    modules: {
        fiction,
        page
    }
});
