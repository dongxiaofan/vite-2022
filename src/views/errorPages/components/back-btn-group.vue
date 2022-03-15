<template>
  <a-button type="primary" @click="goHome">返回首页</a-button>
  <a-button type="primary" ghost @click="goBack">返回上一页({{ second }}s)</a-button>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'back-btn-group',

  setup() {
    const router = useRouter()
    const goBack = () => {
      router.go(-1)
    }
    const goHome = () => {
      router.replace('home')
    }

    let timer:any = null
    const second = ref(5);

    const countdown = () => {
      timer = setInterval(() => {
        if (second.value === 0) goBack()
        else second.value--
      }, 1000)
    }

    onMounted(() => {
      countdown()
    })

    return {
      goBack,
      goHome,
      second
    }
  },
})
</script>