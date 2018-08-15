<template>
    <b-row>
        <b-col id="main">
            <div id="prev" class="btn" @click="prevImage"><font-awesome-icon :icon="prev"/></div>
            <!-- <div id="imgL"  alt="Responsive image"></div>
            <div id="imgC" alt="Responsive image"></div>
            <div id="imgR" alt="Responsive image"></div> -->
            <div id="next" class="btn" @click="manualNext"><font-awesome-icon :icon="next"/></div>
            <div class="row">
                <div class="col">
                    <div id="imgL" @click='enlarge($event)' class="custom-img"  alt="Responsive image"></div>
                    <div id="imgLNext" @click='enlarge($event)' class="custom-img hide"  alt="Responsive image"></div>
                </div>
                <div class="col">
                    <div id="imgC" @click='enlarge($event)' class="custom-img"  alt="Responsive image"></div>
                    <div id="imgCNext" @click='enlarge($event)' class="custom-img hide" alt="Responsive image"></div>
                </div>
                <div class="col">
                    <div id="imgR" @click='enlarge($event)' class="custom-img" alt="Responsive image"></div>
                    <div id="imgRNext" @click='enlarge($event)' class="custom-img hide" alt="Responsive image"></div>
                </div>
            </div>
        </b-col>
        <enlarge v-show='enlargeImg' @close='closeOverlay' :current='current'></enlarge>
    </b-row>
</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Enlarge from './Enlarge.vue';

library.add(faChevronRight, faChevronLeft)

