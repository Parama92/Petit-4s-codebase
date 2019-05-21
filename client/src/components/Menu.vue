<template>
  <div id='menu'>
      <Nav/>
      <Arrow/>
      <b-row class="mb-5 mt-5 content">
        <b-col><h1>M<span>ENU</span></h1></b-col>
      </b-row>
      <menu-items/>
  </div>
</template>

<script>

import Nav from './Nav.vue'
import Arrow from './Arrow.vue'
import MenuItems from './MenuItems.vue'

export default {
  name: 'Menu',
  components: {
    Nav,
    Arrow,
    MenuItems
  }
}
</script>
<style>
    #menu .row{
      margin-left: 0;
      margin-right: 0;
    }
    h1 span{
      font-size:0.8em;
    }
</style>
