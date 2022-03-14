import storage from 'store'
import Cookies from 'js-cookie'
import store from '@/store'
import { Router, RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { whiteList } from './basics.router'

const loginPath = '/login'
const notAuthority = '/403' // 没有权限
const notFound = '/404' // 没找到页面

export const permission = (router: Router) => {
  router.beforeEach((to, from, next) => {
    const menuCodes = store.getters["user/getMenuCodes"]
    const currentMenu = storage.get('userInfo')?.menus.find((_menu_item: any) => {
      return _menu_item.code === to.meta.access
    })
    NProgress.start()
    if (Cookies.get('token') && storage.get('userInfo')) {
      if (!router.hasRoute(to.name || '')) {
        next({ path: notFound, replace: true })
      } else if (!to.meta.access || menuCodes?.includes(to.meta.access as any)) {
        next()
      } else {
        next({ path: notAuthority, replace: true })
      }
    } else {
      if (whiteList.includes(to.path)) {
        next()
      } else {
        next({path: loginPath, query: {redirect: to.fullPath}})
      }
    }
  })

  router.afterEach(() => {
    NProgress.done()
    window.scrollTo(40, 40)
  })
}