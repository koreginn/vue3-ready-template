import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: '/',
    meta: {
      layout: "default"
    },
    component: () => import('@/views/Index.vue')
  }, {
    path: '/login',
    meta: {
      layout: "login"
    },
    component: () => import('@/views/Auth/Login.vue')
  }, {
    path: '/register',
    meta: {
      layout: "login"
    },
    component: () => import('@/views/Auth/Register.vue')
  }, {
    path: '/restore-password',
    meta: {
      layout: "login"
    },
    component: () => import('@/views/Auth/RestorePassword.vue')
  }, {
    path: '/change-password',
    meta: {
      layout: "login"
    },
    component:() => import('@/views/Auth/ChangePassword.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;