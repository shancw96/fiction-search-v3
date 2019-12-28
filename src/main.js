import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router/root";
import store from "./store";

import "./assets/app.css";
//ui
import Vant from "vant"; //vant
import "vant/lib/index.css";

Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
