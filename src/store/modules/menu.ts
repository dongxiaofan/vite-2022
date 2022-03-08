import { menuRouter } from '@/router/menu.router'
import { RouterTable } from '@/types/public'

export type menuState = {
  menuRouter: RouterTable,
  collapsed: boolean,
}

const state = {
  // 侧边菜单
  menuRouter: menuRouter,
  // 菜单是否展开
  collapsed: false,
}

const menu = {
  namespaced: true,
  state,
  mutations: {
    setMenu (state: menuState, router: RouterTable) {
      state.menuRouter = router
    },
    setCollapsed (state: menuState, collapsed: boolean) {
      state.collapsed = collapsed
    }
  }
}

export default menu