<template>
  <div>
    <div class="t-about-box">This is an about page</div>
    <div class="t-about-text">CSS架構</div>
    <div class="box2">CSS架構</div>
    <div>====================================</div>
    <div class="box" cirile></div>
  </div>
</template>
<script setup>
import { reactive, onMounted } from 'vue'
import { getUsers } from '@/api/index'

const data = reactive({
  list: []
})
onMounted(async () => {
  const res = await getUsers()
  console.log('data', res)
  data.list = []
})
</script>
<style lang="scss" scoped>
.box{
  width: 500px;
  height: 500px;
  background: pink;
}
</style>
