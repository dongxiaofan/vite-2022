<template>
  <a-tabs
    v-model:activeKey="activeKey"
    type="editable-card"
    hide-add
    @tabClick="handleTabsChange"
    @edit="delTab"
  >
    <a-tab-pane v-for="(item, index) in tabList" :key="item.path" :tab="item.title">
      <p>🦁 {{ item.title }} 🦁</p>
    </a-tab-pane>
  </a-tabs>

  <!-- <div v-for="(item) in tabList" :key="item.path"> {{ item.title }}</div> -->
  
  <!-- 路由匹配到的组件将渲染在这里 -->
  <RouteView />
</template>

<script lang="ts">
import { mapState, useStore } from 'vuex'
import { defineComponent, watch, onBeforeMount, ref, computed } from 'vue'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
import RouteView from '../../routerView/index.vue'
import { TabItem } from '@/store/modules/tabs'
import { whiteList } from '@/router/basics.router'
// import RouteView from '@/layout/routerView/routerView.vue'
import { useRoute, useRouter, RouteLocationNormalizedLoaded } from 'vue-router'

export default defineComponent({
  name: 'layoutTabs',

  components: {
    RouteView,
  },

  computed: {
    ...mapState({
      tabList: (state: any) => state.tabs.tabList as TabItem[]
    })
  },

  setup() {
    let activeKey = ref<string>();
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    const { state } = useStore()

    // 添加tab
    const addTab = (data:any) => {
      if (whiteList.includes(data.path)) {
        return
      } else {
        store.commit('tabs/setTabList', {
          path: data.path,
          name: data.name,
          title: data.meta.title,
          query: data.query,
          params: data.params,
        })
      }
    }

    // tab删除
    const delTab = (targetKey: string, action: string) => {
      console.log('tab删除 targetKey: ', targetKey, ', action: ', action)
      if (action == 'remove') {
        store.commit('tabs/delTabList', targetKey)
      }
    }

    // tab点击
    const handleTabsChange = (targetKey: string) => {
      console.log('targetKey: ', targetKey, ', route.path: ', route.path)
      if (route.path !== targetKey) {
        let toRoute = state.tabs.tabList?.find((item:any) => {
          return item.path === targetKey
        })
        router.push(toRoute)
      }
    }

    watch(route, to => {
      addTab(to)
      activeKey.value = to.path
    })

    return {
      activeKey,
      handleTabsChange,
      delTab
    }
  }
})
</script>

