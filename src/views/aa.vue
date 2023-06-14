<template>
  <div class="home">
    <!-- <HamburgerButton theme="outline" size="24" fill="#333"/>
    <MoreApp theme="outline" size="24" fill="#333"/>
    <Star theme="filled" size="24" fill="#f5a623"/>
    <home theme="filled"/>
    <div class="box1" circle></div>
    <div class="box1" mt30></div>
    <a href="#">123132</a>
    <p fz12>董智森昨（29）日在網路節目《全民平評理》表示，雖然很多人唆使鴻海創辦人郭台銘有機會選贏，要他出來選，但不論從民調、藍營黨內氛圍或是支持者的態度，都可判斷出最終一定是侯友宜出線。</p> -->
    <div class="mybox">
      <div class="mybox__item mybox__item--bg1">1</div>
      <div class="mybox__item mybox__item--bg2">2</div>
      <div class="mybox__item mybox__item--bg3">3</div>
      <div class="mybox__item mybox__item--bg4">4</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {MoreApp,HamburgerButton,Star} from '@icon-park/vue-next';
export default {
  name: 'HomeView',
  components: {
    MoreApp,
    HamburgerButton,
    Star
  }
}
</script>
<style lang="scss" scoped>
.box1{
  width: 50px;
  height: 50px;
  background: pink;

}
.mybox{
  scroll-snap-type: x mandatory;
  overflow: auto;
  white-space: nowrap;
  &__item{
    width: 50%;
    display:inline-block;
    height: 150px;
    scroll-snap-align: center;
    &--bg1{
      background: pink;
    }
    &--bg2{
      background: yellow;
    }
    &--bg3{
      background: red;
    }
    &--bg4{
      background: green;
    }
  }
}
</style>

