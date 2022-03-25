<template>
  <a-sub-menu :key="menuInfo.path" v-bind="$props">
    <template #title>
      <slot name="subTitle"></slot>
    </template>
    <template v-for="item in menuInfo.children">
      <a-menu-item v-if="!item.children" :key="item.path">
        <i :class="`${'iconfont'} ${item.meta.icon}`" />
        <router-link :to="item.path">{{ item.meta.title }}</router-link>
      </a-menu-item>
      <sub-menu v-else :key="item.path" :menu-info="item" />
    </template>
  </a-sub-menu>
</template>

<script lang="ts" setup>
// import { defineProps } from 'vue'
import { Menu } from 'ant-design-vue';

defineProps({
  ...Menu.SubMenu.props,
  menuInfo: {
    type: Object,
    default: () => ({}),
  },
})
</script>