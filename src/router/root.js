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
        name: "home",
        component: Home
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
            }
        ]
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
    }
];

const router = new VueRouter({
    routes
});

export default router;
