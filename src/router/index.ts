
import { createRouter, createWebHistory } from 'vue-router'
import { permission } from './permission'
import { basicsRouter } from './basics.router'

// 实例化路由
const router = createRouter({
  history: createWebHistory('/'),
  routes: basicsRouter
})

permission(router)

export default router