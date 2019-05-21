<template>
    <div>
      <Nav/>
      <Arrow/>
      <h1>PAGE NOT FOUND</h1>
  </div>
</template>

<script>

import Nav from './Nav.vue'
import Arrow from './Arrow.vue'

export default {
  name: 'PageNotFound',
  components: {
      Nav,
      Arrow
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   #contF{
     padding:0;
     margin: 0;
   }
</style>
