<template>
  <a-layout-header>
    <div class="header-handle-icon" @click="handleCollapsed">
      <MenuFoldOutlined class="handle_collapsed" v-if="!collapsed" />
      <MenuUnfoldOutlined class="handle_collapsed" v-if="collapsed" />
    </div>

    <a-dropdown class="header-avatar-all">
      <div class="header__avatar">
        <a-avatar>
          <template #icon>
            <img :src="avatar" v-if="avatar.length > 0" />
            <img src="@/assets/images/layout/avatar.png" v-else />
          </template>
        </a-avatar>
        <div class="header__avatar-name">{{ name.length > 0 ? name : 'admin' }}</div>
      </div>
      <template #overlay>
        <a-menu>
          <a-menu-item key="2" @click="logout()">
            退出登录
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </a-layout-header>
</template>

<script lang="ts">
import { mapState, useStore } from 'vuex'
import { defineComponent, computed } from "vue"
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  name: 'layoutHeader',

  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined
  },

  computed: {
    ...mapState({
      name: (state: any) => state.user.name,
      avatar: (state: any) => state.user.avatar,
    })
  },

  setup() {
    const { state, commit } = useStore();
    const collapsed = computed(() => state.menu.collapsed);

    // 展开/折叠操作
    const handleCollapsed = () => {
      commit('menu/setCollapsed', !state.menu.collapsed)
    }

    // 退出登录
    const logout = () => {
      commit('user/logout')
      window.location.href = '/login';
    }

    return {
      collapsed,
      handleCollapsed,
      logout
    }
  }
})
</script>

