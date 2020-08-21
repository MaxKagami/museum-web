//\\//\\//\\ LIBRARIES //\\//\\//\\
import Vue from "vue"
import Router from "vue-router"
import { auth } from "./firebase"

Vue.use(Router)

const routes = [
  { path: "/", name: "public", component: () => import("./views/public") },
  { path: "/admin", name: "admin", component: () => import("./views/admin"), meta: { requiresAuth: true } },
  { path: "/login", name: "login", component: () => import("./views/admin/login") }
]

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  requiresAuth && !auth.currentUser ? next("/login") : next()
})

export default router
