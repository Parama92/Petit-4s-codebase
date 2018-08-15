<template>
    <div id="about">
        <b-row>
            <b-col id="aboutImg"></b-col>
        </b-row>
        <Nav/>
        <Arrow/>
        <AboutMe class="content"/>
    </div>
</template>

<script>
import AboutMe from './AboutMe.vue'
import Nav from './Nav.vue'
import Arrow from './Arrow.vue'

export default {
  name: 'About',
  components: {
    AboutMe,
    Nav,
    Arrow
  }
}
</script>

<style>
    #about .row{
        margin-left:0;
        margin-right: 0;
    }
   #aboutImg{
        background-image: url('http://www.petit4s.in/uploads/1/1/7/0/117056755/blog3_orig.jpg');
        background-size: cover;
        background-position: 30%;
        background-repeat: no-repeat;
        height: 360px; 
        width: 100% ;
        margin-bottom: -20px;
   }
   #about{
       position: relative;
       top:27px;
       padding: 0px;
   }
   @media screen and (max-width: 767px) {
        #about{
            top: 0
        }
    }
</style>
