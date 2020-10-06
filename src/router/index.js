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
            redirect: "/comment/total",
            name: "Comment",
            component: () => import("../views/comment/index.vue"),
            children: [

                {
                    path: "total",
                    name: "Total",
                    component: () => import("../views/comment/eval/total.vue")
                },
                {
                    path: "good",
                    name: "Good",
                    component: () => import("../views/comment/eval/good.vue")
                },
                {
                    path: "bad",
                    name: "Bad",
                    component: () => import("../views/comment/eval/bad.vue")
                }
            ],
            linkActiveClass: "active"
        },
        {
            path: "/business",
            name: "Business",
            component: () => import("../views/business/index.vue"),
        },
        {
            path: "/alert",
            name: "Alert",
            component: () => import("../views/alert/index.vue"),
        },
    ],
    linkActiveClass: "active"
})

export default router