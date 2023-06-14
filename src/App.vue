<template>
  <router-view/>
</template>
<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  window.document.documentElement.setAttribute('data-theme', 'default')
})
</script>
<style lang="scss" scoped>
// .box{
//   width:300px;
//   height: 300px;
//   background: #ccc;
//   @include box-center(center,center)
// }
// h2{
//   color: $color-primary;
// }

</style>
