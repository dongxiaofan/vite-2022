<template>
  <a-layout-header style="background: #fff; padding: 0">
    <!-- <a-icon
      class="trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="() => (collapsed = !collapsed)"
    /> -->
    
    <span @click="handleCollapsed">点我试试</span>
  </a-layout-header>
</template>

<script lang="ts">
// import router from '@/router'
import { useRoute } from 'vue-router'
import { mapState, useStore } from 'vuex'
import { message } from 'ant-design-vue';
import aIcon from '@/components/aicon/aicon.vue'
import { defineComponent, computed, watch, onMounted, ref, reactive, onUnmounted } from "vue"
import { MenuUnfoldOutlined, MenuFoldOutlined, BellOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  name: 'layoutHeader',

  components: {
    // aIcon
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