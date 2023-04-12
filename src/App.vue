<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
  <div class="box"><h2>COW</h2></div>
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
