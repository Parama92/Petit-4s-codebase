<template>
  <div id='home'>
    <SlideshowNew/>
    <Nav/>
    <Arrow/>
    <Categories class='content'/>
  </div>
</template>

<script>
import SlideshowNew from './SlideshowNew.vue'
import Categories from './Categories.vue'
import Nav from './Nav.vue'
import Arrow from './Arrow.vue'

export default {
  name: 'Home',
  components: {
    SlideshowNew,
    Categories,
    Nav,
    Arrow,
  }
}
</script>

<style>
    #home .row{
      margin-left: 0px;
      margin-right: 0px;
    }
   #contF{
     padding:0;
     margin: 0;
   }
</style>

