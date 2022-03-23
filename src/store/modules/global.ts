import Cookies from 'js-cookie'

export type GlobalState = {
  keepalive: any; // 缓存路由
}

const state: GlobalState = {
  keepalive: []
}

const global = {
  namespaced: true,
  state,

  getters: {},
  
  mutations: {
    setKeepAliveName (state: GlobalState, names: any) {
      state.keepalive = names
    },
  },

  actions: {}
}

export default global