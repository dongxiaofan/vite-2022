<template>
  <a-layout class="layout">
    <SideMenu :collapsed="collapsed"></SideMenu>
    <a-layout>
      <Header />
      <a-layout-content><Tabs /></a-layout-content>
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
