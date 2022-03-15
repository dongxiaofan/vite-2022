<template>
  <a-tabs default-active-key="1" @change="handleTabsChange">
    <a-tab-pane key="1" tab="Tab 1">
      Content of Tab Pane 1
    </a-tab-pane>
    <a-tab-pane key="2" tab="Tab 2" force-render>
      Content of Tab Pane 2
    </a-tab-pane>
    <a-tab-pane key="3" tab="Tab 3">
      Content of Tab Pane 3
    </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts">
import { mapState, useStore } from 'vuex'
import { defineComponent, computed } from "vue"
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  name: 'layoutTabs',

  components: {
  },

  computed: {},

  setup() {
    // 展开/折叠操作
    const handleTabsChange = () => {
      console.log('1111111111')
    }

    return {
      handleTabsChange
    }
  }
})
</script>

