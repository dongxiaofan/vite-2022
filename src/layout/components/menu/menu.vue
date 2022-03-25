<template>
  <a-layout-sider class="ant-layout-sider" width="200" v-model:collapsed="collapsed" :trigger="null" collapsible>
    <div class="text-center text-white pt-20 pb-20">
      <span v-show="collapsed">L</span>
      <span v-show="!collapsed">LOGO</span>
    </div>
    <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys" v-model:openKeys="openKeys" @openChange="onOpenChange">
      <template v-for="item in menuRouter">        
        <a-menu-item v-if="!item.children"  :key="item.path">
          <i :class="`${'iconfont'} ${item.meta.icon}`" />
          <router-link v-show="!collapsed" :to="item.path">{{ item.meta.title }}</router-link>
        </a-menu-item>
        <sub-menu v-else :key="item.path" :menuInfo="item" >
          <template #subTitle>
            <i :class="`${'iconfont'} ${item.meta.icon}`" />
            <span v-show="!collapsed">{{ item.meta.title }}</span>
          </template>
        </sub-menu>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount, watch, computed } from 'vue'
import { useRoute } from 'vue-router';
import { useStore } from 'vuex'
import SubMenu from './subMenu.vue'
import { whiteList } from '@/router/basics.router'

const props = defineProps({
  collapsed: {
    type: Boolean,
    required: true
  }
})

const { state, commit } = useStore();
const route = useRoute()
const menuRouter = computed(() => state.menu.menuRouter);
const selectedKeys = ref<string[]>([])
const openKeys = ref<string[]>([])

watch(route, to => {
  selectedKeys.value = [to.path as string]
  setMenuKey()
})

const setMenuKey = () => {
  if (whiteList.includes(route.path)) {
    return
  } else {
    if (props.collapsed) {
      return
    } else {
      selectedKeys.value = [route.path as string]
      openKeys.value = []
      route.matched.forEach(item => {
        openKeys.value.push(item.path as string)
      })
    }
  }
}

const onOpenChange = (openKeys:any) => {
  console.log('openKeys： ', openKeys)
}

onBeforeMount(setMenuKey)

</script>
