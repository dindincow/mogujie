<template>
  <div class="c-aside">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'CAside'
}
</script>
<style lang="scss" scoped>
@include b(c-aside) {
  overflow: auto;
  flex-shrink: 0; // 保持固定值不隨意縮放
}
</style>
