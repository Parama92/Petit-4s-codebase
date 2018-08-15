<template>
  <div id="app">
    <b-container fluid id="contF">
      <span id="up"></span>
      <Addressbar/>
      <Top/>
      <router-view></router-view>
      <Footer/>
    </b-container>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Addressbar from './components/Addressbar.vue'
import Top from './components/Top.vue'

export default {
  name: 'app',
  components: {
    Footer,
    Addressbar,
    Top
  }
}
</script>

<style>
  #app {
    /* font-family: 'Nixie One', cursive; */
    font-family: 'Pompiere', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #contF{
     padding:0;
     margin: 0;
   }
</style>
