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

<script lang="ts">
import { defineComponent, ref, onBeforeMount, watch, computed } from 'vue'
import { useRoute } from 'vue-router';
import { useStore } from 'vuex'
import SubMenu from './subMenu.vue'
import { whiteList } from '@/router/basics.router'

export default defineComponent({
  props: {
    collapsed: {
      type: Boolean,
      required: true
    },
  },

  components: {
    'sub-menu': SubMenu,
  },

  setup(props:any) {
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

    return {
      selectedKeys,
      openKeys,
      menuRouter,
      onOpenChange
    }
  },
})
</script>

<style lang="less" scoped>
// .menu__logo {
//   display: flex;
//   position: relative;
//   align-items: center;
//   padding-left: 24px;
//   height: 48px;
//   line-height: 48px;
//   overflow: hidden;
//   white-space: nowrap;
//   .menu__logo-icon {
//     width: 32px;
//     margin-right: 8px;
//     img {
//       display: block;
//       width: 100%;
//     }
//   }
//   span {
//     display: inline-block;
//     font-size: 20px;
//     color: #fff;
//   }
//   &:after{
//     content: "";
//     position: absolute;
//     width: 100%;
//     height: 1px;
//     bottom: 0;
//     left: 0;
//     background-image: linear-gradient(90deg,rgba(13,66,109,0),#0aafe7,rgba(13,66,109,0))!important;
//   }
// }
</style>
