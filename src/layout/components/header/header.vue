<template>
  <a-layout-header>    
    <span @click="handleCollapsed">
      <MenuFoldOutlined class="handle_collapsed" v-if="!collapsed" />
      <MenuUnfoldOutlined class="handle_collapsed" v-if="collapsed" />
    </span>
  </a-layout-header>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { defineComponent, computed } from "vue"
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  name: 'layoutHeader',

  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined
  },

  computed: {},

  setup() {
    const { state, commit } = useStore();
    const collapsed = computed(() => state.menu.collapsed);

    const handleCollapsed = () => {
      commit('menu/setCollapsed', !state.menu.collapsed)
    }

    return {
      collapsed,
      handleCollapsed
    }
  }
})
</script>