
import { createRouter, createWebHistory } from 'vue-router'
import { basicsRouter } from './basics.router'

// 实例化路由
const router = createRouter({
  history: createWebHistory('/'),
  routes: basicsRouter
})
export default router