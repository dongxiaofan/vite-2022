<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <!-- 左侧菜单 -->
    <SideMenu :collapsed="collapsed"></SideMenu>
    <a-layout>
      <!-- header -->
      <Header />
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <p>Content 路由匹配到的组件将渲染在这里↓</p>
        <Tabs />
        <!-- 路由匹配到的组件将渲染在这里 -->
        <!-- <router-view></router-view> -->
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { mapState, useStore } from 'vuex'
import { defineComponent, computed } from 'vue'
import SideMenu from './components/menu/menu.vue'
import Header from './components/header/header.vue'
import Tabs from './components/tabs/tabs.vue'

export default defineComponent({
  props: { },

  components: {
    SideMenu,
    Header,
    Tabs,
  },

  setup() {
    const { state, commit } = useStore();

    const collapsed = computed(() => state.menu.collapsed);

    return {
      collapsed
    }
  },
})
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
