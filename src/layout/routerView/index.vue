<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="[...keepalive, ...['laoutView']]">
      <component :is="Component"></component>
    </keep-alive>
  </router-view>
</template>

<script lang="ts" setup>
import { mapState, useStore } from 'vuex';
import { computed } from 'vue'

const { state, commit } = useStore();
const keepalive = computed(() => state.global.keepalive as [])

</script>