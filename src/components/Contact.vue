<template>
    <div id='contact'>
        <b-row>
          <b-col id="contactImg"></b-col>
        </b-row>
        <Nav/>
        <Arrow></Arrow>
        <b-row class="mb-5 mt-5 content">
          <b-col><h1>C<span>ONTACT</span></h1></b-col>
        </b-row>
        <b-row class="mb-5">
          <b-col><p style="font-size: 1.5em;">Wondering how to satisfy your cravings for baked goodies? Well, contact us!</p></b-col>
        </b-row>
        <b-row class="mb-5 text-left">
          <b-col lg='4' md='5' class="mb-5 offset-lg-1" xs='12'>
            <form>
                <div class="form-group">
                    <input type="name" class="form-control" id="name" placeholder="NAME">
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="EMAIL">
                </div>
                <div class="form-group">
                  <textarea class="form-control" id="message" rows="5" placeholder="YOUR MESSAGE"></textarea>
                </div>
                <button type="submit" class="btn btn-block btn-outline-secondary"><b>INQUIRE</b></button>
            </form>
          </b-col>
          <b-col lg='3' md='4' class="mb-5 offset-lg-1" xs='12'>
            <Location/>
          </b-col>
          <b-col lg='2' md='3' class="mb-5" xs='12'>
            <b-row>
              <b-col><h3>REACH US</h3></b-col>
            </b-row>
            <b-row>
              <b-col><h4>Petit4's, Kolkata</h4></b-col>
            </b-row>
            <b-row>
              <b-col>By email:&nbsp;&nbsp; anisa@petit4s.in</b-col>
            </b-row>
            <b-row>
              <b-col>By phone:&nbsp;&nbsp; +91-9748486294</b-col>
            </b-row>
          </b-col>
        </b-row>
    </div>
</template>

<script>

import Nav from './Nav.vue'
import Arrow from './Arrow.vue'
import Location from './Location.vue'

export default {
  name: 'Contact',
  components: {
    Location,
    Nav,
    Arrow
  }
}
</script>

<style>
   #contact .row{
        margin-left:0;
        margin-right: 0;
    }
    #contactImg{
        background-image: url('https://www.prague.eu/object/1717/11.jpg');
        background-size: cover;
        background-position: 30%;
        background-repeat: no-repeat;
        height: 360px; 
        width: 100% ;
        margin-bottom: -20px;
    }
    h1 span{
      font-size:0.8em;
    }
</style>
