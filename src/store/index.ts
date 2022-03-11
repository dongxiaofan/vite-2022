import { createStore } from 'vuex'
import menu, { menuState } from './modules/menu'
import user, { UserState } from './modules/user'

const store = createStore({
  modules: {
    menu,
    user,
  }
})

export default store