<template>
  <a-result status="403" title="403" sub-title="对不起，您没有权限访问此页面.">
    <template #extra>
      <BackBtnGroup></BackBtnGroup>
    </template>
  </a-result>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BackBtnGroup from './components/back-btn-group.vue'
export default defineComponent({
  name: '403',

  components: {
    BackBtnGroup,
  },

  setup() {},
})
</script>
