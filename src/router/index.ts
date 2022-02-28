import BasicLayout from '@/layouts/BasicLayout.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const constantRoutes:Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: () => import('@/views/login/Login.vue')
  }
]

const dynamicRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'root',
    redirect: '/home'
  },
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/Home.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...constantRoutes,
    ...dynamicRoutes
  ]
})

export default router
