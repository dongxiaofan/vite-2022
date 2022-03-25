<template>
  <a-layout class="layout">
    <side-menu :collapsed="collapsed"></side-menu>
    <a-layout>
      <layout-header />
      <a-layout-content><layout-tabs /></a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import { mapState, useStore } from 'vuex'
import { computed } from 'vue'
import SideMenu from './components/menu/menu.vue'
import LayoutHeader from './components/header/layoutHeader.vue'
import LayoutTabs from './components/tabs/layoutTabs.vue'

const { state, commit } = useStore();
const collapsed = computed(() => state.menu.collapsed);

</script>
