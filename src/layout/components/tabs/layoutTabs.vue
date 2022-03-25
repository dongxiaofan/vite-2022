<template>
  <a-tabs
    v-model:activeKey="activeKey"
    type="editable-card"
    hide-add
    @tabClick="handleTabsChange"
    @edit="delTab"
    :animated="false"
    class="layout-tabs"
  >
    <a-tab-pane v-for="item in tabList" :key="item.path" :tab="item.title"></a-tab-pane>
  </a-tabs>
  
  <!-- 路由匹配到的组件将渲染在这里 -->
  <div class="main__container">
    <RouteView></RouteView>
  </div>
</template>

<script lang="ts" setup>
import { mapState, useStore } from 'vuex'
import { watch, onBeforeMount, ref, computed } from 'vue'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
import RouteView from '../../routerView/index.vue'
import { TabItem } from '@/store/modules/tabs'
import { whiteList } from '@/router/basics.router'
import { useRoute, useRouter, RouteLocationNormalizedLoaded } from 'vue-router'

let activeKey = ref<string>();
const store = useStore()
const route = useRoute()
const router = useRouter()
const { state } = useStore()
const tabList = computed(() => {return state.tabs.tabList as TabItem[]})

watch(route, to => {
  addTab(to)
  activeKey.value = to.path
})

onBeforeMount(() => {
  addTab(route)
  activeKey.value = route.path
})

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

</script>

