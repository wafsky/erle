import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)


const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            redirect: "/goods"
        },
        {
            path: "/goods",
            name: "Goods",
            component: () => import("../views/goods/index.vue"),
        },
        {
            path: "/comment",
            name: "Comment",
            component: () => import("../views/comment/index.vue"),
        }, {
            path: "/business",
            name: "Business",
            component: () => import("../views/business/index.vue"),
        },
    ],
    linkActiveClass: "active"
})

export default router