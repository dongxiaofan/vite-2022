<template>
  <div ref="container">
    <p class="text-error">count: {{count}}</p>
  </div>
</template>

<script lang="ts" setup>
/**
 *  快速书写一个节流函数
 * @description 一直调用 callback, 每隔 timeout ms 时间 callback 触发一次
 * 在 timeout ms 时间内的调用将不触发
 * @example
 * 1. Throttling a button click so we can’t spam click 控制疯狂按钮的响应频率
 * 2. Throttling an API call 控制 API 的调用频率
 * 3. Throttling a mousemove/touchmove event handler 控制频繁触发事件的相应频率
 */
let count:any = 0;

// solution1 记录时间比较
function throttle_1(callback:any, timeout:any) {
  let triggerTime:any; // 记录每次真正触发时间
  return function () {
    const context = this; // 持有执行上下文
    const args = arguments; // 记录传参
    if (triggerTime === undefined // 首次调用
      || Date.now() - triggerTime > timeout) { // 贤者时间已经过去
      triggerTime = Date.now(); // 记录真正触发时间
      callback.apply(context, args); // 可以触发回调
    }
  }
}
// solution2 间隔时间反转标志位
function throttle_2(callback:any, timeout:any) {
  let disable:any; // 触发回调是否禁用
  return function () {
    const context = this; // 持有执行上下文
    const args = arguments; // 记录传参
    if (!disable) { // 首次调用或者贤者时间过了，禁用解除
      callback.apply(context, args); // 可以触发回调
      disable = true; // 马上禁用
      setTimeout(_ => disable = false, timeout); // 贤者时间过了，禁用解除
    }
  }
}

const getUserAction = (event:any) => {
  count++
  console.log('count: ', count, ', event: ', event)
}

document.onmousemove = throttle_2(getUserAction, 1000)
</script>

