import router from '@/router'
import storage from 'store'

export interface TabItem {
  title: string,
  path: string,
  name?: string
}

export type TabsState = {
  tabList: TabItem[]
}

const state: TabsState = {
  tabList: storage.get('tabList') || []
}

const tabs = {
  namespaced: true,
  state,

  getters: {},

  mutations: {
    // 重置
    resetTabList (state: TabsState) {
      state.tabList = []
      storage.set('tabList', [])
    },

    // 添加
    setTabList (state: TabsState, item: TabItem) {
      let arr = state.tabList
      let isExisting = arr.find(_i => {return _i.path == item.path})
      if (!isExisting) {
        arr.push(item)
        storage.set('tabList', arr)
      }
    },

    // 删除
    delTabList (state: TabsState, key: string) {
      let arr = state.tabList
      const route = router.currentRoute.value

      if (!arr.length) {
        return
      }

      for (let i = 0; i < arr.length; i++) {
        if (arr[i]['path'] === key) {
          if (route.path === key) {
            if (arr.length-1 === i) { // 点的是最右的tab
              router.push(arr[i-1]['path'])
            } else {
              router.push(arr[i+1]['path'])
            }
          }

          arr.splice(i, 1);
          storage.set('tabList', arr);
          break;
        }
      }
    }
  },

  actions: {}
}

export default tabs