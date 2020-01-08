import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        redirect: { name: "home" }
    },
    {
        path: "/home",
        name: "v2_home",
        component: Home
    },
    {
        path: "/v2_home",
        name: "home",
        component: () => import("../views/v2/Home.vue")
    },
    {
        path: "/fiction",
        component: () => import("../views/fiction/index.vue"),
        children: [
            {
                path: "search",
                name: "fiction_search",
                component: () => import("../views/fiction/search.vue")
            },
            {
                path: "home",
                name: "fiction_home",
                component: () => import("../views/fiction/book_home.vue")
            },
            {
                path: "chapterList",
                name: "fiction_chapterList",
                component: () => import("../components/fiction/chapterList.vue")
            },
            {
                path: "content",
                name: "fiction_content",
                component: () => import("../views/fiction/book_content.vue")
            }
        ]
    }
];

const router = new VueRouter({
    routes
});

export default router;
