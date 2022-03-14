import Layout from '@/layout'
import RouteView from '@/layout/routerView/index.vue'
import { menuRouter } from './menu.router'
import { errorRouter } from './error.router'

export const basicsRouter = [
  { 
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
      hideInMenu: true,
      icon: 'icon-zhanghaodenglu'
    },
    component: () => import('/src/views/login/login.vue')
  },
  { 
    path: '/',
    name: 'menu',
    redirect: "/home",
    component: Layout,
    children: [...menuRouter]
  },
  { 
    path: '/error',
    name: 'error',
    component: RouteView,
    children: [...errorRouter]
  }
]

// 白名单
export const whiteList = ['/login', '/403', '/404', '/500']