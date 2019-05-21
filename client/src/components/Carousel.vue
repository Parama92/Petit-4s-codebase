<template>
    <div>
    <div class='row'>
        <div class='col' id="main">
            <div id="prev" class="btn" @click="prevImage"><font-awesome-icon :icon="prev"/></div>
            <div id="next" class="btn" @click="manualNext"><font-awesome-icon :icon="next"/></div>
            <div class="row slider-container">
                <div class='img-container' v-for='image in images' :key='image.id'>
                    <!-- <img  @click='enlarge($event)' :src='image.name' class='custom-img'> -->
                    <div  @click='enlarge($event)' class="custom-img" :style="{ 'background-image': 'url(' + image.name + ')' }" alt="Responsive image" ></div>
                </div>
            </div>
        </div>
        <enlarge v-show='enlargeImg' @close='closeOverlay' :current='current'></enlarge>
    </div>
    </div>
</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Enlarge from './Enlarge.vue';

library.add(faChevronRight, faChevronLeft)

export default {
  name: 'carousel',
  components: {
    FontAwesomeIcon,
    Enlarge
  },
  data () {
      return {
        images: [],
        index : 0,
        prev : faChevronLeft,
        next : faChevronRight,
        timer : 0,
        enlargeImg : false,
        current: '',
        transform: 0,
      }
  },
  methods: {
      closeOverlay () {
          this.enlargeImg = false
      },
      nextImage () {
          this.index = this.imageL.id == this.images.length-3 ? 0 : this.imageL.id+3
          this.currentImage()
      },
      manualNext () {
          window.clearInterval(this.timer)
          this.timer = 0
          this.transform = (this.transform > -99.99)? this.transform -= 99.99 : 99.99
          
          document.querySelector('.slider-container').style.transform = `translateX(${this.transform}%)`
          //this.nextImage();
      },
      prevImage () {
          this.transform = (this.transform < 99.99)? this.transform += 99.99 : -99.99
          document.querySelector('.slider-container').style.transform = `translateX(${this.transform}%)`
        //   this.index = this.imageL.id == 0 ? this.images.length-3 : this.imageL.id-3
        //   this.currentImage()
      },
      enlarge (event) {
        this.enlargeImg = true
        this.current = event.target.style.backgroundImage
      },
      currentImage(){
          
          setTimeout(function(){
              // TODO implement automated slideshow
          },400)
      },
      runTimer () {
        this.timer = setInterval(this.nextImage, 7000)
      }
  },
  mounted () {
      if(document.getElementById('main')){
        //this.runTimer()  
      }
  },
  created () {
      fetch('http://localhost:3000/cakes')
        .then( res => res.json() )
        .then( data => this.images = data.images )
        .catch( err => console.log(err) )
  },
  beforeDestroy(){
      window.clearInterval(this.timer)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   #main{
       position: relative;
       top:27px;
       padding: 0px;
       overflow: hidden;
   }
   scrollbar {
        width: 0px;  /* remove scrollbar space */
        background: transparent;  /* optional: just make scrollbar invisible */
    }
   ::-webkit-scrollbar {
        width: 0px;  /* remove scrollbar space */
        background: transparent;  /* optional: just make scrollbar invisible */
    }
   .slider-container{
       overflow-x:visible;
       max-width:100%;
       height: 350px;
       display: flex;
       flex-flow: row nowrap;
       align-items: flex-end;
       justify-content: center;
       transform: translateX(0);
       transition: all 500ms ease-in-out;
   }
   .img-container{
       min-width: 33.33%;
       padding: 5px;
   }
   .hide{
       display: none !important; 
   }
   .slideOut{
       transform: translateX(0);
       transition: all 500ms linear;
   }
   .slideIn{
      animation-name: slide;
      animation-duration: 500ms;
   }
   @keyframes slide {
       from { transform: translateX(0); }
       to { transform: translateX(100%); }
   }
   #prev{
       left: 20px;
   }
   #next{
       right: 20px;
   }
   #img-caption{
       position:absolute;
       top:60%;
       right: 30%;
       z-index: 100;
       color: white;
       font-size: 2em;
   }
   #prev, #next{
       position: absolute;
       top:50%;
       font-size: 2.5em;
       z-index: 100;
       color: rgba(187, 183, 183, 0.815);
       display: none;
       transition: all 300ms linear;
   }
   #main:hover #prev, #main:hover #next{
       display:inline-block;
   }
   .custom-img{
       background-size: cover;
       background-position: center;
       background-repeat: no-repeat;
       height: 350px; 
       width: 100% ;
       display: inline-block;
       cursor: pointer;
   }
   #main .row {
       margin:0;
   }
   .row{
        margin-left:0;
        margin-right: 0;
    }
    @media screen and (max-width: 767px) {
        #main{
            top: 0
        }
    }
</style>
