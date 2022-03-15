<template>
  <a-result status="404" title="404" sub-title="对不起，您访问的页面不存在.">
    <template #extra>
      <BackBtnGroup></BackBtnGroup>
    </template>
  </a-result>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BackBtnGroup from './components/back-btn-group.vue'
export default defineComponent({
  name: '404',

  components: {
    BackBtnGroup,
  },

  setup() {},
})
</script>
