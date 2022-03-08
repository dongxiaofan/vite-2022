
import { createRouter, createWebHistory } from 'vue-router'
import { menuRouter } from './menu.router'

// 实例化路由
const router = createRouter({
  history: createWebHistory('/'),
  routes: menuRouter
})
export default router