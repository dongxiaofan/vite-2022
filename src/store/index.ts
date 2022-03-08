import { createStore } from 'vuex'
import menu, { menuState } from './modules/menu'

const store = createStore({
  modules: {
    menu
  }
})

export default store