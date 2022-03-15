<template>
  <a-result status="500" title="500" sub-title="对不起，服务器内部错误.">
    <template #extra>
      <BackBtnGroup></BackBtnGroup>
    </template>
  </a-result>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BackBtnGroup from './components/back-btn-group.vue'
export default defineComponent({
  name: '500',

  components: {
    BackBtnGroup,
  },

  setup() {},
})
</script>
