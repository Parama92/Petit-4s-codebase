<template>
    <div id="customize">
        <Nav/>
        <Arrow/>
        <div class="row layers content">
            <div class="col">
                <layers></layers>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from './Nav.vue'
import Arrow from './Arrow.vue'
import Layers from './Layers.vue'

export default {
  name: 'customize',
  components: {
    Nav,
    Arrow,
    Layers
  }
}
</script>

<style>
    #customize .row{
        margin-left:0;
        margin-right: 0;
    }
    .layers{
        margin-top: 100px;
        margin-bottom: 150px;
    }
   #customize{
       position: relative;
       top:27px;
       padding: 0px;
   }
   @media screen and (max-width: 767px) {
        #customize{
            top: 0
        }
    }
</style>
