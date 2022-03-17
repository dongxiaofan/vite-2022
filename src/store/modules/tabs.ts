import router from '@/router'
import storage from 'store'

export interface TabItem {
  title: string,
  path: string,
  name?: string
}

export type TabState = {
  tabList: TabItem[]
}

const state: TabState = {
  tabList: storage.get('tabList') || []
}

const tabs = {
  namespaced: true,
  state,

  getters: {},

  mutations: {
    // 重置
    resetTabList (state: TabState) {
      state.tabList = []
      storage.set('tabList', [])
    },

    // 添加
    setTabList (state: TabState, item: TabItem) {
      console.log('添加 item: ', item)
      let arr = state.tabList
      let isExisting = arr.find(_i => {return _i.path == item.path})
      if (!isExisting) {
        arr.push(item)
        storage.set('tabList', arr)
      }
    }
  },

  actions: {}
}

export default tabs