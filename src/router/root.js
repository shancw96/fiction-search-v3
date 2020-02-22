import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/v2/Home.vue";
import store from '../store/index'
Vue.use(VueRouter);

const routes = [{
    path: "/",
    redirect: {
      name: "home"
    }
  },
  {
    path: "/v2_home",
    name: "home",
    component: Home
  },
  //fiction
  {
    path: "/fiction",
    component: () => import("../views/fiction/index.vue"),
    children: [{
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
  },
  //login
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue")
  }, 
  {
    path: "/admin",
    name: 'admin',
    component: () => import("../views/admin.vue"),
    meta: { requiresAuth: true }
  }
];

const router = new VueRouter({
  routes
});
// router.beforeEach((to,from,next)=>{
//   if(to.meta && to.meta.requiresAuth){
//     //do something 
//     console.log(store.state)
//     next()
//   }else{
//     next()
//   }
  
// })

export default router;