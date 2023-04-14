<template>

  <router-view/>

</template>

<style lang="scss" scoped>
.box{
  width:300px;
  height: 300px;
  background: #ccc;
  @include box-center(center,center)
}
h2{
  color: $color-primary;
}

</style>
