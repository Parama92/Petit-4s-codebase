<template>
    <div id='faq'>
        <Nav/>
        <Arrow/>
        <div class="content">
            <h1>FAQ</h1>
        </div>
    </div>
</template>

<script>

import Nav from './Nav.vue'
import Arrow from './Arrow.vue'

export default {
    
  name: 'FAQ',
  components: {
      Nav,
      Arrow
  }
}
</script>

<style>
   #faq .row{
     margin-left: 0;
     margin-right: 0;
   }
</style>