export default {
  name: 'SlideshowNew',
  components: {
    FontAwesomeIcon,
    Enlarge
  },
  data () {
      return {
        images: [
              {id:0, captionHead: "CHOCOLATE CAKE WITH SPRINKLES", captionPara: "One of our special orders.", name: "https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/36930013_794732107583578_1080166450829721600_n.jpg?_nc_cat=0&oh=44c3d29fdc117ff3069daa4973566ee2&oe=5BCF7F7D"},
              {id:1, captionHead: "CUPCAKES", captionPara: "Beautifully decorated with bows.", name: "https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/26907861_677086982681425_6356937452746568553_n.jpg?_nc_cat=0&oh=2f6ba2fcc1124c3a068974a44b6121bc&oe=5BDDCA95"},
              {id:2, captionHead: "VANILLA CUPCAKES", captionPara: "With a hint of coffee and buttercream frosting", name: "https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/26903861_677178576005599_4112224162660273263_n.jpg?_nc_cat=0&oh=1e026548dad4b5121f7be957e0a2a892&oe=5BA08070"},
              {id:3, captionHead: "RED VELVET CUPCAKES", captionPara: "With buttercream frosting", name: "https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/36840255_793914977665291_4197137995515559936_n.jpg?_nc_cat=0&oh=613f927c77c03cca1a6d6c9406d2a151&oe=5BD818C3"},
              {id:4, captionHead: "RED VELVET CUPCAKES", captionPara: "With buttercream frosting", name: "https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/26804460_677089636014493_4327338938288701830_n.jpg?_nc_cat=0&oh=ac167d2d5f0180961fd7bee0f91384b8&oe=5BCFEFFF"},
              {id:5, captionHead: "RED VELVET CUPCAKES", captionPara: "With buttercream frosting", name: "https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/36803348_791330454590410_4393671154905120768_n.jpg?_nc_cat=0&oh=eb4bb276841b10db32b3b6e808737b0b&oe=5B9FFEB9"},
              {id:6, captionHead: "RED VELVET CUPCAKES", captionPara: "With buttercream frosting", name: "https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/26805278_677178692672254_7507076583392975802_n.jpg?_nc_cat=0&oh=aba33f7a0349b8de7e4169a3c514d986&oe=5BD4C02C"},
              {id:7, captionHead: "RED VELVET CUPCAKES", captionPara: "With buttercream frosting", name: "https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/26906991_677089706014486_68389221256152726_n.jpg?_nc_cat=0&oh=67741eea3bbfb6671430f4eec85c2eee&oe=5BE2842B"},
              {id:8, captionHead: "RED VELVET CUPCAKES", captionPara: "With buttercream frosting", name: "https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/26805038_677086932681430_6108391254650001960_n.jpg?_nc_cat=0&oh=739a5bd0840a2b07ea6957d0f1024694&oe=5BE7544F"},
            ],
        index : 0,
        prev : faChevronLeft,
        next : faChevronRight,
        timer : 0,
        enlargeImg : false,
        current: ''
      }
  },
  computed: {
        imageL(){
            return this.images[this.index]
        },
        imageC(){
            return this.images[this.index+1]
        },
        imageR(){
            return this.images[this.index+2]
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
          console.log(this.timer)
          window.clearInterval(this.timer)
          this.timer = 0
          this.nextImage();
      },
      prevImage () {
          this.index = this.imageL.id == 0 ? this.images.length-3 : this.imageL.id-3
          this.currentImage()
      },
      enlarge (event) {
        this.enlargeImg = true
        this.current = event.target.style.backgroundImage
        console.log("at enlarge")
      },
      currentImage(){
          let nextL = document.getElementById('imgL').classList.contains('hide') ? document.getElementById('imgL') : document.getElementById('imgLNext')
          let currL = nextL == document.getElementById('imgL') ? document.getElementById('imgLNext') : document.getElementById('imgL')

          let nextC = document.getElementById('imgC').classList.contains('hide') ? document.getElementById('imgC') : document.getElementById('imgCNext')
          let currC = nextC == document.getElementById('imgC') ? document.getElementById('imgCNext') : document.getElementById('imgC')

          let nextR = document.getElementById('imgR').classList.contains('hide') ? document.getElementById('imgR') : document.getElementById('imgRNext')
          let currR = nextR == document.getElementById('imgR') ? document.getElementById('imgRNext') : document.getElementById('imgR')
          
          currL.classList.remove('fadeIn')
          currL.classList.add('fadeOut')
          nextL.style.backgroundImage = `url('${this.imageL.name}')`

          currC.classList.remove('fadeIn')
          currC.classList.add('fadeOut')
          nextC.style.backgroundImage = `url('${this.imageC.name}')`

          currR.classList.remove('fadeIn')
          currR.classList.add('fadeOut')
          nextR.style.backgroundImage = `url('${this.imageR.name}')`
        //   let capH = document.createTextNode(this.image.captionHead)
        //   let capP = document.createTextNode(this.image.captionPara)
          const self = this
          setTimeout(function(){
              currL.classList.remove('fadeOut')
              currL.classList.add('hide')
              nextL.classList.remove('hide')
              nextL.classList.add('fadeIn')

              currC.classList.remove('fadeOut')
              currC.classList.add('hide')
              nextC.classList.remove('hide')
              nextC.classList.add('fadeIn')

              currR.classList.remove('fadeOut')
              currR.classList.add('hide')
              nextR.classList.remove('hide')
              nextR.classList.add('fadeIn')

              if(self.timer == 0){
                  self.runTimer()
              }
            //   document.getElementById('img-cap-h').innerHTML = ""
            //   document.getElementById('img-cap-p').innerHTML = ""
            //   document.getElementById('img-cap-h').appendChild(capH)
            //   document.getElementById('img-cap-p').appendChild(capP)
          },400)
      },
      runTimer () {
        this.timer = setInterval(this.nextImage, 7000)
      }
  },
  mounted () {
      this.runTimer()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   #main{
       position: relative;
       top:27px;
       padding: 0px;
   }
   .hide{
       display: none !important; 
   }
   .fadeOut{
       opacity: 0;
       transition: all 500ms linear;
   }
   .fadeIn{
      animation-name: fade;
      animation-duration: 500ms;
   }
   @keyframes fade {
       from { opacity: 0; }
       to { opacity: 1; }
   }
   #prev{
       position: absolute;
       left: 20px;
       top:50%;
   }
   #next{
       position: absolute;
       right: 20px;
       top:50%;
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
   #main .row .col{
       padding:0 3px;
   }
   #main .row {
       margin:0;
   }
   #imgL{
       background-image: url('https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/36930013_794732107583578_1080166450829721600_n.jpg?_nc_cat=0&oh=44c3d29fdc117ff3069daa4973566ee2&oe=5BCF7F7D')
   }
   #imgR{
       background-image: url('https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/26907861_677086982681425_6356937452746568553_n.jpg?_nc_cat=0&oh=2f6ba2fcc1124c3a068974a44b6121bc&oe=5BDDCA95')
   }
   #imgC{
       background-image: url('https://scontent.fccu3-1.fna.fbcdn.net/v/t1.0-9/26903861_677178576005599_4112224162660273263_n.jpg?_nc_cat=0&oh=1e026548dad4b5121f7be957e0a2a892&oe=5BA08070');
   }
   .row{
        margin-left:0;
        margin-right: 0;
    }
    .overlay{
        height:100%;
        width:100%;
        background: black;
        opacity:0.8;
        z-index: 120;
    }
    @media screen and (max-width: 767px) {
        #main{
            top: 0
        }
    }
</style>
