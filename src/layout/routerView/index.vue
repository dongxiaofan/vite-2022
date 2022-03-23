<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="[...keepalive, ...['laoutView']]">
      <component :is="Component"></component>
    </keep-alive>
  </router-view>
</template>

<script lang="ts">
import { mapState } from 'vuex';

export default {
  name: 'LayoutParentView',

  computed: {
    ...mapState({
      keepalive: (state: any) => state.global.keepalive as []
    })
  },
};
</script>