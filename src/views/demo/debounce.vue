<template>
  <div ref="container">
    <button @click="cancel">cancel</button>
    <p class="text-error">count: {{count}}</p>
  </div>
</template>

<script lang="ts" setup>
let count:number = 0
let timeout:any;
let result:any;

const debounce = (func:any, wait:number, immediate:boolean) => {  
  return function () {
    var context = this;
    var args = arguments;
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait)
      if (callNow) result = func.apply(context, args)
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait)
    }
    return result;    
  };
}

const cancel = function () {
  console.log('点击了取消')
  clearTimeout(timeout);
  timeout = null;
}

const getUserAction = (event:any) => {
  count++
  console.log('count: ', count, ', event: ', event)
}

document.onmousemove = debounce(getUserAction, 1000, true)
</script>

