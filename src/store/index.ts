import { createStore } from 'vuex'
import menu, { menuState } from './modules/menu'
import user, { UserState } from './modules/user'
import tabs, { TabsState } from './modules/tabs'
import global, { GlobalState } from './modules/global'

const store = createStore({
  modules: {
    menu,
    user,
    tabs,
    global
  }
})

export default store