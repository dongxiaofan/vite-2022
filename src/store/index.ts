import { createStore } from 'vuex'
import menu, { menuState } from './modules/menu'
import user, { UserState } from './modules/user'
import tabs, { TabsState } from './modules/tabs'

const store = createStore({
  modules: {
    menu,
    user,
    tabs,
  }
})

export default store