<template>
  <div ref="container">
    <p class="text-error">count: {{count}}</p>
  </div>
</template>

<script lang="ts" setup>
/**
 * 快速书写一个防抖函数
 * @description 只要一直调用, callback 将不会被触发
 * 在一次调用结束后, 只有等待 timeout ms 时间, 才能继续调用 callback
 * immediate 决定触发时机
 * @example 
 * 1. 点击按钮发送请求（保存数据之类的）
 * 2. 搜索时自动联想
 * 3. 自动保存
 * 4. Debouncing a resize/scroll event handler
 */
let count = 0;
function debounce(callback:any, timeout:any, immediate:any) {
  let timer:any;
  return function () {
    const context = this; // 持有执行上下文
    const args = arguments; // 记录传参
    const later = function () {
      timer = null; // 贤者时间过了，重振旗鼓，重置为初始状态
      if (!immediate) callback.apply(context, args); // 设置为尾部调用才延时触发
    }
    const callNow = immediate && !timer; // 如果确认允许首部调用，且首次调用，那么本次立即触发
    clearTimeout(timer); // 杀掉上次的计时器，重新计时
    timer = setTimeout(later, timeout); // 重启一个计时器，过了贤者时间之后才触发
    callNow && callback.apply(context, args); // 设置为首部调用立即触发
  }
}

const getUserAction = (event:any) => {
  count++
  console.log('count: ', count, ', event: ', event)
}

document.onmousemove = debounce(getUserAction, 1000, true)
</script>

